import { getAllPosts } from "../../lib/api";
import {notFound} from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Post, Page } from "@/lib/types";
import { getPageBySlug } from "@/lib/getPageBySlug";
import getPages from "@/lib/getPages";
import {Metadata} from 'next'

export const dynamic = 'force-static'

/**
 * Route segment config.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
 */
export const revalidate = 43200 // 12 hours

/**
 * Generate the static routes at build time.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  // Get pages.
  const pages = await getPages()

  // No pages? Bail...
  if (!pages) {
    return []
  }

  // Return the slugs for each page.
  return pages.map((page: {slug: string}) => ({
    slug: page.slug
  }))
}




// Fetch data from wp
async function fetchData(slug:string) {

  // If the slug is 'blog', fetch all posts.
  if (slug === 'blog') {
    return {posts: await getAllPosts(), context: 'blog'}
  }
    const page = await getPageBySlug(slug);
    
    if (page) {
      return {post: page}
    }
     return {error: "Page not found"};
}

// render single page
function RenderPage ({page}: {page:Page}) {
    
    return (
        <main className="flex flex-col gap-8">
        <article>
          <h1 dangerouslySetInnerHTML={{__html: page.title}} />
          <div dangerouslySetInnerHTML={{__html: page.content}} />
        </article>
      </main>
    )
}

/**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
 * Render posts list.
 */
function RenderPostsList({posts, context}: {posts: Post[]; context: string}) {
  
  return (
    <main className="flex flex-col gap-8">
      <h1 className="capitalize">Latest {context}</h1>
      <div className="flex flex-wrap gap-8">
        {posts.map((post: Post) => (
          <article className="w-72" key={post.databaseId}>
            {/* if post.featuredImage isnot null */}
            {post.featuredImage && (
              
            <Image
              alt={post.featuredImage.node.altText}
              height={post.featuredImage.node.mediaDetails.height}
              src={post.featuredImage.node.sourceUrl}
              width={post.featuredImage.node.mediaDetails.width}
              priority={true}
            />
            )}
            <Link href={`/${context}/${post.slug}`}>
              <h2 dangerouslySetInnerHTML={{__html: post.title}} />
            </Link>
            <p className="text-sm text-gray-500">
              {post.commentCount} Comments
            </p>
            <div dangerouslySetInnerHTML={{__html: post.excerpt}} />
            <Link className="button" href={`/${context}/${post.slug}`}>
              View Post
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}


/**
 * Catch-all Archive Page route.
 */
export default async function ArchivePage({ params }: { params: { slug: string } }) {
// Get the slug from the params.
const {slug} = params

// Fetch data from WordPress.
const data = await fetchData(slug)

// If there's an error, return a 404 page.
if (data.error) {
  notFound()
}
   // If this is a single page, render the page.
  if (data.post) {
    return <RenderPage page={data.post} />
  }

// Otherwise, this must be an archive. Render the posts list.
if (data.posts && data.posts.length > 0) {
  return <RenderPostsList posts={data.posts} context={data.context} />
}
  // Otherwise, return a 404 page.
  notFound()
}