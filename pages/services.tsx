import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Cloud, Shield, Globe, TrendingUp, Brain, Database, ShoppingCart, Users, LucideIcon } from 'lucide-react'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import Button from '@/components/Button'

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
      {/* Page Header */}
      <Banner
        title={t('services.title')}
        subtitle="SuperKITT"
        description={t('tagline')}
        height="small"
      />

      {/* Services List */}
      <section className="py-24">
        <div className="container-custom">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => {
              const items = t(category.itemsKey, { returnObjects: true }) as string[]
              const isReversed = index % 2 === 1
              const Icon = category.Icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                    isReversed ? 'lg:direction-rtl' : ''
                  }`}
                >
                  {/* Icon & Title Side */}
                  <div className={`lg:col-span-4 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Icon size={20} className="text-secondary" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-medium tracking-widest text-slate-400 uppercase">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary tracking-tight">
                      {t(category.titleKey)}
                    </h3>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                      {t(category.descKey)}
                    </p>
                  </div>

                  {/* Items Side */}
                  <div className={`lg:col-span-8 ${isReversed ? 'lg:order-1' : ''}`}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              {t('cta.text')}
            </h2>
            <p className="text-slate-500 mb-8">
              {t('cta.description')}
            </p>
            <Link href="/contact">
              <Button size="lg">{t('cta.button')}</Button>
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
