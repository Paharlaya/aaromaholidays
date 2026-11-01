/**
 * Tour packages. Titles, durations and starting prices come from the current
 * aaromaholidays.com listings. Day plans, inclusions and exclusions are DRAFTS
 * written for the redesign — the Aaroma team must check them before launch.
 */

export type Tag = 'classic' | 'honeymoon' | 'weekend' | 'budget' | 'adventure';

export const tagLabels: Record<Tag, string> = {
  classic: 'Classic tours',
  honeymoon: 'Honeymoon',
  weekend: 'Weekend trips',
  budget: 'Budget',
  adventure: 'Adventure',
};

export interface Day {
  title: string;
  text: string;
  stay?: string;
}

export interface Package {
  slug: string;
  title: string;
  route: string[];
  duration: string;
  nights: number;
  priceFrom: number;
  tags: Tag[];
  featured?: boolean;
  summary: string;
  image: { src?: string; label: string; tone: Tone };
  highlights: string[];
  days: Day[];
  includes: string[];
  excludes: string[];
}

export type Tone = 'dawn' | 'glacier' | 'mist' | 'forest' | 'lake' | 'dusk';

const standardIncludes = [
  'Private cab for the whole trip, with a local driver',
  'Hotel stays with breakfast',
  'Pick-up and drop at NJP station or Bagdogra airport',
  'Fuel, parking, tolls and driver allowance',
];

const standardExcludes = [
  'Lunch and dinner unless mentioned',
  'Entry tickets and camera fees',
  'Flights and train tickets',
  'Personal expenses and tips',
];

