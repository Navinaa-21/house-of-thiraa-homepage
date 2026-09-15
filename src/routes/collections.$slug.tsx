import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Divider from "../components/Divider";
import { PRODUCTS, type Product, type ProductCategory } from "../data/products";

export const Route = createFileRoute("/collections/$slug")({
  component: CollectionPage,
});

const CATEGORY_META: Record<
  string,
  { title: string; categoryKey?: ProductCategory; filterFn?: (p: Product) => boolean; description: string }
> = {
  all: {
    title: "All Collections",
    description: "Thoughtfully crafted everyday ethnic wear, stitched with heritage in small batches.",
  },
  kurtas: {
    title: "Kurtas",
    categoryKey: "kurtas",
    description: "Everyday straight and flared cotton kurtas with hand-block prints and delicate embroidery.",
  },
  "kurta-sets": {
    title: "Kurta Sets",
    categoryKey: "kurta-sets",
    description: "Harmonious 2-piece and 3-piece ensembles paired with tailored pants and breathable dupattas.",
  },
  "co-ords": {
    title: "Co-ord Sets",
    categoryKey: "co-ords",
    description: "Modern ethnic co-ords cut for effortless movement and casual sophistication.",
  },
  coords: {
    title: "Co-ord Sets",
    categoryKey: "co-ords",
    description: "Modern ethnic co-ords cut for effortless movement and casual sophistication.",
  },
  dresses: {
    title: "Dresses",
    categoryKey: "dresses",
    description: "Breezy handloom and cotton ethnic dresses for warm days and relaxed evenings.",
  },
  bottoms: {
    title: "Bottoms",
    categoryKey: "bottoms",
    description: "Tailored cotton palazzos, tapered trousers, and pants designed for daily comfort.",
  },
  "dupattas-stoles": {
    title: "Dupattas & Stoles",
    categoryKey: "dupattas-stoles",
    description: "Chanderi silk, mulmul, and cotton dupattas with zari borders and handwork.",
  },
  dupattas: {
    title: "Dupattas & Stoles",
    categoryKey: "dupattas-stoles",
    description: "Chanderi silk, mulmul, and cotton dupattas with zari borders and handwork.",
  },
  "new-arrivals": {
    title: "New Arrivals",
    filterFn: (p) => !!p.isNewArrival,
    description: "Our freshest seasonal edits, small-batch arrivals, and new hand-printed styles.",
  },
  sale: {
    title: "Sale & Special Edits",
    filterFn: (p) => !!p.onSale,
    description: "Limited-edition archived styles and small-batch pieces at special prices.",
  },
};

type SortOption = "featured" | "price-low-high" | "price-high-low" | "newest";

function CollectionPage() {
  const { slug } = Route.useParams();
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const meta = CATEGORY_META[slug.toLowerCase()] ?? {
    title: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " "),
    categoryKey: slug as ProductCategory,
    description: "Handcrafted everyday ethnic wear for women, made in small batches in South India.",
  };

  const filteredProducts = useMemo(() => {
    let list: Product[] = [...PRODUCTS];

    if (meta.filterFn) {
      list = list.filter(meta.filterFn);
    } else if (meta.categoryKey) {
      list = list.filter((p) => p.category === meta.categoryKey);
    }

    switch (sortBy) {
      case "price-low-high":
        return list.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return list.sort((a, b) => b.price - a.price);
      case "newest":
        return list.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
      default:
        return list;
    }
  }, [meta, sortBy]);

  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <div className="bg-maroon-deep py-2 text-center text-[11px] uppercase tracking-[0.12em] text-paper">
        Complimentary shipping on orders above ₹2,999
      </div>
      <Header />
      <CategoryNav />

      <main className="mx-auto max-w-[1240px] px-5 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: meta.title }]} />

        {/* Collection Header */}
        <div className="mt-4 text-center">
          <h1 className="font-display text-[32px] text-ink sm:text-[42px]">{meta.title}</h1>
          <p className="mx-auto mt-3 max-w-[560px] text-sm leading-relaxed text-ink-soft">
            {meta.description}
          </p>
          <div className="flex justify-center">
            <Divider />
          </div>
        </div>

        {/* Bar: Product Count & Sort */}
        <div className="mt-8 flex flex-col gap-4 border-b border-hairline pb-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[12px] uppercase tracking-[0.1em] text-ink-soft font-medium">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "design" : "designs"}
          </span>

          <div className="flex items-center gap-2">
            <label htmlFor="sort-by" className="text-[12px] uppercase tracking-[0.08em] text-ink-soft">
              Sort by:
            </label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="rounded-[2px] border border-hairline bg-paper px-3 py-1.5 text-xs text-ink focus:border-maroon focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8">
          <ProductGrid products={filteredProducts} />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
