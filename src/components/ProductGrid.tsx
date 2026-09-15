import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
  className?: string;
}

export default function ProductGrid({
  products,
  emptyMessage = "No products found in this collection.",
  className = "",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-base text-ink-soft">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10 ${className}`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
