import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (

    <footer className="text-sm text-center border-t-2 p-8">
      <div className="flex flex-wrap justify-center gap-4 pb-4">
        <a
          aria-label="github"
          className="rounded bg-zinc-900 p-1 text-2xl text-white transition-colors duration-200 hover:bg-zinc-700"
          href="https://github.com/santosrai"
          target="_blank" rel="author"
        >
          <FaGithub />
        </a>
        <a
          aria-label="x"
          className="rounded bg-zinc-900 p-1 text-2xl text-white transition-colors duration-200 hover:bg-zinc-700"
          href="https://twitter.com/54ntosh"
          target="_blank" rel="author"
        >
         <FaSquareXTwitter />
        </a>
        <a
          aria-label="linkedin"
          className="rounded bg-zinc-900 p-1 text-2xl text-white transition-colors duration-200 hover:bg-zinc-700"
          href="https://www.linkedin.com/in/santosh-rai/"
          target="_blank" rel="author"
        >
         <FaLinkedin />
        </a>
        &copy; {new Date().getFullYear()} -  by{' '}
      <a href="">Santosh Rai</a>
      </div>
      
    </footer>

  );
}
