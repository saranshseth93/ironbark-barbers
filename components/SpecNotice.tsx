import { specNotice } from '@/lib/constants'

export function SpecNoticeBar() {
  return (
    <div className="bg-brass text-pine">
      <p className="mx-auto max-w-7xl px-5 py-2 font-mono text-[11px] tracking-wide text-center">
        <span className="font-semibold uppercase">{specNotice.short}</span>
        <span className="hidden sm:inline">
          {' '}— a spec build by{' '}
          <a
            href={specNotice.studioUrl}
            className="underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            {specNotice.studio}
          </a>
          . Ironbark is not a real barbershop.
        </span>
      </p>
    </div>
  )
}

export function SpecNoticeFooter() {
  return (
    <aside aria-label="About this site" className="bg-moss border-t border-line">
      <div className="mx-auto max-w-3xl px-5 py-14 text-center">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass">
          About this site
        </h2>
        <p className="font-body text-sm text-linen/80 leading-relaxed mt-4">
          {specNotice.long}
        </p>
        <p className="font-body text-sm text-linen/80 leading-relaxed mt-4">
          Photography is royalty-free and credited in{' '}
          <a
            href={specNotice.creditsUrl}
            className="text-brass underline underline-offset-4 hover:text-cream transition-colors"
          >
            CREDITS.md
          </a>
          . Built by{' '}
          <a
            href={specNotice.studioUrl}
            className="text-brass underline underline-offset-4 hover:text-cream transition-colors"
          >
            {specNotice.studio}
          </a>
          .
        </p>
      </div>
    </aside>
  )
}
