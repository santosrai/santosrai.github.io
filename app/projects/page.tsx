
import { getAllProjects } from '@/lib/mdx'
import { Project } from '@/lib/types'
import ProjectsGrid from '@/components/ProjectsGrid'
import config from '@/lib/config'
import { Metadata } from 'next/types'

export const dynamic = 'force-static'

export async function generateMetadata(): Promise<Metadata | null> {
  return {
    title: `Projects - ${config.siteName}`,
    description: `A collection of projects showcasing skills in full-stack development, RPA engineering, and various technologies by ${config.siteName}`,
    alternates: {
      canonical: `${config.siteUrl}/projects`
    },
    openGraph: {
      title: `Projects - ${config.siteName}`,
      description: `A collection of projects showcasing skills in full-stack development, RPA engineering, and various technologies by ${config.siteName}`,
      url: `${config.siteUrl}/projects`
    }
  }
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  if (!projects || !projects.length) {
    return (
      <main className="w-full flex flex-col space-y-8">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">No Projects Found</h1>
          <p className="text-slate-500 dark:text-gray-400">Projects will appear here once they are added.</p>
        </div>
      </main>
    )
  }

  // Get unique technologies
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort()

  return (
    <main className="w-full flex flex-col space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white font-bold leading-tight">
          My Projects
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A collection of projects showcasing my skills in full-stack development, RPA engineering, and various technologies. 
          Each project represents a unique challenge and learning experience.
        </p>
      </section>

      <ProjectsGrid projects={projects} allTechnologies={allTechnologies} />

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-teal-100 to-green-100 dark:from-teal-600/20 dark:to-green-600/20 rounded-xl p-8 text-center space-y-4 border border-slate-200 dark:border-transparent transition-colors duration-200">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Interested in Working Together?</h2>
        <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
          I&apos;m always open to discussing new opportunities and exciting projects. 
          Let&apos;s connect and see how we can collaborate!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={config.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-700 dark:bg-zinc-800 hover:bg-slate-800 dark:hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  )
}