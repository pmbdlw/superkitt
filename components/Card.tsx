import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  delay?: number
  animate?: boolean
}

const easeOutExpo = [0.22, 1, 0.36, 1]

export default function Card({ children, className = '', delay = 0, animate = true }: CardProps) {
  const baseStyles = 'dark-card'

  if (!animate) {
    return (
      <div className={`${baseStyles} ${className}`}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: easeOutExpo,
      }}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </motion.div>
  )
}
