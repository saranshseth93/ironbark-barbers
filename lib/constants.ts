export interface ServiceItem {
  id: string
  name: string
  description: string
  price: number
  /** Minutes in the chair — drives the booking flow's slot lengths. */
  minutes: number
  popular?: boolean
}

export interface ServiceGroup {
  id: string
  title: string
  note: string
  items: ServiceItem[]
}

export interface Faq {
  question: string
  answer: string
}

export const business = {
  name: 'Ironbark',
  fullName: 'Ironbark Barbers',
  tagline: 'A proper barbershop.',
  street: 'Smith Street',
  suburb: 'Collingwood',
  state: 'VIC',
  postcode: '3066',
  phoneLabel: '0400 000 000',
  phoneHref: 'tel:+61400000000',
  email: 'chair@ironbarkbarbers.example',
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'cuts',
    title: 'Cuts',
    note: 'Every cut finishes with a hot towel and a neck shave. No upsell at the counter.',
    items: [
      {
        id: 'skin-fade',
        name: 'Skin Fade',
        description:
          'Clippers from bare skin up through the guards, blended by hand, scissored on top.',
        price: 55,
        minutes: 45,
        popular: true,
      },
      {
        id: 'scissor-cut',
        name: 'Scissor Cut',
        description:
          'No clippers. For longer hair, heavy cowlicks, or anyone growing something out.',
        price: 60,
        minutes: 45,
      },
      {
        id: 'short-back-sides',
        name: 'Short Back & Sides',
        description:
          'The one your dad asks for. Clipper back and sides, scissored top, tidy.',
        price: 45,
        minutes: 30,
      },
      {
        id: 'grade-all-over',
        name: 'Grade All Over',
        description: 'One guard, top to bottom. In and out in twenty minutes.',
        price: 35,
        minutes: 20,
      },
      {
        id: 'kids',
        name: 'Kids (under 12)',
        description:
          'Booster board, cartoons, and no judgement if it takes three goes.',
        price: 35,
        minutes: 30,
      },
    ],
  },
  {
    id: 'beard',
    title: 'Beard & Shave',
    note: 'Straight razor work is done with a fresh blade every time, and we will show you the packet.',
    items: [
      {
        id: 'beard-trim',
        name: 'Beard Trim & Shape',
        description:
          'Clipper work, razor edges on the cheek and neck line, oiled and combed out.',
        price: 35,
        minutes: 30,
      },
      {
        id: 'hot-towel-shave',
        name: 'Hot Towel Shave',
        description:
          'Pre-shave oil, hot towels, brush and lather, straight razor, cold towel and balm.',
        price: 60,
        minutes: 45,
        popular: true,
      },
      {
        id: 'head-shave',
        name: 'Head Shave',
        description: 'Full razor head shave. Towels, lather, balm, the lot.',
        price: 55,
        minutes: 45,
      },
      {
        id: 'tidy-up',
        name: 'Neck & Line Tidy',
        description:
          'Between cuts. Five minutes, no appointment, walk in and sit down.',
        price: 20,
        minutes: 15,
      },
    ],
  },
  {
    id: 'combos',
    title: 'Together',
    note: 'Booked as one appointment, so you are not sitting through two waits.',
    items: [
      {
        id: 'cut-beard',
        name: 'Cut & Beard',
        description: 'Any cut, plus a full beard trim and shape.',
        price: 80,
        minutes: 60,
        popular: true,
      },
      {
        id: 'cut-shave',
        name: 'Cut & Hot Towel Shave',
        description: 'Any cut, then the full razor shave. Set aside an hour and a half.',
        price: 105,
        minutes: 90,
      },
      {
        id: 'father-son',
        name: 'Father & Son',
        description: 'One adult cut, one kids cut, back to back.',
        price: 75,
        minutes: 60,
      },
    ],
  },
]

/** Flat list for the booking flow's service picker. */
export const allServices: ServiceItem[] = serviceGroups.flatMap((g) => g.items)

/**
 * Chairs, not people.
 *
 * A demo site should not put invented names and biographies on photographs of
 * real people who happened to model for a stock library. Booking picks a chair
 * and a specialisation instead, which is also closer to how walk-in shops
 * actually work.
 */
