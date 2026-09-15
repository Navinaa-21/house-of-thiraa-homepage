import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useWishlist } from "../context/WishlistContext";

export const Route = createFileRoute("/wishlist")({
  component: WishlistPage,
});

function WishlistPage() {
  const { items: wishlistProducts, totalItems } = useWishlist();

  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <div className="bg-maroon-deep py-2 text-center text-[11px] uppercase tracking-[0.12em] text-paper">
        Complimentary shipping on orders above ₹2,999
      </div>
      <Header />
      <CategoryNav />

      <main className="mx-auto max-w-[1240px] px-5 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: "Your Wishlist" }]} />

        <div className="mt-4 border-b border-hairline pb-4 flex items-center justify-between">
          <div>
            <h1 className="font-display text-[28px] text-ink sm:text-[36px]">Your Wishlist</h1>
            <p className="mt-1 text-xs uppercase tracking-[0.1em] text-ink-soft font-medium">
              {totalItems} {totalItems === 1 ? "saved piece" : "saved pieces"}
            </p>
          </div>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7A6E68"
              strokeWidth="1"
              className="mx-auto"
            >
              <path d="M12 20s-7.5-4.6-7.5-9.5A4.5 4.5 0 0 1 12 7.8a4.5 4.5 0 0 1 7.5 2.7C19.5 15.4 12 20 12 20z" />
            </svg>
            <h2 className="font-display text-2xl text-ink">Your wishlist is waiting</h2>
            <p className="mx-auto max-w-sm text-sm text-ink-soft">
              Save pieces you love as you browse, and they’ll appear here for quick access later.
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
          <div className="mt-8">
            <ProductGrid products={wishlistProducts} />
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
