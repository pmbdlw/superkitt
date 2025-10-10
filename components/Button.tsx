import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
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
        'font-medium rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5',
        {
          'bg-secondary hover:bg-secondary/90 text-white': variant === 'primary',
          'bg-primary hover:bg-primary/90 text-white': variant === 'secondary',
          'py-2 px-4 text-sm': size === 'sm',
          'py-3 px-6 text-base': size === 'md',
          'py-4 px-8 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
