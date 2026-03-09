import { GetStaticProps } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Banner from '@/components/Banner'
import Button from '@/components/Button'

const easeOutExpo = [0.22, 1, 0.36, 1]

interface ServiceCategory {
  titleKey: string
  descKey: string
  itemsKey: string
  color: string
}

export default function Services() {
  const { t } = useTranslation('common')

  const serviceCategories: ServiceCategory[] = [
    { titleKey: 'services.categories.cloud.title', descKey: 'services.categories.cloud.description', itemsKey: 'services.categories.cloud.items', color: '#C4614A' },
    { titleKey: 'services.categories.website.title', descKey: 'services.categories.website.description', itemsKey: 'services.categories.website.items', color: '#3FBFAF' },
    { titleKey: 'services.categories.marketing.title', descKey: 'services.categories.marketing.description', itemsKey: 'services.categories.marketing.items', color: '#C4614A' },
    { titleKey: 'services.categories.ai.title', descKey: 'services.categories.ai.description', itemsKey: 'services.categories.ai.items', color: '#3FBFAF' },
    { titleKey: 'services.categories.integration.title', descKey: 'services.categories.integration.description', itemsKey: 'services.categories.integration.items', color: '#F5C842' },
    { titleKey: 'services.categories.ecommerce.title', descKey: 'services.categories.ecommerce.description', itemsKey: 'services.categories.ecommerce.items', color: '#C4614A' },
    { titleKey: 'services.categories.consulting.title', descKey: 'services.categories.consulting.description', itemsKey: 'services.categories.consulting.items', color: '#3FBFAF' },
  ]

  return (
    <Layout title={`${t('services.title')} - ${t('company_name')}`} description={t('tagline')}>
      <Banner
        title={t('services.banner_title')}
        badge={t('services.label')}
        description={t('services.banner_desc')}
        height="small"
        centered
      />

      {/* Visual Showcase */}
      <section className="bg-primary py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:h-[480px]">
            {/* Main feature image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="lg:col-span-2 relative rounded-xl overflow-hidden aspect-[16/9] lg:aspect-auto"
            >
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop"
                alt="Global cloud infrastructure"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[11px] font-semibold tracking-[2px] uppercase text-gold">
                  {t('services.categories.cloud.title')}
                </span>
                <p className="text-white text-lg font-serif mt-2">{t('services.categories.cloud.description')}</p>
              </div>
            </motion.div>

            {/* Side images — stretch to match left height */}
            <div className="flex flex-col gap-6 lg:h-full">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
                className="relative rounded-xl overflow-hidden flex-1 min-h-[180px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80&auto=format&fit=crop"
                  alt="AI and data analytics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[11px] font-semibold tracking-[1.5px] uppercase" style={{ color: '#3FBFAF' }}>
                    {t('services.categories.ai.title')}
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
                className="relative rounded-xl overflow-hidden flex-1 min-h-[180px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop"
                  alt="Cross-border e-commerce"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[11px] font-semibold tracking-[1.5px] uppercase" style={{ color: '#F5C842' }}>
                    {t('services.categories.ecommerce.title')}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Card Grid */}
      <section className="bg-primary pb-24 lg:pb-[100px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCategories.map((category, index) => {
              const items = t(category.itemsKey, { returnObjects: true }) as string[]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: easeOutExpo }}
                  className="bg-surface border-l-2 rounded-none p-10 flex flex-col gap-5"
                  style={{ borderLeftColor: category.color }}
                >
                  <h3 className="text-xl font-semibold text-heading font-serif leading-snug">
                    {t(category.titleKey)}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {t(category.descKey)}
                  </p>

                  <ul className="flex flex-col gap-2 mt-1">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2.5 text-[13px] text-subtle">
                        <span className="mt-[1px] flex-shrink-0" style={{ color: category.color }}>→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-espresso dark:bg-surface always-dark border-t border-border py-24 lg:py-[100px]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="flex flex-col items-center text-center gap-6 max-w-[700px] mx-auto"
          >
            <span className="text-[11px] font-semibold tracking-[2px] uppercase text-gold">
              {t('services.cta_label')}
            </span>
            <h2 className="text-4xl md:text-[44px] font-semibold text-heading tracking-tight font-serif leading-[1.2]">
              {t('services.cta_title')}
            </h2>
            <p className="text-base text-muted leading-relaxed">
              {t('services.cta_desc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Link href="/contact">
                <Button size="lg">
                  <span className="flex items-center gap-2">
                    {t('cta.button')}
                    <ArrowRight size={16} />
                  </span>
                </Button>
              </Link>
              <Link href="/cases">
                <Button variant="outline" size="lg">
                  {t('nav.cases')}
                </Button>
              </Link>
            </div>
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
