import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Mail, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const { t } = useTranslation('common')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-espresso dark:bg-surface always-dark">
      {/* Main footer content */}
      <div className="container-custom border-t border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 py-20">
          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo showText={true} />
            <p className="text-sm text-muted mt-6 leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com/company/superkitt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/superkitt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/superkitt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-gold transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-medium text-heading mb-5">
              {t('footer.services_label')}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-[13px] text-muted hover:text-heading transition-colors">
                  {t('services.categories.cloud.title')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[13px] text-muted hover:text-heading transition-colors">
                  {t('services.categories.ai.title')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[13px] text-muted hover:text-heading transition-colors">
                  {t('services.categories.website.title')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[13px] text-muted hover:text-heading transition-colors">
                  {t('services.categories.ecommerce.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-medium text-heading mb-5">
              {t('footer.company_label')}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-[13px] text-muted hover:text-heading transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-[13px] text-muted hover:text-heading transition-colors">
                  {t('nav.cases')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[13px] text-muted hover:text-heading transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-sm font-medium text-heading mb-5">
              {t('footer.resources_label')}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/blog" className="text-[13px] text-muted hover:text-heading transition-colors">
                  {t('blog.title')}
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-[13px] text-muted hover:text-heading transition-colors">
                  {t('cases.title')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[13px] text-muted hover:text-heading transition-colors">
                  {t('privacy.title')}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:service@superkitt.com"
                  className="flex items-center gap-2 text-[13px] text-muted hover:text-heading transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>service@superkitt.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-custom border-t border-border">
        <div className="flex items-center justify-between py-6">
          <p className="text-xs text-subtle">{t('footer.copyright')}</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-xs text-subtle hover:text-muted transition-colors">
              {t('privacy.title')}
            </Link>
            <button
              onClick={scrollToTop}
              className="text-subtle hover:text-gold transition-colors"
              aria-label={t('footer.back_to_top')}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
