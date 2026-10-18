import bebidas from "@/assets/images/bebidas.jpg";
import caldoCamaron from "@/assets/images/caldo-camaron.jpg";

/*
 * Menu items and descriptions come from the South Post Oak listing on
 * Restaurantji (Oct 2026), which publishes no prices, so this page shows none.
 * Locations, hours, favorites and highlights follow the client brief.
 * Photos are Google photos shown on that listing.
 */

export const restaurant = {
  name: "Gorditas y Tacos La Bala",
  shortName: "La Bala",
  tagline: "Con Sabor Mexicano",
  description:
    "Gorditas, tacos, tortas and caldos made with homemade corn tortillas, from a family taquería with two Houston locations.",
  demoNotice: "Demo by Sarmad Rehan, not the official site.",
} as const;

export const mainPhone = "(713) 637-4413";

export type OpeningHours = { days: string; hours: string };

export type Location = {
  id: string;
  name: string;
  street: string;
  city: string;
  postalCode: string;
  phoneDisplay?: string;
  hours?: OpeningHours[];
  mapEmbedUrl?: string;
};

export const locations: Location[] = [
  {
    id: "south-post-oak",
    name: "South Post Oak",
    street: "11107 South Post Oak Rd",
    city: "Houston",
    postalCode: "77035",
    phoneDisplay: mainPhone,
    hours: [
      { days: "Monday", hours: "Closed" },
      { days: "Tuesday – Thursday", hours: "8 AM – 10 PM" },
      { days: "Friday – Saturday", hours: "8 AM – 11 PM" },
      { days: "Sunday", hours: "8 AM – 10 PM" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=Gorditas+y+Tacos+La+Bala,+11107+S+Post+Oak+Rd,+Houston,+TX+77035&output=embed",
  },
  {
    id: "fm-1960",
    name: "FM 1960",
    street: "101 Cypress Creek Pkwy",
    city: "Houston",
    postalCode: "77090",
  },
];

export const mainLocation = locations[0];

export function phoneHref(phoneDisplay: string): string {
  return `tel:+1${phoneDisplay.replace(/\D/g, "")}`;
}

export function directionsUrl(location: Location): string {
  const query = `Gorditas y Tacos La Bala ${location.street}, ${location.city}, TX ${location.postalCode}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export type Favorite = { name: string; english: string; description: string };

export const favorites: Favorite[] = [
  {
    name: "Tacos de Barbacoa y Pollo",
    english: "Barbacoa & chicken tacos",
    description: "Served on our homemade corn tortillas.",
  },
  {
    name: "Quesabirria Grande",
    english: "Large quesabirria",
    description: "Birria and melted cheese, crisped on the griddle.",
  },
  {
    name: "Consomé de Birria",
    english: "Birria consommé",
    description: "The rich broth for dipping, or for sipping on its own.",
  },
  {
    name: "Torta de la Barda",
    english: "The house torta",
    description:
      "Black beans, chorizo, chicharrón in salsa verde, ham, yellow cheese, head cheese, queso fresco, shredded beef, onion, tomato and avocado.",
  },
  {
    name: "Torta Cubana",
    english: "The loaded torta",
    description:
      "Beans, mayo, ham, sausage, mozzarella, fajita, lettuce, tomato and avocado.",
  },
  {
    name: "Tacos de Cecina",
    english: "Order of five",
    description: "Salted beef with grilled onion, cilantro, crema and avocado.",
  },
  {
    name: "Grande Quesadilla",
    english: "Large quesadilla",
    description: "Big enough to share, if you want to.",
  },
];

export type Highlight = { title: string; text: string };

// Dishes regulars single out in reviews.
export const highlights: Highlight[] = [
  {
    title: "Homemade corn tortillas",
    text: "Made right here in our kitchen.",
  },
  {
    title: "Nopales & shrimp gorditas",
    text: "Two favorites you won't find at every taquería.",
  },
  { title: "Menudo", text: "Hearty, comforting and made the traditional way." },
  { title: "Tilapia in chipotle sauce", text: "A smoky, spicy plate worth crossing town for." },
];

export const reviews = [
  { quote: "The tortas are so good, bring ya friends in here they'll love it.", date: "March 2026" },
  { quote: "The street tacos were awesome.", date: "May 2025" },
];

export type MenuItem = { name: string; description?: string };

export type MenuCategory = {
  id: string;
  title: string;
  english: string;
  note?: string;
  items: MenuItem[];
};

export const fillings = [
  "Barbacoa",
  "Pollo",
  "Pastor",
  "Fajita",
  "Deshebrada",
  "Cecina",
  "Cochinita Pibil",
  "Chicharrón",
  "Chorizo",
  "Tripa",
  "Camarón",
  "Nopales",
];

export const menu: MenuCategory[] = [
  {
    id: "antojitos",
    title: "Antojitos",
    english: "Tacos, gorditas & more",
    note: "On homemade corn tortillas. Pick your filling.",
    items: [
      { name: "Tacos" },
      { name: "Tacos de Cecina", description: "Order of 5: grilled onion, cilantro, crema and avocado." },
      { name: "Gorditas", description: "Beans, crema, cheese, tomato, avocado and lettuce." },
      { name: "Sopes", description: "Black beans, crema, cheese, tomato, avocado and lettuce." },
      { name: "Tostadas", description: "Beans, crema, cheese, tomato, avocado and lettuce." },
      { name: "Quesadillas", description: "Small or grande." },
      { name: "Burritos", description: "Beans, crema, cheese, tomato, avocado and lettuce." },
    ],
  },
  {
    id: "tortas",
    title: "Tortas",
    english: "Mexican sandwiches",
    note: "With beans, crema, lettuce, tomato and avocado unless noted.",
    items: [
      { name: "Torta de la Barda", description: "Our loaded house torta." },
      { name: "Torta Cubana", description: "Ham, sausage, mozzarella and fajita." },
      { name: "Torta Milanesa", description: "With jalapeños." },
      { name: "Torta de Cecina", description: "Grilled onion, cilantro, crema and avocado." },
      { name: "Torta de Cochinita Pibil", description: "Black beans, mayo, onion, cilantro, avocado and queso fresco." },
      { name: "Torta de Camarón" },
      { name: "Torta de Fajita" },
      { name: "Torta de Pollo" },
      { name: "Torta de Pastor" },
      { name: "Torta de Barbacoa" },
      { name: "Torta de Deshebrada" },
      { name: "Torta de Chicharrón" },
      { name: "Torta de Chorizo" },
      { name: "Torta de Tripa" },
      { name: "Torta de Jamón" },
    ],
  },
  {
    id: "platillos",
    title: "Platillos",
    english: "Plates",
    items: [
      {
        name: "Parrillada Mixta",
        description:
          "For 1 or 2. Chicken fajita and sausage with rice, charro beans, peppers and onion.",
      },
      {
        name: "Platillo de Milanesa",
        description: "Beans, rice, lettuce, tomato, avocado, fries and tortillas.",
      },
      {
        name: "Filete de Tilapia",
        description: "With fries, or as a meal with beans, rice, salad and tortillas.",
      },
      {
        name: "Flautas de Pollo",
        description: "Beans, rice, lettuce, tomato, avocado, crema and cheese.",
      },
      {
        name: "Hamburguesa Mexicana con Papas",
        description:
          "Beef, pineapple, ham, yellow cheese, lettuce, tomato, avocado, onion and jalapeños.",
      },
      { name: "Nachos", description: "Chips, cheese and jalapeños." },
      { name: "Papas Fritas", description: "Plain, con queso, con fajita or con pollo." },
    ],
  },
  {
    id: "kids",
    title: "Kids Menu",
    english: "Para los niños",
    note: "Ask about our kids' menu.",
    items: [
      { name: "Chicken Tenders", description: "Three pieces with fries." },
      { name: "Small Quesadilla" },
      { name: "Papas Fritas" },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    english: "Drinks",
    items: [
      { name: "Horchata", description: "32 oz." },
      { name: "Limonada", description: "32 oz." },
      { name: "Coca-Cola" },
      { name: "Sprite" },
    ],
  },
];

export const heroImage = caldoCamaron;
export const storyImage = bebidas;
