import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";
import car5 from "@/assets/car-5.jpg";
import car6 from "@/assets/car-6.jpg";

export type Car = {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  topSpeed: string;
  engine: string;
  horsepower: string;
  acceleration: string;
  description: string;
  tagline: string;
};

export const cars: Car[] = [
  {
    id: "chiron-noir",
    name: "Chiron Noir",
    brand: "Bugatti",
    price: 3300000,
    image: car1,
    topSpeed: "420 km/h",
    engine: "8.0L Quad-Turbo W16",
    horsepower: "1,500 hp",
    acceleration: "0–100 km/h in 2.4s",
    tagline: "The art of darkness, sculpted at speed.",
    description:
      "A masterpiece of French engineering wrapped in obsidian carbon. The Chiron Noir is the rarest expression of hyper-luxury — a vehicle that does not merely transport, it transcends.",
  },
  {
    id: "rosso-furia",
    name: "Rosso Furia",
    brand: "Ferrari",
    price: 625000,
    image: car2,
    topSpeed: "340 km/h",
    engine: "3.9L Twin-Turbo V8",
    horsepower: "720 hp",
    acceleration: "0–100 km/h in 2.9s",
    tagline: "Italian fire, distilled into pure motion.",
    description:
      "Born in Maranello, the Rosso Furia is a living testament to Ferrari's racing soul — every curve sculpted by wind, every roar tuned by passion.",
  },
  {
    id: "huracan-argento",
    name: "Huracán Argento",
    brand: "Lamborghini",
    price: 280000,
    image: car3,
    topSpeed: "325 km/h",
    engine: "5.2L Naturally Aspirated V10",
    horsepower: "640 hp",
    acceleration: "0–100 km/h in 3.2s",
    tagline: "Raging bull. Polished silver. Unleashed.",
    description:
      "An angular silhouette carved from titanium dreams. The Huracán Argento delivers a pure, mechanical symphony unfiltered by turbochargers.",
  },
  {
    id: "senna-flame",
    name: "Senna Flame",
    brand: "McLaren",
    price: 1000000,
    image: car4,
    topSpeed: "335 km/h",
    engine: "4.0L Twin-Turbo V8",
    horsepower: "789 hp",
    acceleration: "0–100 km/h in 2.7s",
    tagline: "A track weapon, dressed for the street.",
    description:
      "The Senna Flame is McLaren at its most uncompromising — every gram, every angle, every breath of air sculpted to a singular purpose: lap time.",
  },
  {
    id: "911-midnight",
    name: "911 Midnight",
    brand: "Porsche",
    price: 230000,
    image: car5,
    topSpeed: "320 km/h",
    engine: "3.8L Twin-Turbo Flat-6",
    horsepower: "640 hp",
    acceleration: "0–100 km/h in 2.6s",
    tagline: "Seven decades of icon, rendered in deep blue.",
    description:
      "The 911 Midnight is the result of 60 years of evolution — precision-engineered in Stuttgart, refined to a silhouette that defines the sports car itself.",
  },
  {
    id: "valkyrie-pearl",
    name: "Valkyrie Pearl",
    brand: "Aston Martin",
    price: 3200000,
    image: car6,
    topSpeed: "350 km/h",
    engine: "6.5L Naturally Aspirated V12 Hybrid",
    horsepower: "1,160 hp",
    acceleration: "0–100 km/h in 2.5s",
    tagline: "Forged for the road. Inspired by Formula 1.",
    description:
      "The Valkyrie Pearl is the closest a road-legal car has come to a Formula 1 machine — an Aston Martin co-developed with Red Bull Racing aerodynamics.",
  },
];

export const getCarById = (id: string): Car | undefined =>
  cars.find((c) => c.id === id);

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
