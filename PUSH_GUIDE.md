# 🚀 推送代码到 GitHub

## 方式一：使用 GitHub Token（推荐）

### 1️⃣ 获取 GitHub Token

1. 访问：https://github.com/settings/tokens
2. 点击 **"Generate new token (classic)"**
3. 填写说明（如：bazi-app deploy）
4. 勾选权限：**`repo`**（全选）
5. 点击 **"Generate token"**
6. **复制 Token**（以 `ghp_` 开头，例如：`ghp_xxxxxxxxxxxx`）
   - ⚠️ 只显示一次，立刻复制保存！

### 2️⃣ 执行推送命令

打开终端，执行以下命令（替换 `<你的 Token>`）：

```bash
cd /home/admin/openclaw/workspace/bazi-app

# 方式 A：使用 Token 推送
git remote set-url origin https://<你的 Token>@github.com/fa141319/fa1419.git
git push -u origin main
```

例如：
```bash
git remote set-url origin https://ghp_xxxxxxxxxxxx@github.com/fa141319/fa141319.git
git push -u origin main
```

---

## 方式二：使用 SSH（如果你配置过）

```bash
cd /home/admin/openclaw/workspace/bazi-app

# 改用 SSH 地址
git remote set-url origin git@github.com:fa141319/fa141319.git
git push -u origin main
```

---

## 方式三：手动在 GitHub 上传（最简单）

如果不想用命令行：

### 1. 下载项目代码

在电脑上打包下载当前项目：
```bash
cd /home/admin/openclaw/workspace
zip -r bazi-app.zip bazi-app/
```

### 2. 上传到 GitHub

1. 访问：https://github.com/fa141319/fa141319
2. 点击 **"add file"** → **"Upload files"**
3. 把 `bazi-app` 文件夹里的所有文件拖进去
4. 填写提交信息："Initial commit"
5. 点击 **"Commit changes"**

### 3. 触发构建

1. 上传成功后，点击 **"Actions"** 标签
2. 点击 **"Build Android APK"**
3. 点击 **"Run workflow"** → **"Run workflow"**
4. 等待构建完成（5-10 分钟）

---

## ✅ 推送成功后

1. 访问：https://github.com/fa141319/fa141319/actions
2. 点击 "Build Android APK" 工作流
3. 等待构建完成（绿色✓）
4. 检查 QQ 邮箱（315024345@qq.com）
5. 收到邮件后下载 APK 附件

---

## 📧 邮件内容预览

```
主题：🔮 九星八字排盘 APK 构建完成 - [构建编号]

您好！

九星八字排盘 Android APK 已构建完成。

【构建信息】
- 项目：九星八字排盘
- 版本：v1.0.0
- 构建时间：2026-03-26 18:35
- 构建编号：123456789

【下载方式】
1. 直接下载本邮件附件中的 APK 文件
2. 或访问 GitHub Actions 下载

【安装说明】
1. 将 APK 文件传输到 Android 手机
2. 点击安装（可能需要允许"未知来源"）
3. 安装完成后即可使用

祝使用愉快！
```

---

## 🎯 现在请选择

**方式 A**：获取 GitHub Token，我帮你推送
**方式 B**：手动在 GitHub 网页上传文件（无需 Token）

告诉我你的选择！
