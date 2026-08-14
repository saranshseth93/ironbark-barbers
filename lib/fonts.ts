import { Fraunces, Manrope, IBM_Plex_Mono } from 'next/font/google'

/** Headlines. Old shopfront-signage feel without going full novelty. */
/*
 * Loaded as a variable font: `axes` is only accepted when `weight` is omitted
 * (or set to 'variable'). SOFT rounds the terminals and WONK swaps in the
 * cocked-up italic forms — both are what stop Fraunces reading as generic.
 */
export const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT', 'WONK'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

/** Prices, durations, time slots — anything in a column. */
export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
})
