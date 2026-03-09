import { Link } from 'react-router-dom'
import type { Post } from '../content/posts'

export default function ArticleCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const tagColors: Record<string, string> = {
    wtf: 'bg-hotpink/20 text-hotpink',
    knockouts: 'bg-slapblue/20 text-slapblue-light',
    'dana-white': 'bg-orange-900/40 text-orange-400',
    rules: 'bg-blue-900/40 text-blue-400',
    betting: 'bg-green-900/40 text-green-400',
    history: 'bg-purple-900/40 text-purple-400',
    fighters: 'bg-yellow-900/40 text-yellow-400',
    controversy: 'bg-red-900/40 text-red-400',
    culture: 'bg-pink-900/40 text-pink-400',
    science: 'bg-cyan-900/40 text-cyan-400',
  }

  if (featured) {
    return (
      <Link to={`/post/${post.slug}`} className="block no-underline group">
        <article className="hero-gradient rounded-2xl p-8 md:p-12 text-white card-hover relative overflow-hidden border border-slapblue/15 animate-border-pulse">
          {/* Decorative geometric triangles */}
          <div
            className="geo-triangle w-24 h-28 top-6 right-16 animate-float-triangle"
            style={{ '--tri-rotate': '15deg' } as React.CSSProperties}
          />
          <div
            className="geo-triangle w-16 h-20 bottom-12 right-8 animate-float-triangle-slow"
            style={{ '--tri-rotate': '-20deg' } as React.CSSProperties}
          />
          <div
            className="geo-triangle w-12 h-14 top-20 left-[60%] animate-float-triangle"
            style={{ '--tri-rotate': '45deg' } as React.CSSProperties}
          />
          <div
            className="geo-triangle w-8 h-10 bottom-24 left-12 animate-float-triangle-slow"
            style={{ '--tri-rotate': '-10deg' } as React.CSSProperties}
          />

          {/* Featured badge - neon style */}
          <div className="absolute top-4 right-4 bg-slapblue text-midnight text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(0,56,255,0.6)]">
            Featured
          </div>

          <div className="relative z-10">
            <span className="text-6xl md:text-7xl block mb-5 drop-shadow-lg">{post.emoji}</span>
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map(tag => (
                <span key={tag} className="tag bg-white/10 text-white/80 backdrop-blur-sm">{tag}</span>
              ))}
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-4 group-hover:text-slapblue-light transition animate-glow-pulse">
              {post.title}
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-5">{post.subtitle}</p>
            <div className="flex items-center gap-4 text-sm text-muted">
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.readTime} read</span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link to={`/post/${post.slug}`} className="block no-underline group">
      <article className="accent-bar-hover bg-surface rounded-xl p-6 md:p-7 card-hover border border-gray-800 hover:border-slapblue/30">
        <div className="flex items-start gap-5">
          <span className="text-5xl flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200">{post.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {post.tags.map(tag => (
                <span key={tag} className={`tag ${tagColors[tag] || 'bg-gray-800 text-muted'}`}>{tag}</span>
              ))}
            </div>
            <h3 className="font-display text-xl md:text-2xl text-textwhite group-hover:text-slapblue-light transition leading-tight mb-2">
              {post.title}
            </h3>
            <p className="text-muted text-sm md:text-base line-clamp-2 mb-3">{post.subtitle}</p>
            <div className="flex items-center gap-3 text-xs text-muted">
              <span>{post.readTime} read</span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              {/* READ indicator on hover */}
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-slapblue-light font-bold tracking-wider uppercase text-[11px]">
                Read &rarr;
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
