import { business, navLinks, serviceGroups } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-pine">
      <div className="stripe-rule" />
      <div className="mx-auto max-w-7xl px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-display font-black text-cream text-xl">
            {business.fullName}
          </p>
          <p className="font-body text-sm text-smoke mt-2 leading-relaxed">
            {business.tagline}
            <br />
            {business.street}, {business.suburb} {business.state}{' '}
            {business.postcode}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass">
            Site
          </p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-linen/70 hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass">
            Services
          </p>
          <ul className="mt-3 space-y-2">
            {serviceGroups.map((group) => (
              <li key={group.id} className="font-body text-sm text-linen/70">
                {group.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass">
            Contact
          </p>
          <a
            href={business.phoneHref}
            className="block font-mono text-sm text-linen/70 hover:text-cream transition-colors mt-3"
          >
            {business.phoneLabel}
          </a>
          <p className="font-mono text-sm text-linen/70 mt-2">{business.email}</p>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-5 py-6 font-body text-xs text-smoke">
          {business.fullName} is a fictional business. This site is a portfolio
          spec build.
        </p>
      </div>
    </footer>
  )
}
