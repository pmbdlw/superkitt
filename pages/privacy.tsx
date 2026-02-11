import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { Eye, Pencil, Trash2 } from 'lucide-react'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import Button from '@/components/Button'

const easeOutExpo = [0.22, 1, 0.36, 1]

export default function Privacy() {
  const { t } = useTranslation('common')

  const dataProtectionItems = t('privacy.data_protection_items', { returnObjects: true }) as string[]

  const sections = [
    { id: 'overview', label: t('privacy.sections.overview') },
    { id: 'data-collected', label: t('privacy.sections.data_collected') },
    { id: 'data-use', label: t('privacy.sections.data_use') },
    { id: 'data-protection', label: t('privacy.data_protection_title') },
    { id: 'your-rights', label: t('privacy.sections.your_rights') },
    { id: 'compliance', label: t('privacy.compliance_title') },
  ]

  const rights = [
    { icon: Eye, color: '#C4614A', title: t('privacy.rights.access_title'), desc: t('privacy.rights.access_desc') },
    { icon: Pencil, color: '#3FBFAF', title: t('privacy.rights.rectify_title'), desc: t('privacy.rights.rectify_desc') },
    { icon: Trash2, color: '#F5C842', title: t('privacy.rights.erasure_title'), desc: t('privacy.rights.erasure_desc') },
  ]

  return (
    <Layout title={`${t('privacy.title')} - ${t('company_name')}`} description={t('privacy.content')}>
      <Banner
        title={t('privacy.banner_title')}
        badge={t('privacy.banner_badge')}
        description={t('privacy.banner_desc')}
        height="small"
        centered
      />

      {/* Privacy Content */}
      <section className="bg-primary py-24 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-[10px] font-semibold tracking-[2px] text-gold uppercase mb-4">
                  {t('privacy.toc')}
                </p>
                <nav className="flex flex-col">
                  {sections.map((section, i) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`py-3 text-sm transition-colors border-l-2 pl-4 ${
                        i === 0
                          ? 'border-[#C4614A] text-heading font-medium'
                          : 'border-border text-muted hover:text-heading hover:border-heading/30'
                      }`}
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
            >
              <article className="flex flex-col gap-12">
                <div id="overview" className="pb-12 border-b border-border">
                  <h2 className="text-2xl font-semibold text-heading font-serif mb-5">
                    {t('privacy.sections.overview')}
                  </h2>
                  <p className="text-sm text-muted leading-[1.8]">{t('privacy.content')}</p>
                </div>

                <div id="data-collected" className="pb-12 border-b border-border">
                  <h2 className="text-2xl font-semibold text-heading font-serif mb-5">
                    {t('privacy.sections.data_collected')}
                  </h2>
                  <p className="text-sm text-muted leading-[1.8]">{t('privacy.data_collected_content')}</p>
                </div>

                <div id="data-use" className="pb-12 border-b border-border">
                  <h2 className="text-2xl font-semibold text-heading font-serif mb-5">
                    {t('privacy.sections.data_use')}
                  </h2>
                  <p className="text-sm text-muted leading-[1.8]">{t('privacy.data_use_content')}</p>
                </div>

                <div id="data-protection" className="pb-12 border-b border-border">
                  <h2 className="text-2xl font-semibold text-heading font-serif mb-5">
                    {t('privacy.data_protection_title')}
                  </h2>
                  <ul className="flex flex-col gap-3">
                    {dataProtectionItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="your-rights" className="pb-12 border-b border-border">
                  <h2 className="text-2xl font-semibold text-heading font-serif mb-6">
                    {t('privacy.sections.your_rights')}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {rights.map((right, i) => {
                      const Icon = right.icon
                      return (
                        <div key={i} className="bg-surface border border-border rounded-lg p-6 flex flex-col gap-3">
                          <Icon size={18} style={{ color: right.color }} strokeWidth={1.5} />
                          <span className="text-sm font-semibold text-heading">{right.title}</span>
                          <span className="text-xs text-muted leading-relaxed">{right.desc}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div id="compliance">
                  <h2 className="text-2xl font-semibold text-heading font-serif mb-5">
                    {t('privacy.compliance_title')}
                  </h2>
                  <p className="text-sm text-muted leading-[1.8]">{t('privacy.compliance_content')}</p>
                </div>
              </article>

              {/* Bottom CTA */}
              <div className="mt-16 pt-12 border-t border-border flex flex-col gap-4">
                <p className="text-lg font-semibold text-heading font-serif">{t('cta.text')}</p>
                <p className="text-sm text-muted">{t('cta.description')}</p>
                <Link href="/contact">
                  <Button>{t('cta.button')}</Button>
                </Link>
              </div>
            </motion.div>
          </div>
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
