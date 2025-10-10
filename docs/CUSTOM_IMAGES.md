# 自定义图片指南 / Custom Images Guide

## 概述 / Overview

当前网站使用渐变色背景，避免了版权和可用性问题。如果您想使用真实图片，请按照以下指南操作。

The website currently uses gradient backgrounds to avoid copyright and availability issues. If you want to use real images, follow this guide.

## 方案一：使用本地图片 / Option 1: Local Images

### 1. 添加图片到 public 目录

将图片放在 `public/images/` 目录下：

```
public/
  images/
    services/
      cloud.jpg
      compliance.jpg
      website.jpg
      marketing.jpg
      ai.jpg
      integration.jpg
      ecommerce.jpg
      consulting.jpg
    cases/
      case1.jpg
      case2.jpg
    banners/
      hero.jpg
      cases-hero.jpg
```

### 2. 更新 ServiceCard 组件

修改 `components/ServiceCard.tsx`，添加对图片的支持：

```typescript
interface ServiceCardProps {
  title: string
  description?: string
  Icon: LucideIcon
  color: string
  delay?: number
  image?: string  // 添加可选的图片属性
}

// 在组件中：
{image ? (
  <div className="relative h-48 overflow-hidden">
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
  </div>
) : (
  // 当前的渐变背景代码
)}
```

### 3. 更新页面中的服务数据

在 `pages/services.tsx` 中：

```typescript
const serviceCategories = [
  {
    Icon: Cloud,
    titleKey: 'services.categories.cloud.title',
    itemsKey: 'services.categories.cloud.items',
    color: '#00C4CC',
    image: '/images/services/cloud.jpg',  // 添加图片路径
    delay: 0,
  },
  // ... 其他服务
]
```

## 方案二：使用 CDN / Option 2: Use CDN

### 1. 配置 next.config.js

取消注释并配置您的 CDN 域名：

```javascript
const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-cdn.com',  // 替换为您的 CDN 域名
        port: '',
        pathname: '/**',
      },
    ],
  },
}
```

### 2. 使用 CDN URL

```typescript
const serviceCategories = [
  {
    Icon: Cloud,
    titleKey: 'services.categories.cloud.title',
    color: '#00C4CC',
    image: 'https://your-cdn.com/images/cloud.jpg',
    delay: 0,
  },
]
```

## 推荐图片规格 / Recommended Image Specifications

### 服务卡片 (Service Cards)
- 尺寸: 800x600px
- 格式: JPG/WebP
- 文件大小: < 200KB
- 主题: 与服务相关的科技、商业场景

### Banner 图片
- 尺寸: 1920x1080px
- 格式: JPG/WebP
- 文件大小: < 500KB
- 主题: 科技、网络、数据可视化

### 案例图片 (Case Study Images)
- 尺寸: 800x600px
- 格式: JPG/WebP
- 文件大小: < 200KB
- 主题: 相关行业场景或抽象商业图片

## 图片来源建议 / Suggested Image Sources

### 免费商用图库
- **Pexels** (https://www.pexels.com/) - 完全免费商用
- **Pixabay** (https://pixabay.com/) - 免费商用
- **Unsplash** (https://unsplash.com/) - Unsplash License (免费商用)

### 付费图库
- **Shutterstock** - 高质量专业图片
- **Adobe Stock** - 与 Adobe 生态整合
- **iStock** - Getty Images 旗下

### 自定义设计
- 使用 **Canva** 或 **Figma** 创建品牌一致的图片
- 聘请设计师创作符合品牌形象的定制图片

## 注意事项 / Important Notes

1. **版权**: 确保所有图片都有商用许可
2. **优化**: 使用 WebP 格式和适当压缩以提升性能
3. **一致性**: 保持图片风格统一，符合品牌调性
4. **可访问性**: 确保图片有适当的 alt 文本
5. **响应式**: 准备不同尺寸的图片以适应不同设备

## 示例：完整的图片集成流程

```bash
# 1. 创建图片目录
mkdir -p public/images/services
mkdir -p public/images/cases
mkdir -p public/images/banners

# 2. 添加图片文件
# (将您的图片文件复制到相应目录)

# 3. 修改代码引用图片
# (按照上述示例修改组件和页面)

# 4. 测试
npm run dev

# 5. 构建验证
npm run build
```

## 当前使用的颜色方案 / Current Color Scheme

如果暂时不添加图片，当前的渐变色方案已经提供了良好的视觉效果：

- Cloud: #00C4CC (青色)
- Compliance: #10B981 (绿色)
- Website: #3B82F6 (蓝色)
- Marketing: #8B5CF6 (紫色)
- AI: #EC4899 (粉色)
- Integration: #F59E0B (橙色)
- E-commerce: #EF4444 (红色)
- Consulting: #06B6D4 (青蓝色)

这些颜色会自动生成渐变背景和动画效果。
