import { Reveal } from '@/components/ui/Reveal'
import { faqs } from '@/lib/constants'

/** Native <details>/<summary>: keyboard, screen reader and find-in-page for free. */
export function Faq() {
  return (
    <section id="faq" className="bg-pine">
      <div className="mx-auto max-w-3xl px-5 py-20 lg:py-28">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass">
            Questions
          </p>
          <h2 className="font-display font-black text-cream text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.02em] mt-5">
            Before you sit down.
          </h2>
        </Reveal>

        <div className="mt-10 border-t border-line">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i, 4) * 0.05}>
              <details className="group border-b border-line">
                <summary className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-bold text-cream text-lg leading-snug group-hover:text-brass transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 font-mono text-brass text-xl leading-none mt-1 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="font-body text-linen/80 leading-relaxed pb-6 pr-10 -mt-1">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
