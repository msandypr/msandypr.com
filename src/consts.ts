export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'msandypr',
  DESCRIPTION:
    'Muhammad Sandy Putra Riyadi is a driven Software Engineer focused on creating impactful solutions through innovation. With experience in diverse projects, he excels in dynamic environments and is committed to continuous learning.',
  EMAIL: 'msandypr.dev@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://msandypr.com',
}

export const NAV_LINKS: Link[] = [
  { href: '/about', label: 'about' },
  { href: '/blog', label: 'blog' },
  // { href: '/authors', label: 'authors' },
  // { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/msandypr', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/msandypr', label: 'LinkedIn' },
  { href: 'msandypr.dev@gmail.com', label: 'Email' },
  // { href: '/rss.xml', label: 'RSS' },
]
