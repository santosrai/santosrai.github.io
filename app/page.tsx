
import { getAllPosts } from "../lib/mdx";
import { notFound } from "next/navigation";
import { Post } from "@/lib/types";
import Link from "next/link";
import { formatDate, calculateReadTime } from "@/lib/helper";

export const dynamic = 'force-static'
export default async function Home() {
  console.log('Home page rendering...')
  const posts = await getAllPosts()
  console.log('Posts loaded:', posts?.length || 0)

  // Handle case where no posts are found gracefully
  const availablePosts = posts && posts.length > 0 ? posts : []

  return (
    <main className="w-full max-w-none flex flex-col space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-8 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white font-bold leading-tight">
          Welcome to my digital garden
        </h1>
        <p className="text-base md:text-lg text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I love indoor gardening beside programming. This is where I share my thoughts, projects, and learnings.
        </p>
      </section>

      {/* Bio Section */}
      <section className="bg-slate-100 dark:bg-zinc-800/50 rounded-xl p-6 md:p-8 space-y-4 border border-slate-200 dark:border-transparent transition-colors duration-200">
        <h2 className="text-xl md:text-2xl text-slate-900 dark:text-white font-semibold">About Me</h2>
        <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          I&apos;m a Full Stack Engineer and RPA Engineer passionate about creating efficient solutions and beautiful user experiences. 
          When I&apos;m not coding, you&apos;ll find me tending to my indoor garden or exploring new technologies.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-teal-100 dark:bg-teal-600/20 text-teal-700 dark:text-teal-300 rounded-full text-xs md:text-sm">Full Stack Development</span>
          <span className="px-3 py-1 bg-teal-100 dark:bg-teal-600/20 text-teal-700 dark:text-teal-300 rounded-full text-xs md:text-sm">RPA Engineering</span>
          <span className="px-3 py-1 bg-teal-100 dark:bg-teal-600/20 text-teal-700 dark:text-teal-300 rounded-full text-xs md:text-sm">Indoor Gardening</span>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white font-bold">Latest Posts</h2>
          {availablePosts.length > 0 && (
            <Link 
              className="inline-flex items-center justify-center gap-2 border border-teal-500 text-sm text-slate-900 dark:text-white bg-teal-100 dark:bg-teal-600/20 hover:bg-teal-600 hover:text-white py-2 px-4 md:py-3 md:px-6 rounded-lg no-underline transition-all duration-200 hover:scale-105" 
              href={`/blog/`}
            >
              View all posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        {availablePosts.length > 0 ? (
          <div className="grid gap-4">
            {availablePosts.slice(0, 4).map((post: Post) => (
            <article 
              key={post.databaseId} 
              className="group bg-white dark:bg-zinc-800/30 border border-slate-200 dark:border-zinc-700 rounded-lg p-4 md:p-6 hover:bg-slate-50 dark:hover:bg-zinc-800/50 hover:border-teal-500/50 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Link className="no-underline block" href={`/blog/${post.slug}`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4">
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg md:text-xl text-slate-900 dark:text-white font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-slate-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-start sm:space-y-1">
                    <time className="text-sm text-slate-500 dark:text-gray-400 whitespace-nowrap">
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
        ) : (
          <div className="bg-slate-100 dark:bg-zinc-800/30 border border-slate-200 dark:border-zinc-700 rounded-lg p-8 text-center">
            <h3 className="text-xl text-slate-900 dark:text-white font-semibold mb-2">No Posts Yet</h3>
            <p className="text-slate-500 dark:text-gray-400">Blog posts will appear here once they are published.</p>
          </div>
        )}
      </section>
    </main>
  );
}
