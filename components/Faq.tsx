import { Reveal } from '@/components/ui/Reveal'
import { faqs } from '@/lib/constants'

/** Native <details>/<summary>: keyboard, screen reader and find-in-page for free. */
export function Faq() {
  return (
    <section id="faq" className="bg-pine">
      <div className="mx-auto max-w-3xl px-5 py-24 lg:py-36">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass">
            Questions
          </p>
          <h2 className="font-display font-black text-cream text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.02em] mt-5">
            Before you sit down.
          </h2>
        </Reveal>

        {/*
          A numbered notice, not an accordion.

          All three sibling demos had converged on the same <details> list, and
          a barbershop is the wrong place for one anyway: six short answers on
          a narrow measure read faster than six things to click. Numbered in
          brass and hung off a hairline, the way a shop prints its house rules.
        */}
        <ol className="mt-12 space-y-10">
          {/* Reveal sits inside the li and carries the grid: an ol may only
              contain li, and Reveal renders a div of its own. */}
          {faqs.map((faq, i) => (
            <li key={faq.question}>
              <Reveal
                delay={Math.min(i, 4) * 0.05}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line pt-6 sm:grid-cols-[3.5rem_1fr] sm:gap-x-6"
              >
                <span
                  className="font-mono text-sm text-brass tabular-nums pt-1"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display font-bold text-cream text-lg leading-snug">
                    {faq.question}
                  </h3>
                  <p className="font-body text-linen/80 leading-relaxed mt-2">
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
