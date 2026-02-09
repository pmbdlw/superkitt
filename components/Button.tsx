import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
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
        'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center',
        {
          'bg-secondary hover:bg-secondary/90 text-white': variant === 'primary',
          'bg-primary hover:bg-primary/90 text-white': variant === 'secondary',
          'border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm': variant === 'outline',
          'py-2 px-4 text-sm': size === 'sm',
          'py-3 px-6 text-base': size === 'md',
          'py-3.5 px-8 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
