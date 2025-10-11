import { useState } from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, CheckCircle } from 'lucide-react'
import Layout from '@/components/Layout'
import Card from '@/components/Card'
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
      // TODO: Replace with actual webhook URL
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

  return (
    <Layout title={`${t('contact.title')} - ${t('company_name')}`} description={t('tagline')}>
      {/* Page Header */}
      <Banner
        title={t('contact.title')}
        subtitle="SuperKITT"
        description={t('tagline')}
        gradient="from-primary to-accent"
        height="medium"
        animationStyle="wave"
      />

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  {t('contact.form.submit')}
                </h2>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">
                      {t('contact.title').includes('联系') ? '提交成功！我们会尽快与您联系。' : 'Success! We will contact you soon.'}
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm">This field is required</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">This field is required</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      id="company"
                      type="text"
                      {...register('company', { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                    {errors.company && (
                      <span className="text-red-500 text-sm">This field is required</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.requirements')}
                    </label>
                    <textarea
                      id="requirements"
                      rows={5}
                      {...register('requirements', { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                    {errors.requirements && (
                      <span className="text-red-500 text-sm">This field is required</span>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      t('contact.title').includes('联系') ? '提交中...' : 'Submitting...'
                    ) : (
                      t('contact.form.submit')
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Email</h3>
                    <a
                      href="mailto:service@superkitt.com"
                      className="text-gray-700 hover:text-secondary transition-colors"
                    >
                      {t('contact.info.email')}
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      {t('contact.info.wechat')}
                    </h3>
                    <p className="text-gray-700">
                      {t('contact.title').includes('联系') ? '扫描二维码添加' : 'Scan QR code to add'}
                    </p>
                  </div>
                </div>
              </Card>
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
