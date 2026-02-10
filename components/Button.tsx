import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-medium transition-all duration-300 inline-flex items-center justify-center cursor-pointer',
        {
          'bg-gold text-[#1A1A1A] hover:bg-gold-light btn-shine': variant === 'primary',
          'border border-border text-heading hover:border-heading/20': variant === 'outline',
          'py-2.5 px-5 text-[13px]': size === 'sm',
          'py-3 px-6 text-[15px]': size === 'md',
          'py-4 px-8 text-base': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
