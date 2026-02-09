import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Cloud, Shield, Globe as GlobeIcon, TrendingUp, Brain, Database, ShoppingCart, Users } from 'lucide-react'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Banner from '@/components/Banner'
import ServiceCard from '@/components/ServiceCard'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1500
    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function Home() {
  const { t } = useTranslation('common')

  const services = [
    { Icon: Cloud, titleKey: 'services.categories.cloud.title', descKey: 'services.categories.cloud.description' },
    { Icon: Shield, titleKey: 'services.categories.compliance.title', descKey: 'services.categories.compliance.description' },
    { Icon: GlobeIcon, titleKey: 'services.categories.website.title', descKey: 'services.categories.website.description' },
    { Icon: TrendingUp, titleKey: 'services.categories.marketing.title', descKey: 'services.categories.marketing.description' },
    { Icon: Brain, titleKey: 'services.categories.ai.title', descKey: 'services.categories.ai.description' },
    { Icon: Database, titleKey: 'services.categories.integration.title', descKey: 'services.categories.integration.description' },
    { Icon: ShoppingCart, titleKey: 'services.categories.ecommerce.title', descKey: 'services.categories.ecommerce.description' },
    { Icon: Users, titleKey: 'services.categories.consulting.title', descKey: 'services.categories.consulting.description' },
  ]

  const partners = ['AWS', 'Microsoft Azure', 'Cloudflare', 'OpenAI']

  const stats = [
    { value: 50, suffix: '+', labelKey: 'stats.clients' },
    { value: 8, suffix: '', labelKey: 'stats.categories' },
    { value: 10, suffix: '+', labelKey: 'stats.coverage' },
    { value: 92, suffix: '%', labelKey: 'stats.satisfaction' },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06 },
    },
  }

  return (
    <Layout title={t('company_name')} description={t('tagline')}>
      {/* Hero */}
      <Banner
        title={t('hero.headline')}
        subtitle="SuperKITT"
        description={t('hero.subheadline')}
        variant="hero"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <Button size="lg">{t('hero.cta')}</Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline">{t('hero.cta_secondary')}</Button>
          </Link>
        </div>
      </Banner>

      {/* Services Section */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-xs font-medium tracking-widest text-secondary uppercase mb-3">
              {t('services.label')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight text-balance">
              {t('services.title')}
            </h2>
          </motion.div>

          {/* Top row: 3 featured services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5"
          >
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={index}
                title={t(service.titleKey)}
                description={t(service.descKey)}
                Icon={service.Icon}
                delay={index * 0.06}
                direction={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </motion.div>

          {/* Bottom row: remaining services in smaller cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {services.slice(3).map((service, index) => (
              <ServiceCard
                key={index + 3}
                title={t(service.titleKey)}
                Icon={service.Icon}
                delay={index * 0.06}
                direction={index % 2 === 0 ? 'right' : 'left'}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Link href="/services">
              <Button variant="secondary">{t('nav.services')} &rarr;</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  {t(stat.labelKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12"
          >
            <p className="text-xs font-medium tracking-widest text-secondary uppercase mb-3">
              {t('partners.title')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center py-6 px-4 rounded-lg border border-slate-100 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-lg font-semibold text-slate-800 tracking-tight">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
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
