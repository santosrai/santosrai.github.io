import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[50vh] gap-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
        <p className="text-lg text-gray-300">Sorry, the page you are looking for does not exist.</p>
      </div>
      <div className="flex gap-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Go Home
        </Link>
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 border border-teal-400 text-teal-400 hover:bg-teal-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
        >
          View Blog
        </Link>
      </div>
    </main>
  )
}