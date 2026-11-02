import { MetadataRoute } from 'next'


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abhishekshah-portfolio.vercel.app'

  const routes = [
    {
      url: '/',
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: '/about',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: '/skills',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: '/projects',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/games',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/tictactoe',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/chess',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/contact',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}