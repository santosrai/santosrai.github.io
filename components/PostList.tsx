import type { Post } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/helper'

function truncateCharacters(str: string, maxChars: number) {
  return str.length > maxChars ? str.substring(0, maxChars) + "..." : str;
}

/**
 * The post list component.
 */
export default function PostList({ posts }: Readonly<{ posts: Post[] }>) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {posts.map((post) => (
        <article className="not-prose bg-gray-800 p-6 rounded-lg" key={post.databaseId}>
          {post.featuredImage?.node?.sourceUrl && (
            <Link href={`/blog/${post.slug}`}>
              <Image
                alt={post.featuredImage.node.altText || post.title}
                height={post.featuredImage.node.mediaDetails.height || 300}
                src={post.featuredImage.node.sourceUrl}
                width={post.featuredImage.node.mediaDetails.width || 400}
                priority={true}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </Link>
          )}
          
          <Link
            className="no-underline hover:underline"
            href={`/blog/${post.slug}`}
          >
            <h2 className="mt-1 text-xl font-bold leading-tight text-white">
              {post.title}
            </h2>
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
            <span>By {post.author.node.name}</span>
            <span>•</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          
          {post.excerpt && (
            <p className="text-gray-300 mt-3">
              {truncateCharacters(post.excerpt, 150)}
            </p>
          )}
          
          <Link 
            className="button inline-block mt-4 bg-teal-400 hover:bg-teal-500 text-white px-4 py-2 rounded-md transition-colors" 
            href={`/blog/${post.slug}`}
          >
            View Post
          </Link>
        </article>
      ))}
    </div>
  )
}