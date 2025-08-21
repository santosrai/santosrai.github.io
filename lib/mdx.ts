import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { Post } from './types'

const postsDirectory = path.join(process.cwd(), '_posts')

export function getPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    const htmlContent = await marked(content)

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || new Date().toISOString(),
      author: {
        node: {
          name: data.author || 'Santosh Rai',
          avatar: {
            url: '/me-photo.webp'
          }
        }
      },
      databaseId: slug,
      modified: data.date || new Date().toISOString(),
      content: htmlContent,
      commentCount: 0,
      categories: {
        nodes: []
      },
      tags: {
        nodes: []
      },
      featuredImage: {
        node: {
          altText: '',
          sourceUrl: '',
          mediaDetails: {
            height: 0,
            width: 0
          }
        }
      },
      seo: {
        metaDesc: data.excerpt || '',
        title: data.title || ''
      },
      comments: {
        nodes: []
      }
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const slugs = getPostSlugs()
    const posts = await Promise.all(
      slugs.map((slug) => getPostBySlug(slug))
    )
    return posts
      .filter((post): post is Post => post !== null)
      .sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime())
  } catch (error) {
    console.error('Error getting all posts:', error)
    return []
  }
}

export async function getPostsByNumber(count: number) {
  try {
    const allPosts = await getAllPosts()
    return {
      nodes: allPosts.slice(0, count),
      pageInfo: {
        endCursor: count.toString(),
        hasNextPage: allPosts.length > count,
        hasPreviousPage: false,
        startCursor: '0'
      }
    }
  } catch (error) {
    console.error('Error getting posts by number:', error)
    return {
      nodes: [],
      pageInfo: {
        endCursor: '0',
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: '0'
      }
    }
  }
}
