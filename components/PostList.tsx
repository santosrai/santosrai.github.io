import type { Post } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate, calculateReadTime } from '@/lib/helper'

function truncateCharacters(str: string, maxChars: number) {
  return str.length > maxChars ? str.substring(0, maxChars) + "..." : str;
}

/**
 * The post list component.
 */
export default function PostList({ posts }: Readonly<{ posts: Post[] }>) {
  return (
    <div className="grid gap-4 md:gap-6">
      {posts.map((post) => (
        <article className="group bg-white dark:bg-zinc-800/30 border border-slate-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 hover:bg-slate-50 dark:hover:bg-zinc-800/50 hover:border-teal-500/50 transition-all duration-200 shadow-sm hover:shadow-md" key={post.databaseId}>
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
          
          <Link className="no-underline block" href={`/blog/${post.slug}`}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4">
              <div className="flex-1 space-y-2">
                <h2 className="text-lg md:text-xl text-slate-900 dark:text-white font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-slate-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    {truncateCharacters(post.excerpt, 150)}
                  </p>
                )}
              </div>
              <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-start sm:space-y-1">
                <time className="text-sm text-slate-500 dark:text-gray-400 whitespace-nowrap" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <span className="text-xs text-teal-600 dark:text-teal-400 whitespace-nowrap">
                  {calculateReadTime(post.content)}
                </span>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-teal-600 dark:text-teal-400 hidden sm:block">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}