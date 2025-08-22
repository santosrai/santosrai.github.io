'use client'

import type { Post } from '@/lib/types'
import { useState } from 'react'
import PostList from '@/components/PostList'

/**
 * The more posts component.
 */
export default function MorePosts({ 
  endCursor, 
  initialPosts = [] 
}: Readonly<{ 
  endCursor: string
  initialPosts?: Post[]
}>) {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMorePosts, setHasMorePosts] = useState(true)

  // Fetch handler - this would typically call an API endpoint
  async function fetchPosts() {
    // For now, we'll simulate loading more posts
    // In a real implementation, you'd call an API endpoint
    setHasMorePosts(false)
  }

  return (
    <>
      {posts.length > 0 && (
        <div className="my-8">
          <PostList posts={posts} />
        </div>
      )}
      {hasMorePosts && (
        <div className="flex justify-center mt-8">
          <button 
            className="inline-flex items-center gap-2 border border-teal-500 text-slate-900 dark:text-white bg-teal-100 dark:bg-teal-600/20 hover:bg-teal-600 hover:text-white py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105" 
            onClick={fetchPosts}
          >
            Load More Posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}