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

export default function Banner({
  title,
  subtitle,
  description,
  children,
  height = 'medium',
  variant = 'page',
}: BannerProps) {
  const heightClasses = {
    small: 'py-32 pt-40',
    medium: 'py-32 pt-40 md:py-40 md:pt-48',
    large: 'min-h-screen',
  }

  if (variant === 'hero') {
    return (
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background: 'linear-gradient(135deg, #0A1F44 0%, #111827 25%, #0A1F44 50%, #0f2b5e 75%, #111827 100%)',
            backgroundSize: '400% 400%',
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle gradient mesh orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/6 w-64 h-64 bg-secondary/3 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Text content — 60% */}
              <div className="lg:col-span-3">
                {subtitle && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-secondary text-sm font-medium tracking-widest uppercase mb-6"
                  >
                    {subtitle}
                  </motion.p>
                )}

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, type: 'spring', damping: 25, stiffness: 120 }}
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tighter text-balance"
                >
                  {title}
                </motion.h1>

                {description && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-slate-400 mt-6 max-w-xl"
                  >
                    {description}
                  </motion.p>
                )}

                {children && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-10"
                  >
                    {children}
                  </motion.div>
                )}
              </div>

              {/* Abstract geometric visual — 40% */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:flex lg:col-span-2 items-center justify-center"
              >
                <div className="relative w-full aspect-square max-w-md">
                  {/* Geometric shapes */}
                  <div className="absolute inset-8 border border-secondary/20 rounded-2xl rotate-6" />
                  <div className="absolute inset-16 border border-secondary/15 rounded-xl -rotate-3" />
                  <div className="absolute inset-24 bg-secondary/5 rounded-lg rotate-12 backdrop-blur-sm" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary/60" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 bg-white/40 rounded-full mt-1.5"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }

  // Page header variant — simple, clean, no animations
  return (
    <div className={`relative ${heightClasses[height]} overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent" />

      {/* Subtle top-right glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/5 blur-3xl rounded-full" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl">
            {subtitle && (
              <p className="text-secondary text-sm font-medium tracking-widest uppercase mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight text-balance">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-slate-300 mt-4 max-w-xl">
                {description}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
