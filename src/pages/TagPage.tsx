import { useParams, Link, Navigate } from 'react-router-dom'
import { getPostsByTag, getAllTags } from '../content/posts'
import ArticleCard from '../components/ArticleCard'

export default function TagPage() {
  const { tag } = useParams<{ tag: string }>()
  const allTags = getAllTags()

  if (!tag || !allTags.includes(tag)) return <Navigate to="/" replace />

  const tagPosts = getPostsByTag(tag)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted mb-6">
        <Link to="/" className="hover:text-slapblue-light transition">Home</Link>
        <span>/</span>
        <span className="text-gray-400">Tag: {tag}</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <h1 className="font-display text-3xl md:text-4xl text-slapblue-light uppercase">
          #{tag}
        </h1>
        <span className="bg-hotpink text-white text-sm font-bold px-3 py-1 rounded-full">
          {tagPosts.length} {tagPosts.length === 1 ? 'article' : 'articles'}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map(t => (
          <Link
            key={t}
            to={`/tag/${t}`}
            className={`tag no-underline transition ${
              t === tag ? 'bg-slapblue text-midnight' : 'bg-surface text-muted hover:bg-gray-800'
            }`}
          >
            {t}
          </Link>
        ))}
      </div>

      <div className="grid gap-4">
        {tagPosts.map(post => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
