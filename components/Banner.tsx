import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import TechBackground from './TechBackground'

interface BannerProps {
  title: string
  subtitle?: string
  badge?: string
  description?: string
  children?: ReactNode
  height?: 'small' | 'medium' | 'large'
  variant?: 'hero' | 'page'
  centered?: boolean
}

const easeOutExpo = [0.22, 1, 0.36, 1] as const

export default function Banner({
  title,
  subtitle,
  badge,
  description,
  children,
  height = 'medium',
  variant = 'page',
  centered = false,
}: BannerProps) {
  const heightClasses = {
    small: 'py-36 pt-44',
    medium: 'py-40 pt-48',
    large: 'min-h-screen',
  }

  if (variant === 'hero') {
    return (
      <div className="relative min-h-[720px] flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Tech animated background */}
        <TechBackground variant="hero" />

        {/* Content — always light text on dark hero */}
        <div className="relative z-10 w-full">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-10">
              {/* Badge */}
              {subtitle && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-center gap-2 border border-gold/25 px-4 py-2"
                >
                  <div
                    className="w-2 h-2 rounded-full bg-gold"
                    style={{ boxShadow: '0 0 6px rgba(245,200,66,0.5)' }}
                  />
                  <span className="text-gold text-[11px] font-medium tracking-[1px] uppercase">
                    {subtitle}
                  </span>
                </motion.div>
              )}

              {/* Headline — always white on hero */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
                className="text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.2] text-balance font-serif"
              >
                {title}
              </motion.h1>

              {/* Subtitle */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: easeOutExpo }}
                  className="text-xl text-[#C4A898] leading-relaxed max-w-2xl"
                >
                  {description}
                </motion.p>
              )}

              {/* CTA buttons */}
              {children && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: easeOutExpo }}
                >
                  {children}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Page header variant — always-dark style matching design
  return (
    <div className={`relative ${heightClasses[height]} overflow-hidden bg-espresso dark:bg-surface always-dark border-b border-border`}>
      <TechBackground variant="banner" />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom">
          <div className={`flex flex-col gap-6 ${centered ? 'items-center text-center' : 'max-w-3xl'}`}>
            {(badge || subtitle) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`flex ${centered ? 'justify-center' : ''}`}
              >
                <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-[11px] font-semibold tracking-[2px] uppercase rounded-sm">
                  {badge || subtitle}
                </span>
              </motion.div>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
              className={`text-4xl md:text-5xl lg:text-[52px] font-semibold text-heading tracking-tight leading-[1.15] font-serif ${centered ? 'text-center max-w-3xl' : 'text-balance'}`}
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: easeOutExpo }}
                className={`text-lg text-muted leading-relaxed ${centered ? 'max-w-2xl' : 'max-w-xl'}`}
              >
                {description}
              </motion.p>
            )}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: easeOutExpo }}
              >
                {children}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
