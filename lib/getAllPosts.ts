
import {Post} from '@/lib/types'
import { fetchGraphQL } from './helper'

/**
 * Fetch all blog posts.
 */
export default async function getAllPosts() {
  const query = `
    query GetAllPosts {
      posts(where: {status: PUBLISH}) {
        nodes {
          commentCount
          databaseId
          date
          modified
          title
          slug
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
         
        }
      }
    }
  `

  const response = await fetchGraphQL(query)

  return response.data.posts.nodes as Post[]
}