import { BlogPost } from '@/types/blog'

export const blogs: BlogPost[] = [
  {
    id: 'tier2-migration',
    title: 'Migrating a High-Traffic Tier-2 Service',
    readTime: '11 min read',
    externalUrl: 'https://medium.com/@mdmerajalam821/migrating-a-high-traffic-tier-2-service-045e1e80082c'
  },
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}
