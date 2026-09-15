import { Link } from "@tanstack/react-router";
import { PRODUCTS } from "../data/products";
import ProductCard from "./ProductCard";

export default function Bestsellers() {
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);

  return (
    <section id="bestsellers" className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-[28px] text-ink sm:text-[36px]">Bestsellers</h2>
          <Link
            to="/collections/$slug"
            params={{ slug: "all" }}
            className="shrink-0 border-b border-maroon pb-1 text-[12px] uppercase tracking-[0.08em] text-maroon"
          >
            View all
          </Link>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {bestsellers.map((product) => (
            <div key={product.id} className="w-[240px] shrink-0 snap-start sm:w-[268px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

