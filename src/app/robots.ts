import type { MetadataRoute } from 'next'

// Necessário com output:"export" (GitHub Pages) — sem isso o build falha
// porque essas rotas seriam dinâmicas por padrão, incompatível com export estático.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ciadocorpo.com.br/sitemap.xml',
  }
}
