import type { MetadataRoute } from 'next'

// Necessário com output:"export" (GitHub Pages) — sem isso o build falha
// porque essas rotas seriam dinâmicas por padrão, incompatível com export estático.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ciadocorpo.com.br',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
