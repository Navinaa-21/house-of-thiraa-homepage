import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import Breadcrumbs from "../components/Breadcrumbs";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useCart } from "../context/CartContext";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const {
    items,
    subtotal,
    totalItems,
    isFreeShipping,
    amountNeededForFreeShipping,
    clearCart,
  } = useCart();

  const [checkoutNotice, setCheckoutNotice] = useState(false);

  const handleCheckoutClick = () => {
    setCheckoutNotice(true);
    setTimeout(() => {
      setCheckoutNotice(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <div className="bg-maroon-deep py-2 text-center text-[11px] uppercase tracking-[0.12em] text-paper">
        Complimentary shipping on orders above ₹2,999
      </div>
      <Header />
      <CategoryNav />

      <main className="mx-auto max-w-[1240px] px-5 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: "Shopping Bag" }]} />

        <div className="mt-4 flex items-center justify-between border-b border-hairline pb-4">
          <h1 className="font-display text-[28px] text-ink sm:text-[36px]">Your Bag</h1>
          {items.length > 0 ? (
            <button
              type="button"
              onClick={clearCart}
              className="text-xs uppercase tracking-[0.08em] text-ink-soft hover:text-maroon transition-colors"
            >
              Clear Bag
            </button>
          ) : null}
        </div>

        {items.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7A6E68"
              strokeWidth="1"
              className="mx-auto"
            >
              <path d="M5 8h14l-1 12H6L5 8z" />
              <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
            </svg>
            <h2 className="font-display text-2xl text-ink">Your bag is empty</h2>
            <p className="mx-auto max-w-sm text-sm text-ink-soft">
              Explore our handcrafted cotton kurtas, sets and co-ords to start adding items to your bag.
            </p>
            <div className="pt-4">
              <Link
                to="/collections/$slug"
                params={{ slug: "all" }}
                className="inline-block rounded-[2px] bg-maroon px-8 py-3 text-[12px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-maroon-deep"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Items List - Left (7 cols) */}
            <div className="lg:col-span-7">
              <div className="divide-y divide-hairline">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Order Summary - Right (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-[2px] border border-hairline bg-paper p-6 space-y-6">
                <h2 className="font-display text-xl text-ink">Order Summary</h2>

                {/* Free Shipping Alert */}
                <div className="rounded-[2px] bg-cream p-3 text-xs text-ink border border-hairline">
                  {isFreeShipping ? (
                    <p className="font-medium text-maroon">
                      ✓ You qualify for complimentary express shipping!
                    </p>
                  ) : (
                    <p>
                      Add <strong className="text-maroon">₹{amountNeededForFreeShipping.toLocaleString("en-IN")}</strong> more to get free shipping.
                    </p>
                  )}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-ink-soft">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-medium text-ink">₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-ink-soft">
                    <span>Estimated Shipping</span>
                    <span>{isFreeShipping ? "FREE" : "Calculated at checkout"}</span>
                  </div>
                  <hr className="border-hairline" />
                  <div className="flex justify-between font-semibold text-base text-ink">
                    <span>Total</span>
                    <span className="text-maroon">₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  <Link
                    to="/collections/$slug"
                    params={{ slug: "all" }}
                    className="block w-full text-center rounded-[2px] bg-maroon px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.1em] text-paper transition-colors hover:bg-maroon-deep"
                  >
                    Continue Shopping
                  </Link>

                  <button
                    type="button"
                    onClick={handleCheckoutClick}
                    className="block w-full text-center rounded-[2px] border border-maroon px-6 py-3 text-[12px] uppercase tracking-[0.1em] text-maroon transition-colors hover:bg-maroon hover:text-paper"
                  >
                    Proceed to Checkout
                  </button>
                </div>

                {/* Inline Notice for Showcase */}
                {checkoutNotice ? (
                  <div className="rounded-[2px] border border-gold/30 bg-cream/80 p-3 text-center text-xs text-gold">
                    ℹ Checkout will be enabled when the store goes live.
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
