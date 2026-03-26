# 九星八字排盘 - Android APK 打包指南

## 📦 快速打包（推荐）

### 方式一：使用 GitHub Actions 自动构建（最简单）

1. 将代码推送到 GitHub
2. GitHub Actions 会自动构建 APK
3. 在 Actions 页面下载 APK 文件

### 方式二：本地构建（需要 Android Studio）

#### 前置要求
- Android Studio 已安装
- Android SDK 已配置
- JDK 11+

#### 步骤

```bash
# 1. 进入项目目录
cd /home/admin/openclaw/workspace/bazi-app

# 2. 构建静态文件
npm run build

# 3. 同步到 Android 项目
npx cap sync android

# 4. 使用 Android Studio 打开
npx cap open android

# 5. 在 Android Studio 中：
#    - 等待 Gradle 同步完成
#    - 点击 Build → Build Bundle(s) / APK(s) → Build APK(s)
#    - APK 生成在：android/app/build/outputs/apk/debug/app-debug.apk
```

#### 生产环境打包（签名版）

```bash
# 1. 创建密钥库（首次）
keytool -genkey -v -keystore bazi-release-key.keystore -alias bazi -keyalg RSA -keysize 2048 -validity 10000

# 2. 在 android/app/build.gradle 中配置签名

# 3. 构建 Release APK
cd android
./gradlew assembleRelease

# APK 位置：android/app/build/outputs/apk/release/app-release.apk
```

## 🔧 配置文件

### android/app/build.gradle (部分配置)

```gradle
android {
    defaultConfig {
        applicationId "com.jiuxing.bazi"
        minSdkVersion 22
        targetSdkVersion 34
        versionCode 1
        versionName "1.0.0"
    }
    
    buildTypes {
        release {
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

## 📱 安装测试

```bash
# 连接 Android 设备后
adb install android/app/build/outputs/apk/debug/app-debug.apk

# 或使用 release 版本
adb install android/app/build/outputs/apk/release/app-release.apk
```

## 🌐 在线构建服务（无 Android Studio）

### 1. Expo Application Services (EAS)
- 网站：https://expo.dev/eas
- 支持云端构建 APK

### 2. Codemagic
- 网站：https://codemagic.io
- 免费额度：500 分钟/月

### 3. GitHub Actions + android-build-action
```yaml
# .github/workflows/android-build.yml
name: Build Android APK

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - uses: actions/setup-java@v3
        with:
          distribution: 'temurin'
          java-version: '17'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Sync Capacitor
        run: npx cap sync android
      
      - name: Build APK
        run: |
          cd android
          chmod +x gradlew
          ./gradlew assembleDebug
      
      - name: Upload APK
        uses: actions/upload-artifact@v3
        with:
          name: app-debug.apk
          path: android/app/build/outputs/apk/debug/app-debug.apk
```

## 📊 当前项目状态

✅ Next.js 项目已配置为静态导出
✅ Capacitor 已安装并配置
✅ Android 平台已添加
⏳ 需要 Android SDK 来编译 APK

## 🚀 下一步

**如果你有 Android Studio**：
```bash
npx cap open android
```
然后在 Android Studio 中点击 Build → Build APK

**如果你没有 Android Studio**：
1. 安装 Android Studio：https://developer.android.com/studio
2. 或使用在线构建服务（见上方）
3. 或让我帮你配置 GitHub Actions 自动构建

## 📞 需要帮助？

告诉我你的情况：
- 已有 Android Studio → 我指导你完成构建
- 没有 Android Studio → 我配置 GitHub Actions
- 想要快速测试 → 先用 Web 版本