export const chairs = [
  {
    id: 'chair-1',
    label: 'Chair One',
    speciality: 'Fades and clipper work',
  },
  {
    id: 'chair-2',
    label: 'Chair Two',
    speciality: 'Scissor work and longer hair',
  },
  {
    id: 'chair-3',
    label: 'Chair Three',
    speciality: 'Beards and straight razor',
  },
  {
    id: 'any',
    label: 'First available',
    speciality: 'Whoever is free soonest',
  },
]

/** Illustrative availability for the booking demo. */
export const timeSlots = [
  { time: '9.00am', taken: false },
  { time: '9.45am', taken: true },
  { time: '10.30am', taken: false },
  { time: '11.15am', taken: false },
  { time: '12.00pm', taken: true },
  { time: '12.45pm', taken: true },
  { time: '1.30pm', taken: false },
  { time: '2.15pm', taken: false },
  { time: '3.00pm', taken: false },
  { time: '3.45pm', taken: true },
  { time: '4.30pm', taken: false },
  { time: '5.15pm', taken: false },
]

export const craft = [
  {
    title: 'We ask before we cut',
    body: 'Two minutes talking about what you actually want, what your hair will actually do, and how much effort you are willing to put in at home. Most bad haircuts are a conversation that did not happen.',
  },
  {
    title: 'Hot towel on every cut',
    body: 'Not an add-on, not a premium tier. It is on the end of every haircut in the price list because a neck shave without one is just scraping.',
  },
  {
    title: 'Fresh blade, every face',
    body: 'Straight razor work uses a new blade every single time, out of the packet in front of you. Everything else goes through the steriliser between clients.',
  },
  {
    title: 'No product pitch',
    body: 'We will tell you what we used and where to buy it. There is a shelf of it by the door if you want it and nobody will mention it if you do not.',
  },
]

export const hours = [
  { days: 'Tuesday – Thursday', hours: '9am – 6pm' },
  { days: 'Friday', hours: '9am – 8pm', highlight: true },
  { days: 'Saturday', hours: '8am – 4pm', highlight: true },
  { days: 'Sunday – Monday', hours: 'Closed' },
]

export const faqs: Faq[] = [
  {
    question: 'Do you take walk-ins?',
    answer:
      'Always. Roughly half the chairs are kept for walk-ins, and the wait is usually shorter than the internet thinks. Booking just means you know exactly when.',
  },
  {
    question: 'I do not know what to ask for.',
    answer:
      'Good, that is normal. Bring a photo if you have one, or do not. We will look at how your hair grows, what your hairline is doing and what you can be bothered doing each morning, then suggest something.',
  },
  {
    question: 'How often should I come in?',
    answer:
      'A skin fade looks sharp for about two weeks and fine for three. A scissor cut holds for six to eight. If someone tells you every four weeks regardless of the cut, they are managing their diary, not your hair.',
  },
  {
    question: 'Do you cut women’s hair?',
    answer:
      'We cut short hair, on anyone. If you want a barbershop short cut, a fade or a razor line, book in. If you want long layers or colour, we are the wrong shop and will happily say so.',
  },
  {
    question: 'What if I hate it?',
    answer:
      'Tell us before you leave the chair and we will fix what can be fixed. Come back within a week and we will tidy it for nothing. Hair grows, and we would rather sort it than have you quietly never return.',
  },
  {
    question: 'Card or cash?',
    answer:
      'Both, and there is no card surcharge. Tips are not expected and the terminal will not ask you for one.',
  },
]

export const navLinks = [
  { label: 'Price list', href: '#prices' },
  { label: 'Book', href: '#book' },
  { label: 'The shop', href: '#craft' },
  { label: 'Find us', href: '#find' },
]

export const specNotice = {
  short: 'Demo site · fictional business',
  long: 'Ironbark Barbers is a fictional barbershop, designed and built by Pixel Pundit as a portfolio piece. The services, prices, hours, availability, address and phone number are illustrative. It is not a trading business. There are no reviews, ratings or client numbers on this site, and the photographs are stock images of unnamed people — none of them are staff, because there are none.',
  studio: 'Pixel Pundit',
  studioUrl: 'https://pixelpundit.com.au',
  creditsUrl:
    'https://github.com/saranshseth93/ironbark-barbers/blob/master/CREDITS.md',
}
