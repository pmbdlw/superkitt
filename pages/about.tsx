import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Cloud, Shield, Cpu, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import Button from '@/components/Button'

const easeOutExpo = [0.22, 1, 0.36, 1]

export default function About() {
  const { t } = useTranslation('common')

  const partners = [
    { name: 'Amazon Web Services', desc: t('about.partners.aws'), icon: Cloud, color: '#FF9900' },
    { name: 'Microsoft Azure', desc: t('about.partners.azure'), icon: Cloud, color: '#0089D6' },
    { name: 'Cloudflare', desc: t('about.partners.cloudflare'), icon: Shield, color: '#F38020' },
    { name: 'OpenAI', desc: t('about.partners.openai'), icon: Cpu, color: '#74AA9C' },
  ]

  const stats = [
    { value: '50+', label: t('stats.clients'), color: '#C4614A' },
    { value: '10+', label: t('stats.coverage'), color: '#3FBFAF' },
    { value: '8', label: t('stats.categories'), color: '#F5C842' },
    { value: '92%', label: t('stats.satisfaction'), color: '#C4614A' },
  ]

  return (
    <Layout title={`${t('about.title')} - ${t('company_name')}`} description={t('about.description')}>
      <Banner
        title={t('about.banner_title')}
        badge={t('about.banner_badge')}
        description={t('about.banner_desc')}
        height="small"
        centered
      />

      {/* Mission Section */}
      <section className="bg-primary py-24 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: About text + stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="flex flex-col gap-8"
            >
              <span className="text-[11px] font-semibold tracking-[2px] uppercase text-gold">
                {t('about.who_we_are')}
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-heading font-serif leading-[1.2]">
                {t('about.mission_title_long')}
              </h2>
              <p className="text-base text-muted leading-[1.75]">
                {t('about.description')}
              </p>
              <p className="text-base text-muted leading-[1.75]">
                {t('about.description2')}
              </p>
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-border">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2 pl-4 border-l-2" style={{ borderColor: stat.color }}>
                    <span className="text-4xl font-semibold font-serif" style={{ color: stat.color }}>{stat.value}</span>
                    <span className="text-xs text-muted leading-snug">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image + Mission/Vision cards */}
            <div className="flex flex-col gap-6">
              {/* Workspace image */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className="relative rounded-xl overflow-hidden aspect-[16/9]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className="bg-surface rounded-lg p-10 flex flex-col gap-5 border-l-4 border-[#C4614A]"
                style={{ boxShadow: 'inset 0 0 0 1px rgb(var(--color-border))' }}
              >
                <h3 className="text-xl font-semibold text-heading font-serif">{t('about.mission_title')}</h3>
                <p className="text-sm text-muted leading-relaxed">{t('about.mission')}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
                className="bg-surface rounded-lg p-10 flex flex-col gap-5 border-l-4 border-[#3FBFAF]"
                style={{ boxShadow: 'inset 0 0 0 1px rgb(var(--color-border))' }}
              >
                <h3 className="text-xl font-semibold text-heading font-serif">{t('about.vision_title')}</h3>
                <p className="text-sm text-muted leading-relaxed">{t('about.vision')}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-surface border-t border-border py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col items-center gap-4 mb-14 text-center"
          >
            <span className="text-[11px] font-semibold tracking-[2px] uppercase text-gold">
              {t('about.partners_title')}
            </span>
            <h2 className="text-3xl font-semibold text-heading font-serif">
              {t('about.partners_subtitle')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {partners.map((partner, index) => {
              const Icon = partner.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, ease: easeOutExpo }}
                  className="bg-card-bg border border-border rounded-lg p-8 flex flex-col items-center gap-4 hover:border-heading/20 transition-colors duration-300"
                >
                  <Icon size={28} style={{ color: partner.color }} strokeWidth={1.5} />
                  <span className="text-sm font-semibold text-heading text-center">{partner.name}</span>
                  <span className="text-xs text-muted text-center leading-relaxed">{partner.desc}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso dark:bg-primary always-dark border-t border-border py-24 lg:py-[100px]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col items-center text-center gap-6 max-w-[700px] mx-auto"
          >
            <span className="text-[11px] font-semibold tracking-[2px] uppercase text-gold">
              {t('about.cta_label')}
            </span>
            <h2 className="text-4xl md:text-[44px] font-semibold text-heading tracking-tight font-serif leading-[1.2]">
              {t('cta.text')}
            </h2>
            <p className="text-base text-muted leading-relaxed">{t('cta.description')}</p>
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Link href="/contact">
                <Button size="lg">
                  <span className="flex items-center gap-2">
                    {t('nav.contact')}
                    <ArrowRight size={16} />
                  </span>
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">{t('nav.services')}</Button>
              </Link>
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
