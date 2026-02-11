import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Clock, ArrowLeft, ArrowRight, User } from 'lucide-react'
import Layout from '@/components/Layout'
import { blogPosts, BlogPost } from '@/data/blog'

const easeOutExpo = [0.22, 1, 0.36, 1] as const

interface BlogDetailProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogDetail({ post, relatedPosts }: BlogDetailProps) {
  const { t } = useTranslation('common')
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const contentParagraphs = t(post.contentKey).split('\n\n')

  return (
    <Layout title={`${t(post.titleKey)} - ${t('company_name')}`} description={t(post.excerptKey)}>
      {/* Hero Image */}
      <div className="relative h-[360px] sm:h-[420px] lg:h-[480px] mt-20">
        <Image
          src={post.coverImage}
          alt={t(post.titleKey)}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/30 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-6 left-0 right-0">
          <div className="container-custom">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft size={14} />
              {t('blog.back_to_blog')}
            </Link>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-custom pb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="max-w-3xl"
            >
              <span
                className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[1.5px] uppercase rounded-sm text-white mb-4"
                style={{ backgroundColor: post.categoryColor }}
              >
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-serif leading-[1.2] tracking-tight">
                {t(post.titleKey)}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-5 pb-8 mb-10 border-b border-border text-sm text-subtle"
            >
              <div className="flex items-center gap-2">
                <User size={14} />
                <span>{post.author.name}</span>
              </div>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span className="flex items-center gap-1">
                <Clock size={13} />
                {post.readTime} {t('blog.min_read')}
              </span>
            </motion.div>

            {/* Body */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
              className="prose-custom"
            >
              {contentParagraphs.map((paragraph, i) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-2xl font-semibold text-heading font-serif mt-10 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={i} className="text-xl font-semibold text-heading font-serif mt-8 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                }
                return (
                  <p key={i} className="text-base text-muted leading-[1.85] mb-5">
                    {paragraph}
                  </p>
                )
              })}
            </motion.div>

            {/* Author card */}
            <div className="mt-14 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <User size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-heading">{post.author.name}</p>
                  <p className="text-xs text-subtle">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-surface border-t border-border py-20">
          <div className="container-custom">
            <h2 className="text-2xl font-semibold text-heading font-serif mb-10">
              {t('blog.related_posts')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related, index) => (
                <Link key={related.slug} href={`/blog/${related.slug}`}>
                  <motion.article
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: easeOutExpo }}
                    className="group rounded-xl overflow-hidden border border-border bg-card-bg hover:border-heading/20 transition-colors duration-300 h-full flex flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={related.coverImage}
                        alt={t(related.titleKey)}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-2 flex-1">
                      <span className="text-xs text-subtle">
                        {new Date(related.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                      <h3 className="text-base font-semibold text-heading font-serif leading-snug group-hover:text-gold transition-colors duration-300">
                        {t(related.titleKey)}
                      </h3>
                      <div className="flex items-center gap-1.5 text-gold text-[13px] font-medium mt-auto pt-2">
                        <span>{t('blog.read_more')}</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = blogPosts.flatMap((post) =>
    (locales ?? ['zh', 'en']).map((locale) => ({
      params: { slug: post.slug },
      locale,
    }))
  )
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<BlogDetailProps> = async ({ params, locale }) => {
  const slug = params?.slug as string
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return { notFound: true }
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3)

  return {
    props: {
      post,
      relatedPosts,
      ...(await serverSideTranslations(locale ?? 'zh', ['common'])),
    },
  }
}
