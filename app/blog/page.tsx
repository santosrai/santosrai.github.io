import MorePosts from "@/components/MorePosts"
import PostList from "@/components/PostList"
import config from "@/lib/config"
import { getPostsByNumber } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { Metadata } from "next/types"

export const dynamic = 'force-static'

/**
 * Generate the metadata for this archive.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(): Promise<Metadata | null> {
  return {
    title: `Latest Posts - ${config.siteName}`,
    description: `The latest blog posts from ${config.siteName}`,
    alternates: {
      canonical: `${config.siteUrl}/blog`
    },
    openGraph: {
      title: `Latest Posts - ${config.siteName}`,
      description: `The latest blog posts from ${config.siteName}`,
      url: `${config.siteUrl}/blog`
    }
  }
}

/**
 * The blog archive route.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages
 */
export default async function BlogArchive() {
  // Fetch posts from MDX files.
  const posts = await getPostsByNumber(12)

  // No posts? Throw a 404.
  if (!posts || !posts.nodes || posts.nodes.length === 0) {
    notFound()
  }

  return (
    <div className="w-full max-w-none">
      <h1 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mb-8">Latest Posts</h1>
      <PostList posts={posts.nodes} />
      <MorePosts endCursor={posts.pageInfo.endCursor} />
    </div>
  )
}