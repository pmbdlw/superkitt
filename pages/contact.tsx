import { useState } from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
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
    'w-full px-5 py-4 border border-border bg-transparent text-heading text-sm focus:border-gold/50 focus:outline-none transition-colors duration-300 placeholder:text-subtle'

  return (
    <Layout title={`${t('contact.title')} - ${t('company_name')}`} description={t('tagline')}>
      <Banner
        title={t('contact.title')}
        subtitle="SUPERKITT"
        description={t('contact.subtitle')}
        height="small"
      />

      {/* Contact Form and Info */}
      <section className="bg-primary py-24 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-5 border border-emerald-500/20 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-emerald-300">
                      {t('contact.form.success')}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-heading mb-3">
                      {t('contact.form.name')}
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: true })}
                      className={inputClasses}
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs mt-1.5 block">{t('contact.form.required')}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-heading mb-3">
                      {t('contact.form.email')}
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', { required: true })}
                      className={inputClasses}
                    />
                    {errors.email && (
                      <span className="text-red-400 text-xs mt-1.5 block">{t('contact.form.required')}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-heading mb-3">
                    {t('contact.form.company')}
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...register('company', { required: true })}
                    className={inputClasses}
                  />
                  {errors.company && (
                    <span className="text-red-400 text-xs mt-1.5 block">{t('contact.form.required')}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-heading mb-3">
                    {t('contact.form.requirements')}
                  </label>
                  <textarea
                    id="requirements"
                    rows={6}
                    {...register('requirements', { required: true })}
                    className={inputClasses}
                  />
                  {errors.requirements && (
                    <span className="text-red-400 text-xs mt-1.5 block">{t('contact.form.required')}</span>
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
              <div className="dark-card space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-[60px] h-[60px] border border-gold-muted flex items-center justify-center">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="text-sm font-medium text-heading">
                      {t('contact.info.email_label')}
                    </h3>
                  </div>
                  <a
                    href="mailto:service@superkitt.com"
                    className="text-sm text-muted hover:text-gold transition-colors"
                  >
                    {t('contact.info.email')}
                  </a>
                  <p className="text-xs text-subtle mt-2">
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
