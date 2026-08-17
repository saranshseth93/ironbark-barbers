import { Photo } from '@/components/ui/Photo'
import { business, hours } from '@/lib/constants'

export function Hero() {
  const today = hours.find((h) => h.highlight)

  return (
    <section id="top" className="bg-pine">
      <div className="mx-auto max-w-7xl px-5 pt-14 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass">
              {business.suburb} · Est. 2019
            </p>

            <h1 className="font-display font-black text-cream leading-[0.88] tracking-[-0.02em] text-[clamp(3.2rem,9vw,7rem)] mt-6">
              A proper
              <br />
              <span className="text-brass">barbershop.</span>
            </h1>

            <p className="font-body text-lg text-linen leading-relaxed mt-7 max-w-lg">
              Fades, scissor work and straight-razor shaves on {business.street}.
              Walk in and wait, or book a chair and do not. Hot towel on every
              cut, no product pitch at the counter.
            </p>

            <div className="flex flex-wrap gap-3 mt-9">
              <a
                href="#book"
                className="bg-brass text-pine font-display font-bold text-lg px-7 py-3.5 hover:bg-cream transition-colors"
              >
                Book a chair
              </a>
              <a
                href="#prices"
                className="border border-line text-cream font-display font-bold text-lg px-7 py-3.5 hover:border-brass hover:text-brass transition-colors"
              >
                Price list
              </a>
            </div>

            {today ? (
              <p className="font-mono text-xs text-smoke mt-7">
                {today.days.toUpperCase()} · {today.hours} · WALK-INS FROM OPEN
              </p>
            ) : null}
          </div>

          <div className="relative">
            <div className="parallax border border-line">
              <Photo
                slot="hero"
                alt="The interior of a barbershop"
                sizes="(min-width: 1024px) 44vw, 116vw"
                priority
                className="parallax-img w-full h-auto block"
              />
            </div>
            <div className="stripe-rule mt-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
