export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  sizes: number[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max 90',
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents.',
    price: 130,
    image: '/shoes/shoe-1.jpg',
    category: 'Men',
    sizes: [7, 8, 9, 10, 11, 12],
  },
  {
    id: '2',
    name: 'Nike Air Force 1 \'07',
    description: 'The radiance lives on in the Nike Air Force 1 \'07, the basketball original that puts a fresh spin on what you know best.',
    price: 110,
    image: '/shoes/shoe-2.webp',
    category: 'Men',
    sizes: [7, 8, 9, 10, 11, 12],
  },
  {
    id: '3',
    name: 'Nike Dunk Low Retro',
    description: 'Created for the hardwood but taken to the streets, the \'80s b-ball icon returns with perfectly sheened overlays and original university colors.',
    price: 115,
    image: '/shoes/shoe-3.webp',
    category: 'Men',
    sizes: [7, 8, 9, 10, 11, 12],
  },
  {
    id: '4',
    name: 'Nike Air Zoom Pegasus 40',
    description: 'A springy ride for every run, the Peg\'s familiar, just-for-you feel returns to help you accomplish your goals.',
    price: 130,
    image: '/shoes/shoe-4.webp',
    category: 'Running',
    sizes: [7, 8, 9, 10, 11, 12],
  },
  {
    id: '5',
    name: 'Nike Air Max 270',
    description: 'Nike\'s first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270.',
    price: 160,
    image: '/shoes/shoe-5.avif',
    category: 'Women',
    sizes: [5, 6, 7, 8, 9],
  },
  {
    id: '6',
    name: 'Nike Air VaporMax Plus',
    description: 'The Nike Air VaporMax Plus looks to the past to propel you into the future. This nod to the 1998 Air Max Plus floats your foot on top of cushioned comfort.',
    price: 210,
    image: '/shoes/shoe-6.avif',
    category: 'Women',
    sizes: [5, 6, 7, 8, 9],
  },
  {
    id: '7',
    name: 'Nike Revolution 6',
    description: 'Here\'s to new beginnings between you and the pavement. Lace up the 100% recycled laces and set the pace at the start of your running journey with the plush feel of the Nike Revolution 6 Next Nature.',
    price: 70,
    image: '/shoes/shoe-7.avif',
    category: 'Kids',
    sizes: [3, 4, 5, 6],
  },
  {
    id: '8',
    name: 'Nike Air Huarache',
    description: 'Built to fit your foot and designed for comfort, the Nike Air Huarache brings back a street-level favorite.',
    price: 125,
    image: '/shoes/shoe-8.avif',
    category: 'Kids',
    sizes: [3, 4, 5, 6],
  },
];
