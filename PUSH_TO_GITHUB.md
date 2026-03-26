# 🚀 推送到 GitHub 指南

## 第一步：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名称：`bazi-app` 或 `九星八字排盘`
3. 设为 **Public**（公开仓库，Actions 免费）
4. **不要** 初始化 README（我们已经有了代码）
5. 点击 "Create repository"

## 第二步：推送代码

复制以下命令（替换 `<你的 GitHub 用户名>`）：

```bash
cd /home/admin/openclaw/workspace/bazi-app

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/<你的 GitHub 用户名>/bazi-app.git

# 推送代码
git push -u origin main
```

## 第三步：触发自动构建

1. 推送成功后，访问你的 GitHub 仓库
2. 点击 **"Actions"** 标签
3. 点击 **"Build Android APK"** 工作流
4. 点击 **"Run workflow"**（如果需要手动触发）
5. 等待构建完成（约 5-10 分钟）

## 第四步：下载 APK

1. 构建完成后，点击绿色的成功记录
2. 滚动到页面底部 "Artifacts" 部分
3. 点击 **`bazi-app-debug`** 下载 APK
4. 解压后得到 `app-debug.apk`

## 📱 安装到手机

```bash
# 方法 1：通过 ADB
adb install app-debug.apk

# 方法 2：直接传输到手机
# 将 APK 文件发送到手机，点击安装即可
```

## ⚠️ 常见问题

### Q: 推送时提示认证失败？
A: 使用 GitHub Token 或 SSH：
```bash
# 使用 HTTPS + Token
git remote add origin https://<TOKEN>@github.com/用户名/bazi-app.git

# 或使用 SSH
git remote add origin git@github.com:用户名/bazi-app.git
```

### Q: Actions 没有运行？
A: 检查：
1. 仓库是否设为 Public
2. Actions 是否被禁用（Settings → Actions）
3. 推送的分支是否为 `main`

### Q: 构建失败？
A: 查看 Actions 日志，常见原因：
- 依赖安装失败 → 检查 package.json
- Gradle 错误 → 检查 android/build.gradle

## 🎯 后续更新

每次推送到 `main` 分支都会自动构建：

```bash
# 修改代码后
git add .
git commit -m "修复 xxx 问题"
git push
```

APK 会自动构建，在 Actions 页面下载最新版本。

---

**需要我帮你执行推送命令吗？请提供你的 GitHub 仓库地址。**
