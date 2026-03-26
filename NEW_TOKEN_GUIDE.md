# 🔑 重新生成 GitHub Token（需要 workflow 权限）

## 问题原因

之前的 Token 缺少 `workflow` 权限，无法推送 GitHub Actions 工作流文件。

---

## 步骤 1：删除旧 Token（可选）

1. 访问：https://github.com/settings/tokens
2. 找到刚才生成的 Token
3. 点击 **Delete** 删除（安全起见）

---

## 步骤 2：生成新 Token

1. 访问：https://github.com/settings/tokens
2. 点击 **"Generate new token (classic)"**

---

## 步骤 3：填写信息

| 字段 | 填写内容 |
|------|----------|
| Note | `bazi-app deploy` |
| Expiration | `No expiration` |

---

## 步骤 4：勾选权限（重要！）

⚠️ **必须勾选以下 2 个权限：**

- ✅ **`repo`**（全选，点开后所有子选项都会自动勾选）
- ✅ **`workflow`**（单独勾选）

**图示：**
```
☑️ repo
   ☑️ repo:status
   ☑️ repo_deployment
   ☑️ public_repo
   ☑️ repo:invite
   ☑️ security_events
☑️ workflow    ← 这个必须勾选！
```

---

## 步骤 5：生成并复制

1. 滚动到页面底部
2. 点击绿色按钮 **"Generate token"**
3. 复制显示的 Token（以 `ghp_` 开头）

⚠️ **立刻复制！关闭页面就看不到了！**

---

## 步骤 6：发给我新 Token

把新 Token 发给我，我会重新推送代码。

例如：
```
ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

**去重新生成吧，记得勾选 `workflow` 权限！** 🚀
