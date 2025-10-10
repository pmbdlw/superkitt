import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cloud, Shield, Globe as GlobeIcon, TrendingUp, Brain, Database, ShoppingCart, Users } from 'lucide-react'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Card from '@/components/Card'
import ServiceIcon from '@/components/ServiceIcon'
import Banner from '@/components/Banner'

export default function Home() {
  const { t } = useTranslation('common')

  const services = [
    {
      Icon: Cloud,
      titleKey: 'services.categories.cloud.title',
      color: '#00C4CC',
      delay: 0,
    },
    {
      Icon: Shield,
      titleKey: 'services.categories.compliance.title',
      color: '#10B981',
      delay: 0.1,
    },
    {
      Icon: GlobeIcon,
      titleKey: 'services.categories.website.title',
      color: '#3B82F6',
      delay: 0.2,
    },
    {
      Icon: TrendingUp,
      titleKey: 'services.categories.marketing.title',
      color: '#8B5CF6',
      delay: 0.3,
    },
    {
      Icon: Brain,
      titleKey: 'services.categories.ai.title',
      color: '#EC4899',
      delay: 0.4,
    },
    {
      Icon: Database,
      titleKey: 'services.categories.integration.title',
      color: '#F59E0B',
      delay: 0.5,
    },
    {
      Icon: ShoppingCart,
      titleKey: 'services.categories.ecommerce.title',
      color: '#EF4444',
      delay: 0.6,
    },
    {
      Icon: Users,
      titleKey: 'services.categories.consulting.title',
      color: '#06B6D4',
      delay: 0.7,
    },
  ]

  const partners = ['AWS', 'Microsoft Azure', 'Cloudflare', 'OpenAI']

  return (
    <Layout title={t('company_name')} description={t('tagline')}>
      {/* Hero Banner */}
      <Banner
        title={t('hero.headline')}
        subtitle="SuperKITT"
        description={t('hero.subheadline')}
        gradient="from-primary via-accent to-primary"
        height="large"
      >
        <Link href="/contact">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            {t('hero.cta')}
          </Button>
        </Link>
      </Banner>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center"
          >
            {t('services.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <Card key={index} delay={service.delay}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <ServiceIcon Icon={service.Icon} color={service.color} size={56} />
                  <h3 className="text-lg font-semibold text-primary">
                    {t(service.titleKey)}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button variant="secondary">
                {t('nav.services')} →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center"
          >
            {t('partners.title')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <span className="text-xl font-semibold text-gray-700">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
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
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                {t('cta.button')}
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
