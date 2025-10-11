import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('company_name')}</h3>
            <p className="text-gray-300">{t('footer.description')}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('nav.home')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('nav.cases')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-secondary transition-colors">
                  {t('privacy.title')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('nav.contact')}</h4>
            <div className="space-y-2">
              <a href="mailto:service@superkitt.com" className="flex items-center space-x-2 text-gray-300 hover:text-secondary transition-colors">
                <Mail className="w-5 h-5" />
                <span>service@superkitt.com</span>
              </a>
              <a href="https://linkedin.com/company/superkitt" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
