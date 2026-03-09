import { posts } from '../content/posts'
import ArticleCard from '../components/ArticleCard'
import FightBetsPromo from '../components/FightBetsPromo'

function TickerBanner() {
  const text = "\u{1FAF2} POWER SLAP 18 RESULTS ARE IN \u00B7 WOLVERINE RETAINS \u00B7 WATCH THE REPLAYS \u{1FAF2} \u00A0\u00A0\u00A0 \u{1FAF2} POWER SLAP 18 RESULTS ARE IN \u00B7 WOLVERINE RETAINS \u00B7 WATCH THE REPLAYS \u{1FAF2}"

  return (
    <div className="bg-slapblue/10 border-b border-slapblue/20 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-ticker">
        <span className="font-display text-sm tracking-widest text-slapblue-light uppercase py-2 px-4">
          {text}
        </span>
        <span className="font-display text-sm tracking-widest text-slapblue-light uppercase py-2 px-4">
          {text}
        </span>
      </div>
    </div>
  )
}

function EngagementStats() {
  const totalArticles = posts.length
  const totalReadTime = posts.reduce((sum, p) => {
    const mins = parseInt(p.readTime) || 5
    return sum + mins
  }, 0)

  return (
    <div className="flex items-center justify-center gap-6 md:gap-10 py-5">
      <div className="text-center">
        <span className="font-display text-2xl md:text-3xl text-slapblue-light">{totalArticles}</span>
        <p className="text-xs text-muted uppercase tracking-wider mt-0.5">Articles</p>
      </div>
      <div className="w-px h-8 bg-slapblue/20" />
      <div className="text-center">
        <span className="font-display text-2xl md:text-3xl text-slapblue-light">{totalReadTime}</span>
        <p className="text-xs text-muted uppercase tracking-wider mt-0.5">Min Reading</p>
      </div>
      <div className="w-px h-8 bg-slapblue/20" />
      <div className="text-center">
        <span className="font-display text-2xl md:text-3xl text-hotpink">100%</span>
        <p className="text-xs text-muted uppercase tracking-wider mt-0.5">Chaos</p>
      </div>
    </div>
  )
}

export default function Home() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)
  const firstHalf = rest.slice(0, 3)
  const secondHalf = rest.slice(3)

  return (
    <>
      <TickerBanner />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {featured && (
          <section className="mb-10">
            <ArticleCard post={featured} featured />
          </section>
        )}

        <EngagementStats />

        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-display text-2xl text-slapblue-light uppercase">Latest Slaps</h2>
            <div className="flex-1 section-divider" />
          </div>
          <div className="grid gap-5">
            {firstHalf.map(post => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <section className="my-8">
          <FightBetsPromo variant="inline" />
        </section>

        {secondHalf.length > 0 && (
          <section>
            <div className="grid gap-5">
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
    </>
  )
}
