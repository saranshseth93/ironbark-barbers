import { business } from '@/lib/constants'

/**
 * A shopfront plate, not a link farm.
 *
 * The four-column version repeated the nav, listed services that linked
 * nowhere, and was the same footer the other two demos shipped. A barbershop
 * on a single street needs one thing at the bottom of the page: where it is
 * and how to reach it. Centred, because the rest of the site is.
 */
export function Footer() {
  return (
    <footer className="bg-pine">
      <div className="stripe-rule" />
      <div className="mx-auto max-w-2xl px-5 py-16 text-center">
        <p className="font-display font-black text-cream text-2xl">
          {business.fullName}
        </p>
        <p className="font-body text-sm text-smoke mt-3 leading-relaxed">
          {business.tagline}
        </p>

        <p className="font-body text-linen mt-8 leading-relaxed">
          {business.street}, {business.suburb} {business.state} {business.postcode}
        </p>

        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href={business.phoneHref}
            className="font-mono text-linen hover:text-brass transition-colors"
          >
            {business.phoneLabel}
          </a>
          <span className="font-mono text-sm text-smoke">{business.email}</span>
        </p>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-5xl px-5 py-6 font-body text-xs text-smoke">
          {business.fullName} is a fictional business. This site is a portfolio
          spec build.
        </p>
      </div>
    </footer>
  )
}
