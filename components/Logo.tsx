import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  showText?: boolean
  isDark?: boolean
}

export default function Logo({ className = '', showText = true, isDark = false }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* KITT-inspired Scanner Logo */}
      <motion.svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer frame - car silhouette */}
        <path
          d="M8 24C8 20 10 16 14 14L18 12H30L34 14C38 16 40 20 40 24V28C40 30 38 32 36 32H12C10 32 8 30 8 28V24Z"
          stroke={isDark ? '#0A1F44' : '#00C4CC'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* KITT scanner light - animated bars */}
        <motion.rect
          x="16"
          y="22"
          width="3"
          height="4"
          fill="#FF0000"
          animate={{
            opacity: [0.3, 1, 0.3],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.rect
          x="20"
          y="21"
          width="3"
          height="6"
          fill="#FF0000"
          animate={{
            opacity: [0.5, 1, 0.5],
            scaleY: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.rect
          x="24"
          y="20"
          width="3"
          height="8"
          fill="#FF0000"
          animate={{
            opacity: [0.7, 1, 0.7],
            scaleY: [0.95, 1, 0.95],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
        <motion.rect
          x="28"
          y="21"
          width="3"
          height="6"
          fill="#FF0000"
          animate={{
            opacity: [0.5, 1, 0.5],
            scaleY: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
        <motion.rect
          x="32"
          y="22"
          width="3"
          height="4"
          fill="#FF0000"
          animate={{
            opacity: [0.3, 1, 0.3],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />

        {/* Car details - headlights */}
        <circle cx="14" cy="18" r="1.5" fill={isDark ? '#0A1F44' : '#00C4CC'} />
        <circle cx="34" cy="18" r="1.5" fill={isDark ? '#0A1F44' : '#00C4CC'} />

        {/* Wheels */}
        <circle
          cx="16"
          cy="32"
          r="4"
          stroke={isDark ? '#0A1F44' : '#00C4CC'}
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="32"
          cy="32"
          r="4"
          stroke={isDark ? '#0A1F44' : '#00C4CC'}
          strokeWidth="1.5"
          fill="none"
        />
      </motion.svg>

      {/* Company Name */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className={`text-2xl font-bold ${isDark ? 'text-primary' : 'text-white'}`}>
            Super<span className="text-secondary">KITT</span>
          </span>
        </motion.div>
      )}
    </div>
  )
}
