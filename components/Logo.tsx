interface LogoProps {
  className?: string
  showText?: boolean
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="w-[42px] h-[42px] border-2 border-gold flex items-center justify-center">
        <span className="text-gold font-serif text-[22px] font-semibold">S</span>
      </div>
      {showText && (
        <span className="text-heading text-lg font-medium tracking-[2px]">
          SUPERKITT
        </span>
      )}
    </div>
  )
}
