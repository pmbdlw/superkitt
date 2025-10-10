import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ParticleBackground from './ParticleBackground'

interface BannerProps {
  title: string
  subtitle?: string
  description?: string
  image?: string
  gradient?: string
  children?: ReactNode
  height?: 'small' | 'medium' | 'large'
  overlay?: boolean
  animationStyle?: 'wave' | 'particle' // 新增：动画风格选择
}

export default function Banner({
  title,
  subtitle,
  description,
  image,
  gradient = 'from-primary to-accent',
  children,
  height = 'medium',
  overlay = true,
  animationStyle = 'wave', // 默认使用波浪动画
}: BannerProps) {
  const heightClasses = {
    small: 'h-64 md:h-80',
    medium: 'h-96 md:h-[500px]',
    large: 'h-screen',
  }

  return (
    <div className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
      {/* Background Image or Gradient */}
      {image ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
          )}
        </>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      )}

      {/* Animation Overlay - 根据 animationStyle 选择不同的动画 */}
      {animationStyle === 'particle' ? (
        // 粒子动画效果
        <ParticleBackground />
      ) : (
        // 波浪图案动画效果
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-secondary text-lg md:text-xl font-medium mb-4"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
              >
                {description}
              </motion.p>
            )}

            {children && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave - 仅在 wave 动画模式下显示 */}
      {animationStyle === 'wave' && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <motion.path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="white"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>
      )}
    </div>
  )
}
