import { Link } from "@tanstack/react-router";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const {
    items,
    subtotal,
    totalItems,
    isFreeShipping,
    amountNeededForFreeShipping,
    freeShippingThreshold,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-paper text-ink shadow-2xl flex flex-col justify-between border-l border-hairline">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
            <div>
              <h2 className="font-display text-xl font-medium text-ink">Your Bag</h2>
              <p className="text-xs text-ink-soft mt-0.5">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-ink-soft hover:text-maroon transition-colors"
              aria-label="Close bag"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-cream px-6 py-2.5 text-center text-xs text-ink border-b border-hairline">
            {isFreeShipping ? (
              <span className="font-medium text-maroon">
                ✓ You are eligible for complimentary shipping!
              </span>
            ) : (
              <span>
                Add <strong className="text-maroon">₹{amountNeededForFreeShipping.toLocaleString("en-IN")}</strong> more for free shipping (Orders above ₹{freeShippingThreshold.toLocaleString("en-IN")})
              </span>
            )}
          </div>

          {/* Items Container */}
          <div className="flex-1 overflow-y-auto px-6 py-2">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7A6E68" strokeWidth="1">
                  <path d="M5 8h14l-1 12H6L5 8z" />
                  <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
                </svg>
                <p className="font-display text-lg text-ink">Your bag is currently empty.</p>
                <p className="text-xs text-ink-soft max-w-[240px]">
                  Explore our handcrafted cotton kurtas and co-ords to add your favorite pieces.
                </p>
                <Link
                  to="/collections/$slug"
                  params={{ slug: "all" }}
                  onClick={onClose}
                  className="mt-2 inline-block rounded-[2px] bg-maroon px-6 py-2.5 text-[11px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-maroon-deep"
                >
                  Explore Collection
                </Link>
              </div>
            ) : (
              items.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </div>

          {/* Footer & Checkout Call to Actions */}
          {items.length > 0 ? (
            <div className="border-t border-hairline bg-cream p-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-soft uppercase tracking-[0.08em] text-xs">Subtotal</span>
                <span className="font-semibold text-ink text-base">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-[11px] text-ink-soft">
                Taxes included. Shipping calculated at final step.
              </p>

              <div className="space-y-2 pt-1">
                <Link
                  to="/cart"
                  onClick={onClose}
                  className="block w-full text-center rounded-[2px] bg-maroon px-6 py-3 text-[12px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-maroon-deep font-medium"
                >
                  View Full Bag & Checkout
                </Link>

                <button
                  type="button"
                  onClick={onClose}
                  className="block w-full text-center text-[11px] uppercase tracking-[0.1em] text-ink-soft hover:text-maroon py-2 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
