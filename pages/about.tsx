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

export default function About() {
  const { t } = useTranslation('common')

  const partners = ['AWS', 'Microsoft Azure', 'Cloudflare', 'OpenAI']

  return (
    <Layout title={`${t('about.title')} - ${t('company_name')}`} description={t('about.description')}>
      <Banner
        title={t('about.title')}
        subtitle="SUPERKITT"
        height="small"
      />

      {/* About Content */}
      <section className="bg-primary py-24 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
            >
              <p className="section-label mb-4">{t('about.title')}</p>
              <p className="text-xl text-muted leading-relaxed">
                {t('about.description')}
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: easeOutExpo }}
                className="dark-card"
              >
                <h3 className="text-xs font-medium tracking-label uppercase text-gold mb-4">
                  {t('about.mission_title')}
                </h3>
                <p className="text-base text-heading/90 font-medium leading-relaxed">
                  {t('about.mission')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
                className="dark-card"
              >
                <h3 className="text-xs font-medium tracking-label uppercase text-muted mb-4">
                  {t('about.vision_title')}
                </h3>
                <p className="text-base text-muted leading-relaxed">
                  {t('about.vision')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-surface py-20 border-t border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12"
          >
            <p className="section-label">{t('about.partners_title')}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, ease: easeOutExpo }}
                className="flex items-center justify-center py-8 px-6 border border-border opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-lg font-medium text-heading tracking-tight">
                  {partner}
                </span>
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
