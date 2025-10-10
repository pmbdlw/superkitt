import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import Layout from '@/components/Layout'
import Card from '@/components/Card'

export default function Privacy() {
  const { t } = useTranslation('common')

  return (
    <Layout title={`${t('privacy.title')} - ${t('company_name')}`} description={t('privacy.content')}>
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
              {t('privacy.title')}
            </h1>
            <p className="text-xl text-gray-200">
              {t('tagline')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="flex items-start space-x-4">
                <Shield className="w-10 h-10 text-secondary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    {t('privacy.title')}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {t('privacy.content')}
                    </p>

                    <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                      {t('privacy.title').includes('隐私') ? '数据保护原则' : 'Data Protection Principles'}
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        {t('privacy.title').includes('隐私')
                          ? '所有客户数据均采用行业标准加密技术保护'
                          : 'All client data is protected with industry-standard encryption'}
                      </li>
                      <li>
                        {t('privacy.title').includes('隐私')
                          ? '严格遵守GDPR、CCPA等国际数据保护法规'
                          : 'Strict compliance with GDPR, CCPA and other international data protection regulations'}
                      </li>
                      <li>
                        {t('privacy.title').includes('隐私')
                          ? '仅在授权范围内收集和使用客户信息'
                          : 'Collection and use of client information only within authorized scope'}
                      </li>
                      <li>
                        {t('privacy.title').includes('隐私')
                          ? '定期进行安全审计和漏洞扫描'
                          : 'Regular security audits and vulnerability scanning'}
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                      {t('privacy.title').includes('隐私') ? '合规服务' : 'Compliance Services'}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t('privacy.title').includes('隐私')
                        ? 'SuperKitt 提供专业的合规咨询服务，帮助您的企业满足各国数据保护要求，包括GDPR合规审计、SOC 2认证准备、ISO27001体系建设等。'
                        : 'SuperKitt provides professional compliance consulting services to help your business meet data protection requirements in various countries, including GDPR compliance audits, SOC 2 certification preparation, ISO27001 system construction, and more.'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
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
