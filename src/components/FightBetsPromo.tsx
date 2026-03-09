import { useState } from 'react'

const FIGHTBETS_URL = 'https://fightbets.com?source=powerslapbets'

const taglines = [
  "You watched a man get slapped unconscious. Might as well bet on it.",
  "Back your slap or stay quiet.",
  "If you're not betting on slaps, are you even living?",
  "0% fees. 100% open-hand chaos.",
  "The only thing harder than these slaps is losing money. (You won't — 0% fees.)",
  "Your palm-reading skills are useless here. Bet on FightBets instead.",
  "Predict the slap. Collect the bag.",
  "Degeneracy has a new home. Welcome.",
]

function FBLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'w-6 h-6', md: 'w-8 h-8', lg: 'w-10 h-10' }
  return <img src="/fightbets-logo.png" alt="FightBets" className={`${sizes[size]} rounded-lg`} />
}

export default function FightBetsPromo({ variant = 'banner' }: { variant?: 'banner' | 'inline' | 'article' }) {
  const [tagline] = useState(() => taglines[Math.floor(Math.random() * taglines.length)])

  if (variant === 'article') {
    return (
      <div className="my-8 bg-gradient-to-r from-midnight via-surface to-midnight rounded-xl p-6 text-center border border-slapblue/20">
        <div className="flex items-center justify-center gap-2 mb-2">
          <FBLogo size="md" />
          <p className="text-slapblue-light font-display text-sm uppercase tracking-widest">From the PowerSlapBets crew</p>
        </div>
        <h3 className="text-textwhite font-display text-2xl md:text-3xl mb-2">
          Think You Know Slaps?
        </h3>
        <p className="text-muted text-lg mb-1 italic">"{tagline}"</p>
        <p className="text-muted text-sm mb-4">
          Bet on fights with <span className="text-slapblue-light font-bold">0% fees</span> on FightBets. Powered by Polymarket.
        </p>
        <a
          href={FIGHTBETS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slapblue hover:bg-slapblue-dark text-midnight px-6 py-2.5 rounded-full font-bold text-sm transition no-underline"
        >
          <FBLogo size="sm" />
          Start Betting — It's Free
        </a>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className="bg-surface rounded-xl p-5 border-2 border-dashed border-slapblue/30 hover:border-slapblue transition animate-border-pulse">
        <div className="flex items-center gap-4">
          <FBLogo size="lg" />
          <div className="flex-1">
            <p className="font-display text-lg text-textwhite mb-0.5">
              Done reading? Start betting.
            </p>
            <p className="text-muted text-sm mb-2">{tagline}</p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={FIGHTBETS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-slapblue hover:bg-slapblue-dark text-midnight px-4 py-1.5 rounded-full font-bold text-xs transition no-underline"
              >
                <FBLogo size="sm" />
                Bet on FightBets
              </a>
              <span className="text-xs text-muted">0% fees · Polymarket · USDC</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Banner variant — dramatic with animated border and triangles
  return (
    <div className="relative overflow-hidden bg-midnight rounded-2xl p-8 md:p-10 text-center border border-slapblue/20 animate-border-pulse-strong">
      {/* Decorative geometric elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 border-4 border-slapblue/10 rotate-45 rounded-lg" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-hotpink/10 rotate-12 rounded-lg" />
      <div
        className="geo-triangle w-16 h-20 top-8 left-12 animate-float-triangle"
        style={{ '--tri-rotate': '25deg' } as React.CSSProperties}
      />
      <div
        className="geo-triangle w-10 h-12 bottom-16 right-20 animate-float-triangle-slow"
        style={{ '--tri-rotate': '-15deg' } as React.CSSProperties}
      />
      <div
        className="geo-triangle w-8 h-10 top-1/2 right-8 animate-float-triangle"
        style={{ '--tri-rotate': '40deg' } as React.CSSProperties}
      />

      <div className="relative z-10">
        <p className="text-slapblue-light font-display text-xs uppercase tracking-[0.2em] mb-2">Presented by</p>
        <div className="flex items-center justify-center gap-3 mb-3">
          <FBLogo size="lg" />
          <h2 className="font-display text-4xl md:text-5xl text-textwhite">
            FIGHT<span className="text-hotpink">BETS</span>
          </h2>
        </div>
        <p className="text-muted text-lg md:text-xl max-w-lg mx-auto mb-2">
          {tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted mb-6">
          <span className="flex items-center gap-1"><span className="text-slapblue-light">&#10003;</span> 0% Fees</span>
          <span className="flex items-center gap-1"><span className="text-slapblue-light">&#10003;</span> Powered by Polymarket</span>
          <span className="flex items-center gap-1"><span className="text-slapblue-light">&#10003;</span> Bet with USDC</span>
          <span className="flex items-center gap-1"><span className="text-slapblue-light">&#10003;</span> No KYC Hassle</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={FIGHTBETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-cta-glow inline-flex items-center justify-center gap-2 bg-slapblue hover:bg-slapblue-dark text-midnight px-10 py-3.5 rounded-full font-bold text-base transition no-underline"
          >
            <FBLogo size="sm" />
            Start Betting — 0% Fees
          </a>
          <a
            href={FIGHTBETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface hover:bg-gray-800 text-textwhite px-10 py-3.5 rounded-full font-bold text-base transition no-underline border border-gray-700 hover:border-slapblue/30"
          >
            Browse Fight Markets
          </a>
        </div>
        <p className="text-gray-600 text-xs mt-4">
          Not financial advice. Not medical advice either. Definitely not life advice. 🫲
        </p>
      </div>
    </div>
  )
}
