import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import Button from '@/components/Button'

export default function About() {
  const { t } = useTranslation('common')

  const partners = ['AWS', 'Microsoft Azure', 'Cloudflare', 'OpenAI']

  return (
    <Layout title={`${t('about.title')} - ${t('company_name')}`} description={t('about.description')}>
      {/* Page Header */}
      <Banner
        title={t('about.title')}
        subtitle="SuperKITT"
        height="small"
      />

      {/* About Content — Two-column layout */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left column: description text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-medium tracking-widest text-secondary uppercase mb-4">
                {t('about.title')}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('about.description')}
              </p>
            </motion.div>

            {/* Right column: mission & vision blocks */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="border-l-2 border-secondary pl-6"
              >
                <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-400 mb-2">
                  {t('about.mission_title')}
                </h3>
                <p className="text-base text-primary font-medium leading-relaxed">
                  {t('about.mission')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border-l-2 border-slate-200 pl-6"
              >
                <h3 className="text-sm font-semibold tracking-wide uppercase text-slate-400 mb-2">
                  {t('about.vision_title')}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {t('about.vision')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 border-t border-slate-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12"
          >
            <p className="text-xs font-medium tracking-widest text-secondary uppercase mb-3">
              {t('about.partners_title')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center py-6 px-4 rounded-lg border border-slate-100 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-lg font-semibold text-slate-800 tracking-tight">
                  {partner}
                </span>
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
