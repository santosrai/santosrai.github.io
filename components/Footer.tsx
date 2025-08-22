import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-zinc-900 text-sm text-center border-t border-slate-200 dark:border-zinc-700 py-8 px-4 transition-colors duration-200">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <a
            aria-label="github"
            className="rounded-lg bg-slate-200 dark:bg-zinc-800 p-3 text-2xl text-slate-700 dark:text-white transition-all duration-200 hover:bg-teal-600 hover:text-white hover:scale-105"
            href="https://github.com/santosrai"
            target="_blank" rel="author"
          >
            <FaGithub />
          </a>
          <a
            aria-label="x"
            className="rounded-lg bg-slate-200 dark:bg-zinc-800 p-3 text-2xl text-slate-700 dark:text-white transition-all duration-200 hover:bg-teal-600 hover:text-white hover:scale-105"
            href="https://twitter.com/54ntosh"
            target="_blank" rel="author"
          >
           <FaSquareXTwitter />
          </a>
          <a
            aria-label="linkedin"
            className="rounded-lg bg-slate-200 dark:bg-zinc-800 p-3 text-2xl text-slate-700 dark:text-white transition-all duration-200 hover:bg-teal-600 hover:text-white hover:scale-105"
            href="https://www.linkedin.com/in/santosh-rai/"
            target="_blank" rel="author"
          >
           <FaLinkedin />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-slate-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} by{' '}
            <a 
              href="https://github.com/santosrai" 
              className="text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200 font-medium"
              target="_blank" 
              rel="author"
            >
              Santosh Rai
            </a>
          </p>
        </div>
      </div>
    </footer>

  );
}
