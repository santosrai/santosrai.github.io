export const dynamic = 'force-static'

export default function About() {
    return (
        <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    About Me
                </h1>
                <p className="text-xl text-slate-600 dark:text-gray-300">
                    Full Stack Engineer | RPA Engineer
                </p>
            </div>

            {/* Profile Section */}
            <div className="bg-slate-100 dark:bg-zinc-800/50 rounded-lg p-8 mb-8 border border-slate-200 dark:border-transparent transition-colors duration-200">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="flex-shrink-0">
                        <img 
                            src="/me-photo.webp" 
                            alt="Profile Photo" 
                            className="w-48 h-48 rounded-full object-cover border-4 border-slate-300 dark:border-zinc-700"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                            Welcome to My Digital Garden
                        </h2>
                        <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
                            I&apos;m a passionate Full Stack Engineer and RPA Engineer who believes in creating elegant, 
                            efficient solutions to complex problems. When I&apos;m not coding, you&apos;ll find me tending to 
                            my indoor garden, where I find the same patience and care that goes into writing clean, 
                            maintainable code.
                        </p>
                        <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
                            This website serves as my digital garden - a place where I share knowledge, showcase 
                            projects, and document my journey in the ever-evolving world of technology.
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="bg-slate-100 dark:bg-zinc-800/50 rounded-lg p-8 mb-8 border border-slate-200 dark:border-transparent transition-colors duration-200">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
                    Technical Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-medium text-slate-800 dark:text-gray-200 mb-3">
                            Full Stack Development
                        </h3>
                        <ul className="text-slate-600 dark:text-gray-300 space-y-2">
                            <li>• Frontend: React, Next.js, TypeScript</li>
                            <li>• Backend: Node.js, Python, VBA</li>
                            <li>• Database: SQL, NoSQL solutions</li>
                            <li>• DevOps: CI/CD, GitHub Actions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-slate-800 dark:text-gray-200 mb-3">
                            RPA & Automation
                        </h3>
                        <ul className="text-slate-600 dark:text-gray-300 space-y-2">
                            <li>• Process automation & optimization</li>
                            <li>• VBA scripting & macros</li>
                            <li>• Workflow automation</li>
                            <li>• Business process improvement</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Interests Section */}
            <div className="bg-slate-100 dark:bg-zinc-800/50 rounded-lg p-8 mb-8 border border-slate-200 dark:border-transparent transition-colors duration-200">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
                    Beyond Code
                </h2>
                <div className="text-center">
                    <div className="inline-block bg-slate-200 dark:bg-zinc-700/50 rounded-lg p-6 mb-4">
                        <h3 className="text-xl font-medium text-slate-800 dark:text-gray-200 mb-3">
                            🌱 Indoor Gardening
                        </h3>
                        <p className="text-slate-600 dark:text-gray-300">
                            I find that tending to plants teaches valuable lessons about patience, 
                            consistency, and the importance of creating the right environment for growth - 
                            principles that translate beautifully into software development.
                        </p>
                    </div>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="bg-slate-100 dark:bg-zinc-800/50 rounded-lg p-8 mb-8 border border-slate-200 dark:border-transparent transition-colors duration-200">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
                    My Development Philosophy
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-gray-300">
                    <div className="flex items-start gap-3">
                        <span className="text-teal-600 dark:text-teal-400 text-xl">✓</span>
                        <p>Write clean, readable code that others can easily understand and maintain</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-teal-600 dark:text-teal-400 text-xl">✓</span>
                        <p>Follow design patterns and best practices to create scalable solutions</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-teal-600 dark:text-teal-400 text-xl">✓</span>
                        <p>Embrace continuous learning and stay updated with emerging technologies</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-teal-600 dark:text-teal-400 text-xl">✓</span>
                        <p>Focus on user experience and creating intuitive, accessible applications</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-slate-200 to-slate-100 dark:from-zinc-800/50 dark:to-zinc-700/50 rounded-lg p-8 border border-slate-200 dark:border-transparent transition-colors duration-200">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                    Let&apos;s Connect
                </h2>
                <p className="text-slate-600 dark:text-gray-300 mb-6">
                    I&apos;m always interested in new opportunities, interesting projects, 
                    or just having a good conversation about technology and plants!
                </p>
                <div className="flex justify-center gap-4">
                    <a 
                        href="/contact" 
                        className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                    >
                        Get In Touch
                    </a>
                    <a 
                        href="/projects" 
                        className="bg-slate-600 dark:bg-zinc-600 hover:bg-slate-700 dark:hover:bg-zinc-500 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                    >
                        View Projects
                    </a>
                </div>
            </div>
        </div>
    )
}