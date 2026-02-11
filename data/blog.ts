export interface BlogPost {
  slug: string
  titleKey: string
  excerptKey: string
  contentKey: string
  category: string
  categoryColor: string
  date: string
  readTime: number
  coverImage: string
  author: {
    name: string
    role: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'cloud-architecture-going-global',
    titleKey: 'blog.posts.cloud.title',
    excerptKey: 'blog.posts.cloud.excerpt',
    contentKey: 'blog.posts.cloud.content',
    category: 'Cloud',
    categoryColor: '#C4614A',
    date: '2026-01-15',
    readTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop',
    author: { name: 'SuperKitt Team', role: 'Engineering' },
  },
  {
    slug: 'gdpr-compliance-chinese-enterprises',
    titleKey: 'blog.posts.gdpr.title',
    excerptKey: 'blog.posts.gdpr.excerpt',
    contentKey: 'blog.posts.gdpr.content',
    category: 'Compliance',
    categoryColor: '#3FBFAF',
    date: '2026-01-08',
    readTime: 12,
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop',
    author: { name: 'SuperKitt Team', role: 'Compliance' },
  },
  {
    slug: 'ai-customer-service-multilingual',
    titleKey: 'blog.posts.ai.title',
    excerptKey: 'blog.posts.ai.excerpt',
    contentKey: 'blog.posts.ai.content',
    category: 'AI',
    categoryColor: '#F5C842',
    date: '2025-12-20',
    readTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop',
    author: { name: 'SuperKitt Team', role: 'AI Lab' },
  },
  {
    slug: 'ecommerce-internationalization-guide',
    titleKey: 'blog.posts.ecommerce.title',
    excerptKey: 'blog.posts.ecommerce.excerpt',
    contentKey: 'blog.posts.ecommerce.content',
    category: 'E-Commerce',
    categoryColor: '#C4614A',
    date: '2025-12-10',
    readTime: 10,
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop',
    author: { name: 'SuperKitt Team', role: 'Commerce' },
  },
  {
    slug: 'kubernetes-multi-region-deployment',
    titleKey: 'blog.posts.k8s.title',
    excerptKey: 'blog.posts.k8s.excerpt',
    contentKey: 'blog.posts.k8s.content',
    category: 'DevOps',
    categoryColor: '#3FBFAF',
    date: '2025-11-28',
    readTime: 15,
    coverImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80&auto=format&fit=crop',
    author: { name: 'SuperKitt Team', role: 'Infrastructure' },
  },
  {
    slug: 'data-security-cross-border',
    titleKey: 'blog.posts.security.title',
    excerptKey: 'blog.posts.security.excerpt',
    contentKey: 'blog.posts.security.content',
    category: 'Security',
    categoryColor: '#F5C842',
    date: '2025-11-15',
    readTime: 9,
    coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80&auto=format&fit=crop',
    author: { name: 'SuperKitt Team', role: 'Security' },
  },
]
