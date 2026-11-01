export const site = {
  name: 'Aaroma Holidays',
  tagline: 'Darjeeling & Sikkim tours, cabs and stays, planned by a local team.',
  url: 'https://aaromaholidays.com',
  email: 'sales@aaromaholidays.com',
  phones: [
    { display: '+91 87687 49918', tel: '+918768749918' },
    { display: '+91 73840 69995', tel: '+917384069995' },
  ],
  whatsapp: '918768749918',
  address: {
    line1: 'Chainpura Gram, Bijanbari',
    line2: 'Darjeeling, West Bengal',
    country: 'India',
  },
  // TODO: add the real profile URLs; links are hidden while these are empty.
  social: {
    facebook: '',
    instagram: '',
  },
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/itineraries/', label: 'Itineraries' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

/** Builds a WhatsApp link with a pre-filled message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
