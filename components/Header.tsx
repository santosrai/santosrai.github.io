"use client";
import { use, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import config from "@/lib/config";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = {
    menuItems: {
      edges: [
        {
          node: {
            databaseId: 1,
            uri: "/",
            label: "Home",
          },
        },
        {
          node: {
            databaseId: 2,
            uri: "/projects",
            label: "Projects",
          },
        },
        {
          node: {
            databaseId: 3,
            uri: "/blog",
            label: "Blog",
          },
        },
        {
          node: {
            databaseId: 4,
            uri: "/about",
            label: "About",
          }
        },
        {
          node: {
            databaseId: 5,
            uri: "/contact",
            label: "Contact",
          }
        },

      ],
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-zinc-800/95 backdrop-blur-sm shadow-lg border-b border-slate-200 dark:border-zinc-700 transition-colors duration-200">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Left side - Profile */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative">
            <Image
              alt="Santosh Rai"
              className="h-12 w-12 md:h-16 md:w-16 rounded-full shadow-lg ring-2 ring-teal-400/30"
              height={64}
              src={config.profileLogo}
              width={64}
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-teal-500 rounded-full border-2 border-white dark:border-zinc-800"></div>
          </div>
          <div className="flex flex-col space-y-1 min-w-0">
            <h1 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-0 truncate">{config.siteName}</h1>
            <p className="text-xs md:text-sm text-slate-600 dark:text-gray-300 truncate">{config.intro}</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-700/50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-slate-900 dark:text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <nav className="flex items-center gap-1 lg:gap-2">
            {!!menu && menu.menuItems.edges.map((item) => (
              <Link
                key={item.node.databaseId}
                href={item.node.uri}
                className="px-3 py-2 rounded-lg text-slate-900 dark:text-white bg-slate-100 dark:bg-transparent border border-slate-300 dark:border-zinc-600 hover:bg-teal-600 hover:border-teal-500 hover:text-white hover:scale-105 transition-all duration-200 font-medium text-sm"
              >
                {item.node.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white/95 dark:bg-zinc-800/95 backdrop-blur-sm border-t border-slate-200 dark:border-zinc-700">
          <div className="p-6 space-y-2">
            {!!menu && menu.menuItems.edges.map((item) => (
              <Link
                key={item.node.databaseId}
                href={item.node.uri}
                className="block py-3 px-4 text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-300 hover:bg-slate-100 dark:hover:bg-zinc-700/50 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.node.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200 dark:border-zinc-700 mt-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-900 dark:text-white text-sm font-medium">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
