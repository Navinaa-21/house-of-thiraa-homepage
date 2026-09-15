import { Link } from "@tanstack/react-router";
import { useCart, type CartItem as CartItemType } from "../context/CartContext";
import QuantitySelector from "./QuantitySelector";

interface CartItemProps {
  item: CartItemType;
  className?: string;
  compact?: boolean;
}

export default function CartItem({ item, className = "", compact = false }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { product, size, quantity } = item;

  return (
    <div className={`flex gap-4 py-4 border-b border-hairline ${className}`}>
      {/* Product Image */}
      <Link
        to="/products/$productId"
        params={{ productId: product.id }}
        className="h-24 w-18 shrink-0 overflow-hidden rounded-[2px] bg-cream"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </Link>

      {/* Details & Controls */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link
              to="/products/$productId"
              params={{ productId: product.id }}
              className="font-display text-sm text-ink hover:text-maroon transition-colors line-clamp-1"
            >
              {product.name}
            </Link>
            <div className="mt-1 flex items-center gap-2 text-xs text-ink-soft">
              <span>Size: <strong className="text-ink">{size}</strong></span>
              <span>•</span>
              <span>{product.color}</span>
            </div>
          </div>

          <span className="text-sm font-semibold text-ink">
            ₹{(product.price * quantity).toLocaleString("en-IN")}
          </span>
        </div>

        {/* Quantity and Remove Action */}
        <div className="mt-3 flex items-center justify-between">
          <QuantitySelector
            quantity={quantity}
            onChange={(newQty) => updateQuantity(item.id, newQty)}
            className="scale-95 origin-left"
          />

          <button
            type="button"
            onClick={() => removeItem(item.id)}
            className="text-[11px] uppercase tracking-[0.1em] text-ink-soft hover:text-maroon underline transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
