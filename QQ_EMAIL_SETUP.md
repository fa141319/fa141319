# 📧 QQ 邮箱配置指南

## 第一步：获取 QQ 邮箱授权码（重要！）

QQ 邮箱需要使用**授权码**而不是登录密码。

### 获取步骤：

1. **登录 QQ 邮箱网页版**
   - 访问：https://mail.qq.com
   - 用你的 QQ 号登录（315024345@qq.com）

2. **开启 SMTP 服务**
   - 点击左上角 "设置" → "账户"
   - 向下滚动找到 "POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV 服务"
   - 找到 "IMAP/SMTP 服务"，点击 "开启"
   
3. **获取授权码**
   - 系统会要求验证（密保手机或密保问题）
   - 验证通过后，会显示一个**16 位授权码**
   - 复制这个授权码（例如：`abcdefghijklmnop`）
   - ⚠️ **重要：授权码只显示一次，请立刻复制保存！**

4. **保存授权码**
   - 暂时保存到记事本
   - 下一步要填入 GitHub Secrets

---

## 第二步：配置 GitHub Secrets

### 进入设置页面：

1. 打开你的 GitHub 仓库
2. 点击 **Settings**（设置）标签
3. 左侧菜单选择 **Secrets and variables** → **Actions**
4. 点击 **New repository secret** 按钮

### 添加 3 个密钥：

| Name | Value | 示例 |
|------|-------|------|
| `EMAIL_USERNAME` | 你的 QQ 邮箱 | `315024345@qq.com` |
| `EMAIL_PASSWORD` | QQ 邮箱授权码 | `abcdefghijklmnop`（16 位） |
| `RECIPIENT_EMAIL` | 收件邮箱 | `315024345@qq.com` |

### 操作步骤：

1. 点击 **New repository secret**
2. Name 填 `EMAIL_USERNAME`，Value 填 `315024345@qq.com`
3. 点击 **Add secret**
4. 重复步骤，添加 `EMAIL_PASSWORD`（授权码）
5. 重复步骤，添加 `RECIPIENT_EMAIL`（`315024345@qq.com`）

---

## 第三步：推送到 GitHub

```bash
cd /home/admin/openclaw/workspace/bazi-app

# 替换为你的 GitHub 仓库地址
git remote add origin https://github.com/你的用户名/bazi-app.git

# 推送代码（会自动触发构建）
git push -u origin main
```

---

## 第四步：等待邮件

1. 推送成功后，访问 GitHub 仓库 → **Actions** 标签
2. 点击 "Build Android APK" 工作流
3. 等待构建完成（约 5-10 分钟）
4. 检查 QQ 邮箱，会收到主题为 "🔮 九星八字排盘 APK 构建完成" 的邮件
5. 邮件附件就是 APK 文件！

---

## ⚠️ 常见问题

### Q: 授权码获取失败？
A: 确保：
- QQ 邮箱已绑定手机号
- 已完成实名认证
- 开启 IMAP/SMTP 服务

### Q: 邮件发送失败？
A: 检查：
- Secrets 是否正确填写（特别是授权码）
- QQ 邮箱 SMTP 服务是否开启
- 查看 GitHub Actions 日志了解详情

### Q: 附件太大发不了？
A: APK 约 20-30MB，QQ 邮箱支持最大 50MB 附件，应该没问题。

---

## 📱 收到 APK 后

1. 下载邮件附件到电脑
2. 通过微信/QQ/数据线传到手机
3. 手机点击 APK 安装
4. 可能需要开启 "允许未知来源"

---

## 🎯 现在需要做的

**请按顺序完成：**

1. ✅ 登录 QQ 邮箱获取授权码
2. ✅ 在 GitHub 仓库配置 3 个 Secrets
3. ✅ 告诉我你的 GitHub 仓库地址，我帮你推送

**或者你可以自己推送：**
```bash
git remote add origin https://github.com/你的用户名/bazi-app.git
git push -u origin main
```

---

**准备好了吗？告诉我你的 GitHub 仓库地址，我帮你推送代码！**
