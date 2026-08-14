import { Photo } from '@/components/ui/Photo'
import { Reveal } from '@/components/ui/Reveal'
import { business, hours } from '@/lib/constants'

export function FindUs() {
  return (
    <section id="find" className="bg-moss border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="border border-line">
            <Photo
              slot="shopfront"
              alt="A barbershop shopfront seen from the street"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="w-full h-auto block"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass">
              Find us
            </p>
            <h2 className="font-display font-black text-cream text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.02em] mt-5">
              {business.street},
              <br />
              {business.suburb}.
            </h2>
            <p className="font-body text-linen leading-relaxed mt-5 max-w-md">
              Between the tram stop and the laundromat. Look for the green tiles.
              Street parking after 6pm, and the bike rack is ours.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-8 border-t border-line">
              {hours.map((entry) => (
                <div
                  key={entry.days}
                  className="flex justify-between gap-4 py-3 border-b border-line"
                >
                  <dt className="font-body text-cream">{entry.days}</dt>
                  <dd
                    className={`font-mono text-sm tabular-nums ${
                      entry.highlight ? 'text-brass' : 'text-linen/70'
                    }`}
                  >
                    {entry.hours}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-smoke">
                  Phone
                </p>
                <a
                  href={business.phoneHref}
                  className="font-mono text-cream hover:text-brass transition-colors"
                >
                  {business.phoneLabel}
                </a>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-smoke">
                  Email
                </p>
                <p className="font-mono text-cream">{business.email}</p>
              </div>
            </div>

            <p className="font-body text-xs text-smoke mt-6 leading-relaxed max-w-md">
              Address, phone and email are placeholders. Nothing here reaches a
              real shop.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
