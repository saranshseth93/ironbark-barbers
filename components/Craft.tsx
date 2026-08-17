import { Photo } from '@/components/ui/Photo'
import { Reveal } from '@/components/ui/Reveal'
import { craft } from '@/lib/constants'

/**
 * Stands in for the usual "meet the team" section.
 *
 * A demo site should not put invented names and biographies onto photographs
 * of real people who modelled for a stock library. How the shop works is more
 * useful to a reader anyway.
 */
export function Craft() {
  return (
    <section id="craft" className="bg-moss border-y border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="border border-line">
              <Photo
                slot="shave"
                alt="A straight-razor shave with a hot towel"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="w-full h-auto block"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass">
                The shop
              </p>
              <h2 className="font-display font-black text-cream text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.02em] mt-5">
                How we work.
              </h2>
            </Reveal>

            <dl className="mt-8">
              {craft.map((item, i) => (
                // Reveal carries the row styling rather than wrapping another
                // div. A dl may group a dt/dd pair inside one div, but not two
                // nested ones, and Reveal renders a div of its own — so this
                // was dl > div > div > dt, which invalidates the definition
                // list and malforms the accessibility tree with it.
                <Reveal
                  key={item.title}
                  delay={i * 0.08}
                  className="py-5 border-b border-line"
                >
                  <dt className="font-display font-bold text-cream text-lg">
                    {item.title}
                  </dt>
                  <dd className="font-body text-sm text-linen/80 leading-relaxed mt-2">
                    {item.body}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
