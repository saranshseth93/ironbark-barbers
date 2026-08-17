import { Photo } from '@/components/ui/Photo'
import { Reveal } from '@/components/ui/Reveal'
import { serviceGroups } from '@/lib/constants'

export function Prices() {
  return (
    <section id="prices" className="bg-moss border-y border-line">
      <div className="mx-auto max-w-5xl px-5 py-24 lg:py-36">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass">
                Price list
              </p>
              <h2 className="font-display font-black text-cream text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.02em] mt-5">
                What it costs,
                <br />
                and how long
                <br />
                it takes.
              </h2>
              <p className="font-body text-linen leading-relaxed mt-5">
                One price per service. No junior rate, no senior rate, no
                surcharge for thick hair. The time next to each one is the time
                you are actually in the chair.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border border-line mt-8 hidden lg:block">
                <Photo
                  slot="cut"
                  alt="A barber cutting a client’s hair with clippers"
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="w-full h-auto block"
                />
              </div>
            </Reveal>
          </div>

          <div className="space-y-14">
            {serviceGroups.map((group, gi) => (
              <Reveal key={group.id} delay={gi * 0.08}>
                <div>
                  <div className="flex items-baseline gap-4 pb-4 border-b border-line">
                    <h3 className="font-display font-bold text-brass text-2xl">
                      {group.title}
                    </h3>
                    <span className="flex-1" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">
                      Price / Time
                    </span>
                  </div>

                  <ul>
                    {group.items.map((item) => (
                      <li
                        key={item.id}
                        className="py-5 border-b border-line/60 flex gap-5"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h4 className="font-display font-bold text-cream text-lg">
                              {item.name}
                            </h4>
                            {item.popular ? (
                              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-pine bg-brass px-1.5 py-0.5">
                                Most booked
                              </span>
                            ) : null}
                          </div>
                          <p className="font-body text-sm text-linen/80 leading-relaxed mt-1.5">
                            {item.description}
                          </p>
                        </div>

                        <div className="text-right shrink-0">
                          <p className="font-mono font-semibold text-cream text-lg tabular-nums">
                            ${item.price}
                          </p>
                          <p className="font-mono text-xs text-smoke tabular-nums mt-0.5">
                            {item.minutes} min
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <p className="font-body text-sm text-smoke italic mt-4">
                    {group.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
