import { ReactNode } from 'react'
import { motion, useScroll } from 'framer-motion'
import Navigation from './Navigation'
import Footer from './Footer'
import SEO from './SEO'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <SEO title={title} description={description} />
      <div className="min-h-screen flex flex-col">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 h-[1px] bg-gold origin-left z-[60]"
        />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}
