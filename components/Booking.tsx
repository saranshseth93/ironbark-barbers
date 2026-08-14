'use client'

import { useState } from 'react'
import { Photo } from '@/components/ui/Photo'
import {
  allServices,
  chairs,
  timeSlots,
  business,
  type ServiceItem,
} from '@/lib/constants'

type Step = 1 | 2 | 3 | 4

const stepLabels: Record<Exclude<Step, 4>, string> = {
  1: 'Service',
  2: 'Chair',
  3: 'Time',
}

/**
 * Three-step booking flow.
 *
 * Real state, real validation, real back-navigation — the point of the demo is
 * to show the interaction a barbershop actually needs. Nothing is submitted:
 * the confirmation step says so, and no request leaves the page.
 */
export function Booking() {
  const [step, setStep] = useState<Step>(1)
  const [service, setService] = useState<ServiceItem | null>(null)
  const [chair, setChair] = useState<(typeof chairs)[number] | null>(null)
  const [slot, setSlot] = useState<string | null>(null)

  function reset() {
    setService(null)
    setChair(null)
    setSlot(null)
    setStep(1)
  }

  return (
    <section id="book" className="relative bg-pine overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Photo
          slot="tools"
          alt=""
          sizes="100vw"
          className="w-full h-full object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pine via-pine/90 to-pine" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 py-20 lg:py-28">
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass">
            Book a chair
          </p>
          <h2 className="font-display font-black text-cream text-[clamp(2.2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.02em] mt-5">
            Three taps and you&apos;re in.
          </h2>
        </div>

        {/* Progress */}
        <ol className="flex items-center justify-center gap-2 sm:gap-4 mt-10">
          {([1, 2, 3] as const).map((n) => {
            const state = step > n ? 'done' : step === n ? 'current' : 'todo'
            return (
              <li key={n} className="flex items-center gap-2 sm:gap-4">
                <span
                  className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] ${
                    state === 'todo' ? 'text-smoke' : 'text-cream'
                  }`}
                  aria-current={state === 'current' ? 'step' : undefined}
                >
                  <span
                    className={`w-6 h-6 flex items-center justify-center border text-[11px] ${
                      state === 'done'
                        ? 'bg-brass border-brass text-pine'
                        : state === 'current'
                          ? 'border-brass text-brass'
                          : 'border-line text-smoke'
                    }`}
                  >
                    {state === 'done' ? '✓' : n}
                  </span>
                  <span className="hidden sm:inline">{stepLabels[n]}</span>
                </span>
                {n < 3 ? (
                  <span
                    className={`w-6 sm:w-10 h-px ${step > n ? 'bg-brass' : 'bg-line'}`}
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            )
          })}
        </ol>

        <div className="border border-line bg-moss/70 backdrop-blur-sm mt-8 p-6 sm:p-8">
          {/* ---------------------------------------------------- step 1 --- */}
          {step === 1 ? (
            <fieldset>
              <legend className="font-display font-bold text-cream text-xl mb-5">
                What are you after?
              </legend>
              <div className="grid sm:grid-cols-2 gap-2">
                {allServices.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setService(item)
                      setStep(2)
                    }}
                    className="text-left border border-line p-4 hover:border-brass hover:bg-fern/40 transition-colors group"
                  >
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="font-display font-bold text-cream group-hover:text-brass transition-colors">
                        {item.name}
                      </span>
                      <span className="font-mono text-sm text-cream tabular-nums shrink-0">
                        ${item.price}
                      </span>
                    </span>
                    <span className="block font-mono text-xs text-smoke mt-1 tabular-nums">
                      {item.minutes} min
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>
          ) : null}

          {/* ---------------------------------------------------- step 2 --- */}
          {step === 2 ? (
            <fieldset>
              <legend className="font-display font-bold text-cream text-xl mb-5">
                Which chair?
              </legend>
              <div className="grid sm:grid-cols-2 gap-2">
                {chairs.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setChair(c)
                      setStep(3)
                    }}
                    className="text-left border border-line p-4 hover:border-brass hover:bg-fern/40 transition-colors group"
                  >
                    <span className="block font-display font-bold text-cream group-hover:text-brass transition-colors">
                      {c.label}
                    </span>
                    <span className="block font-body text-sm text-linen/70 mt-1">
                      {c.speciality}
                    </span>
                  </button>
                ))}
              </div>
              <BackButton onClick={() => setStep(1)} />
            </fieldset>
          ) : null}

          {/* ---------------------------------------------------- step 3 --- */}
          {step === 3 ? (
            <fieldset>
              <legend className="font-display font-bold text-cream text-xl mb-2">
                When suits?
              </legend>
              <p className="font-body text-sm text-smoke mb-5">
                Showing Saturday. Greyed-out times are already taken.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {timeSlots.map((s) => (
                  <button
                    key={s.time}
                    type="button"
                    disabled={s.taken}
                    onClick={() => {
                      setSlot(s.time)
                      setStep(4)
                    }}
                    className={`font-mono text-sm tabular-nums border p-3 transition-colors ${
                      s.taken
                        ? 'border-line/50 text-smoke/40 line-through cursor-not-allowed'
                        : 'border-line text-cream hover:border-brass hover:bg-brass hover:text-pine'
                    }`}
                  >
                    {s.time}
                  </button>
                ))}
              </div>
              <BackButton onClick={() => setStep(2)} />
            </fieldset>
          ) : null}

          {/* ---------------------------------------------------- step 4 --- */}
          {step === 4 && service && chair && slot ? (
            <div role="status" aria-live="polite">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass">
                That&apos;s the flow
              </p>
              <h3 className="font-display font-black text-cream text-2xl mt-3">
                {service.name}, {chair.label.toLowerCase()}, {slot}.
              </h3>

              <dl className="mt-6 border-t border-line">
                {[
                  ['Service', `${service.name} — $${service.price}`],
                  ['In the chair', `${service.minutes} minutes`],
                  ['Chair', `${chair.label} · ${chair.speciality}`],
                  ['Time', `Saturday, ${slot}`],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between gap-4 py-3 border-b border-line"
                  >
                    <dt className="font-mono text-xs uppercase tracking-[0.16em] text-smoke">
                      {label}
                    </dt>
                    <dd className="font-body text-sm text-cream text-right">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="font-body text-sm text-linen/80 leading-relaxed mt-6 border-l-2 border-copper pl-4">
                Ironbark is a demo site for a barbershop that does not exist, so
                nothing was booked, no chair was held and nothing was sent
                anywhere. On a real build this is where the confirmation email
                and the calendar hold would fire.
              </p>

              <button
                type="button"
                onClick={reset}
                className="mt-6 bg-brass text-pine font-display font-bold px-6 py-3 hover:bg-cream transition-colors"
              >
                Run it again
              </button>
            </div>
          ) : null}
        </div>

        <p className="text-center font-body text-sm text-smoke mt-6">
          Prefer to talk to someone? Ring{' '}
          <a
            href={business.phoneHref}
            className="text-brass underline underline-offset-4 hover:text-cream transition-colors"
          >
            {business.phoneLabel}
          </a>{' '}
          or just walk in.
        </p>
      </div>
    </section>
  )
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-smoke hover:text-brass transition-colors"
    >
      ← Back
    </button>
  )
}
