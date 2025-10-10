import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import SEO from './SEO'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <SEO title={title} description={description} />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}
