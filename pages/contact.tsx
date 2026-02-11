import { useState } from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, CheckCircle, Timer, Globe, Send } from 'lucide-react'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Banner from '@/components/Banner'

const easeOutExpo = [0.22, 1, 0.36, 1]

interface ContactFormData {
  name: string
  email: string
  company: string
  requirements: string
}

export default function Contact() {
  const { t } = useTranslation('common')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || '/api/contact'
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setSubmitSuccess(true)
        reset()
        setTimeout(() => setSubmitSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses =
    'w-full px-4 py-3.5 border border-border bg-card-bg text-heading text-sm focus:border-gold/50 focus:outline-none transition-colors duration-300 placeholder:text-subtle rounded-md'

  const contactInfoItems = [
    {
      icon: Mail,
      color: '#C4614A',
      bg: 'rgba(196,97,74,0.12)',
      label: t('contact.info.email_label'),
      value: 'service@superkitt.com',
    },
    {
      icon: Timer,
      color: '#3FBFAF',
      bg: 'rgba(63,191,175,0.12)',
      label: t('contact.info.response_label'),
      value: t('contact.info.response_value'),
    },
    {
      icon: Globe,
      color: '#F5C842',
      bg: 'rgba(245,200,66,0.12)',
      label: t('contact.info.location_label'),
      value: t('contact.info.location_value'),
    },
  ]

  return (
    <Layout title={`${t('contact.title')} - ${t('company_name')}`} description={t('tagline')}>
      <Banner
        title={t('contact.banner_title')}
        badge={t('contact.banner_badge')}
        description={t('contact.subtitle')}
        height="small"
        centered
      />

      {/* Form + Info */}
      <section className="bg-primary py-24 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              className="bg-surface border border-border rounded-xl p-10 lg:p-12 flex flex-col gap-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-heading font-serif mb-2">{t('contact.form_title')}</h2>
                <p className="text-sm text-muted">{t('contact.form_subtitle')}</p>
              </div>

              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="p-4 border border-emerald-500/20 rounded-md bg-emerald-500/5 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-emerald-300">{t('contact.form.success')}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-heading">{t('contact.form.name')} *</label>
                    <input id="name" type="text" {...register('name', { required: true })} className={inputClasses} placeholder={t('contact.form.name_placeholder')} />
                    {errors.name && <span className="text-red-400 text-xs">{t('contact.form.required')}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-heading">{t('contact.form.email')} *</label>
                    <input id="email" type="email" {...register('email', { required: true })} className={inputClasses} placeholder="your@company.com" />
                    {errors.email && <span className="text-red-400 text-xs">{t('contact.form.required')}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-heading">{t('contact.form.company')}</label>
                  <input id="company" type="text" {...register('company')} className={inputClasses} placeholder={t('contact.form.company_placeholder')} />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="requirements" className="text-sm font-medium text-heading">{t('contact.form.requirements')}</label>
                  <textarea id="requirements" rows={6} {...register('requirements', { required: true })} className={inputClasses} placeholder={t('contact.form.requirements_placeholder')} />
                  {errors.requirements && <span className="text-red-400 text-xs">{t('contact.form.required')}</span>}
                </div>

                <div>
                  <Button type="submit" disabled={isSubmitting} size="lg">
                    <span className="flex items-center gap-2">
                      <Send size={15} />
                      {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                    </span>
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
              className="flex flex-col gap-5"
            >
              <div className="mb-2">
                <h2 className="text-2xl font-semibold text-heading font-serif mb-3">{t('contact.info.title')}</h2>
                <p className="text-sm text-muted leading-relaxed">{t('contact.info.desc')}</p>
              </div>

              {contactInfoItems.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-center gap-4 bg-surface border border-border rounded-lg px-5 py-5">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: item.bg }}
                    >
                      <Icon size={18} style={{ color: item.color }} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-muted">{item.label}</span>
                      <span className="text-sm font-medium text-heading">{item.value}</span>
                    </div>
                  </div>
                )
              })}
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
