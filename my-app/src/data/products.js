import cookieOat from '../assets/images/cookie-oat.jpg';
import cookieMacaron from '../assets/images/cookie-macaron.jpg';
import cookieClassic from '../assets/images/cookie-classic.jpg';
import cookieGift from '../assets/images/cookie-gift.jpg';

export const products = [
  {
    id: 1,
    category: 'CLASSICS',
    name: 'Double Chocolat',
    description: 'Chocolat noir 70%, fleur de sel',
    price: '3.50',
    image: cookieClassic,
  },
  {
    id: 2,
    category: 'SEASONAL',
    name: 'Macaron Rose & Framboise',
    description: 'Ganache framboise, coque croustillante',
    price: '3.80',
    image: cookieMacaron,
  },
  {
    id: 3,
    category: 'CLASSICS',
    name: 'Avoine & Raisin',
    description: 'Avoine complète, cannelle douce',
    price: '3.20',
    image: cookieOat,
  },
  {
    id: 4,
    category: 'GIFTING',
    name: 'Coffret Signature',
    description: '12 biscuits assortis, ruban satin',
    price: '28.00',
    image: cookieGift,
  },
];