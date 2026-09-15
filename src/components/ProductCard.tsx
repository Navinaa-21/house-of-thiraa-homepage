import { Link } from "@tanstack/react-router";
import type { Product } from "../data/products";
import WishlistButton from "./WishlistButton";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  return (
    <div className={`group relative flex flex-col ${className}`}>
      <Link
        to="/products/$productId"
        params={{ productId: product.id }}
        className="block flex-1 overflow-hidden"
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Badge */}
          {product.badge ? (
            <span className="absolute left-0 top-3 bg-maroon px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-paper z-10">
              {product.badge}
            </span>
          ) : null}

          {/* Wishlist Floating Button */}
          <div className="absolute right-3 top-3 z-10 rounded-full bg-paper/80 p-1.5 backdrop-blur transition-opacity hover:bg-paper">
            <WishlistButton product={product} />
          </div>
        </div>

        <div className="mt-3 space-y-1">
          <h3 className="font-display text-[16px] leading-snug text-ink group-hover:text-maroon transition-colors line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-ink font-medium">
            <span>₹{product.price.toLocaleString("en-IN")}</span>
            {product.originalPrice ? (
              <span className="text-ink-soft line-through text-xs font-normal">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  );
}
