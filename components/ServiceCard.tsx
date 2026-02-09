import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description?: string
  Icon: LucideIcon
  delay?: number
  direction?: 'left' | 'right'
}

export default function ServiceCard({
  title,
  description,
  Icon,
  delay = 0,
  direction = 'left',
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -16 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.5,
        delay,
        type: 'spring',
        damping: 25,
        stiffness: 120,
      }}
      className="group bg-white border border-slate-200 rounded-xl p-6 transition-colors duration-200 hover:border-secondary/40"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
          <Icon size={20} className="text-secondary" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-primary mb-1 group-hover:text-secondary transition-colors duration-200">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-slate-500 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
