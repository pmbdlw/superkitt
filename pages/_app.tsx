import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
})

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
