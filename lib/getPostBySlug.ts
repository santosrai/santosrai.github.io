
import { Post} from '@/lib/types'
import { fetchGraphQL } from './helper'

/**
 * Fetch a page by slug.
 */
export default async function getPostBySlug(slug: string) {
  const query = `
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      databaseId
      date
      modified
      content(format: RENDERED)
      title(format: RENDERED)
      featuredImage {
        node {
          altText
          sourceUrl
          mediaDetails {
              height
              width
          }
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      tags {
        nodes {
          databaseId
          name
        }
      }
      categories {
        nodes {
          databaseId
          name
        }
      }
      comments(first: 30, where: {order: ASC}) {
        nodes {
          content(format: RENDERED)
          databaseId
          date
          status
          author {
            node {
              avatar {
                url
              }
              email
              name
              url
            }
          }
        }
      }
    }
  }
  `

  const variables = {
    slug: slug
  }

  const response = await fetchGraphQL(query, variables)

  return response.data.post as Post
}