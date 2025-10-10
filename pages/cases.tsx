import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { AlertCircle, Lightbulb, TrendingUp } from 'lucide-react'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
import Banner from '@/components/Banner'

export default function Cases() {
  const { t } = useTranslation('common')

  const caseStudies = [
    {
      key: 'case1',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      delay: 0,
    },
    {
      key: 'case2',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      delay: 0.2,
    },
  ]

  return (
    <Layout title={`${t('cases.title')} - ${t('company_name')}`} description={t('tagline')}>
      {/* Page Header */}
      <Banner
        title={t('cases.title')}
        subtitle="SuperKITT"
        description={t('tagline')}
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
        height="medium"
      />

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="space-y-12">
            {caseStudies.map((caseStudy) => (
              <Card key={caseStudy.key} delay={caseStudy.delay}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Case Image */}
                  <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={t(`cases.${caseStudy.key}.client`)}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg">
                        {t(`cases.${caseStudy.key}.client`)}
                      </p>
                    </div>
                  </div>

                  {/* Case Content */}
                  <div className="space-y-6">
                    {/* Problem */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
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
                      <div className="flex items-center space-x-2 mb-3">
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
                      <div className="flex items-center space-x-2 mb-3">
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
