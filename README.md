# 九星八字排盘

专业的八字排盘应用，提供四柱、大运、五行分析等功能。

## 🚀 快速开始

### 开发环境运行

```bash
cd bazi-app
npm run dev
```

访问 http://localhost:3000

### 生产构建

```bash
npm run build
npm start
```

## 📦 功能特性

### Phase 1 - 核心排盘 ✅
- [x] 四柱排盘（年柱、月柱、日柱、时柱）
- [x] 天干地支显示
- [x] 十神标注
- [x] 大运排盘
- [x] 五行分析
- [x] 纳音显示
- [x] 藏干显示

### Phase 2 - 进阶功能（待开发）
- [ ] 流年、流月、流日
- [ ] 神煞系统（天乙贵人、桃花、驿马等）
- [ ] 旺衰分析
- [ ] 命局分析

### Phase 3 - 专业功能（待开发）
- [ ] 合盘（两人八字对比）
- [ ] 择日功能
- [ ] 命盘保存与管理
- [ ] 导出分享（图片/PDF）

### Phase 4 - 多平台（待开发）
- [ ] PWA 离线支持
- [ ] iOS/Android App（Capacitor）
- [ ] 微信小程序

## 🛠️ 技术栈

- **框架**: Next.js 16 + TypeScript
- **样式**: Tailwind CSS
- **排盘库**: lunar-javascript
- **字体**: Noto Serif SC（新中式风格）

## 📁 项目结构

```
bazi-app/
├── app/
│   ├── components/
│   │   ├── BirthInputForm.tsx    # 生日输入表单
│   │   ├── FourPillarsDisplay.tsx # 四柱显示
│   │   ├── DaYunDisplay.tsx       # 大运显示
│   │   └── WuXingDisplay.tsx      # 五行分析
│   ├── lib/
│   │   └── bazi.ts                # 排盘核心逻辑
│   ├── types/
│   │   ├── index.ts               # 类型定义
│   │   └── lunar-javascript.d.ts  # 类型声明
│   ├── page.tsx                   # 主页面
│   ├── layout.tsx                 # 布局
│   └── globals.css                # 全局样式
└── package.json
```

## 🎨 设计风格

**新中式风格**:
- 配色：琥珀色 + 朱红色为主
- 字体：思源宋体（Noto Serif SC）
- 元素：传统纹样、渐变效果

## 📝 开发记录

- 2026-03-26: 项目初始化完成，Phase 1 核心功能实现 ✅

## 🔮 下一步计划

1. 完善神煞系统
2. 添加流年流月功能
3. 优化移动端体验
4. 添加命盘保存功能（localStorage）
5. 导出为图片功能
