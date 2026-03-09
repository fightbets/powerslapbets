import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = location.pathname === '/'

  return (
    <header className="bg-midnight text-white sticky top-0 z-50 border-b border-slapblue/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-3xl">🫲</span>
          <div>
            <h1 className="font-display text-2xl md:text-3xl tracking-tight leading-none">
              <span className="text-slapblue-light">POWER</span>
              <span className="text-hotpink">SLAP</span>
              <span className="text-textwhite">BETS</span>
            </h1>
            <p className="text-[10px] text-muted tracking-widest uppercase hidden md:block">
              Yes, This Is a Real Sport Now
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className={`hover:text-slapblue-light transition ${isHome ? 'text-slapblue-light' : 'text-gray-300'}`}>Home</Link>
          <Link to="/tag/wtf" className="text-gray-300 hover:text-slapblue-light transition">WTF</Link>
          <Link to="/tag/knockouts" className="text-gray-300 hover:text-slapblue-light transition">Knockouts</Link>
          <Link to="/tag/dana-white" className="text-gray-300 hover:text-slapblue-light transition">Dana White</Link>
          <Link to="/about" className="text-gray-300 hover:text-slapblue-light transition">About</Link>
          <a
            href="https://twitter.com/intent/tweet?text=PowerSlapBets%20🫲%20The%20slappiest%20blog&url=https://powerslapbets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-share-pulse bg-slapblue text-midnight px-4 py-1.5 rounded-full text-xs font-bold hover:bg-slapblue-dark transition"
          >
            Share 🫲
          </a>
        </nav>

        <button
          className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-midnight border-t border-gray-800 px-4 py-4 flex flex-col gap-3 text-sm">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-slapblue-light">Home</Link>
          <Link to="/tag/wtf" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-slapblue-light">WTF</Link>
          <Link to="/tag/knockouts" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-slapblue-light">Knockouts</Link>
          <Link to="/tag/dana-white" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-slapblue-light">Dana White</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-slapblue-light">About</Link>
        </nav>
      )}

      {/* Gradient underline */}
      <div className="header-gradient-line" />
    </header>
  )
}
