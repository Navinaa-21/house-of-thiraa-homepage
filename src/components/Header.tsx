import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "../assets/thiraa-logo.png.asset.json";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import CartDrawer from "./CartDrawer";
import SearchModal from "./SearchModal";

export default function Header() {
  const { totalItems: cartCount } = useCart();
  const { totalItems: wishlistCount } = useWishlist();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-hairline bg-paper/95 backdrop-blur">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="House of Thiraa"
              width={56}
              height={56}
              className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
            />
            <span className="min-w-0 leading-none">
              <span className="block text-[10px] tracking-[0.28em] text-maroon sm:text-[11px]">
                HOUSE OF
              </span>
              <span className="block font-display text-2xl font-normal text-maroon sm:text-3xl">
                Thiraa
              </span>
            </span>
          </Link>

          <nav aria-label="Utilities" className="flex shrink-0 items-center gap-3 sm:gap-5">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
              className="text-ink transition-colors hover:text-maroon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            </button>

            <Link
              to="/stores"
              aria-label="Store locator"
              className="text-ink transition-colors hover:text-maroon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </Link>

            <button
              type="button"
              aria-label="Account"
              className="text-ink transition-colors hover:text-maroon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
              </svg>
            </button>

            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative text-ink transition-colors hover:text-maroon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20s-7.5-4.6-7.5-9.5A4.5 4.5 0 0 1 12 7.8a4.5 4.5 0 0 1 7.5 2.7C19.5 15.4 12 20 12 20z" />
              </svg>
              {wishlistCount > 0 ? (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-maroon text-[9px] font-bold text-paper">
                  {wishlistCount}
                </span>
              ) : null}
            </Link>

            <button
              type="button"
              aria-label="Bag"
              onClick={() => setIsCartOpen(true)}
              className="relative text-ink transition-colors hover:text-maroon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 8h14l-1 12H6L5 8z" />
                <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
              </svg>
              {cartCount > 0 ? (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-maroon text-[9px] font-bold text-paper">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </nav>
        </div>
      </header>

      {/* Slide-over Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
