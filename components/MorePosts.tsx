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
        <button 
          className="mx-auto my-10 flex bg-teal-400 hover:bg-teal-500 text-white px-6 py-3 rounded-md transition-colors" 
          onClick={fetchPosts}
        >
          Load More
        </button>
      )}
    </>
  )
}