import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Cloud, Shield, Globe, TrendingUp, Brain, Database, ShoppingCart, Users, CheckCircle } from 'lucide-react'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import ServiceIcon from '@/components/ServiceIcon'
import Banner from '@/components/Banner'

export default function Services() {
  const { t } = useTranslation('common')

  const serviceCategories = [
    {
      Icon: Cloud,
      titleKey: 'services.categories.cloud.title',
      itemsKey: 'services.categories.cloud.items',
      color: '#00C4CC',
      delay: 0,
    },
    {
      Icon: Shield,
      titleKey: 'services.categories.compliance.title',
      itemsKey: 'services.categories.compliance.items',
      color: '#10B981',
      delay: 0.1,
    },
    {
      Icon: Globe,
      titleKey: 'services.categories.website.title',
      itemsKey: 'services.categories.website.items',
      color: '#3B82F6',
      delay: 0.2,
    },
    {
      Icon: TrendingUp,
      titleKey: 'services.categories.marketing.title',
      itemsKey: 'services.categories.marketing.items',
      color: '#8B5CF6',
      delay: 0.3,
    },
    {
      Icon: Brain,
      titleKey: 'services.categories.ai.title',
      itemsKey: 'services.categories.ai.items',
      color: '#EC4899',
      delay: 0.4,
    },
    {
      Icon: Database,
      titleKey: 'services.categories.integration.title',
      itemsKey: 'services.categories.integration.items',
      color: '#F59E0B',
      delay: 0.5,
    },
    {
      Icon: ShoppingCart,
      titleKey: 'services.categories.ecommerce.title',
      itemsKey: 'services.categories.ecommerce.items',
      color: '#EF4444',
      delay: 0.6,
    },
    {
      Icon: Users,
      titleKey: 'services.categories.consulting.title',
      itemsKey: 'services.categories.consulting.items',
      color: '#06B6D4',
      delay: 0.7,
    },
  ]

  return (
    <Layout title={`${t('services.title')} - ${t('company_name')}`} description={t('tagline')}>
      {/* Page Header */}
      <Banner
        title={t('services.title')}
        subtitle="SuperKITT"
        description={t('tagline')}
        height="medium"
      />

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => {
              const items = t(category.itemsKey, { returnObjects: true }) as string[]

              return (
                <Card key={index} delay={category.delay}>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 pt-2">
                      <ServiceIcon Icon={category.Icon} color={category.color} size={48} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-4">
                        {t(category.titleKey)}
                      </h3>
                      <ul className="space-y-2">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: category.color }} />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.text')}
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {t('cta.button')}
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
