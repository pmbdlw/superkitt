import { useState, useRef, useEffect } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTranslation } from 'next-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme, ThemeMode } from '@/lib/theme'

const options: { value: ThemeMode; Icon: typeof Sun; labelKey: string }[] = [
  { value: 'light', Icon: Sun, labelKey: 'theme.light' },
  { value: 'dark', Icon: Moon, labelKey: 'theme.dark' },
  { value: 'system', Icon: Monitor, labelKey: 'theme.system' },
]

export default function ThemeSwitch() {
  const { t } = useTranslation('common')
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const current = options.find((o) => o.value === theme) || options[2]
  const CurrentIcon = current.Icon

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-muted hover:text-heading transition-colors"
        aria-label="Toggle theme"
      >
        <CurrentIcon size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-40 bg-primary border border-border overflow-hidden z-50"
          >
            {options.map(({ value, Icon, labelKey }) => (
              <button
                key={value}
                onClick={() => {
                  setTheme(value)
                  setOpen(false)
                }}
                className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm transition-colors ${
                  theme === value
                    ? 'text-gold bg-gold/10'
                    : 'text-muted hover:text-heading hover:bg-heading/5'
                }`}
              >
                <Icon size={16} />
                <span>{t(labelKey)}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
