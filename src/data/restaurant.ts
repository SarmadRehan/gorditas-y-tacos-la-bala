import type { StaticImageData } from "next/image";

import burritoBeef from "@/assets/images/burrito-of-beef-fajita.jpg";
import burritoChicken from "@/assets/images/burrito-of-chicken-fajita.jpg";
import fajitaSalad from "@/assets/images/chicken-fajita-salad.jpg";
import flautas from "@/assets/images/flautas-with-shredded-chicken.jpg";
import gorditas from "@/assets/images/gorditas-of-beef-fajitas.jpg";
import heroSpread from "@/assets/images/hero-spread.jpg";
import largeQuesadilla from "@/assets/images/large-quesadilla.jpg";
import menudo from "@/assets/images/menudo-soup.jpg";
import taquitos from "@/assets/images/order-of-taquitos.jpg";
import entomatada from "@/assets/images/plate-of-beef-entomatada.jpg";
import eggsChorizo from "@/assets/images/plate-of-eggs-and-chorizo.jpg";
import sopes from "@/assets/images/sopes-of-beef-fajitas.jpg";
import tortaBarda from "@/assets/images/torta-de-la-barda.jpg";

/*
 * Menu, prices, photos, hours and rating come from the Northside location's
 * Uber Eats listing (Oct 2026), so prices are delivery prices. Other locations
 * are from Houstonia Magazine; history from What Now Houston.
 */

export const restaurant = {
  name: "Tacos La Bala",
  tagline: "Con Sabor a México",
  slogan: "¡No somos los únicos, pero sí los mejores!",
  sloganEnglish: "We're not the only ones, but we are the best.",
  description:
    "Family-owned taquería serving tacos, tortas, burritos, breakfast and caldos across Greater Houston. Since 1973, from a taco truck in Tampico to eight Houston-area locations.",
  foundedYear: 1973,
  rating: { value: 4.6, count: "1,500+", source: "Uber Eats" },
} as const;

export type Location = {
  number: number;
  area: string;
  street: string;
  city: string;
  postalCode: string;
  phoneDisplay: string;
  featured?: boolean;
};

export const locations: Location[] = [
  {
    number: 8,
    area: "Northside",
    street: "9919 North Fwy, Ste 105",
    city: "Houston",
    postalCode: "77038",
    phoneDisplay: "(832) 486-9637",
    featured: true,
  },
  {
    number: 1,
    area: "Gulfton",
    street: "6030 Dashwood Dr",
    city: "Houston",
    postalCode: "77081",
    phoneDisplay: "(713) 838-2424",
  },
  {
    number: 2,
    area: "Bellaire Blvd",
    street: "5800 Bellaire Blvd",
    city: "Houston",
    postalCode: "77081",
    phoneDisplay: "(713) 839-8226",
  },
  {
    number: 3,
    area: "Alief",
    street: "10100 Beechnut St, Ste 120",
    city: "Houston",
    postalCode: "77072",
    phoneDisplay: "(281) 933-3007",
  },
  {
    number: 4,
    area: "Katy",
    street: "343 Mason Rd",
    city: "Katy",
    postalCode: "77450",
    phoneDisplay: "(281) 492-3470",
  },
  {
    number: 5,
    area: "Airline Dr",
    street: "5406 Airline Dr, Ste D",
    city: "Houston",
    postalCode: "77076",
    phoneDisplay: "(832) 767-5066",
  },
  {
    number: 6,
    area: "Spring Branch",
    street: "5515 Gessner Dr, Ste B",
    city: "Houston",
    postalCode: "77041",
    phoneDisplay: "(832) 243-4768",
  },
  {
    number: 9,
    area: "South Houston",
    street: "1111 Spencer Hwy, Ste F",
    city: "South Houston",
    postalCode: "77587",
    phoneDisplay: "(832) 491-1200",
  },
];

export const featuredLocation = locations.find((location) => location.featured) ?? locations[0];

