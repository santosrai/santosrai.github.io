import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { Post, Project } from './types'

const postsDirectory = path.join(process.cwd(), '_posts')
const projectsDirectory = path.join(process.cwd(), '_projects')

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
    if (!slugs || slugs.length === 0) {
      console.log('No post slugs found')
      return []
    }
    
    const posts = await Promise.all(
      slugs.map((slug) => getPostBySlug(slug))
    )
    const validPosts = posts
      .filter((post): post is Post => post !== null)
      .sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime())
    
    console.log(`Found ${validPosts.length} valid posts`)
    return validPosts
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

// Project functions
export function getProjectSlugs() {
  try {
    const fileNames = fs.readdirSync(projectsDirectory)
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading projects directory:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convert markdown to HTML
    const htmlContent = await marked(content)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      repository: data.repository || '',
      demo: data.demo || '',
      technologies: data.technologies || [],
      status: data.status || 'completed',
      featured: data.featured || false,
      screenshot: data.screenshot || '',
      author: {
        node: {
          name: 'Santosh Rai',
          avatar: {
            url: '/me-photo.webp'
          }
        }
      },
      databaseId: slug,
      modified: data.date || new Date().toISOString(),
      content: htmlContent
    }
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error)
    return null
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const slugs = getProjectSlugs()
    if (!slugs || slugs.length === 0) {
      console.log('No project slugs found')
      return []
    }
    
    const projects = await Promise.all(
      slugs.map((slug) => getProjectBySlug(slug))
    )
    const validProjects = projects
      .filter((project): project is Project => project !== null)
      .sort((project1, project2) => new Date(project2.date).getTime() - new Date(project1.date).getTime())
    
    console.log(`Found ${validProjects.length} valid projects`)
    return validProjects
  } catch (error) {
    console.error('Error getting all projects:', error)
    return []
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const allProjects = await getAllProjects()
    return allProjects.filter(project => project.featured)
  } catch (error) {
    console.error('Error getting featured projects:', error)
    return []
  }
}

export async function getProjectsByNumber(count: number) {
  try {
    const allProjects = await getAllProjects()
    return {
      nodes: allProjects.slice(0, count),
      pageInfo: {
        endCursor: count.toString(),
        hasNextPage: allProjects.length > count,
        hasPreviousPage: false,
        startCursor: '0'
      }
    }
  } catch (error) {
    console.error('Error getting projects by number:', error)
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
