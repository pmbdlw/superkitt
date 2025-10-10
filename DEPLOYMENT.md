# 部署指南 / Deployment Guide

## 快速部署到 Vercel

### 方法 1: 通过 Vercel Dashboard (推荐)

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 导入此 GitHub 仓库
5. 配置环境变量（见下方）
6. 点击 "Deploy"

### 方法 2: 使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署
vercel

# 部署到生产环境
vercel --prod
```

## 环境变量配置

在 Vercel Dashboard 的 Settings > Environment Variables 中配置：

```env
# 必需配置
WEBHOOK_URL=https://your-webhook-url.com

# 可选配置
EMAIL_SERVICE_URL=https://api.sendgrid.com/v3/mail/send
EMAIL_API_KEY=your_sendgrid_api_key
```

## Webhook 集成选项

### 选项 1: Zapier
1. 创建 Zapier 账号
2. 创建新 Zap，触发器选择 "Webhooks by Zapier"
3. 选择 "Catch Hook"
4. 复制 Webhook URL 到环境变量
5. 配置动作（发送邮件、保存到表格等）

### 选项 2: Make.com (Integromat)
1. 创建 Make.com 账号
2. 创建新场景
3. 添加 Webhook 模块
4. 复制 Webhook URL 到环境变量
5. 添加后续操作

### 选项 3: 自定义 API
- 使用任何支持 POST 请求的 API 端点
- 确保能接收 JSON 格式数据

## 自定义域名配置

1. 在 Vercel Dashboard 中点击项目
2. 进入 Settings > Domains
3. 添加自定义域名（如 www.superkitt.com）
4. 根据提示配置 DNS 记录

DNS 配置示例：
```
A Record:
Type: A
Name: @
Value: 76.76.21.21

CNAME Record:
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 性能优化

### 已实现的优化
- ✅ 静态生成 (SSG) 所有页面
- ✅ 图片优化（使用 Next.js Image）
- ✅ 代码分割
- ✅ 字体优化
- ✅ CSS 优化（TailwindCSS Purge）

### 建议的额外优化
- 添加 CDN 加速
- 启用 Vercel Analytics
- 配置缓存策略
- 添加 Service Worker (PWA)

## 监控与分析

### Vercel Analytics
```bash
npm install @vercel/analytics
```

在 `_app.tsx` 中添加：
```typescript
import { Analytics } from '@vercel/analytics/react'

// 在 return 中添加
<Analytics />
```

### Google Analytics
在 `_document.tsx` 中添加 GA 脚本

## 持续集成 / CI/CD

Vercel 自动配置 CI/CD：
- 推送到 `main` 分支 → 自动部署到生产环境
- 推送到其他分支 → 自动创建预览部署
- Pull Request → 自动创建预览部署

## 故障排查

### 构建失败
```bash
# 本地测试构建
npm run build

# 检查类型错误
npm run type-check

# 检查 lint 错误
npm run lint
```

### 环境变量未生效
- 确认在 Vercel Dashboard 中正确配置
- 重新部署项目
- 变量名必须以 `NEXT_PUBLIC_` 开头才能在客户端访问

### i18n 路由问题
- 确认 `next.config.js` 中 i18n 配置正确
- 检查翻译文件路径是否正确

## 备份与回滚

### 回滚到之前的部署
1. 进入 Vercel Dashboard
2. 选择 Deployments 标签
3. 找到要回滚的部署
4. 点击 "Promote to Production"

## 资源文件准备清单

部署前确保添加以下资源：

- [ ] `/public/favicon.ico` - 网站图标
- [ ] `/public/og-image.png` - Open Graph 图片 (1200x630px)
- [ ] `/public/wechat_qr.png` - 微信二维码

## 联系方式

- 技术支持：tech@superkitt.com
- 部署问题：devops@superkitt.com

## 检查清单

部署前检查：
- [ ] 所有环境变量已配置
- [ ] Webhook URL 已测试
- [ ] 自定义域名已配置
- [ ] SSL 证书已启用
- [ ] 所有资源文件已上传
- [ ] 构建成功无错误
- [ ] 测试了所有页面和功能
- [ ] i18n 切换功能正常
- [ ] 联系表单提交正常
- [ ] SEO 标签正确显示
