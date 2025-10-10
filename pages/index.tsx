import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cloud, Shield, Globe as GlobeIcon, TrendingUp, Brain, Database, ShoppingCart, Users } from 'lucide-react'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Card from '@/components/Card'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  const { t } = useTranslation('common')

  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      titleKey: 'services.categories.cloud.title',
      delay: 0,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      titleKey: 'services.categories.compliance.title',
      delay: 0.1,
    },
    {
      icon: <GlobeIcon className="w-8 h-8" />,
      titleKey: 'services.categories.website.title',
      delay: 0.2,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      titleKey: 'services.categories.marketing.title',
      delay: 0.3,
    },
    {
      icon: <Brain className="w-8 h-8" />,
      titleKey: 'services.categories.ai.title',
      delay: 0.4,
    },
    {
      icon: <Database className="w-8 h-8" />,
      titleKey: 'services.categories.integration.title',
      delay: 0.5,
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      titleKey: 'services.categories.ecommerce.title',
      delay: 0.6,
    },
    {
      icon: <Users className="w-8 h-8" />,
      titleKey: 'services.categories.consulting.title',
      delay: 0.7,
    },
  ]

  const partners = ['AWS', 'Microsoft Azure', 'Cloudflare', 'OpenAI']

  return (
    <Layout title={t('company_name')} description={t('tagline')}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white min-h-screen flex items-center overflow-hidden">
        <ParticleBackground />
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t('hero.subheadline')}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                {t('hero.cta')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

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
                <div className="flex flex-col items-center text-center">
                  <div className="text-secondary mb-4">{service.icon}</div>
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
