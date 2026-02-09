interface LogoProps {
  className?: string
  showText?: boolean
  isDark?: boolean
}

export default function Logo({ className = '', showText = true, isDark = false }: LogoProps) {
  const strokeColor = isDark ? '#0A1F44' : '#00C4CC'

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg
        width="52"
        height="52"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Car Body Outline */}
        <path
          d="M10 26 L12 18 L16 14 L32 14 L36 18 L38 26 L38 32 L10 32 Z"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />

        {/* Windshield */}
        <path
          d="M16 14 L18 20 L30 20 L32 14"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
          opacity="0.7"
        />

        {/* Front/Rear Details */}
        <line x1="10" y1="26" x2="12" y2="28" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="square" opacity="0.6" />
        <line x1="38" y1="26" x2="36" y2="28" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="square" opacity="0.6" />

        {/* Wheels */}
        <rect x="12" y="30" width="6" height="4" stroke={strokeColor} strokeWidth="1.5" fill="none" rx="0" />
        <rect x="30" y="30" width="6" height="4" stroke={strokeColor} strokeWidth="1.5" fill="none" rx="0" />

        {/* KITT Scanner - Single subtle sweep bar */}
        <rect
          x="16"
          y="24"
          width="16"
          height="3"
          rx="1"
          fill="#FF0000"
          className="animate-scanner-sweep"
        />

        {/* Hood Line */}
        <line x1="18" y1="20" x2="30" y2="20" stroke={strokeColor} strokeWidth="1" strokeLinecap="square" opacity="0.4" />
      </svg>

      {showText && (
        <span className={`text-2xl font-bold tracking-tight ${isDark ? 'text-primary' : 'text-white'}`}>
          Super<span className="text-secondary">KITT</span>
        </span>
      )}
    </div>
  )
}
