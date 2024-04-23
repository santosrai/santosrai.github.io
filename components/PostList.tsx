import type {AllPosts} from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'


function truncateCharacters(str: string, maxChars: number) {
  return str.length > maxChars ? str.substring(0, maxChars) + "..." : str;
}

/**
 * The post list component.
 */
export default function PostList({posts}: Readonly<{posts: AllPosts}>) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {!!posts.edges.length &&
        posts.edges.map(({node}) => (
          <article className="not-prose" key={node.databaseId}>
            {node.featuredImage?.node && (                                                                                                                                                                                      
              <Link href={`/blog/${node.slug}`}>
                {/* if post.featuredImage isnot null */}
                {node.featuredImage?.node && (

                <Image
                  alt={node.featuredImage.node.altText}
                  height={node.featuredImage.node.mediaDetails.height}
                  src={node.featuredImage.node.sourceUrl}
                  width={node.featuredImage.node.mediaDetails.width}
                  priority={true}
                />
                )}
              </Link>
            )}
            <Link
              className="no-underline hover:underline"
              href={`/blog/${node.slug}`}
            >
              <h2
                className="mt-1 text-xl font-bold leading-tight"
                dangerouslySetInnerHTML={{__html: node.title}}          
              />
            </Link>
            <p className="text-sm text-gray-500">
              {node.commentCount} Comments
            </p>
            <div dangerouslySetInnerHTML={{ __html: truncateCharacters(node.excerpt, 20) }} />
            <Link className="button" href={`/blog/${node.slug}`}>
              View Post
            </Link>
          </article>
        ))}
    </div>
  )
}