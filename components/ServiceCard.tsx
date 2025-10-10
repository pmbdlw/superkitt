import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description?: string
  image: string
  Icon: LucideIcon
  color: string
  delay?: number
}

export default function ServiceCard({
  title,
  description,
  image,
  Icon,
  color,
  delay = 0
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Icon Overlay */}
        <div className="absolute bottom-4 left-4">
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-lg p-3"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon size={32} style={{ color }} strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
}
