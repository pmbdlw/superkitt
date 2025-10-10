import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Target, Award } from 'lucide-react'
import Layout from '@/components/Layout'
import Card from '@/components/Card'

export default function About() {
  const { t } = useTranslation('common')

  const partners = ['AWS', 'Microsoft Azure', 'Cloudflare', 'OpenAI']

  return (
    <Layout title={`${t('about.title')} - ${t('company_name')}`} description={t('about.description')}>
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
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-200">
              {t('tagline')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-start space-x-4">
                  <Target className="w-10 h-10 text-secondary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      {t('about.title')}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {t('about.description')}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Card>
                <div className="flex items-start space-x-4">
                  <Award className="w-10 h-10 text-secondary flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      {t('about.mission_title')}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {t('about.mission')}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center"
          >
            {t('about.partners_title')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto"
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
      <section className="py-20 bg-primary text-white">
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
