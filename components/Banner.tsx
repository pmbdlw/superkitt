import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface BannerProps {
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
  height?: 'small' | 'medium' | 'large'
  variant?: 'hero' | 'page'
}

const easeOutExpo = [0.22, 1, 0.36, 1] as const

export default function Banner({
  title,
  subtitle,
  description,
  children,
  height = 'medium',
  variant = 'page',
}: BannerProps) {
  const heightClasses = {
    small: 'py-36 pt-44',
    medium: 'py-40 pt-48',
    large: 'min-h-screen',
  }

  if (variant === 'hero') {
    return (
      <div className="relative min-h-[720px] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/70" />

        {/* Content */}
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
                    style={{ boxShadow: '0 0 6px rgba(201,169,98,0.4)' }}
                  />
                  <span className="text-gold text-[11px] font-medium tracking-[1px] uppercase">
                    {subtitle}
                  </span>
                </motion.div>
              )}

              {/* Headline */}
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
                  className="text-xl text-[#848484] leading-relaxed max-w-2xl"
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

  // Page header variant
  return (
    <div className={`relative ${heightClasses[height]} overflow-hidden bg-primary`}>
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl">
            {subtitle && (
              <p className="section-label mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight font-serif text-balance">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-[#848484] mt-6 max-w-xl leading-relaxed">
                {description}
              </p>
            )}
            {children && <div className="mt-10">{children}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
