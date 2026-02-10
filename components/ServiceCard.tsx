import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description?: string
  Icon: LucideIcon
  delay?: number
}

const easeOutExpo = [0.22, 1, 0.36, 1]

export default function ServiceCard({
  title,
  description,
  Icon,
  delay = 0,
}: ServiceCardProps) {
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
      className="group dark-card flex flex-col gap-6"
    >
      <div className="w-[60px] h-[60px] border border-gold-muted flex items-center justify-center">
        <Icon size={28} className="text-gold" strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-medium text-heading font-serif">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-muted leading-relaxed">
          {description}
        </p>
      )}
      <div className="flex items-center gap-2 mt-auto">
        <span className="text-[13px] font-medium text-gold">Learn more</span>
        <ArrowRight size={14} className="text-gold" />
      </div>
    </motion.div>
  )
}
