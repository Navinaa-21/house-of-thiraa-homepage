import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import catKurtas from "../assets/cat-kurtas.jpg";
import catKurtaSets from "../assets/cat-kurta-sets.jpg";
import catCoords from "../assets/cat-coords.jpg";
import catDupattas from "../assets/cat-dupattas.jpg";
import catBottoms from "../assets/cat-bottoms.jpg";

export type ProductCategory =
  | "kurtas"
  | "kurta-sets"
  | "co-ords"
  | "dresses"
  | "bottoms"
  | "dupattas-stoles";

export type ProductSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: ProductSize[];
  description: string;
  fabric: string;
  craft: string;
  color: string;
  inStock: boolean;
  badge?: string;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  onSale?: boolean;
  careInstructions?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Meenakshi Block-Print Kurta",
    slug: "meenakshi-block-print-kurta",
    category: "kurtas",
    price: 1899,
    originalPrice: 2499,
    images: [p1, catKurtas],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description:
      "Hand-block printed cotton straight kurta featuring intricate motifs and a keyhole neck accent. Stitched in small batches for everyday breathability.",
    fabric: "100% Pure Cotton",
    craft: "Bagru Hand-Block Print",
    color: "Maroon & Cream",
    inStock: true,
    badge: "-24%",
    isBestseller: true,
    onSale: true,
    careInstructions: ["Gentle hand wash separately in cold water", "Dry in shade", "Warm iron"],
  },
  {
    id: "p2",
    name: "Neela Indigo Kurta Set",
    slug: "neela-indigo-kurta-set",
    category: "kurta-sets",
    price: 2749,
    images: [p2, catKurtaSets],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Classic 2-piece indigo kurta set with matching tapered pants. Dyed using natural dabu technique with hand embroidery along the neckline.",
    fabric: "Mulmul Cotton",
    craft: "Dabu Indigo Print & Hand Embroidery",
    color: "Indigo Blue",
    inStock: true,
    badge: "New",
    isBestseller: true,
    isNewArrival: true,
    careInstructions: ["First wash dry clean recommended", "Wash separately in cold water", "Do not bleach"],
  },
  {
    id: "p3",
    name: "Haldi Cotton Co-ord Set",
    slug: "haldi-cotton-co-ord-set",
    category: "co-ords",
    price: 2299,
    originalPrice: 2899,
    images: [p3, catCoords],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Vibrant yellow cotton top and cropped trousers duo. Cut for an easy relaxed fit with subtle wooden button detail.",
    fabric: "Handloom Slub Cotton",
    craft: "Handloom Weave",
    color: "Mustard Yellow",
    inStock: true,
    badge: "-20%",
    isBestseller: true,
    onSale: true,
    careInstructions: ["Machine wash gentle cycle", "Iron inside out"],
  },
  {
    id: "p4",
    name: "Ivory Chikankari Kurta",
    slug: "ivory-chikankari-kurta",
    category: "kurtas",
    price: 2999,
    images: [p4, p1],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Elegant pristine white straight kurta decorated with delicate hand chikankari needlework across the yoke and sleeves.",
    fabric: "Fine Cotton Mul",
    craft: "Lucknowi Chikankari",
    color: "Ivory White",
    inStock: true,
    badge: "New",
    isBestseller: true,
    isNewArrival: true,
    careInstructions: ["Hand wash in cold water", "Use mild detergent"],
  },
  {
    id: "p5",
    name: "Olive Zari Kurta with Dupatta",
    slug: "olive-zari-kurta-dupatta",
    category: "kurta-sets",
    price: 3249,
    images: [p5, catDupattas],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Quietly festive olive green A-line kurta highlighted with fine gold zari threadwork paired with a tissue chanderi dupatta.",
    fabric: "Cotton Silk Blend",
    craft: "Zari Threadwork & Chanderi Weave",
    color: "Olive Green & Gold",
    inStock: true,
    isBestseller: true,
    careInstructions: ["Dry clean only"],
  },
  {
    id: "p6",
    name: "Rosewood Blush Kurta Set",
    slug: "rosewood-blush-kurta-set",
    category: "kurta-sets",
    price: 2499,
    originalPrice: 3199,
    images: [p6, catKurtaSets],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Soft dusty rose 3-piece set featuring flared kurta, cropped pants, and printed mulmul dupatta with scalloped borders.",
    fabric: "100% Breathable Cotton",
    craft: "Sanganeri Floral Print",
    color: "Rosewood Pink",
    inStock: true,
    badge: "-22%",
    isBestseller: true,
    onSale: true,
    careInstructions: ["Gentle hand wash", "Dry in shade"],
  },
  {
    id: "p7",
    name: "Kaveri Floral Cotton Kurta",
    slug: "kaveri-floral-cotton-kurta",
    category: "kurtas",
    price: 1799,
    originalPrice: 2199,
    images: [catKurtas, p1],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Earthy floral motif A-line kurta styled with mandarin collar and three-quarter sleeves. Made for long workdays.",
    fabric: "Soft South Cotton",
    craft: "Kalamkari Hand-Block",
    color: "Terracotta & Beige",
    inStock: true,
    badge: "-18%",
    isNewArrival: true,
    careInstructions: ["Wash inside out", "Cold water wash"],
  },
  {
    id: "p8",
    name: "Ananya Handloom Kurta Set",
    slug: "ananya-handloom-kurta-set",
    category: "kurta-sets",
    price: 2899,
    images: [catKurtaSets, p2],
    sizes: ["M", "L", "XL"],
    description:
      "Minimalist handloom cotton kurta set in subtle teal tones with contrast fabric pipe detailing on cuffs and side slits.",
    fabric: "Mangalagiri Cotton",
    craft: "Handloom Weave",
    color: "Deep Teal",
    inStock: true,
    careInstructions: ["Dry clean for first two washes", "Hand wash afterwards"],
  },
  {
    id: "p9",
    name: "Malabar Breeze Co-ord Set",
    slug: "malabar-breeze-co-ord-set",
    category: "co-ords",
    price: 2149,
    images: [catCoords, p3],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Relaxed notch-neck tunic top and wide-leg trousers set in cool pastels. Designed for modern everyday comfort.",
    fabric: "Linen Cotton Blend",
    craft: "Yarn-Dyed Stripes",
    color: "Sage Green",
    inStock: true,
    badge: "New",
    isNewArrival: true,
    careInstructions: ["Machine wash cold", "Iron on medium heat"],
  },
  {
    id: "p10",
    name: "Chanderi Zari Border Dupatta",
    slug: "chanderi-zari-border-dupatta",
    category: "dupattas-stoles",
    price: 1299,
    originalPrice: 1599,
    images: [catDupattas, p5],
    sizes: ["M"], // Free size / Standard
    description:
      "Lightweight semi-sheer Chanderi dupatta with woven golden zari borders and delicate hand tassels.",
    fabric: "Chanderi Silk Cotton",
    craft: "Woven Zari Border",
    color: "Gold & Ivory",
    inStock: true,
    badge: "-18%",
    careInstructions: ["Dry clean only"],
  },
  {
    id: "p11",
    name: "Off-White Cotton Tapered Palazzo",
    slug: "off-white-cotton-tapered-palazzo",
    category: "bottoms",
    price: 999,
    images: [catBottoms, p4],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Versatile ankle-length tapered cotton trousers with elasticated back waist and deep side pockets.",
    fabric: "100% Cotton Cambric",
    craft: "Tailored Solid Weave",
    color: "Off-White",
    inStock: true,
    careInstructions: ["Machine wash with light colors"],
  },
];
