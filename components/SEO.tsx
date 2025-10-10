import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOProps {
  title?: string
  description?: string
  image?: string
}

export default function SEO({
  title = 'SuperKitt - Your Global IT Partner for Going Abroad',
  description = 'SuperKitt provides comprehensive IT solutions for Chinese enterprises going global, from cloud architecture and data security to AI enablement.',
  image = '/og-image.png'
}: SEOProps) {
  const router = useRouter()
  const siteUrl = 'https://superkitt.com'
  const fullUrl = `${siteUrl}${router.asPath}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* Additional SEO */}
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Language" content={router.locale} />
    </Head>
  )
}
