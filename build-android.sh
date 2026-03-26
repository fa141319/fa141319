#!/bin/bash

# 九星八字排盘 - Android APK 快速构建脚本

echo "🔮 九星八字排盘 - Android APK 构建工具"
echo "======================================"
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误：未找到 Node.js，请先安装 Node.js 20+"
    exit 1
fi

echo "✅ Node.js 版本：$(node -v)"

# 检查 Java
if ! command -v java &> /dev/null; then
    echo "❌ 错误：未找到 Java，请先安装 JDK 17+"
    echo "   下载地址：https://adoptium.net/"
    exit 1
fi

echo "✅ Java 版本：$(java -version 2>&1 | head -1)"

# 检查 ANDROID_HOME
if [ -z "$ANDROID_HOME" ] && [ -z "$ANDROID_SDK_ROOT" ]; then
    echo "❌ 错误：未找到 Android SDK"
    echo ""
    echo "请选择以下方案之一："
    echo ""
    echo "📱 方案 1：安装 Android Studio（推荐长期开发）"
    echo "   https://developer.android.com/studio"
    echo ""
    echo "☁️  方案 2：使用 GitHub Actions 自动构建（最简单）"
    echo "   1. 将代码推送到 GitHub"
    echo "   2. Actions 会自动构建 APK"
    echo "   3. 在 Actions 页面下载 APK"
    echo ""
    echo "🌐 方案 3：使用在线构建服务"
    echo "   - Codemagic: https://codemagic.io"
    echo "   - EAS Build: https://expo.dev/eas"
    echo ""
    exit 1
fi

echo "✅ Android SDK 已配置"
echo ""

# 开始构建
echo "🚀 开始构建..."
echo ""

# 1. 安装依赖
echo "📦 步骤 1/4: 安装依赖..."
npm ci || npm install

# 2. 构建 Next.js
echo "🔨 步骤 2/4: 构建 Next.js..."
npm run build

# 3. 同步 Capacitor
echo "📱 步骤 3/4: 同步 Capacitor..."
npx cap sync android

# 4. 编译 APK
echo "🏗️  步骤 4/4: 编译 APK..."
cd android
chmod +x gradlew
./gradlew assembleDebug

# 检查结果
if [ -f "app/build/outputs/apk/debug/app-debug.apk" ]; then
    echo ""
    echo "✅ 构建成功！"
    echo ""
    echo "📦 APK 位置：android/app/build/outputs/apk/debug/app-debug.apk"
    echo ""
    echo "📱 安装到手机："
    echo "   adb install app/build/outputs/apk/debug/app-debug.apk"
    echo ""
else
    echo ""
    echo "❌ 构建失败，请检查上方错误信息"
    exit 1
fi
