import heroImage from "@/assets/nooraa-hero.jpg";
import wineImage from "@/assets/nooraa-wine.jpg";
import sageImage from "@/assets/nooraa-sage.jpg";

export type Product = {
  id: string;
  name: string;
  collection: string;
  price: number;
  category: string;
  occasion: string;
  color: string;
  fabric: string;
  embroidery: string;
  silhouette: string;
  madeToOrder: boolean;
  image: string;
  alternateImage: string;
  description: string;
};

export const products: Product[] = [
  { id: "aaroh", name: "Aaroh", collection: "The Bridal Edit", price: 245000, category: "Lehengas", occasion: "Wedding", color: "Ivory", fabric: "Silk", embroidery: "Zardozi", silhouette: "Classic", madeToOrder: true, image: heroImage, alternateImage: wineImage, description: "An architectural ivory lehenga traced with antique-gold zardozi and a whisper-light tulle dupatta." },
  { id: "noor", name: "Noor", collection: "Mehrab", price: 325000, category: "Lehengas", occasion: "Reception", color: "Burgundy", fabric: "Velvet", embroidery: "Zardozi", silhouette: "Dramatic", madeToOrder: true, image: wineImage, alternateImage: heroImage, description: "Deep wine velvet illuminated with hand-set metal thread, inspired by moonlit palace arches." },
  { id: "meher", name: "Meher", collection: "Gulzaar", price: 185000, category: "Sarees", occasion: "Mehendi", color: "Sage", fabric: "Organza", embroidery: "Resham", silhouette: "Draped", madeToOrder: false, image: sageImage, alternateImage: heroImage, description: "A serene organza saree with tonal resham vines and a sculpted couture blouse." },
  { id: "aabha", name: "Aabha", collection: "The Bridal Edit", price: 215000, category: "Gowns", occasion: "Cocktail", color: "Champagne", fabric: "Tulle", embroidery: "Gota Patti", silhouette: "Column", madeToOrder: true, image: heroImage, alternateImage: sageImage, description: "A contemporary column gown softened with heirloom gota and hand-cut floral appliqué." },
  { id: "gul", name: "Gul", collection: "Gulzaar", price: 145000, category: "Shararas", occasion: "Haldi", color: "Blush", fabric: "Chanderi", embroidery: "Resham", silhouette: "Fluid", madeToOrder: false, image: sageImage, alternateImage: wineImage, description: "A fluid Chanderi sharara in petal blush, detailed with fine botanical resham work." },
  { id: "mehrunissa", name: "Mehrunissa", collection: "Mehrab", price: 285000, category: "Lehengas", occasion: "Wedding", color: "Maroon", fabric: "Silk", embroidery: "Gota Patti", silhouette: "Classic", madeToOrder: true, image: wineImage, alternateImage: sageImage, description: "A regal maroon silk lehenga balancing old-world gota with a clean, modern proportion." },
  { id: "sitara", name: "Sitara", collection: "Moon Garden", price: 95000, category: "Dupattas", occasion: "Wedding", color: "Powder Blue", fabric: "Tulle", embroidery: "Zardozi", silhouette: "Draped", madeToOrder: true, image: heroImage, alternateImage: sageImage, description: "A celestial tulle dupatta scattered with hand-embroidered stars and a jewelled border." },
  { id: "roohi", name: "Roohi", collection: "Heirloom Jewels", price: 68000, category: "Jewellery", occasion: "Reception", color: "Emerald", fabric: "Gold-plated", embroidery: "Kundan", silhouette: "Statement", madeToOrder: false, image: wineImage, alternateImage: heroImage, description: "An emerald-toned kundan collar composed as a modern heirloom for evening ceremonies." },
];

export const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

export const productById = (id: string) => products.find((product) => product.id === id);