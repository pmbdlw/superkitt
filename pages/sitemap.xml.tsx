import { GetServerSideProps } from 'next'

const Sitemap = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://superkitt.com'

  const pages = [
    { url: '', changefreq: 'daily', priority: 1.0 },
    { url: '/services', changefreq: 'weekly', priority: 0.9 },
    { url: '/cases', changefreq: 'weekly', priority: 0.8 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/privacy', changefreq: 'monthly', priority: 0.5 },
  ]

  const locales = ['zh', 'en']

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${pages
    .map((page) =>
      locales
        .map(
          (locale) => `
  <url>
    <loc>${baseUrl}${locale === 'zh' ? '' : `/${locale}`}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${locales
      .map(
        (altLocale) =>
          `<xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}${altLocale === 'zh' ? '' : `/${altLocale}`}${page.url}" />`
      )
      .join('\n    ')}
  </url>
  `
        )
        .join('')
    )
    .join('')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
