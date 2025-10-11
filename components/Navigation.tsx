import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Menu, X, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function Navigation() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLocale = router.locale === 'zh' ? 'en' : 'zh'
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.cases'), href: '/cases' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo isDark={isScrolled} showText={true} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors hover:text-secondary ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } ${router.pathname === item.href ? 'text-secondary' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
            }`}
          >
            <Globe className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            <span className={`font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              {router.locale === 'zh' ? 'EN' : 'CN'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container-custom py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 py-2 text-gray-700 hover:text-secondary transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>{router.locale === 'zh' ? 'English' : 'Chinese'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
