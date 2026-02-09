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
      {/* Page Header */}
      <Banner
        title={t('privacy.title')}
        subtitle="SuperKITT"
        height="small"
      />

      {/* Privacy Content */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents — sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-medium tracking-widest text-slate-400 uppercase mb-4">
                  {t('privacy.toc')}
                </p>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-slate-500 hover:text-secondary transition-colors py-1"
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
                {/* Overview */}
                <div id="overview">
                  <h2 className="text-2xl font-bold text-primary tracking-tight mb-4">
                    {t('privacy.title')}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t('privacy.content')}
                  </p>
                </div>

                <hr className="border-slate-100" />

                {/* Data Protection */}
                <div id="data-protection">
                  <h2 className="text-xl font-bold text-primary tracking-tight mb-4">
                    {t('privacy.data_protection_title')}
                  </h2>
                  <ul className="space-y-3">
                    {dataProtectionItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-base text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr className="border-slate-100" />

                {/* Compliance Services */}
                <div id="compliance">
                  <h2 className="text-xl font-bold text-primary tracking-tight mb-4">
                    {t('privacy.compliance_title')}
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {t('privacy.compliance_content')}
                  </p>
                </div>
              </article>

              {/* Bottom CTA */}
              <div className="mt-16 pt-12 border-t border-slate-100">
                <p className="text-lg font-semibold text-primary mb-2">
                  {t('cta.text')}
                </p>
                <p className="text-sm text-slate-500 mb-6">
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
