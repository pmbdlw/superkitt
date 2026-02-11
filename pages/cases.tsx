import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { CircleAlert, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import Button from '@/components/Button'

const easeOutExpo = [0.22, 1, 0.36, 1]

interface CaseMetric {
  value: string
  label: string
  color: string
}

interface CaseStudy {
  key: string
  tagColor: string
  tagBg: string
  headerBg: string
  metrics: CaseMetric[]
  image: string
  imageAlt: string
}

export default function Cases() {
  const { t } = useTranslation('common')

  const caseStudies: CaseStudy[] = [
    {
      key: 'case1',
      tagColor: '#C4614A',
      tagBg: 'rgba(196,97,74,0.2)',
      headerBg: 'rgba(196,97,74,0.08)',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',
      imageAlt: 'E-commerce analytics dashboard',
      metrics: [
        { value: '73%', label: t('cases.case1.metric1_label'), color: '#C4614A' },
        { value: '4×', label: t('cases.case1.metric2_label'), color: '#3FBFAF' },
        { value: '99.9%', label: t('cases.case1.metric3_label'), color: '#F5C842' },
      ],
    },
  ]

  return (
    <Layout title={`${t('cases.title')} - ${t('company_name')}`} description={t('tagline')}>
      <Banner
        title={t('cases.banner_title')}
        badge={t('cases.banner_badge')}
        description={t('cases.banner_desc')}
        height="small"
        centered
      />

      {/* Case Studies */}
      <section className="bg-primary py-24 lg:py-[100px]">
        <div className="container-custom flex flex-col gap-20">
          {caseStudies.map((cs, index) => (
            <motion.div
              key={cs.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="rounded-xl overflow-hidden border border-border bg-surface"
            >
              {/* Case image */}
              <div className="relative h-[240px] sm:h-[280px]">
                <Image
                  src={cs.image}
                  alt={cs.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgb(var(--color-surface))]" />
              </div>

              {/* Metrics header */}
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-10 py-8"
                style={{ backgroundColor: cs.headerBg }}
              >
                <span
                  className="inline-block px-3.5 py-1.5 text-[11px] font-semibold tracking-[1.5px] uppercase rounded-sm"
                  style={{ backgroundColor: cs.tagBg, color: cs.tagColor }}
                >
                  {t(`cases.${cs.key}.tag`)}
                </span>
                <div className="flex items-center gap-12">
                  {cs.metrics.map((m, mi) => (
                    <div key={mi} className="flex flex-col items-end gap-1">
                      <span className="text-3xl font-semibold font-serif" style={{ color: m.color }}>{m.value}</span>
                      <span className="text-xs text-subtle">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge / Solution / Result */}
              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
                {[
                  { icon: CircleAlert, labelKey: 'cases.problem_label', contentKey: `cases.${cs.key}.problem`, color: '#C4614A' },
                  { icon: Zap, labelKey: 'cases.solution_label', contentKey: `cases.${cs.key}.solution`, color: '#3FBFAF' },
                  { icon: TrendingUp, labelKey: 'cases.result_label', contentKey: `cases.${cs.key}.result`, color: '#F5C842' },
                ].map((col, ci) => {
                  const Icon = col.icon
                  return (
                    <div
                      key={ci}
                      className={`p-10 flex flex-col gap-5 ${ci < 2 ? 'md:border-r border-border' : ''} ${ci > 0 ? 'border-t md:border-t-0 border-border' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} style={{ color: col.color }} />
                        <span className="text-[11px] font-semibold tracking-[1.5px] uppercase" style={{ color: col.color }}>
                          {t(col.labelKey)}
                        </span>
                      </div>
                      <p className="text-sm text-muted leading-[1.75]">
                        {t(col.contentKey)}
                      </p>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso dark:bg-surface always-dark border-t border-border py-24 lg:py-[100px]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col items-center text-center gap-6 max-w-[700px] mx-auto"
          >
            <span className="text-[11px] font-semibold tracking-[2px] uppercase text-gold">
              {t('cases.cta_label')}
            </span>
            <h2 className="text-4xl md:text-[44px] font-semibold text-heading tracking-tight font-serif leading-[1.2]">
              {t('cta.text')}
            </h2>
            <p className="text-base text-muted leading-relaxed">
              {t('cta.description')}
            </p>
            <Link href="/contact" className="mt-2">
              <Button size="lg">
                <span className="flex items-center gap-2">
                  {t('cta.button')}
                  <ArrowRight size={16} />
                </span>
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
