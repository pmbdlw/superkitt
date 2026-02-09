import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Menu, X, Globe, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function Navigation() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const languageMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
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
            ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo isDark={isScrolled} showText={true} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium tracking-wide transition-opacity duration-200 ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  } ${isActive ? '' : 'opacity-70 hover:opacity-100'}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                  )}
                </Link>
              )
            })}

            {/* Language Dropdown */}
            <div className="relative" ref={languageMenuRef}>
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isScrolled ? 'hover:bg-slate-100' : 'hover:bg-white/10'
                }`}
                aria-label="Select language"
              >
                <Globe className={`w-4 h-4 ${isScrolled ? 'text-slate-600' : 'text-white/80'}`} />
              </button>

              <AnimatePresence>
                {isLanguageMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100"
                  >
                    {languages.map((lang) => {
                      const isActive = router.locale === lang.code
                      return (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                            isActive
                              ? 'bg-secondary/5 text-secondary'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-base">{lang.flag}</span>
                            <span className={`font-medium ${isActive ? 'text-secondary' : ''}`}>
                              {lang.name}
                            </span>
                          </div>
                          {isActive && <Check className="w-4 h-4 text-secondary" />}
                        </button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary/90 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-200"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-slate-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-700' : 'text-white'}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu — Slide from right panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-4">
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                    <X className="w-6 h-6 text-slate-700" />
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
                          isActive ? 'text-secondary' : 'text-slate-700 hover:text-secondary'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  })}

                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-base font-medium text-secondary"
                  >
                    {t('nav.contact')}
                  </Link>
                </div>

                {/* Mobile Language Selector */}
                <div className="px-6 py-6 border-t border-slate-100">
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
                          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                            isActive
                              ? 'bg-secondary/10 text-secondary'
                              : 'text-slate-500 hover:bg-slate-50'
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
