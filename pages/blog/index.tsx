import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import { blogPosts } from '@/data/blog'

const easeOutExpo = [0.22, 1, 0.36, 1] as const

export default function Blog() {
  const { t } = useTranslation('common')

  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <Layout title={`${t('blog.title')} - ${t('company_name')}`} description={t('blog.banner_desc')}>
      <Banner
        title={t('blog.banner_title')}
        badge={t('blog.banner_badge')}
        description={t('blog.banner_desc')}
        height="small"
        centered
      />

      {/* Featured Post */}
      <section className="bg-primary py-20 lg:py-24">
        <div className="container-custom">
          <Link href={`/blog/${featured.slug}`}>
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border bg-surface hover:border-heading/20 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] lg:aspect-auto">
                <Image
                  src={featured.coverImage}
                  alt={t(featured.titleKey)}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[1.5px] uppercase rounded-sm text-white"
                    style={{ backgroundColor: featured.categoryColor }}
                  >
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center gap-5">
                <div className="flex items-center gap-4 text-xs text-subtle">
                  <time dateTime={featured.date}>
                    {new Date(featured.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {featured.readTime} {t('blog.min_read')}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-heading font-serif leading-snug group-hover:text-gold transition-colors duration-300">
                  {t(featured.titleKey)}
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  {t(featured.excerptKey)}
                </p>
                <div className="flex items-center gap-2 text-gold text-sm font-medium mt-auto">
                  <span>{t('blog.read_more')}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          </Link>
        </div>
      </section>

      {/* Post Grid */}
      <section className="bg-primary pb-24 lg:pb-[100px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: easeOutExpo }}
                  className="group rounded-xl overflow-hidden border border-border bg-surface hover:border-heading/20 transition-colors duration-300 h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={t(post.titleKey)}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-[1.5px] uppercase rounded-sm text-white"
                        style={{ backgroundColor: post.categoryColor }}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-3 text-xs text-subtle">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </time>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime} {t('blog.min_read')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-heading font-serif leading-snug group-hover:text-gold transition-colors duration-300">
                      {t(post.titleKey)}
                    </h3>
                    <p className="text-[13px] text-muted leading-relaxed flex-1">
                      {t(post.excerptKey)}
                    </p>
                    <div className="flex items-center gap-2 text-gold text-[13px] font-medium pt-2">
                      <span>{t('blog.read_more')}</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'zh', ['common'])),
    },
  }
}
