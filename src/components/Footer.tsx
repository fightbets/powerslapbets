import { Link } from 'react-router-dom'
import { getAllTags } from '../content/posts'

export default function Footer() {
  const tags = getAllTags()

  return (
    <footer className="bg-midnight text-muted mt-16 border-t border-lime/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🫲</span>
              <span className="font-display text-xl">
                <span className="text-lime">POWER</span>
                <span className="text-hotpink">SLAP</span>
                <span className="text-textwhite">BETS</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              The only blog on the internet dedicated to the beautiful, absurd,
              brain-cell-questioning world of competitive slap fighting.
            </p>
          </div>

          <div>
            <h3 className="font-display text-textwhite text-sm uppercase tracking-wider mb-3">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <Link
                  key={tag}
                  to={`/tag/${tag}`}
                  className="tag bg-surface text-muted hover:bg-lime hover:text-midnight transition"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-textwhite text-sm uppercase tracking-wider mb-3">Get Slapped</h3>
            <p className="text-sm mb-4">No newsletter. We respect your inbox more than slappers respect each other's faces.</p>
            <div className="flex gap-3">
              <a href="#" className="bg-surface hover:bg-lime hover:text-midnight text-white px-4 py-2 rounded-full text-xs font-bold transition">
                Twitter/X
              </a>
              <a href="#" className="bg-surface hover:bg-hotpink text-white px-4 py-2 rounded-full text-xs font-bold transition">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <p>&copy; {new Date().getFullYear()} PowerSlapBets. Not affiliated with Power Slap League, TKO Group Holdings, or good judgment.</p>
          <p className="text-gray-600">Made with 🫲 and zero regard for CTE research</p>
        </div>
      </div>
    </footer>
  )
}
