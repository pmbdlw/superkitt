import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Cloud, ShoppingCart, Brain, ArrowRight, Quote } from 'lucide-react'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Banner from '@/components/Banner'

const easeOutExpo = [0.22, 1, 0.36, 1] as const

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

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Home() {
  const { t } = useTranslation('common')

  const serviceCards = [
    {
      Icon: Cloud,
      titleKey: 'services.categories.cloud.title',
      accentColor: '#3FBFAF',
      iconBgClass: 'bg-aqua/10',
      iconColorClass: 'text-aqua',
      linkColorClass: 'text-aqua',
    },
    {
      Icon: ShoppingCart,
      titleKey: 'services.categories.ecommerce.title',
      accentColor: '#C4614A',
      iconBgClass: 'bg-gold/10',
      iconColorClass: 'text-gold',
      linkColorClass: 'text-gold',
    },
    {
      Icon: Brain,
      titleKey: 'services.categories.ai.title',
      accentColor: '#F5C842',
      iconBgClass: 'bg-butter/10',
      iconColorClass: 'text-butter',
      linkColorClass: 'text-butter',
    },
  ]

  const statsData = [
    { value: 50, suffix: '+', labelKey: 'stats.clients', colorClass: 'text-gold' },
    { value: 8, suffix: '', labelKey: 'stats.categories', colorClass: 'text-aqua' },
    { value: 10, suffix: '+', labelKey: 'stats.coverage', colorClass: 'text-butter' },
    { value: 92, suffix: '%', labelKey: 'stats.satisfaction', colorClass: 'text-gold' },
  ]

  const solutions = [
    {
      titleKey: 'solutions.fintech.title',
      descKey: 'solutions.fintech.description',
      image: 'https://images.unsplash.com/photo-1764408182116-204dad1c73fc?auto=format&fit=crop&w=800&q=80',
      arrowClass: 'text-gold',
    },
    {
      titleKey: 'solutions.saas.title',
      descKey: 'solutions.saas.description',
      image: 'https://images.unsplash.com/photo-1561719266-c7ea878428c1?auto=format&fit=crop&w=800&q=80',
      arrowClass: 'text-aqua',
    },
    {
      titleKey: 'solutions.ecommerce.title',
      descKey: 'solutions.ecommerce.description',
      image: 'https://images.unsplash.com/photo-1758526213747-1246c17dd173?auto=format&fit=crop&w=800&q=80',
      arrowClass: 'text-butter',
    },
  ]

  const testimonials = [
    {
      quoteKey: 'testimonials.quote1.text',
      authorKey: 'testimonials.quote1.author',
      roleKey: 'testimonials.quote1.role',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=88&h=88&q=80',
      nameColorClass: 'text-gold',
      borderClass: 'border-border',
      quoteIconClass: 'text-gold/40',
    },
    {
      quoteKey: 'testimonials.quote2.text',
      authorKey: 'testimonials.quote2.author',
      roleKey: 'testimonials.quote2.role',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=88&h=88&q=80',
      nameColorClass: 'text-aqua',
      borderClass: 'border-aqua',
      quoteIconClass: 'text-aqua/40',
    },
  ]

  return (
    <Layout title={t('company_name')} description={t('tagline')}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <Banner
        title={t('hero.headline')}
        subtitle={t('hero.badge')}
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

      {/* ── Services ─────────────────────────────────────────── */}
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
            {serviceCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: easeOutExpo }}
                className="flex flex-col gap-6 p-8 border border-border hover:shadow-sm transition-shadow duration-300"
                style={{ borderTopColor: card.accentColor, borderTopWidth: '3px' }}
              >
                <div
                  className={`flex items-center justify-center w-[60px] h-[60px] ${card.iconBgClass} border border-border`}
                >
                  <card.Icon className={`w-6 h-6 ${card.iconColorClass}`} />
                </div>
                <h3 className="text-2xl font-medium text-heading font-serif">
                  {t(card.titleKey)}
                </h3>
                <Link
                  href="/services"
                  className={`flex items-center gap-2 text-[13px] font-medium ${card.linkColorClass} transition-opacity hover:opacity-70`}
                >
                  {t('services.learn_more')}
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
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

      {/* ── Trust / Stats — always dark ───────────────────────── */}
      <section className="bg-espresso dark:bg-surface always-dark py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col items-center text-center gap-4 mb-16"
          >
            <p className="section-label">{t('stats.trust_label')}</p>
            <h2 className="section-title">{t('stats.trust_title')}</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {statsData.map((stat, index) => (
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
                <p className={`text-5xl md:text-6xl font-medium tracking-tight font-serif ${stat.colorClass}`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted text-center">{t(stat.labelKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions ─────────────────────────────────────────── */}
      <section className="bg-primary py-24 lg:py-[100px]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col items-center text-center gap-4 mb-16"
          >
            <p className="section-label">{t('solutions.label')}</p>
            <h2 className="section-title">{t('solutions.title')}</h2>
            <p className="section-subtitle">{t('solutions.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: easeOutExpo }}
                className="relative h-[400px] overflow-hidden group cursor-pointer"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${solution.image})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0A0A0A]/60" />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 gap-3">
                  <h3 className="text-2xl font-medium text-white font-serif leading-tight">
                    {t(solution.titleKey)}
                  </h3>
                  <p className="text-[14px] text-[#CCCCCC] leading-relaxed">
                    {t(solution.descKey)}
                  </p>
                  <ArrowRight className={`w-5 h-5 ${solution.arrowClass} mt-1`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="bg-surface py-24 lg:py-[100px]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col items-center text-center gap-4 mb-16"
          >
            <p className="section-label">{t('testimonials.label')}</p>
            <h2 className="section-title">{t('testimonials.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: easeOutExpo }}
                className={`flex flex-col gap-6 p-10 bg-card-bg border ${item.borderClass}`}
              >
                <Quote className={`w-8 h-8 ${item.quoteIconClass}`} />
                <p className="text-base text-heading leading-[1.7] whitespace-pre-line">
                  {t(item.quoteKey)}
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.avatar}
                    alt={t(item.authorKey)}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col gap-0.5">
                    <p className={`text-base font-medium font-serif ${item.nameColorClass}`}>
                      {t(item.authorKey)}
                    </p>
                    <p className="text-[13px] text-muted">{t(item.roleKey)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — always dark ─────────────────────────────────── */}
      <section className="bg-espresso dark:bg-primary always-dark py-24 lg:py-[120px]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col items-center text-center gap-10"
          >
            <div className="max-w-[800px] flex flex-col items-center gap-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-heading tracking-tight font-serif text-balance">
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
              <Link href="/cases">
                <Button size="lg" variant="outline">
                  {t('hero.cta_secondary')}
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-8 opacity-70">
              <span className="text-xs text-subtle tracking-widest">ISO 27001</span>
              <span className="text-xs text-subtle tracking-widest">SOC 2</span>
              <span className="text-xs text-subtle tracking-widest">GDPR</span>
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
