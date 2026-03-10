import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mlservizi.eu',
      lastModified: new Date(),
    },
    {
      url: 'https://mlservizi.eu/it',
      lastModified: new Date(),
    },
    {
      url: 'https://mlservizi.eu/en',
      lastModified: new Date(),
    },
  ]
}