export type OpeningHours = { days: string; open: string; close: string };

// Northside hours as published on its Uber Eats listing.
export const hours: OpeningHours[] = [
  { days: "Monday – Thursday", open: "7:05 AM", close: "7:30 PM" },
  { days: "Friday – Saturday", open: "7:05 AM", close: "8:30 PM" },
  { days: "Sunday", open: "7:35 AM", close: "7:30 PM" },
];

export function phoneHref(phoneDisplay: string): string {
  return `tel:+1${phoneDisplay.replace(/\D/g, "")}`;
}

export function directionsUrl(location: Location): string {
  const query = `Tacos La Bala ${location.street}, ${location.city}, TX ${location.postalCode}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const mapEmbedUrl =
  "https://www.google.com/maps?q=Tacos+La+Bala,+9919+North+Fwy,+Houston,+TX+77038&output=embed";

export type Dish = {
  name: string;
  spanish?: string;
  description: string;
  price: number;
  image: StaticImageData;
};

export const favorites: Dish[] = [
  {
    name: "Order of Taquitos",
    spanish: "Orden de Taquitos",
    description: "Street-style taquitos with your choice of trompo, fajita, chicken or pork skin.",
    price: 13.25,
    image: taquitos,
  },
  {
    name: "Torta de la Barda",
    description:
      "The big one: black beans, chicharrón, chorizo, ham, head cheese, white and yellow cheese, avocado, lettuce and tomato.",
    price: 12.35,
    image: tortaBarda,
  },
  {
    name: "Flautas",
    spanish: "Pollo o Res",
    description: "Crispy rolled flautas with beans, lettuce, tomato, avocado, cheese and crema.",
    price: 16.89,
    image: flautas,
  },
  {
    name: "Chicken Fajita Burrito",
    description: "Beans, lettuce, tomato, avocado, cheese and sour cream in a big flour tortilla.",
    price: 12.05,
    image: burritoChicken,
  },
  {
    name: "Sopes",
    description: "Thick masa sopes topped with beans, meat, lettuce, tomato, avocado and crema.",
    price: 9.35,
    image: sopes,
  },
  {
    name: "Gorditas",
    description: "Stuffed masa pockets with meat, beans and cheese, lettuce and tomato on the side.",
    price: 9.35,
    image: gorditas,
  },
];

export const press = {
  quote: "Order a trompo taco, one of the best examples in town.",
  source: "Houstonia Magazine",
};

/** Antojitos share one price per format; fillings vary by format. */
export const antojitoFormats = [
  { key: "taco", label: "Tacos", price: 4.52 },
  { key: "quesadilla", label: "Quesadillas", price: 6.03 },
  { key: "gordita", label: "Gorditas", price: 9.35 },
  { key: "tostada", label: "Tostadas", price: 9.35 },
  { key: "sope", label: "Sopes", price: 9.35 },
] as const;

export type AntojitoFormat = (typeof antojitoFormats)[number]["key"];

export type Filling = {
  name: string;
  spanish: string;
  formats: AntojitoFormat[];
  advisory?: boolean;
};

const allFormats: AntojitoFormat[] = ["taco", "quesadilla", "gordita", "tostada", "sope"];
const noTostada: AntojitoFormat[] = ["taco", "quesadilla", "gordita", "sope"];

export const fillings: Filling[] = [
  { name: "Beef Fajita", spanish: "Fajita de Res", formats: allFormats },
  { name: "Chicken Fajita", spanish: "Fajita de Pollo", formats: allFormats },
  { name: "Marinated Pork", spanish: "Trompo", formats: ["taco", "gordita"] },
  { name: "Steamed Beef", spanish: "Barbacoa", formats: allFormats },
  { name: "Shredded Beef", spanish: "Deshebrada", formats: allFormats },
  { name: "Cochinita Pibil", spanish: "Yucatán-style pork", formats: allFormats },
  { name: "Beef Tongue", spanish: "Lengua", formats: allFormats },
  { name: "Pork Skin in Red Sauce", spanish: "Chicharrón", formats: noTostada },
  { name: "Mexican Sausage", spanish: "Chorizo", formats: noTostada },
  { name: "Beef Tripe", spanish: "Tripa", formats: noTostada, advisory: true },
  { name: "Cactus", spanish: "Nopal", formats: noTostada },
  { name: "Avocado", spanish: "Aguacate", formats: allFormats },
];

export const antojitoNotes: Partial<Record<AntojitoFormat, string>> = {
  quesadilla: "With melted cheese.",
  gordita: "Meat, beans and cheese, with lettuce and tomato on the side.",
  tostada: "With beans, lettuce, tomato, avocado, cheese and sour cream.",
  sope: "With beans, lettuce, tomato, avocado, cheese and sour cream.",
};

export type MenuItem = {
  name: string;
  price?: number;
  description?: string;
  advisory?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  spanish: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "tortas",
    title: "Tortas",
    spanish: "Mexican sandwiches",
    note: "$12.05 each, with beans, lettuce, tomato, avocado and sour cream.",
    items: [
      {
        name: "Torta de la Barda",
        price: 12.35,
        description:
          "Black beans, chicharrón, chorizo, ham, head cheese, white and yellow cheese, lettuce, tomato and avocado.",
      },
      {
        name: "Choose your filling",
        price: 12.05,
        description:
          "Beef fajita, chicken fajita, marinated pork, steamed beef, shredded beef, beef tongue, cochinita pibil, ham, Mexican sausage or avocado.",
      },
    ],
  },
  {
    id: "burritos",
    title: "Burritos",
    spanish: "Big flour tortillas",
    note: "$12.05 each, with beans, lettuce, tomato, avocado, cheese and sour cream.",
    items: [
      {
        name: "Choose your filling",
        price: 12.05,
        description:
          "Beef fajita, chicken fajita, marinated pork, steamed beef, shredded beef, beef tongue, cochinita pibil, pork skin in red sauce or beef tripe.",
      },
    ],
  },
  {
    id: "platos",
    title: "Combination Plates",
    spanish: "Platillos",
    items: [
      {
        name: "Order of Milanesa",
        price: 19.25,
        description: "With rice, fries, salad and corn or flour tortillas.",
      },
      {
        name: "Fajita Mix",
        price: 18.4,
        description:
          "Chicken and beef fajita with grilled onion and bell pepper, rice, beans and tortillas.",
      },
      {
        name: "Cecina Combo",
        price: 18.4,
        description: "With rice, beans, salad, grilled jalapeño and grilled onions.",
      },
      {
        name: "Beef Entomatada Plate",
        price: 18.4,
        description: "Three corn tortillas with cheese, refried beans and cecina.",
      },
      {
        name: "Flautas, Chicken or Beef",
        price: 16.89,
        description: "With beans, lettuce, tomato, avocado, cheese and sour cream.",
      },
      {
        name: "Fajita Salad, Chicken or Beef",
        price: 13.62,
        description: "Lettuce, tomato, avocado, white and yellow cheese, ham and sour cream.",
      },
      { name: "Order of Taquitos", price: 13.25, description: "Trompo, fajita, chicken or pork skin." },
      {
        name: "Large Quesadilla",
        price: 13.2,
        description: "Cheese and meat, with lettuce and tomato on the side.",
      },
      {
        name: "Single Entomatada Plate",
        price: 11.78,
        description: "Three tortillas with cheese and refried beans.",
      },
    ],
  },
  {
    id: "caldos",
    title: "Soups",
    spanish: "Caldos",
    note: "Served with onion, cilantro, jalapeño and corn tortillas.",
    items: [
      { name: "Shrimp Soup", price: 21.5, description: "Caldo de camarón." },
      { name: "Menudo", description: "Chico or grande. Ask for today's price." },
      { name: "Lamb Soup", description: "Consomé de borrego. Chico or grande." },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    spanish: "Acompañantes",
    items: [
      { name: "Charro Beans, 16 oz", price: 8.37 },
      { name: "Side of Sauce, 16 oz", price: 7.75 },
      { name: "Meat by the Order", price: 7.5, description: "Beef fajita, chicken fajita, barbacoa or green pork skin." },
      { name: "Rice, 8 oz", price: 5.82 },
      { name: "Whole Avocado", price: 5.66 },
      { name: "Zanahorias", price: 4.86, description: "Pickled carrots." },
      { name: "Half Avocado", price: 3.25 },
      { name: "Pico de Gallo", price: 1.55 },
      { name: "Cheese or Sour Cream, 2 oz", price: 1.5 },
      { name: "Jalapeño Vinegar", price: 1.5 },
      { name: "Extra Tortillas", price: 1.4, description: "Three homemade corn tortillas." },
      { name: "Avocado Slices", price: 1.25 },
    ],
  },
  {
    id: "kids",
    title: "For the Kids",
    spanish: "Para los niños",
    items: [
      { name: "Kid Burrito, Beef or Chicken Fajita", price: 8.5 },
      { name: "Entomatada Jr", price: 8.5 },
      { name: "Chicken Nuggets", price: 8.5 },
      { name: "French Fries", price: 7.05 },
    ],
  },
  {
    id: "bebidas",
    title: "Drinks",
    spanish: "Bebidas",
    items: [
      { name: "Aguas Frescas", price: 3.5, description: "Horchata, jamaica or limonada." },
      { name: "Mexican Coke", price: 4.5, description: "Made with cane sugar." },
      { name: "Gatorade", price: 4.18 },
      { name: "Orange Juice", price: 3.74 },
      { name: "Jarritos", price: 3.5 },
      { name: "Topo Chico", price: 3.5 },
      { name: "Café", price: 3.25 },
      { name: "Canned Soda", price: 2.4, description: "Coca-Cola, Diet Coke, Dr Pepper or Fanta." },
      { name: "Bottled Water", price: 2.13 },
    ],
  },
];

export const breakfast = {
  image: eggsChorizo,
  tacoPrice: 4.4,
  tacos: [
    "Eggs, Potatoes & Chorizo",
    "Eggs & Potatoes",
    "Eggs & Chorizo",
    "Eggs & Bacon",
    "Eggs & Ham",
    "Eggs & Dried Beef",
    "Mexican-Style Eggs",
    "Eggs in Green Sauce",
    "Eggs in Red Sauce",
  ],
  platePrice: 11.3,
  plateNote: "Served with refried beans and corn or flour tortillas.",
  plates: [
    { name: "Huevos Rancheros", price: 11.3 },
    { name: "Eggs & Chorizo", price: 11.3 },
    { name: "Eggs & Bacon", price: 11.3 },
    { name: "Eggs & Ham", price: 11.3 },
    { name: "Eggs & Potatoes", price: 11.3 },
    { name: "Mexican-Style Eggs", price: 11.3 },
    { name: "Eggs in Green Sauce", price: 11.3 },
    { name: "Eggs in Red Sauce", price: 11.3 },
    { name: "Eggs & Dried Beef", price: 11.45 },
  ],
};

export type GalleryImage = { src: StaticImageData; alt: string };

export const gallery: GalleryImage[] = [
  { src: menudo, alt: "A bowl of menudo with bread, lime, onion and cilantro" },
  { src: entomatada, alt: "Beef entomatada plate with refried beans and queso fresco" },
  { src: fajitaSalad, alt: "Chicken fajita salad topped with cheese and sour cream" },
  { src: burritoBeef, alt: "A beef fajita burrito cut in half" },
];

export const heroImage = heroSpread;
export const storyImage = largeQuesadilla;
