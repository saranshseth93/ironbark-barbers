import type { Metadata } from 'next'
import { fraunces, manrope, plexMono } from '@/lib/fonts'
import './globals.css'

const title = 'Ironbark Barbers — Collingwood (Demo Site)'
const description =
  'A fictional Collingwood barbershop, designed and built by Pixel Pundit as a portfolio piece. Not a real business.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_AU',
    siteName: 'Ironbark Barbers (demo site)',
  },
  icons: { icon: '/favicon.svg' },
}

/*
 * No HairSalon / LocalBusiness JSON-LD. Ironbark has no premises and no phone;
 * publishing one as structured data would put a fictional trader into local
 * search results and send someone to a shopfront that is not there.
 */

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <head>
        {/*
          Opts into the hidden-until-revealed state before first paint. If this
          never runs, nothing is hidden — see .js-reveal in globals.css.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-reveal')`,
          }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable} bg-pine text-cream font-body antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brass focus:text-pine focus:px-4 focus:py-2 focus:font-display focus:font-bold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
