import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  showText?: boolean
  isDark?: boolean
}

export default function Logo({ className = '', showText = true, isDark = false }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* KITT-inspired Car Logo - Sharp & Professional */}
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
        {/* Car Body Outline - Sharp Angular Lines */}
        <path
          d="M10 26 L12 18 L16 14 L32 14 L36 18 L38 26 L38 32 L10 32 Z"
          stroke={isDark ? '#0A1F44' : '#00C4CC'}
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />

        {/* Windshield - Sharp Angles */}
        <path
          d="M16 14 L18 20 L30 20 L32 14"
          stroke={isDark ? '#0A1F44' : '#00C4CC'}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
          opacity="0.7"
        />

        {/* Front/Rear Angular Details */}
        <line
          x1="10"
          y1="26"
          x2="12"
          y2="28"
          stroke={isDark ? '#0A1F44' : '#00C4CC'}
          strokeWidth="1.5"
          strokeLinecap="square"
          opacity="0.6"
        />
        <line
          x1="38"
          y1="26"
          x2="36"
          y2="28"
          stroke={isDark ? '#0A1F44' : '#00C4CC'}
          strokeWidth="1.5"
          strokeLinecap="square"
          opacity="0.6"
        />

        {/* Wheels - Sharp Rectangular Style */}
        <rect
          x="12"
          y="30"
          width="6"
          height="4"
          stroke={isDark ? '#0A1F44' : '#00C4CC'}
          strokeWidth="1.5"
          fill="none"
          rx="0"
        />
        <rect
          x="30"
          y="30"
          width="6"
          height="4"
          stroke={isDark ? '#0A1F44' : '#00C4CC'}
          strokeWidth="1.5"
          fill="none"
          rx="0"
        />

        {/* KITT Scanner Array - Horizontal Sharp Bars */}
        <g>
          {/* Scanner Bar 1 */}
          <motion.rect
            x="14"
            y="24"
            width="2"
            height="4"
            fill="#FF0000"
            rx="0"
            animate={{
              opacity: [0.3, 1, 0.3],
              height: [3, 5, 3],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Scanner Bar 2 */}
          <motion.rect
            x="18"
            y="23"
            width="2"
            height="6"
            fill="#FF0000"
            rx="0"
            animate={{
              opacity: [0.5, 1, 0.5],
              height: [5, 7, 5],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.15,
            }}
          />

          {/* Scanner Bar 3 - Center (brightest) */}
          <motion.rect
            x="22"
            y="22"
            width="2.5"
            height="8"
            fill="#FF0000"
            rx="0"
            animate={{
              opacity: [0.8, 1, 0.8],
              height: [7, 9, 7],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.3,
            }}
          />

          {/* Scanner Bar 4 */}
          <motion.rect
            x="26"
            y="23"
            width="2"
            height="6"
            fill="#FF0000"
            rx="0"
            animate={{
              opacity: [0.5, 1, 0.5],
              height: [5, 7, 5],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.45,
            }}
          />

          {/* Scanner Bar 5 */}
          <motion.rect
            x="30"
            y="24"
            width="2"
            height="4"
            fill="#FF0000"
            rx="0"
            animate={{
              opacity: [0.3, 1, 0.3],
              height: [3, 5, 3],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.6,
            }}
          />
        </g>

        {/* Hood Line Detail - Sharp */}
        <line
          x1="18"
          y1="20"
          x2="30"
          y2="20"
          stroke={isDark ? '#0A1F44' : '#00C4CC'}
          strokeWidth="1"
          strokeLinecap="square"
          opacity="0.4"
        />

        {/* Roof Accent Lines - Angular Details */}
        <line
          x1="18"
          y1="16"
          x2="18"
          y2="18"
          stroke={isDark ? '#0A1F44' : '#00C4CC'}
          strokeWidth="1"
          strokeLinecap="square"
          opacity="0.5"
        />
        <line
          x1="30"
          y1="16"
          x2="30"
          y2="18"
          stroke={isDark ? '#0A1F44' : '#00C4CC'}
          strokeWidth="1"
          strokeLinecap="square"
          opacity="0.5"
        />
      </motion.svg>

      {/* Company Name */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className={`text-2xl font-bold tracking-tight ${isDark ? 'text-primary' : 'text-white'}`}>
            Super<span className="text-secondary">KITT</span>
          </span>
        </motion.div>
      )}
    </div>
  )
}
