import getAllPosts from "@/lib/getAllPosts"
import getPostBySlug from "@/lib/getPostBySlug"
import { formatDate } from "@/lib/helper"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const dynamic = 'force-static'
/**
 * Generate the static routes at build time.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
    // Get all blog posts.
    const posts = await getAllPosts()
  
    // No posts? Bail...
    if (!posts) {
      return []
    }
  
    // Return the slugs for each post.
    return posts.map((post: {slug: string}) => ({
      slug: post.slug
    }))
  }
  
  /**
   * Generate the metadata for each static route at build time.
   *
   * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
   */
  export async function generateMetadata({
    params
  }: {
    params: {slug: string}
  }): Promise<Metadata | null> {
    // Get the blog post.
    const post = await getPostBySlug(params.slug)
  
    // No post? Bail...
    if (!post) {
      return {}
    }
  
    return {
      title: post.title,
      description: post.excerpt
    }
  }
  

  /**
 * The blog post route.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages
 */
export default async function Post({params}: {params: {slug: string}}) {
    // Fetch a single post from WordPress.
    const post = await getPostBySlug(params.slug)
  
    // No post? Bail...
    if (!post) {
      notFound()
    }
  
    return (
      <article>
        <header>
          <h1 className=" text-white font-bold" dangerouslySetInnerHTML={{__html: post.title}} />
          <p className="italic">
            By {post.author.node.name} on <time>{formatDate(post.date)}</time>
          </p>
        </header>
        <div dangerouslySetInnerHTML={{__html: post.content}} />
        <footer className="flex items-center justify-between gap-4 pb-4">
         

        </footer>
      </article>
    )
  }