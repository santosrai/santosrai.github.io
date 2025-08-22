"use client"
import { useState, useEffect } from 'react'
import { Project } from '@/lib/types'
import ProjectCard from '@/components/ProjectCard'

interface ProjectsGridProps {
  projects: Project[]
  allTechnologies: string[]
}

export default function ProjectsGrid({ projects, allTechnologies }: ProjectsGridProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [selectedTech, setSelectedTech] = useState<string>('all')

  useEffect(() => {
    let filtered = [...projects]

    // Filter by status
    if (selectedFilter === 'featured') {
      filtered = filtered.filter(project => project.featured)
    } else if (selectedFilter !== 'all') {
      filtered = filtered.filter(project => project.status === selectedFilter)
    }

    // Filter by technology
    if (selectedTech !== 'all') {
      filtered = filtered.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(selectedTech.toLowerCase())
        )
      )
    }

    setFilteredProjects(filtered)
  }, [projects, selectedFilter, selectedTech])

  return (
    <>
      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-100 dark:bg-zinc-800/30 rounded-xl p-6 border border-slate-200 dark:border-transparent transition-colors duration-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">{projects.length}</div>
          <div className="text-sm text-slate-500 dark:text-gray-400">Total Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
            {projects.filter(p => p.status === 'completed').length}
          </div>
          <div className="text-sm text-slate-500 dark:text-gray-400">Completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            {projects.filter(p => p.status === 'in-progress').length}
          </div>
          <div className="text-sm text-slate-500 dark:text-gray-400">In Progress</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
            {projects.filter(p => p.featured).length}
          </div>
          <div className="text-sm text-slate-500 dark:text-gray-400">Featured</div>
        </div>
      </section>

      {/* Filters */}
      <section className="space-y-4">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Filter Projects</h2>
          <div className="text-sm text-slate-500 dark:text-gray-400">
            {filteredProjects.length} of {projects.length} projects
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Status Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-200 dark:bg-zinc-700 text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-zinc-600'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setSelectedFilter('featured')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === 'featured'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-200 dark:bg-zinc-700 text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-zinc-600'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setSelectedFilter('completed')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === 'completed'
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-200 dark:bg-zinc-700 text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-zinc-600'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setSelectedFilter('in-progress')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === 'in-progress'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-slate-200 dark:bg-zinc-700 text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-zinc-600'
              }`}
            >
              In Progress
            </button>
          </div>

          {/* Technology Filter */}
          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="px-4 py-2 bg-slate-200 dark:bg-zinc-700 text-slate-700 dark:text-gray-300 rounded-lg border border-slate-300 dark:border-zinc-600 focus:border-teal-500 focus:outline-none"
          >
            <option value="all">All Technologies</option>
            {allTechnologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="space-y-6">
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-slate-200 dark:bg-zinc-700 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-slate-500 dark:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-slate-500 dark:text-gray-400">Try adjusting your filters to see more projects.</p>
          </div>
        )}
      </section>
    </>
  )
}