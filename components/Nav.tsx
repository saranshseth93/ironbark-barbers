'use client'

import { useState } from 'react'
import { business, navLinks } from '@/lib/constants'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-pine/92 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="font-display font-black text-cream text-xl tracking-tight">
          {business.name}
          <span className="text-brass">.</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-linen hover:text-brass transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            className="hidden sm:inline font-mono text-sm text-linen hover:text-brass transition-colors"
          >
            {business.phoneLabel}
          </a>
          <a
            href="#book"
            className="bg-brass text-pine font-display font-bold text-sm px-4 py-2 hover:bg-cream transition-colors"
          >
            Book
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Menu"
            className="md:hidden w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block w-5 h-px bg-cream transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block w-5 h-px bg-cream transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-px bg-cream transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Main" className="md:hidden border-t border-line">
          <ul className="px-5 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-body text-cream border-b border-line last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