export const packages: Package[] = [
  {
    slug: 'north-sikkim-gangtok-lachen-lachung',
    title: 'Gangtok, Lachen & Lachung',
    route: ['Gangtok', 'Lachen', 'Lachung', 'Gangtok'],
    duration: '6 nights, 7 days',
    nights: 6,
    priceFrom: 17999,
    tags: ['classic', 'adventure', 'honeymoon'],
    featured: true,
    summary:
      'Our most-asked-for trip: Gangtok, then north to Gurudongmar Lake at 17,800 ft and the flower valley of Yumthang.',
    image: { label: 'Gurudongmar Lake under snow peaks', tone: 'glacier' },
    highlights: ['Gurudongmar Lake', 'Yumthang Valley', 'Tsomgo Lake', 'Zero Point'],
    days: [
      { title: 'Arrive and drive to Gangtok', text: 'Pick-up at NJP or Bagdogra. Four hours along the Teesta river to Gangtok. Evening free on MG Marg.', stay: 'Gangtok' },
      { title: 'Tsomgo Lake and Baba Mandir', text: 'High-altitude glacial lake at 12,300 ft, then Baba Harbhajan Singh Mandir. Nathula Pass on request, subject to permits.', stay: 'Gangtok' },
      { title: 'Gangtok to Lachen', text: 'North along the Teesta past Seven Sisters and Naga waterfalls. Early dinner to rest for the high climb.', stay: 'Lachen' },
      { title: 'Gurudongmar Lake, then Lachung', text: 'Pre-dawn start for Gurudongmar Lake, one of the highest lakes in the world. Afternoon drive down to Lachung.', stay: 'Lachung' },
      { title: 'Yumthang Valley and back to Gangtok', text: 'Yumthang, the valley of flowers, and Zero Point when roads allow. Return to Gangtok in the evening.', stay: 'Gangtok' },
      { title: 'Gangtok sightseeing', text: 'Rumtek Monastery, Enchey Monastery, Ganesh Tok, the ropeway and Do Drul Chorten.', stay: 'Gangtok' },
      { title: 'Departure', text: 'Drive back to NJP or Bagdogra for your onward journey.' },
    ],
    includes: [...standardIncludes, 'Permits for North Sikkim and Tsomgo Lake', 'All meals in Lachen and Lachung'],
    excludes: [...standardExcludes, 'Nathula Pass permit and vehicle charge'],
  },
  {
    slug: 'darjeeling-kalimpong-gangtok',
    title: 'Darjeeling, Kalimpong & Gangtok',
    route: ['Darjeeling', 'Kalimpong', 'Gangtok'],
    duration: '6 nights, 7 days',
    nights: 6,
    priceFrom: 13500,
    tags: ['classic', 'honeymoon'],
    featured: true,
    summary:
      'The three hill towns in one unhurried loop: tea and the toy train, Kalimpong’s nurseries, and Gangtok’s monasteries.',
    image: { label: 'Toy train on the Batasia Loop', tone: 'mist' },
    highlights: ['Tiger Hill sunrise', 'Toy train joyride', 'Kalimpong', 'Tsomgo Lake'],
    days: [
      { title: 'Arrive and drive to Darjeeling', text: 'Pick-up at NJP or Bagdogra and a three-hour climb through tea gardens.', stay: 'Darjeeling' },
      { title: 'Tiger Hill sunrise', text: 'Sunrise over Kanchenjunga from Tiger Hill, then Ghoom Monastery and the Batasia Loop. Afternoon at the zoo and Himalayan Mountaineering Institute.', stay: 'Darjeeling' },
      { title: 'Toy train and tea', text: 'Heritage toy train joyride, a tea estate walk and the Japanese Peace Pagoda.', stay: 'Darjeeling' },
      { title: 'Darjeeling to Kalimpong', text: 'Via Lamahatta and the Teesta view points. Evening at Deolo Hill.', stay: 'Kalimpong' },
      { title: 'Kalimpong to Gangtok', text: 'Durpin Monastery and a flower nursery, then on to Gangtok.', stay: 'Gangtok' },
      { title: 'Tsomgo Lake and Baba Mandir', text: 'Day trip to the glacial lake and Baba Mandir, back to Gangtok for the evening.', stay: 'Gangtok' },
      { title: 'Departure', text: 'Drive back to NJP or Bagdogra.' },
    ],
    includes: [...standardIncludes, 'Tsomgo Lake permit'],
    excludes: [...standardExcludes, 'Toy train tickets'],
  },
  {
    slug: 'darjeeling-gangtok',
    title: 'Darjeeling & Gangtok',
    route: ['Gangtok', 'Darjeeling'],
    duration: '5 nights, 6 days',
    nights: 5,
    priceFrom: 12999,
    tags: ['classic', 'honeymoon'],
    featured: true,
    summary: 'The two capitals of the hills, each with time to settle in. A good first trip to the region.',
    image: { label: 'Gangtok lights at dusk', tone: 'dusk' },
    highlights: ['Tsomgo Lake', 'MG Marg', 'Tiger Hill sunrise', 'Batasia Loop'],
    days: [
      { title: 'Arrive and drive to Gangtok', text: 'Pick-up at NJP or Bagdogra. Evening walk on MG Marg.', stay: 'Gangtok' },
      { title: 'Tsomgo Lake and Baba Mandir', text: 'Day trip to the glacial lake at 12,300 ft.', stay: 'Gangtok' },
      { title: 'Gangtok sightseeing', text: 'Rumtek Monastery, Enchey Monastery, Ganesh Tok and the ropeway.', stay: 'Gangtok' },
      { title: 'Gangtok to Darjeeling', text: 'Five hours through the Teesta valley to Darjeeling.', stay: 'Darjeeling' },
      { title: 'Tiger Hill and town', text: 'Sunrise over Kanchenjunga, Ghoom Monastery, Batasia Loop, then the Mall and Chowrasta.', stay: 'Darjeeling' },
      { title: 'Departure', text: 'Drive back to NJP or Bagdogra.' },
    ],
    includes: [...standardIncludes, 'Tsomgo Lake permit'],
    excludes: standardExcludes,
  },
  {
    slug: 'gangtok-namchi',
    title: 'Gangtok & Namchi',
    route: ['Gangtok', 'Namchi'],
    duration: '4 nights, 5 days',
    nights: 4,
    priceFrom: 12000,
    tags: ['classic'],
    summary: 'Gangtok and the quieter south of Sikkim, with the giant statues at Samdruptse and Char Dham.',
    image: { label: 'Samdruptse statue above the clouds', tone: 'dawn' },
    highlights: ['Tsomgo Lake', 'Char Dham', 'Samdruptse', 'Rumtek Monastery'],
    days: [
      { title: 'Arrive and drive to Gangtok', text: 'Pick-up at NJP or Bagdogra.', stay: 'Gangtok' },
      { title: 'Tsomgo Lake and Baba Mandir', text: 'Day trip to the glacial lake.', stay: 'Gangtok' },
      { title: 'Gangtok sightseeing', text: 'Monasteries, Ganesh Tok, the ropeway and MG Marg.', stay: 'Gangtok' },
      { title: 'Gangtok to Namchi', text: 'Temi Tea Garden on the way, then Char Dham and Samdruptse.', stay: 'Namchi' },
      { title: 'Departure', text: 'Drive to NJP or Bagdogra.' },
    ],
    includes: [...standardIncludes, 'Tsomgo Lake permit'],
    excludes: standardExcludes,
  },
  {
    slug: 'gangtok',
    title: 'Gangtok getaway',
    route: ['Gangtok'],
    duration: '3 nights, 4 days',
    nights: 3,
    priceFrom: 9000,
    tags: ['weekend', 'honeymoon'],
    featured: true,
    summary: 'A short, easy trip: one hotel, the lake, the monasteries and evenings on MG Marg.',
    image: { label: 'Prayer flags at Tsomgo Lake', tone: 'lake' },
    highlights: ['Tsomgo Lake', 'Baba Mandir', 'Rumtek Monastery', 'Gangtok ropeway'],
    days: [
      { title: 'Arrive and drive to Gangtok', text: 'Pick-up at NJP or Bagdogra. Evening on MG Marg.', stay: 'Gangtok' },
      { title: 'Tsomgo Lake and Baba Mandir', text: 'Day trip to the glacial lake. Nathula Pass on request.', stay: 'Gangtok' },
      { title: 'Gangtok sightseeing', text: 'Rumtek and Enchey monasteries, Ganesh Tok, Tashi View Point and the ropeway.', stay: 'Gangtok' },
      { title: 'Departure', text: 'Drive to NJP or Bagdogra.' },
    ],
    includes: [...standardIncludes, 'Tsomgo Lake permit'],
    excludes: [...standardExcludes, 'Nathula Pass permit and vehicle charge'],
  },
  {
    slug: 'darjeeling',
    title: 'Darjeeling classic',
    route: ['Darjeeling'],
    duration: '3 nights, 4 days',
    nights: 3,
    priceFrom: 4777,
    tags: ['budget', 'weekend'],
    featured: true,
    summary: 'Tiger Hill at sunrise, the toy train and tea estates. Our best value trip.',
    image: { label: 'Tea pickers in Happy Valley', tone: 'forest' },
    highlights: ['Tiger Hill sunrise', 'Toy train', 'Happy Valley Tea Estate', 'Mirik Lake'],
    days: [
      { title: 'Arrive and drive to Darjeeling', text: 'Pick-up at NJP or Bagdogra. Evening at Chowrasta and the Mall.', stay: 'Darjeeling' },
      { title: 'Tiger Hill and town', text: 'Sunrise over Kanchenjunga, Ghoom Monastery, Batasia Loop, the zoo and Himalayan Mountaineering Institute.', stay: 'Darjeeling' },
      { title: 'Mirik day trip', text: 'Mirik Lake and the Nepal border market at Pashupati, through tea country.', stay: 'Darjeeling' },
      { title: 'Departure', text: 'Drive to NJP or Bagdogra.' },
    ],
    includes: standardIncludes,
    excludes: [...standardExcludes, 'Toy train tickets'],
  },
  {
    slug: 'dooars',
    title: 'Dooars forests',
    route: ['Lataguri', 'Gorumara', 'Jhalong'],
    duration: '2 nights, 3 days',
    nights: 2,
    priceFrom: 10000,
    tags: ['weekend', 'adventure'],
    summary: 'Jungle lodges, rhino and elephant country, and the river at Jhalong. Close to Siliguri.',
    image: { label: 'Elephants in Gorumara grassland', tone: 'forest' },
    highlights: ['Gorumara safari', 'Jhalong and Bindu', 'Murti river'],
    days: [
      { title: 'Arrive and drive to Lataguri', text: 'Pick-up at NJP or Bagdogra. Evening by the Murti river.', stay: 'Lataguri' },
      { title: 'Safari and Jhalong', text: 'Morning jeep safari in Gorumara, then Jhalong and Bindu on the Bhutan border.', stay: 'Lataguri' },
      { title: 'Departure', text: 'Drive to NJP or Bagdogra.' },
    ],
    includes: [...standardIncludes, 'One jeep safari'],
    excludes: standardExcludes,
  },
  {
    slug: 'triveni-camping',
    title: 'Triveni riverside camping',
    route: ['Triveni'],
    duration: '1 night, 2 days',
    nights: 1,
    priceFrom: 1800,
    tags: ['weekend', 'budget', 'adventure'],
    summary: 'A night in tents where the Teesta and Rangeet meet. Bonfire, river sounds, simple food.',
    image: { label: 'Tents at the Teesta–Rangeet meeting point', tone: 'dusk' },
    highlights: ['Riverside tents', 'Bonfire', 'Teesta–Rangeet confluence'],
    days: [
      { title: 'Arrive at camp', text: 'Check in to your tent by the river. Evening bonfire and dinner.', stay: 'Triveni camp' },
      { title: 'Morning and departure', text: 'Breakfast by the water, then head home or add a rafting run.' },
    ],
    includes: ['Tent stay', 'Dinner and breakfast', 'Bonfire'],
    excludes: ['Transport to camp', 'Rafting'],
  },
  {
    slug: 'triveni-rafting',
    title: 'Teesta river rafting',
    route: ['Triveni'],
    // TODO: confirm duration — the current site lists "2 Hours - 3 Nights".
    duration: 'About 2 hours',
    nights: 0,
    priceFrom: 4000,
    tags: ['adventure'],
    summary: 'White water on the Teesta with trained local guides. Pair it with a night at the riverside camp.',
    image: { label: 'Raft on Teesta white water', tone: 'glacier' },
    highlights: ['Guided rafting', 'Safety gear', 'Teesta rapids'],
    days: [
      { title: 'On the river', text: 'Safety briefing, then the run downstream with a trained guide.' },
    ],
    includes: ['Raft and guide', 'Life jacket and helmet'],
    excludes: ['Transport to the start point'],
  },
];

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);

export const formatPrice = (n: number) => `₹${n.toLocaleString('en-IN')}`;
