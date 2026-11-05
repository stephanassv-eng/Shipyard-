export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  thumb: string;
};

const img = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const products: Product[] = [
  { id: "1", name: "Canvas Backpack", price: 49, description: "Durable everyday backpack.", image: img("bag", 720, 540), thumb: img("bag", 360, 270) },
  { id: "2", name: "Steel Bottle", price: 19, description: "Keeps drinks cold for 24 hours.", image: img("bottle", 720, 540), thumb: img("bottle", 360, 270) },
  { id: "3", name: "Desk Lamp", price: 35, description: "Warm, dimmable LED lamp.", image: img("lamp", 720, 540), thumb: img("lamp", 360, 270) },
  { id: "4", name: "Notebook Set", price: 12, description: "Three dotted notebooks.", image: img("notebook", 720, 540), thumb: img("notebook", 360, 270) },
  { id: "5", name: "Wireless Mouse", price: 25, description: "Quiet clicks, long battery.", image: img("mouse", 720, 540), thumb: img("mouse", 360, 270) },
  { id: "6", name: "Headphones", price: 89, description: "Over-ear, noise reducing.", image: img("headphones", 720, 540), thumb: img("headphones", 360, 270) },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);