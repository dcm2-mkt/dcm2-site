import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dcm2.com'
  
  // AEO Tip: Using specific dates or "always" helps, but 'weekly' is the sweet spot 
  // for active portfolios to ensure updates (like your new tracking) get picked up.
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Changed from 'yearly' - Homepages change more than you think
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly', // Changed from 'yearly' - Good for bio updates
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vibe-coding`,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Kept frequent as this is your "experiments" lab
      priority: 0.7,
    },
    // Case Studies - High priority for AEO (this is your "Knowledge Graph" data)
    {
      url: `${baseUrl}/work/greenroads`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/miami-heat`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/mybambu`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/sensedia`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}