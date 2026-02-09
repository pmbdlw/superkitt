import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import Button from '@/components/Button'

export default function Cases() {
  const { t } = useTranslation('common')

  const caseStudies = [
    { key: 'case1' },
    { key: 'case2' },
  ]

  const steps = [
    { labelKey: 'cases.problem_label', color: 'bg-red-500' },
    { labelKey: 'cases.solution_label', color: 'bg-amber-500' },
    { labelKey: 'cases.result_label', color: 'bg-emerald-500' },
  ]

  return (
    <Layout title={`${t('cases.title')} - ${t('company_name')}`} description={t('tagline')}>
      {/* Page Header */}
      <Banner
        title={t('cases.title')}
        subtitle="SuperKITT"
        description={t('tagline')}
        height="small"
      />

      {/* Case Studies */}
      <section className="py-24">
        <div className="container-custom">
          <div className="space-y-20">
            {caseStudies.map((caseStudy, caseIndex) => (
              <motion.div
                key={caseStudy.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
              >
                {/* Case header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs font-medium tracking-widest text-slate-400 uppercase">
                    {String(caseIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <h3 className="text-2xl font-bold text-primary tracking-tight mb-10">
                  {t(`cases.${caseStudy.key}.client`)}
                </h3>

                {/* Problem → Solution → Result timeline */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {steps.map((step, stepIndex) => {
                    const contentKeys = ['problem', 'solution', 'result']
                    return (
                      <div key={stepIndex} className="relative">
                        {/* Step indicator */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-2 h-2 rounded-full ${step.color}`} />
                          <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                            {t(step.labelKey)}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
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

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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
