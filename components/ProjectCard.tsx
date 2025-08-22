import type { Project } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/helper'

function getStatusColor(status: string) {
  switch (status) {
    case 'completed':
      return 'bg-green-100 dark:bg-green-600/20 text-green-700 dark:text-green-300 border-green-300 dark:border-green-500/30'
    case 'in-progress':
      return 'bg-yellow-100 dark:bg-yellow-600/20 text-yellow-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-500/30'
    case 'archived':
      return 'bg-slate-100 dark:bg-gray-600/20 text-slate-700 dark:text-gray-300 border-slate-300 dark:border-gray-500/30'
    default:
      return 'bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-500/30'
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case 'completed':
      return 'Completed'
    case 'in-progress':
      return 'In Progress'
    case 'archived':
      return 'Archived'
    default:
      return status
  }
}

export default function ProjectCard({ project }: Readonly<{ project: Project }>) {
  return (
    <article className="group bg-white dark:bg-zinc-800/30 border border-slate-200 dark:border-zinc-700 rounded-xl overflow-hidden hover:bg-slate-50 dark:hover:bg-zinc-800/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md">
      {/* Screenshot Container - Square */}
      <div className="relative aspect-square bg-slate-100 dark:bg-zinc-900/50 overflow-hidden">
        {project.screenshot ? (
          <Image
            alt={project.title}
            src={project.screenshot}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-slate-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-slate-500 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-sm text-slate-500 dark:text-zinc-400">No Screenshot</p>
            </div>
          </div>
        )}
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              Featured
            </span>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs px-2 py-1 rounded-full border font-medium ${getStatusColor(project.status)}`}>
            {getStatusLabel(project.status)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Description */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-slate-200 dark:bg-zinc-700/50 text-slate-700 dark:text-zinc-300 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-2 py-1 bg-slate-200 dark:bg-zinc-700/50 text-slate-600 dark:text-zinc-400 rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Date */}
        <div className="text-xs text-slate-500 dark:text-gray-500">
          {formatDate(project.date)}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded-lg transition-colors text-center font-medium"
          >
            View Details
          </Link>
          
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-slate-300 dark:border-zinc-600 hover:border-teal-500 hover:bg-teal-600/10 rounded-lg transition-colors"
              title="View Repository"
            >
              <svg className="w-5 h-5 text-slate-500 dark:text-zinc-400 hover:text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-slate-300 dark:border-zinc-600 hover:border-teal-500 hover:bg-teal-600/10 rounded-lg transition-colors"
              title="View Demo"
            >
              <svg className="w-5 h-5 text-slate-500 dark:text-zinc-400 hover:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}