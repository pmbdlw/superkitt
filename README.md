# SuperKitt Official Website

SuperKitt 官网 - 中国企业出海的一站式技术伙伴

## 项目概述

这是 SuperKitt 的官方网站，一个双语（中文/英文）企业网站，展示公司服务、案例研究，并提供客户咨询功能。

## 技术栈

- **Frontend**: Next.js 14 + React + TypeScript
- **Styling**: TailwindCSS
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **i18n**: next-i18next
- **Forms**: React Hook Form
- **Deployment**: Vercel

## 项目结构

```
superkittsite/
├── components/          # 可复用组件
│   ├── Layout.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── SEO.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   └── ParticleBackground.tsx
├── pages/              # 页面路由
│   ├── index.tsx       # 首页
│   ├── services.tsx    # 服务页
│   ├── cases.tsx       # 案例页
│   ├── about.tsx       # 关于页
│   ├── contact.tsx     # 联系页
│   ├── privacy.tsx     # 隐私页
│   └── api/            # API 路由
│       └── contact.ts  # 表单提交接口
├── public/
│   ├── locales/        # 翻译文件
│   │   ├── zh/
│   │   │   └── common.json
│   │   └── en/
│   │       └── common.json
│   └── robots.txt
├── styles/
│   └── globals.css
└── ...配置文件

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发环境

```bash
npm run dev
```

访问 http://localhost:3000

### 生产构建

```bash
npm run build
npm start
```

### 代码检查

```bash
npm run lint
```

### 类型检查

```bash
npm run type-check
```

## 环境变量配置

复制 `.env.example` 到 `.env.local` 并配置以下变量：

```env
# Contact Form Webhook URL
WEBHOOK_URL=https://hooks.example.com/contact

# Optional: Email Service Configuration
# EMAIL_SERVICE_URL=https://api.sendgrid.com/v3/mail/send
# EMAIL_API_KEY=your_api_key_here
```

## 页面说明

### 首页 (/)
- Hero 部分（带粒子动画背景）
- 服务概览（8个服务类别）
- 合作伙伴展示
- CTA（行动召唤）

### 服务页 (/services)
- 7大服务类别详细介绍
- 每个类别包含具体服务项目

### 案例页 (/cases)
- 客户案例展示
- 问题 → 解决方案 → 成果模板

### 关于页 (/about)
- 公司简介
- 使命愿景
- 技术合作伙伴

### 联系页 (/contact)
- 联系表单（姓名、邮箱、公司、需求）
- 联系方式展示
- 表单提交到 Webhook

### 隐私页 (/privacy)
- 隐私政策
- 合规信息

## 国际化 (i18n)

网站支持中文（默认）和英文两种语言。翻译文件位于：
- `/public/locales/zh/common.json` - 中文
- `/public/locales/en/common.json` - 英文

## SEO 优化

- Meta 标签优化
- Open Graph 支持
- Twitter Card 支持
- 动态 Sitemap (/sitemap.xml)
- Robots.txt
- 响应式设计
- 性能优化（目标 Lighthouse 得分 90+）

## 品牌规范

### 颜色
- Primary: `#0A1F44` (深蓝)
- Secondary: `#00C4CC` (青色)
- Background: `#FFFFFF`
- Accent: `#111827`

### 字体
- 英文: Inter
- 中文: Noto Sans SC

## 部署

### Vercel 部署

1. 连接 GitHub 仓库到 Vercel
2. 配置环境变量
3. 自动部署

或使用 Vercel CLI：

```bash
npm install -g vercel
vercel
```

## 资源文件

待添加的资源：
- `/public/favicon.ico` - 网站图标
- `/public/og-image.png` - Open Graph 图片
- `/public/wechat_qr.png` - 微信二维码

## 维护与更新

### 添加新服务
编辑 `/public/locales/[locale]/common.json` 的 `services.categories` 部分

### 添加新案例
编辑 `/public/locales/[locale]/common.json` 的 `cases` 部分

### 修改翻译
更新对应语言的 JSON 文件

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## License

© 2025 SuperKitt. All rights reserved.
