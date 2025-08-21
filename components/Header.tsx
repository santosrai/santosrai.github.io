"use client";
import { use, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import config from "@/lib/config";

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
    <header className="w-full bg-green-800">
    <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
      {/* Left side - Profile */}
      <div className="flex items-center gap-2 md:gap-4">
        <Image
          alt="Santosh Rai"
          className="h-16 w-16 md:h-24 md:w-24 rounded-full shadow-lg"
          height={96}
          src={config.profileLogo}
          width={96}
        />
        <div className="flex flex-col">
          <h1 className="text-lg md:text-2xl mb-0">{config.siteName}</h1>
          <p className="text-sm md:text-base">{config.intro}</p>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2">
        {!!menu && menu.menuItems.edges.map((item) => (
          <Link
            key={item.node.databaseId}
            href={item.node.uri}
            className="px-4 py-2 rounded-md text-white border border-teal-400 hover:bg-teal-400 transition-colors"
          >
            {item.node.label}
          </Link>
        ))}
      </nav>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <nav className="md:hidden bg-green-900 p-4">
        {!!menu && menu.menuItems.edges.map((item) => (
          <Link
            key={item.node.databaseId}
            href={item.node.uri}
            className="block py-2 text-white hover:text-teal-400"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.node.label}
          </Link>
        ))}
      </nav>
    )}
  </header>
  );
}
