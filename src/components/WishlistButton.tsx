import type { MouseEvent } from "react";
import { useWishlist } from "../context/WishlistContext";
import type { Product } from "../data/products";

interface WishlistButtonProps {
  product: Product;
  className?: string;
  showText?: boolean;
}

export default function WishlistButton({
  product,
  className = "",
  showText = false,
}: WishlistButtonProps) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <button
      type="button"
      aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 transition-colors ${className}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={wishlisted ? "#7A2333" : "none"}
        stroke={wishlisted ? "#7A2333" : "currentColor"}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 transition-transform active:scale-90"
      >
        <path d="M12 20s-7.5-4.6-7.5-9.5A4.5 4.5 0 0 1 12 7.8a4.5 4.5 0 0 1 7.5 2.7C19.5 15.4 12 20 12 20z" />
      </svg>
      {showText ? (
        <span className="text-[12px] uppercase tracking-[0.08em] text-ink">
          {wishlisted ? "Wishlisted" : "Add to Wishlist"}
        </span>
      ) : null}
    </button>
  );
}
