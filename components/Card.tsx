import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  delay?: number
  animate?: boolean
}

export default function Card({ children, className = '', delay = 0, animate = true }: CardProps) {
  if (!animate) {
    return (
      <div className={`bg-white border border-slate-200 rounded-xl p-6 transition-colors duration-200 hover:border-slate-300 ${className}`}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay, type: 'spring', damping: 25, stiffness: 120 }}
      className={`bg-white border border-slate-200 rounded-xl p-6 transition-colors duration-200 hover:border-slate-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
