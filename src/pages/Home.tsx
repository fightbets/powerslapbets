import { posts } from '../content/posts'
import ArticleCard from '../components/ArticleCard'
import FightBetsPromo from '../components/FightBetsPromo'

export default function Home() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)
  const firstHalf = rest.slice(0, 3)
  const secondHalf = rest.slice(3)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {featured && (
        <section className="mb-10">
          <ArticleCard post={featured} featured />
        </section>
      )}

      <section>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="font-display text-2xl text-lime uppercase">Latest Slaps</h2>
          <div className="flex-1 h-px bg-gray-800" />
        </div>
        <div className="grid gap-4">
          {firstHalf.map(post => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="my-6">
        <FightBetsPromo variant="inline" />
      </section>

      {secondHalf.length > 0 && (
        <section>
          <div className="grid gap-4">
            {secondHalf.map(post => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      <section className="mt-12">
        <FightBetsPromo variant="banner" />
      </section>
    </div>
  )
}
