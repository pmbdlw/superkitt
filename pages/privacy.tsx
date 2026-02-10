import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import Button from '@/components/Button'

export default function Privacy() {
  const { t } = useTranslation('common')

  const dataProtectionItems = t('privacy.data_protection_items', { returnObjects: true }) as string[]

  const sections = [
    { id: 'overview', label: t('privacy.title') },
    { id: 'data-protection', label: t('privacy.data_protection_title') },
    { id: 'compliance', label: t('privacy.compliance_title') },
  ]

  return (
    <Layout title={`${t('privacy.title')} - ${t('company_name')}`} description={t('privacy.content')}>
      <Banner
        title={t('privacy.title')}
        subtitle="SUPERKITT"
        height="small"
      />

      {/* Privacy Content */}
      <section className="bg-primary py-24 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents — sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-medium tracking-label text-muted uppercase mb-4">
                  {t('privacy.toc')}
                </p>
                <nav className="space-y-3">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-muted hover:text-gold transition-colors py-1"
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article content */}
            <div className="lg:col-span-3 max-w-none">
              <article className="space-y-12">
                <div id="overview">
                  <h2 className="text-2xl font-medium text-heading tracking-tight font-serif mb-4">
                    {t('privacy.title')}
                  </h2>
                  <p className="text-base text-muted leading-relaxed">
                    {t('privacy.content')}
                  </p>
                </div>

                <hr className="border-border" />

                <div id="data-protection">
                  <h2 className="text-xl font-medium text-heading tracking-tight font-serif mb-4">
                    {t('privacy.data_protection_title')}
                  </h2>
                  <ul className="space-y-3">
                    {dataProtectionItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-base text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-border" />

                <div id="compliance">
                  <h2 className="text-xl font-medium text-heading tracking-tight font-serif mb-4">
                    {t('privacy.compliance_title')}
                  </h2>
                  <p className="text-base text-muted leading-relaxed">
                    {t('privacy.compliance_content')}
                  </p>
                </div>
              </article>

              {/* Bottom CTA */}
              <div className="mt-16 pt-12 border-t border-border">
                <p className="text-lg font-medium text-heading mb-2 font-serif">
                  {t('cta.text')}
                </p>
                <p className="text-sm text-muted mb-6">
                  {t('cta.description')}
                </p>
                <Link href="/contact">
                  <Button>{t('cta.button')}</Button>
                </Link>
              </div>
            </div>
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
