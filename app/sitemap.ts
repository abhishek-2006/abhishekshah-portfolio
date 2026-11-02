import { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abhishekshah-portfolio.vercel.app'

  const routes = [
    {
      url: '/',
      changeFrequency: 'monthly' as const,
      priority: 1.0,
      lastModified: '2025-01-15',
    },
    {
      url: '/about',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      lastModified: '2025-01-15',
    },
    {
      url: '/projects',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      lastModified: '2025-01-15',
    },
    {
      url: '/skills',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      lastModified: '2025-01-15',
    },
    {
      url: '/contact',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      lastModified: '2025-01-15',
    },
    {
      url: '/games',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      lastModified: '2025-01-15',
    },
    {
      url: '/tictactoe',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      lastModified: '2025-01-15',
    },
    {
      url: '/chess',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      lastModified: '2025-01-15',
    },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}