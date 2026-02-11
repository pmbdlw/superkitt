import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface TechBackgroundProps {
  variant?: 'hero' | 'banner'
  particleCount?: number
}

/* Brand accent palette — shared across particles & connections */
const PALETTE = [
  '196, 97, 74',   // terracotta  #C4614A
  '63, 191, 175',  // aqua        #3FBFAF
  '245, 200, 66',  // butter      #F5C842
]

/* ─── Canvas particle network ────────────────────────────────── */
function ParticleCanvas({
  count,
  maxDist,
}: {
  count: number
  maxDist: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let rafId = 0

    interface P {
      x: number; y: number; vx: number; vy: number
      r: number; c: string; a: number
    }
    let pts: P[] = []

    const init = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        c: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        a: Math.random() * 0.55 + 0.3,
      }))
    }

    const frame = () => {
      ctx.clearRect(0, 0, w, h)

      /* move */
      for (const p of pts) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
      }

      /* connections */
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < maxDist) {
            const a = (1 - d / maxDist) * 0.15
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(${pts[i].c}, ${a})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      /* particles */
      for (const p of pts) {
        /* glow */
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.c}, ${p.a * 0.08})`
        ctx.fill()
        /* core */
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.c}, ${p.a})`
        ctx.fill()
      }

      rafId = requestAnimationFrame(frame)
    }

    init()
    frame()
    window.addEventListener('resize', init)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', init)
    }
  }, [count, maxDist])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}

/* ─── TechBackground composite ───────────────────────────────── */
export default function TechBackground({
  variant = 'banner',
  particleCount,
}: TechBackgroundProps) {
  const isHero = variant === 'hero'
  const count = particleCount ?? (isHero ? 55 : 30)
  const maxDist = isHero ? 150 : 120

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* ── Gradient orbs (ambient glow) ── */}
      <motion.div
        animate={{ x: [0, 40, -25, 0], y: [0, -25, 35, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className={`absolute rounded-full ${
          isHero
            ? 'top-[10%] left-[15%] w-[500px] h-[500px] bg-[rgba(196,97,74,0.1)] blur-[120px]'
            : 'top-[5%] left-[20%] w-[300px] h-[300px] bg-[rgba(196,97,74,0.07)] blur-[100px]'
        }`}
      />
      <motion.div
        animate={{ x: [0, -35, 20, 0], y: [0, 25, -30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className={`absolute rounded-full ${
          isHero
            ? 'bottom-[15%] right-[10%] w-[450px] h-[450px] bg-[rgba(63,191,175,0.07)] blur-[110px]'
            : 'bottom-[10%] right-[15%] w-[250px] h-[250px] bg-[rgba(63,191,175,0.05)] blur-[80px]'
        }`}
      />
      {isHero && (
        <motion.div
          animate={{ x: [0, 25, -35, 0], y: [0, 35, -15, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[45%] right-[30%] w-[350px] h-[350px] rounded-full bg-[rgba(245,200,66,0.04)] blur-[90px]"
        />
      )}

      {/* ── Grid pattern ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196, 97, 74, ${isHero ? 0.045 : 0.03}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 97, 74, ${isHero ? 0.045 : 0.03}) 1px, transparent 1px)
          `,
          backgroundSize: isHero ? '80px 80px' : '60px 60px',
        }}
      />

      {/* ── Scan line sweep ── */}
      <motion.div
        animate={{ left: ['-15%', '115%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
        className="absolute inset-y-0 w-[200px] -skew-x-12"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(196, 97, 74, ${isHero ? 0.035 : 0.025}), transparent)`,
        }}
      />

      {/* ── Canvas particle network ── */}
      <ParticleCanvas count={count} maxDist={maxDist} />

      {/* ── Bottom vignette (hero only) ── */}
      {isHero && (
        <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
      )}
    </div>
  )
}
