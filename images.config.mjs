export const site = {
  name: 'Ironbark Barbers',
}

/** @typedef {{
 *   id: string,
 *   query: string,
 *   usage: string,
 *   aspect: number,
 *   widths: number[],
 *   orientation?: 'landscape' | 'portrait' | 'square',
 *   minWidth?: number,
 *   focus?: string,
 *   placeholderColours?: [string, string],
 * }} Slot
 */

/** @type {Slot[]} */
export const slots = [
  {
    id: 'hero',
    query: 'barbershop interior barber chair',
    usage: 'Hero photograph',
    aspect: 0.82,
    widths: [480, 760, 1100],
    orientation: 'portrait',
    minWidth: 1200,
    focus: 'attention',
    placeholderColours: ['#2c4a38', '#0e1c17'],
  },
  {
    id: 'cut',
    query: 'barber cutting hair clippers',
    usage: 'Price list section',
    aspect: 1.4,
    widths: [480, 800, 1200],
    orientation: 'landscape',
    focus: 'attention',
    placeholderColours: ['#3a5244', '#0e1c17'],
  },
  {
    id: 'shave',
    query: 'straight razor shave barber towel',
    usage: 'Craft section',
    aspect: 1.4,
    widths: [480, 800, 1200],
    orientation: 'landscape',
    focus: 'attention',
    placeholderColours: ['#4a4033', '#0e1c17'],
  },
  {
    id: 'tools',
    query: 'barber tools scissors comb clippers',
    usage: 'Booking section backdrop',
    aspect: 2.2,
    widths: [768, 1280, 1920],
    orientation: 'landscape',
    focus: 'attention',
    placeholderColours: ['#1c3527', '#0e1c17'],
  },
  {
    id: 'shopfront',
    query: 'barbershop shopfront window street',
    usage: 'Find us section',
    aspect: 1.5,
    widths: [560, 900, 1400],
    orientation: 'landscape',
    focus: 'attention',
    placeholderColours: ['#26463a', '#0e1c17'],
  },
]
