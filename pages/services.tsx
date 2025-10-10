import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Cloud, Shield, Globe, TrendingUp, Brain, Database, ShoppingCart, Users, CheckCircle } from 'lucide-react'
import Layout from '@/components/Layout'
import Card from '@/components/Card'

export default function Services() {
  const { t } = useTranslation('common')

  const serviceCategories = [
    {
      icon: <Cloud className="w-10 h-10" />,
      titleKey: 'services.categories.cloud.title',
      itemsKey: 'services.categories.cloud.items',
      delay: 0,
    },
    {
      icon: <Shield className="w-10 h-10" />,
      titleKey: 'services.categories.compliance.title',
      itemsKey: 'services.categories.compliance.items',
      delay: 0.1,
    },
    {
      icon: <Globe className="w-10 h-10" />,
      titleKey: 'services.categories.website.title',
      itemsKey: 'services.categories.website.items',
      delay: 0.2,
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      titleKey: 'services.categories.marketing.title',
      itemsKey: 'services.categories.marketing.items',
      delay: 0.3,
    },
    {
      icon: <Brain className="w-10 h-10" />,
      titleKey: 'services.categories.ai.title',
      itemsKey: 'services.categories.ai.items',
      delay: 0.4,
    },
    {
      icon: <Database className="w-10 h-10" />,
      titleKey: 'services.categories.integration.title',
      itemsKey: 'services.categories.integration.items',
      delay: 0.5,
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      titleKey: 'services.categories.ecommerce.title',
      itemsKey: 'services.categories.ecommerce.items',
      delay: 0.6,
    },
    {
      icon: <Users className="w-10 h-10" />,
      titleKey: 'services.categories.consulting.title',
      itemsKey: 'services.categories.consulting.items',
      delay: 0.7,
    },
  ]

  return (
    <Layout title={`${t('services.title')} - ${t('company_name')}`} description={t('tagline')}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-32 pt-40">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-gray-200">
              {t('tagline')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => {
              const items = t(category.itemsKey, { returnObjects: true }) as string[]

              return (
                <Card key={index} delay={category.delay}>
                  <div className="flex items-start space-x-4">
                    <div className="text-secondary flex-shrink-0">{category.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-4">
                        {t(category.titleKey)}
                      </h3>
                      <ul className="space-y-2">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
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
