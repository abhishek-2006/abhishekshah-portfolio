import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abhishekshah-portfolio.vercel.app'
  const currentDate = new Date()

  const routes = [
    {
      url: '/',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: '/about',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: '/skills',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: '/projects',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/tictactoe',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9, // High priority for your featured game
    },
    {
      url: '/contact',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}