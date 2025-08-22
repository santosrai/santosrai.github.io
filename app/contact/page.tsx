'use client'

import { useState } from 'react'
import { MdEmail } from 'react-icons/md'

export const dynamic = 'force-static'

export default function ContactPage() {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/santosh-rai/',
            icon: '💼',
            description: 'Professional network'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/santosrai',
            icon: '🐙',
            description: 'Code repositories'
        },
        {
            name: 'Twitter/X',
            url: 'https://twitter.com/54ntosh',
            icon: '🐦',
            description: 'Latest updates'
        }
    ]

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
                    Get In Touch
                </h1>
                <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                    I&apos;m always interested in hearing about new opportunities, interesting projects, 
                    or just want to say hello. Feel free to reach out!
                </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                        Let&apos;s Connect
                    </h2>
                    <p className="text-slate-600 dark:text-gray-300 mb-8">
                        Whether you have a question about my work, want to discuss a potential 
                        collaboration, or just want to say hi, I&apos;d love to hear from you.
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/20 rounded-lg flex items-center justify-center">
                            <MdEmail className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                            <h3 className="font-medium text-slate-900 dark:text-white">Email</h3>
                            <p className="text-slate-600 dark:text-gray-300">santosh.rai@example.com</p>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                        Follow Me
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 dark:border-zinc-700 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors duration-200"
                            >
                                <span className="text-2xl">{link.icon}</span>
                                <div>
                                    <div className="font-medium text-slate-900 dark:text-white">
                                        {link.name}
                                    </div>
                                    <div className="text-sm text-slate-500 dark:text-gray-400">
                                        {link.description}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Additional Info */}
            <div className="text-center py-8 border-t border-slate-200 dark:border-zinc-700">
                <p className="text-slate-600 dark:text-gray-300">
                    I typically respond to messages within 24 hours during business days.
                </p>
            </div>
        </div>
    )
}