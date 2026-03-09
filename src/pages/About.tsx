import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted mb-6">
        <Link to="/" className="hover:text-slapblue-light transition">Home</Link>
        <span>/</span>
        <span className="text-gray-400">About</span>
      </nav>

      <div className="text-center mb-10">
        <span className="text-6xl block mb-4">🫲</span>
        <h1 className="font-display text-4xl md:text-5xl text-textwhite mb-3">
          ABOUT <span className="text-slapblue-light">POWER</span><span className="text-hotpink">SLAP</span><span className="text-textwhite">BETS</span>
        </h1>
        <p className="text-xl text-muted">Yes, This Is a Real Sport Now</p>
      </div>

      <div className="prose prose-lg prose-invert max-w-none">
        <h2>WTF is PowerSlapBets?</h2>
        <p>
          <strong>PowerSlapBets</strong> is a blog dedicated to the most gloriously absurd sport
          ever created: <strong>competitive slap fighting.</strong>
        </p>
        <p>
          Dana White looked at the UFC — a multi-billion dollar empire built on the world's most
          skilled martial artists — and said, "What if we just had people slap each other really hard?"
        </p>
        <p>
          And somehow, against all logic, reason, and medical advice, <strong>it worked.</strong>
          Power Slap is on TBS. It's on YouTube getting millions of views. People are betting on it.
          We live in the greatest timeline.
        </p>

        <h2>Why "PowerSlapBets"?</h2>
        <p>
          Because if you're going to watch two people take turns slapping each other unconscious,
          you might as well have <strong>money on it.</strong> We cover the sport, the drama, the
          knockouts, and yes — the betting angles. Because everything is better with skin in the game.
        </p>

        <h2>Who Writes This?</h2>
        <p>
          People who saw a Power Slap knockout compilation at 2 AM and couldn't look away.
          We're not medical professionals. We're not journalists. We're just humans who watched
          a 300-pound man get slapped into another dimension and thought, "I need to write about this."
        </p>

        <h2>The Rules</h2>
        <ul>
          <li><strong>We write like we're explaining this to our confused parents.</strong> Because honestly, we're confused too.</li>
          <li><strong>Everything is real.</strong> We don't make anything up. We don't have to. Reality is already insane enough.</li>
          <li><strong>No paywall.</strong> Free slap content forever.</li>
          <li><strong>Share everything.</strong> These articles are built for virality. Use them.</li>
        </ul>

        <blockquote>
          "I don't know what I expected, but it wasn't this." — Everyone who watches Power Slap for the first time
        </blockquote>
      </div>

      <div className="mt-10 bg-midnight rounded-2xl p-8 text-center border border-slapblue/20">
        <h3 className="font-display text-2xl mb-3">
          <span className="text-slapblue-light">JOIN</span>{' '}
          <span className="text-hotpink">THE SLAP</span>
        </h3>
        <p className="text-muted mb-4">Follow us. Share us. Question your life choices with us.</p>
        <div className="flex justify-center gap-3">
          <a href="#" className="bg-slapblue hover:bg-slapblue-dark text-midnight px-5 py-2.5 rounded-full font-bold text-sm transition no-underline">
            Twitter/X
          </a>
          <a href="#" className="bg-hotpink hover:bg-hotpink-dark text-white px-5 py-2.5 rounded-full font-bold text-sm transition no-underline">
            TikTok
          </a>
        </div>
      </div>
    </div>
  )
}
