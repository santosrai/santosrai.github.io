import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { Metadata } from "next/types"
import config from "@/lib/config"
import { formatDate, calculateReadTime } from "@/lib/helper"

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata | null> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return null
  }

  return {
    title: `${post.title} - ${config.siteName}`,
    description: post.excerpt,
    alternates: {
      canonical: `${config.siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${config.siteUrl}/blog/${post.slug}`,
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-400">
          <span>By {post.author.node.name}</span>
          <span className="hidden sm:inline">•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="hidden sm:inline">•</span>
          <span className="text-teal-400">{calculateReadTime(post.content)}</span>
        </div>
        {post.excerpt && (
          <p className="text-lg text-gray-300 mt-4">{post.excerpt}</p>
        )}
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  )
}