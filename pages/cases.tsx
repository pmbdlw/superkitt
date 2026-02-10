import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import Button from '@/components/Button'

const easeOutExpo = [0.22, 1, 0.36, 1]

export default function Cases() {
  const { t } = useTranslation('common')

  const caseStudies = [
    { key: 'case1' },
    { key: 'case2' },
  ]

  const steps = [
    { labelKey: 'cases.problem_label', color: 'bg-red-500' },
    { labelKey: 'cases.solution_label', color: 'bg-gold' },
    { labelKey: 'cases.result_label', color: 'bg-emerald-500' },
  ]

  return (
    <Layout title={`${t('cases.title')} - ${t('company_name')}`} description={t('tagline')}>
      <Banner
        title={t('cases.title')}
        subtitle="SUPERKITT"
        description={t('tagline')}
        height="small"
      />

      {/* Case Studies */}
      <section className="bg-primary py-24 lg:py-[100px]">
        <div className="container-custom">
          <div className="space-y-32">
            {caseStudies.map((caseStudy, caseIndex) => (
              <motion.div
                key={caseStudy.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
              >
                {/* Case header */}
                <div className="relative mb-10">
                  <span className="text-7xl font-medium text-gold/10 absolute -top-8 -left-2 select-none font-serif">
                    {String(caseIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <span className="text-xs font-medium tracking-label text-muted uppercase">
                      {String(caseIndex + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-medium text-heading tracking-tight font-serif relative z-10">
                    {t(`cases.${caseStudy.key}.client`)}
                  </h3>
                </div>

                {/* Problem -> Solution -> Result */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {steps.map((step, stepIndex) => {
                    const contentKeys = ['problem', 'solution', 'result']
                    return (
                      <div key={stepIndex} className="dark-card">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-2 h-2 rounded-full ${step.color}`} />
                          <span className="text-xs font-medium tracking-label text-muted uppercase">
                            {t(step.labelKey)}
                          </span>
                        </div>
                        <p className="text-sm text-muted leading-relaxed">
                          {t(`cases.${caseStudy.key}.${contentKeys[stepIndex]}`)}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 lg:py-[120px]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col items-center text-center gap-6 max-w-[800px] mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-heading tracking-tight font-serif">
              {t('cta.text')}
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              {t('cta.description')}
            </p>
            <Link href="/contact" className="mt-4">
              <Button size="lg">
                <span className="flex items-center gap-3">
                  {t('cta.button')}
                  <ArrowRight size={18} />
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
