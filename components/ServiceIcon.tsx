import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface ServiceIconProps {
  Icon: LucideIcon
  color?: string
  size?: number
  animated?: boolean
}

export default function ServiceIcon({
  Icon,
  color = '#00C4CC',
  size = 64,
  animated = true
}: ServiceIconProps) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={animated ? { scale: 0.8, opacity: 0 } : {}}
      whileInView={animated ? { scale: 1, opacity: 1 } : {}}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
          width: size * 1.5,
          height: size * 1.5,
        }}
        animate={animated ? {
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
        style={{ color }}
      >
        <Icon size={size} strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  )
}
