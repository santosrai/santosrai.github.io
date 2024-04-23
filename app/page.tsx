
import { getAllPosts } from "../lib/api";
import { notFound } from "next/navigation";
import { Post } from "@/lib/types";
import Link from "next/link";
import { getPageBySlug } from "@/lib/getPageBySlug";
import { formatDate } from "@/lib/helper";


export const dynamic = 'force-static'
export default async function Home() {
  // Fetch homepage from WordPress.
  const homepage = await getPageBySlug('homepage')
  const posts = await getAllPosts()

  if (!posts || !posts.length || !homepage) {
    notFound()
  }


  return (


    <main className="flex flex-col ">
      {/* <article>
        <h1 dangerouslySetInnerHTML={{__html: homepage.title}} />
        <div dangerouslySetInnerHTML={{__html: homepage.content}} />
      </article> */}
      <div>
        <h2 className="text-3xl text-white font-bold"> Welcome to my digital garden. </h2>
        <p>I love indoor gardening beside programming.</p>

      </div>


      <div className="flex justify-between items-center py-4 px-6">
        <h2 className="text-3xl text-white font-bold">Latest Posts</h2>
        <Link className="button border border-white text-sm text-white bg-gray-600 py-2 px-4 rounded-md no-underline hover:bg-teal-400" href={`/blog/`}>
          View all
        </Link>
      </div>

      <div className="flex flex-col">
        {posts.map((post: Post) => (
          <div key={post.databaseId} className="flex justify-between items-center  hover:bg-[#555]">
            <Link className="no-underline" href={`/blog/${post.slug}`}>
              <h3 className="text-xl text-white font-medium ">{post.title}</h3>
            </Link>
            <span className="text-sm text-gray-400" >{formatDate(post.date)}</span>
          </div>
        ))}
      </div>

    </main>
  );
}
