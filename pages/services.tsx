import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Cloud, Shield, Globe, TrendingUp, Brain, Database, ShoppingCart, Users, CheckCircle } from 'lucide-react'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import ServiceIcon from '@/components/ServiceIcon'
import ServiceCard from '@/components/ServiceCard'
import Banner from '@/components/Banner'

export default function Services() {
  const { t } = useTranslation('common')

  const serviceCategories = [
    {
      Icon: Cloud,
      titleKey: 'services.categories.cloud.title',
      itemsKey: 'services.categories.cloud.items',
      color: '#00C4CC',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      delay: 0,
    },
    {
      Icon: Shield,
      titleKey: 'services.categories.compliance.title',
      itemsKey: 'services.categories.compliance.items',
      color: '#10B981',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      delay: 0.1,
    },
    {
      Icon: Globe,
      titleKey: 'services.categories.website.title',
      itemsKey: 'services.categories.website.items',
      color: '#3B82F6',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      delay: 0.2,
    },
    {
      Icon: TrendingUp,
      titleKey: 'services.categories.marketing.title',
      itemsKey: 'services.categories.marketing.items',
      color: '#8B5CF6',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      delay: 0.3,
    },
    {
      Icon: Brain,
      titleKey: 'services.categories.ai.title',
      itemsKey: 'services.categories.ai.items',
      color: '#EC4899',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      delay: 0.4,
    },
    {
      Icon: Database,
      titleKey: 'services.categories.integration.title',
      itemsKey: 'services.categories.integration.items',
      color: '#F59E0B',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      delay: 0.5,
    },
    {
      Icon: ShoppingCart,
      titleKey: 'services.categories.ecommerce.title',
      itemsKey: 'services.categories.ecommerce.items',
      color: '#EF4444',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      delay: 0.6,
    },
    {
      Icon: Users,
      titleKey: 'services.categories.consulting.title',
      itemsKey: 'services.categories.consulting.items',
      color: '#06B6D4',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
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

      {/* Services Card Grid with Images */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('tagline')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <ServiceCard
                key={index}
                title={t(category.titleKey)}
                image={category.image}
                Icon={category.Icon}
                color={category.color}
                delay={category.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
          >
            {t('services.title')}详情
          </motion.h2>

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
