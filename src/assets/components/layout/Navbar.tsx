import { FaLinkedin, FaSpotify } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/15 bg-black/70 px-5 py-3 shadow-xl backdrop-blur-md">

        {/* Logo */}
        <a
          href="/"
          className="rounded-full px-3 py-2 text-lg font-black tracking-tight text-white transition-transform duration-200 hover:scale-105"
        >
          G|B
        </a>

        {/* Navigation links */}
        <div className="hidden items-center gap-1 md:flex">

          <a
            href="#about"
            className="rounded-full px-4 py-2 font-bold text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-400 hover:text-white"
          >
            About
          </a>

          <a
            href="#projects"
            className="rounded-full px-4 py-2 font-bold text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-400 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="rounded-full px-4 py-2 font-bold text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 hover:text-white"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="rounded-full px-4 py-2 font-bold text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-400 hover:text-white"
          >
            Contact
          </a>

        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/YOUR-PROFILE/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg text-white transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400"
          >
            <FaLinkedin />
          </a>

          {/* Spotify */}
          <a
            href="https://open.spotify.com/playlist/0PHOAURQ1MDCKNnoXOTDav?si=LtgMA_t-TTWoyaKiOWlfeg&utm_source=native-share-menu&pi=Bxril4VlQW2nq&nd=1&dlsi=0859e3b21e6e46a3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-lg text-white transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-green-400"
          >
            <FaSpotify />
          </a>

        </div>

      </div>
    </nav>
  )
}

export default Navbar