# 📧 配置邮件通知

## 第一步：获取你的邮箱地址

请告诉我你的邮箱，我会帮你配置。

## 第二步：配置 GitHub Secrets

构建完成后自动发送邮件需要配置邮件服务。

### 方案 A：使用 Gmail（推荐）

1. 访问你的 GitHub 仓库 → **Settings** → **Secrets and variables** → **Actions**
2. 点击 **New repository secret**
3. 添加以下 3 个密钥：

| Name | Value | 说明 |
|------|-------|------|
| `EMAIL_USERNAME` | 你的 Gmail 地址 | 例如：yourname@gmail.com |
| `EMAIL_PASSWORD` | Gmail 应用专用密码 | 不是登录密码，见下方说明 |
| `RECIPIENT_EMAIL` | 接收邮件的地址 | 你的邮箱 |

### 获取 Gmail 应用专用密码

1. 访问 https://myaccount.google.com/apppasswords
2. 登录你的 Google 账号
3. 选择 "Mail" 和你的设备
4. 点击 "Generate"
5. 复制生成的 16 位密码（例如：`abcd efgh ijkl mnop`）
6. 去掉空格填入 GitHub Secrets（例如：`abcdefghijklmnop`）

### 方案 B：使用其他邮箱

如果用 QQ 邮箱、163 邮箱等，修改 workflow 中的 SMTP 配置：

```yaml
- name: Send Email Notification
  uses: dawidd6/action-send-mail@v3
  with:
    server_address: smtp.qq.com  # QQ 邮箱
    server_port: 465
    username: ${{ secrets.EMAIL_USERNAME }}
    password: ${{ secrets.EMAIL_PASSWORD }}
    # ... 其他配置相同
```

常见 SMTP 服务器：
- QQ 邮箱：`smtp.qq.com` 端口 `465`
- 163 邮箱：`smtp.163.com` 端口 `465`
- Gmail：`smtp.gmail.com` 端口 `465`
- Outlook：`smtp.office365.com` 端口 `587`

## 第三步：推送代码

```bash
cd /home/admin/openclaw/workspace/bazi-app

# 替换为你的仓库地址
git remote add origin https://github.com/你的用户名/bazi-app.git

# 推送
git push -u origin main
```

## 第四步：触发构建

1. 访问 GitHub 仓库 → Actions
2. 点击 "Build Android APK"
3. 点击 "Run workflow"
4. 等待完成（约 5-10 分钟）
5. 检查邮箱，会收到带 APK 附件的邮件

---

## 📧 简单方案（无需配置邮件）

如果不想配置邮件，也可以：

1. 构建完成后在 GitHub Actions 页面下载
2. 手动发送到邮箱

**告诉我你的邮箱地址，我帮你：**
1. 更新配置文件
2. 指导你完成 Secrets 设置
3. 推送代码并触发构建

---

**你的邮箱地址是？**
