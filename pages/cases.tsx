import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { AlertCircle, Lightbulb, TrendingUp } from 'lucide-react'
import Layout from '@/components/Layout'
import Card from '@/components/Card'

export default function Cases() {
  const { t } = useTranslation('common')

  const caseStudies = [
    {
      key: 'case1',
      delay: 0,
    },
    {
      key: 'case2',
      delay: 0.2,
    },
  ]

  return (
    <Layout title={`${t('cases.title')} - ${t('company_name')}`} description={t('tagline')}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-accent text-white py-32 pt-40">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('cases.title')}
            </h1>
            <p className="text-xl text-gray-200">
              {t('tagline')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="space-y-12">
            {caseStudies.map((caseStudy) => (
              <Card key={caseStudy.key} delay={caseStudy.delay}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <AlertCircle className="w-6 h-6 text-red-500" />
                      <h3 className="text-lg font-semibold text-primary">
                        {t('cases.case1.client').includes('A') ? '问题' : 'Problem'}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {t(`cases.${caseStudy.key}.problem`)}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Lightbulb className="w-6 h-6 text-yellow-500" />
                      <h3 className="text-lg font-semibold text-primary">
                        {t('cases.case1.client').includes('A') ? '解决方案' : 'Solution'}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {t(`cases.${caseStudy.key}.solution`)}
                    </p>
                  </div>

                  {/* Result */}
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                      <h3 className="text-lg font-semibold text-primary">
                        {t('cases.case1.client').includes('A') ? '成果' : 'Result'}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {t(`cases.${caseStudy.key}.result`)}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    {t('cases.case1.client').includes('A') ? '客户：' : 'Client: '}
                    <span className="font-semibold text-gray-700">
                      {t(`cases.${caseStudy.key}.client`)}
                    </span>
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
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
