import { useParams, Link, Navigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost, posts } from '../content/posts'
import ShareBar from '../components/ShareBar'
import FightBetsPromo from '../components/FightBetsPromo'
import { useEffect } from 'react'

export default function Article() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) return <Navigate to="/" replace />

  const currentIndex = posts.findIndex(p => p.slug === slug)
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted mb-6">
        <Link to="/" className="hover:text-slapblue-light transition">Home</Link>
        <span>/</span>
        <span className="text-gray-400 truncate">{post.title}</span>
      </nav>

      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map(tag => (
            <Link key={tag} to={`/tag/${tag}`} className="tag bg-slapblue/10 text-slapblue-light hover:bg-slapblue hover:text-midnight transition no-underline">
              {tag}
            </Link>
          ))}
        </div>
        <span className="text-5xl block mb-4">{post.emoji}</span>
        <h1 className="font-display text-4xl md:text-5xl text-textwhite leading-tight mb-3 slap-glow">
          {post.title}
        </h1>
        <p className="text-xl text-muted mb-4">{post.subtitle}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
          <span className="font-medium text-gray-400">{post.author}</span>
          <span>·</span>
          <span>{post.readTime} read</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <ShareBar post={post} />
      </header>

      <hr className="border-gray-800 mb-8" />

      <article className="prose prose-lg prose-invert max-w-none">
        <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
      </article>

      <FightBetsPromo variant="article" />

      <div className="mt-6 pt-6 border-t border-gray-800">
        <p className="text-sm text-muted mb-3 font-medium">Enjoyed this? Spread the slap.</p>
        <ShareBar post={post} />
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {prevPost && (
          <Link to={`/post/${prevPost.slug}`} className="bg-surface rounded-xl p-5 border border-gray-800 hover:border-slapblue/30 transition no-underline group">
            <span className="text-xs text-muted uppercase tracking-wider">Previous</span>
            <p className="font-display text-lg text-textwhite group-hover:text-slapblue-light transition mt-1">
              {prevPost.emoji} {prevPost.title}
            </p>
          </Link>
        )}
        {nextPost && (
          <Link to={`/post/${nextPost.slug}`} className="bg-surface rounded-xl p-5 border border-gray-800 hover:border-slapblue/30 transition no-underline group md:text-right">
            <span className="text-xs text-muted uppercase tracking-wider">Next</span>
            <p className="font-display text-lg text-textwhite group-hover:text-slapblue-light transition mt-1">
              {nextPost.emoji} {nextPost.title}
            </p>
          </Link>
        )}
      </div>
    </div>
  )
}
