import {fetchGraphQL} from '@/lib/helper'
import {AllPosts} from '@/lib/types'

/**
 * Fetch blog posts.
 */
export default async function getPosts(limit = 1000, after = '', before = '') {
  const query = `
    query GetPosts($limit: Int!, $after: String, $before: String) {
      posts(where: {status: PUBLISH}, first: $limit, after: $after, before: $before) {
        edges {
          node {
            databaseId
            author {
              node {
                name
              }
            }
            commentCount
            title(format: RENDERED)
            slug
            date
            modified
            excerpt(format: RENDERED)
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
            categories {
              edges {
                node {
                  databaseId
                  name
                  slug
                }
              }
            }
            seo {
              title
              metaDesc
              readingTime
              metaRobotsNofollow
              metaRobotsNoindex
              canonical
              opengraphDescription
              opengraphTitle
              opengraphType
              opengraphUrl
              opengraphImage {
                altText
                sourceUrl(size: LARGE)
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `

  const variables = {
    limit,
    after,
    before
  }

  const response = await fetchGraphQL(query, variables)

  return response.data.posts as AllPosts
}