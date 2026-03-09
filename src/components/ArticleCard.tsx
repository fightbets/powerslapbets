import { Link } from 'react-router-dom'
import type { Post } from '../content/posts'

export default function ArticleCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const tagColors: Record<string, string> = {
    wtf: 'bg-hotpink/20 text-hotpink',
    knockouts: 'bg-lime/20 text-lime',
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
        <article className="hero-gradient rounded-2xl p-8 md:p-12 text-white card-hover relative overflow-hidden border border-lime/10">
          <div className="absolute top-4 right-4 bg-lime text-midnight text-xs font-bold px-3 py-1 rounded-full uppercase">
            Featured
          </div>
          <span className="text-5xl md:text-6xl block mb-4">{post.emoji}</span>
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map(tag => (
              <span key={tag} className="tag bg-white/10 text-white/80">{tag}</span>
            ))}
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-3 group-hover:text-lime transition slap-glow">
            {post.title}
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-4">{post.subtitle}</p>
          <div className="flex items-center gap-4 text-sm text-muted">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.readTime} read</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link to={`/post/${post.slug}`} className="block no-underline group">
      <article className="bg-surface rounded-xl p-6 card-hover border border-gray-800 hover:border-lime/30">
        <div className="flex items-start gap-4">
          <span className="text-4xl flex-shrink-0 mt-1">{post.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {post.tags.map(tag => (
                <span key={tag} className={`tag ${tagColors[tag] || 'bg-gray-800 text-muted'}`}>{tag}</span>
              ))}
            </div>
            <h3 className="font-display text-xl md:text-2xl text-textwhite group-hover:text-lime transition leading-tight mb-1.5">
              {post.title}
            </h3>
            <p className="text-muted text-sm md:text-base line-clamp-2 mb-3">{post.subtitle}</p>
            <div className="flex items-center gap-3 text-xs text-muted">
              <span>{post.readTime} read</span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
