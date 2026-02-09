import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Mail, Linkedin, ArrowUp } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const { t } = useTranslation('common')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-primary text-white">
      {/* Gradient top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo isDark={false} showText={true} />
            <p className="text-slate-400 text-sm mt-4 max-w-xs leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-slate-300 mb-4">
              {t('footer.services_label')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-sm text-slate-400 hover:text-secondary transition-colors">
                  {t('services.categories.cloud.title')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-400 hover:text-secondary transition-colors">
                  {t('services.categories.compliance.title')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-400 hover:text-secondary transition-colors">
                  {t('services.categories.ai.title')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-slate-400 hover:text-secondary transition-colors">
                  {t('services.categories.ecommerce.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-slate-300 mb-4">
              {t('footer.company_label')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-slate-400 hover:text-secondary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-sm text-slate-400 hover:text-secondary transition-colors">
                  {t('nav.cases')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-slate-400 hover:text-secondary transition-colors">
                  {t('privacy.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-slate-300 mb-4">
              {t('footer.contact_label')}
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:service@superkitt.com"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>service@superkitt.com</span>
              </a>
              <a
                href="https://linkedin.com/company/superkitt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-secondary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-slate-500">{t('footer.copyright')}</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-secondary transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            {t('footer.back_to_top')}
          </button>
        </div>
      </div>
    </footer>
  )
}
