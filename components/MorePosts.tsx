'use client'

import getPosts from  '@/lib/getPostByNumber'
import type {AllPosts} from '@/lib/types'
import {useState} from 'react'
import PostList from '@/components/PostList'
/**
 * The more posts component.
 */
export default function MorePosts({endCursor}: Readonly<{endCursor: string}>) {
  const [posts, setPosts] = useState<AllPosts>({
    edges: [],
    pageInfo: {endCursor: ''}
  })

  // Fetch handler.
  async function fetchPosts() {
    // Set the cursor.
    const cursor = posts.pageInfo.endCursor || endCursor

    // Fetch posts from WordPress.
    const paginatedPosts = await getPosts(15, cursor)

    // No posts? Bail.
    if (!paginatedPosts) {
      return
    }

    // Merge the previous posts with the new posts.
    setPosts({
      edges: [...posts.edges, ...paginatedPosts.edges],
      pageInfo: paginatedPosts.pageInfo
    })
  }

  let hasMorePosts = posts.pageInfo.hasNextPage

  return (
    <>
      {posts.edges.length > 0 && (
        <div className="my-8">
          <PostList posts={posts} />
        </div>
      )}
      {hasMorePosts && (
      <button className="mx-auto my-10 flex" onClick={fetchPosts}>
        Load More
      </button>
      )}
    </>
  )
}