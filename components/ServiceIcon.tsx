import { LucideIcon } from 'lucide-react'

interface ServiceIconProps {
  Icon: LucideIcon
  color?: string
  size?: number
}

export default function ServiceIcon({
  Icon,
  color = '#C4614A',
  size = 48,
}: ServiceIconProps) {
  return (
    <div
      className="flex items-center justify-center rounded-lg"
      style={{
        width: size + 16,
        height: size + 16,
        backgroundColor: `${color}10`,
      }}
    >
      <Icon size={size * 0.6} style={{ color }} strokeWidth={1.5} />
    </div>
  )
}
