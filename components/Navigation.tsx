import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Menu, X, Globe, Check } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import ThemeSwitch from './ThemeSwitch'

export default function Navigation() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const languageMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale })
    setIsLanguageMenuOpen(false)
  }

  const languages = [
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ]

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.cases'), href: '/cases' },
    { label: t('nav.about'), href: '/about' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-md border-b border-border'
            : 'bg-primary'
        }`}
      >
        <div className="container-custom flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Logo showText={true} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive ? 'text-heading' : 'text-muted hover:text-heading'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* CTA area */}
          <div className="hidden md:flex items-center gap-5">
            {/* Theme Switch */}
            <ThemeSwitch />

            {/* Language Dropdown */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="p-2 transition-colors duration-200 text-muted hover:text-heading"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-44 bg-primary border border-border overflow-hidden z-50"
                  >
                    {languages.map((lang) => {
                      const isActive = router.locale === lang.code
                      return (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                            isActive
                              ? 'bg-gold/10 text-gold'
                              : 'text-muted hover:bg-heading/5'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-base">{lang.flag}</span>
                            <span className={`font-medium ${isActive ? 'text-gold' : ''}`}>
                              {lang.name}
                            </span>
                          </div>
                          {isActive && <Check className="w-4 h-4 text-gold" />}
                        </button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className="border border-border text-muted text-[13px] px-6 py-3 hover:border-heading/20 hover:text-heading transition-all duration-300"
            >
              {t('nav.contact')}
            </Link>
            <Link
              href="/contact"
              className="bg-gold text-[#1A1A1A] text-[13px] font-medium px-6 py-3 hover:bg-gold-light transition-all duration-300 btn-shine"
            >
              {t('hero.cta')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-heading" />
            ) : (
              <Menu className="w-6 h-6 text-heading" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-surface border-l border-border z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4">
                  <ThemeSwitch />
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                    <X className="w-6 h-6 text-heading" />
                  </button>
                </div>

                <div className="flex-1 px-6 py-4 space-y-1">
                  {navItems.map((item) => {
                    const isActive = router.pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-3 text-base font-medium transition-colors ${
                          isActive ? 'text-gold' : 'text-muted hover:text-heading'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  })}

                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-base font-medium text-gold"
                  >
                    {t('nav.contact')}
                  </Link>
                </div>

                <div className="px-6 py-6 border-t border-border">
                  <div className="flex gap-2">
                    {languages.map((lang) => {
                      const isActive = router.locale === lang.code
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code)
                            setIsMobileMenuOpen(false)
                          }}
                          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                            isActive
                              ? 'bg-gold/10 text-gold border border-gold/20'
                              : 'text-muted hover:bg-heading/5'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
