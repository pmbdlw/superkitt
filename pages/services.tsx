import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Cloud, Shield, Globe, TrendingUp, Brain, Database, ShoppingCart, Users, LucideIcon, ArrowRight } from 'lucide-react'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import Button from '@/components/Button'

const easeOutExpo = [0.22, 1, 0.36, 1]

interface ServiceCategory {
  Icon: LucideIcon
  titleKey: string
  descKey: string
  itemsKey: string
}

export default function Services() {
  const { t } = useTranslation('common')

  const serviceCategories: ServiceCategory[] = [
    { Icon: Cloud, titleKey: 'services.categories.cloud.title', descKey: 'services.categories.cloud.description', itemsKey: 'services.categories.cloud.items' },
    { Icon: Shield, titleKey: 'services.categories.compliance.title', descKey: 'services.categories.compliance.description', itemsKey: 'services.categories.compliance.items' },
    { Icon: Globe, titleKey: 'services.categories.website.title', descKey: 'services.categories.website.description', itemsKey: 'services.categories.website.items' },
    { Icon: TrendingUp, titleKey: 'services.categories.marketing.title', descKey: 'services.categories.marketing.description', itemsKey: 'services.categories.marketing.items' },
    { Icon: Brain, titleKey: 'services.categories.ai.title', descKey: 'services.categories.ai.description', itemsKey: 'services.categories.ai.items' },
    { Icon: Database, titleKey: 'services.categories.integration.title', descKey: 'services.categories.integration.description', itemsKey: 'services.categories.integration.items' },
    { Icon: ShoppingCart, titleKey: 'services.categories.ecommerce.title', descKey: 'services.categories.ecommerce.description', itemsKey: 'services.categories.ecommerce.items' },
    { Icon: Users, titleKey: 'services.categories.consulting.title', descKey: 'services.categories.consulting.description', itemsKey: 'services.categories.consulting.items' },
  ]

  return (
    <Layout title={`${t('services.title')} - ${t('company_name')}`} description={t('tagline')}>
      <Banner
        title={t('services.title')}
        subtitle="SUPERKITT"
        description={t('tagline')}
        height="small"
      />

      {/* Services List */}
      <section className="bg-primary py-24 lg:py-[100px]">
        <div className="container-custom">
          <div className="space-y-24">
            {serviceCategories.map((category, index) => {
              const items = t(category.itemsKey, { returnObjects: true }) as string[]
              const isReversed = index % 2 === 1
              const Icon = category.Icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: easeOutExpo }}
                >
                  {index > 0 && (
                    <div className="mb-16 h-px bg-[#2A2A2A]" />
                  )}

                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start`}>
                    <div className={`lg:col-span-4 ${isReversed ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-[60px] h-[60px] border border-gold-muted flex items-center justify-center">
                          <Icon size={28} className="text-gold" strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-medium tracking-label text-[#848484] uppercase">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-2xl font-medium text-white tracking-tight font-serif">
                        {t(category.titleKey)}
                      </h3>
                      <p className="text-sm text-[#848484] mt-3 leading-relaxed">
                        {t(category.descKey)}
                      </p>
                    </div>

                    <div className={`lg:col-span-8 ${isReversed ? 'lg:order-1' : ''}`}>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-sm text-[#848484] border border-[#2A2A2A] p-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 lg:py-[120px]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col items-center text-center gap-6 max-w-[800px] mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight font-serif">
              {t('cta.text')}
            </h2>
            <p className="text-lg text-[#848484] leading-relaxed">
              {t('cta.description')}
            </p>
            <Link href="/contact" className="mt-4">
              <Button size="lg">
                <span className="flex items-center gap-3">
                  {t('cta.button')}
                  <ArrowRight size={18} />
                </span>
              </Button>
            </Link>
          </motion.div>
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
