import icedAmericano from '../assets/iced-americano.jpg';
import icedCoffeeCaramel from '../assets/iced-coffee-caramel.jpg';
import icedCoffeeClassic from '../assets/iced-coffee-classic.jpg';
import icedCoffeeMocha from '../assets/iced-coffee-mocha.jpg';
import lemonade from '../assets/lemonade.jpg';
import matchaLatte from '../assets/matcha-latte.jpg';
import peachIcedTea from '../assets/peach-iced-tea.jpg';
import strawberryDrink from '../assets/strawberry-drink.jpg';
import virginMojito from '../assets/virgin-mojito.jpg';

export const drinks = [
  {
    id: 1,
    category: 'COFFEE',
    name: 'Iced Americano',
    description: 'Bold espresso, cold water, no sugar',
    price: '4.50',
    image: icedAmericano,
  },
  {
    id: 2,
    category: 'COFFEE',
    name: 'Iced Coffee Classic',
    description: 'Chilled coffee, splash of milk',
    price: '4.80',
    image: icedCoffeeClassic,
  },
  {
    id: 3,
    category: 'COFFEE',
    name: 'Iced Coffee Caramel',
    description: 'Chilled coffee, caramel drizzle',
    price: '5.20',
    image: icedCoffeeCaramel,
  },
  {
    id: 4,
    category: 'COFFEE',
    name: 'Iced Coffee Mocha',
    description: 'Chilled coffee, dark chocolate, milk',
    price: '5.20',
    image: icedCoffeeMocha,
  },
  {
    id: 5,
    category: 'REFRESHING',
    name: 'Matcha Latte',
    description: 'Ceremonial matcha, steamed milk',
    price: '5.50',
    image: matchaLatte,
  },
  {
    id: 6,
    category: 'REFRESHING',
    name: 'Lemonade',
    description: 'Fresh lemon juice, sparkling water',
    price: '4.00',
    image: lemonade,
  },
  {
    id: 7,
    category: 'REFRESHING',
    name: 'Peach Iced Tea',
    description: 'Black tea infusion, ripe peach',
    price: '4.20',
    image: peachIcedTea,
  },
  {
    id: 8,
    category: 'REFRESHING',
    name: 'Strawberry Drink',
    description: 'Fresh strawberry, mint, sparkling water',
    price: '4.50',
    image: strawberryDrink,
  },
  {
    id: 9,
    category: 'MOCKTAIL',
    name: 'Virgin Mojito',
    description: 'Fresh mint, lime, sparkling water',
    price: '5.00',
    image: virginMojito,
  },
];