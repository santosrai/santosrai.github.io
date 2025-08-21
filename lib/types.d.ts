export interface SearchResults {
  id: number
  title: string
  url: string
  type: string
  subtype: string
}

export interface Children {
  children: React.ReactNode
}

export interface Post {
  author: {
    node: {
      name: string
      avatar: {
        url: string
      }
    }
  }
  databaseId: string
  date: string
  modified: string
  slug: string
  title: string
  excerpt: string
  content: string
  commentCount: number
  categories: {
    nodes: Array<{
      databaseId: string
      name: string
    }>
  }
  tags: {
    nodes: Array<{
      databaseId: string
      name: string
    }>
  }
  featuredImage: FeaturedImage
  seo: {
    metaDesc: string
    title: string
  }
  comments: {
    nodes: Array<{
      databaseId: string
      content: string
      date: string
      status: string
      author: {
        node: {
          avatar: {
            url: string
          }
          email: string
          name: string
          url: string
        }
      }
    }>
  }
}

export interface FeaturedImage {
  node: {
    altText: string
    sourceUrl: string
    mediaDetails: {
      height: number
      width: number
    }
  }
}