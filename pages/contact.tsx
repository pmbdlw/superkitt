import { useState } from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, CheckCircle } from 'lucide-react'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Banner from '@/components/Banner'

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
        headers: {
          'Content-Type': 'application/json',
        },
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
    'w-full px-4 py-3.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors duration-200 outline-none'

  return (
    <Layout title={`${t('contact.title')} - ${t('company_name')}`} description={t('tagline')}>
      {/* Page Header */}
      <Banner
        title={t('contact.title')}
        subtitle="SuperKITT"
        description={t('contact.subtitle')}
        height="small"
      />

      {/* Contact Form and Info */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm text-emerald-700">
                      {t('contact.form.success')}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: true })}
                      className={inputClasses}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1 block">{t('contact.form.required')}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', { required: true })}
                      className={inputClasses}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1 block">{t('contact.form.required')}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...register('company', { required: true })}
                    className={inputClasses}
                  />
                  {errors.company && (
                    <span className="text-red-500 text-xs mt-1 block">{t('contact.form.required')}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.form.requirements')}
                  </label>
                  <textarea
                    id="requirements"
                    rows={6}
                    {...register('requirements', { required: true })}
                    className={inputClasses}
                  />
                  {errors.requirements && (
                    <span className="text-red-500 text-xs mt-1 block">{t('contact.form.required')}</span>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                  size="lg"
                >
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="border border-slate-200 rounded-xl p-6 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-secondary" />
                    </div>
                    <h3 className="text-sm font-semibold text-primary">
                      {t('contact.info.email_label')}
                    </h3>
                  </div>
                  <a
                    href="mailto:service@superkitt.com"
                    className="text-sm text-slate-600 hover:text-secondary transition-colors"
                  >
                    {t('contact.info.email')}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">
                    {t('contact.info.email_desc')}
                  </p>
                </div>
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
