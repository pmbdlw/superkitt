import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Cloud, Shield, Globe as GlobeIcon, TrendingUp, Brain, Database, ShoppingCart, Users, ArrowRight } from 'lucide-react'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Banner from '@/components/Banner'
import ServiceCard from '@/components/ServiceCard'

const easeOutExpo = [0.22, 1, 0.36, 1]

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
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
    { Icon: Brain, titleKey: 'services.categories.ai.title', descKey: 'services.categories.ai.description' },
  ]

  const partners = ['AWS', 'Microsoft Azure', 'Cloudflare', 'OpenAI']

  const stats = [
    { value: 50, suffix: '+', labelKey: 'stats.clients' },
    { value: 8, suffix: '', labelKey: 'stats.categories' },
    { value: 10, suffix: '+', labelKey: 'stats.coverage' },
    { value: 92, suffix: '%', labelKey: 'stats.satisfaction' },
  ]

  return (
    <Layout title={t('company_name')} description={t('tagline')}>
      {/* Hero */}
      <Banner
        title={t('hero.headline')}
        subtitle={t('company_name')}
        description={t('hero.subheadline')}
        variant="hero"
      >
        <div className="flex flex-col sm:flex-row gap-5">
          <Link href="/contact">
            <Button size="lg">
              <span className="flex items-center gap-3">
                {t('hero.cta')}
                <ArrowRight size={18} />
              </span>
            </Button>
          </Link>
          <Link href="/cases">
            <Button size="lg" variant="outline">{t('hero.cta_secondary')}</Button>
          </Link>
        </div>
      </Banner>

      {/* Services Section */}
      <section className="bg-primary py-24 lg:py-[100px]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col items-center text-center gap-4 mb-16"
          >
            <p className="section-label">{t('services.label')}</p>
            <h2 className="section-title">{t('services.title')}</h2>
            <p className="section-subtitle">{t('tagline')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={t(service.titleKey)}
                description={t(service.descKey)}
                Icon={service.Icon}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, ease: easeOutExpo }}
            className="mt-16 text-center"
          >
            <Link href="/services">
              <Button variant="outline">
                <span className="flex items-center gap-2">
                  {t('nav.services')}
                  <ArrowRight size={14} />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="bg-surface py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col items-center text-center gap-4 mb-16"
          >
            <p className="section-label">{t('partners.title')}</p>
            <h2 className="section-title">{t('partners.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: easeOutExpo }}
                className={`flex flex-col items-center gap-3 py-8 ${
                  index > 0 && index < 3 ? 'border-x border-border' : ''
                }`}
              >
                <p className="text-5xl md:text-6xl font-medium text-gold tracking-tight font-serif">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted">
                  {t(stat.labelKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-primary py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12"
          >
            <p className="text-xs text-subtle tracking-[1px]">{t('partners.title')}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, ease: easeOutExpo }}
                className="flex items-center justify-center py-8 px-6 border border-border opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-lg font-medium text-heading tracking-tight">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 lg:py-[120px]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col items-center text-center gap-10"
          >
            <div className="max-w-[800px] flex flex-col items-center gap-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-heading tracking-tight font-serif">
                {t('cta.text')}
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                {t('cta.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact">
                <Button size="lg">
                  <span className="flex items-center gap-3">
                    {t('cta.button')}
                    <ArrowRight size={18} />
                  </span>
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-8 opacity-70">
              <span className="text-xs text-subtle">ISO 27001</span>
              <span className="text-xs text-subtle">SOC 2</span>
              <span className="text-xs text-subtle">GDPR</span>
            </div>
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
