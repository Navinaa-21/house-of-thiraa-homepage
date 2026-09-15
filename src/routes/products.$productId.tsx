import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductGallery from "../components/ProductGallery";
import SizeSelector from "../components/SizeSelector";
import QuantitySelector from "../components/QuantitySelector";
import WishlistButton from "../components/WishlistButton";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { PRODUCTS, type ProductSize } from "../data/products";
import { useCart } from "../context/CartContext";

export const Route = createFileRoute("/products/$productId")({
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { productId } = Route.useParams();
  const { addItem } = useCart();

  const product = PRODUCTS.find((p) => p.id === productId || p.slug === productId);

  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [sizeError, setSizeError] = useState<boolean>(false);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream font-sans text-ink">
        <Header />
        <CategoryNav />
        <main className="mx-auto max-w-[1240px] px-5 py-20 text-center">
          <h1 className="font-display text-4xl text-ink">Product Not Found</h1>
          <p className="mt-4 text-sm text-ink-soft">
            The design you are looking for is no longer available or may have moved.
          </p>
          <div className="mt-8">
            <Link
              to="/collections/$slug"
              params={{ slug: "all" }}
              className="inline-block rounded-[2px] bg-maroon px-6 py-3 text-[12px] uppercase tracking-[0.08em] text-paper transition-colors hover:bg-maroon-deep"
            >
              Browse All Collections
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToBag = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      setSizeError(true);
      return;
    }

    setSizeError(false);
    addItem(product, selectedSize ?? product.sizes[0] ?? "M", quantity);

    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
    }, 2500);
  };

  const categoryLabel =
    product.category.charAt(0).toUpperCase() + product.category.slice(1).replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <div className="bg-maroon-deep py-2 text-center text-[11px] uppercase tracking-[0.12em] text-paper">
        Complimentary shipping on orders above ₹2,999
      </div>
      <Header />
      <CategoryNav />

      <main className="mx-auto max-w-[1240px] px-5 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: categoryLabel, href: `/collections/${product.category}` },
            { label: product.name },
          ]}
        />

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Gallery - Left (7 cols) */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} altText={product.name} />
          </div>

          {/* Details - Right (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              {product.badge ? (
                <span className="inline-block bg-maroon px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-paper">
                  {product.badge}
                </span>
              ) : null}
              <h1 className="mt-2 font-display text-[28px] leading-tight text-ink sm:text-[34px]">
                {product.name}
              </h1>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-xl font-semibold text-ink">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice ? (
                  <span className="text-base text-ink-soft line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.1em] text-gold font-medium">
                Taxes included. Free shipping over ₹2,999
              </p>
            </div>

            <hr className="border-hairline" />

            <p className="text-sm leading-relaxed text-ink-soft">{product.description}</p>

            <div className="space-y-1 text-xs text-ink-soft">
              <p>
                <span className="font-semibold text-ink uppercase tracking-[0.08em]">Color:</span>{" "}
                {product.color}
              </p>
              <p>
                <span className="font-semibold text-ink uppercase tracking-[0.08em]">Fabric:</span>{" "}
                {product.fabric}
              </p>
              <p>
                <span className="font-semibold text-ink uppercase tracking-[0.08em]">Craft:</span>{" "}
                {product.craft}
              </p>
            </div>

            <hr className="border-hairline" />

            {/* Size Selector */}
            {product.sizes.length > 0 ? (
              <div>
                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={selectedSize}
                  onSelectSize={(size) => {
                    setSelectedSize(size);
                    setSizeError(false);
                  }}
                />
                {sizeError ? (
                  <p className="mt-2 text-xs font-medium text-maroon">
                    * Please select a size before adding to bag.
                  </p>
                ) : null}
              </div>
            ) : null}

            {/* Quantity Selector */}
            <QuantitySelector quantity={quantity} onChange={setQuantity} />

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleAddToBag}
                className={`flex-1 rounded-[2px] px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.12em] transition-all ${
                  addedSuccess
                    ? "bg-emerald-800 text-paper"
                    : "bg-maroon text-paper hover:bg-maroon-deep"
                }`}
              >
                {addedSuccess ? "✓ Added to Bag" : "Add to Bag"}
              </button>

              <div className="flex items-center justify-center rounded-[2px] border border-hairline bg-paper px-4 py-3 hover:border-maroon">
                <WishlistButton product={product} showText />
              </div>
            </div>

            {/* Delivery & Assurance Notes */}
            <div className="rounded-[2px] border border-hairline bg-paper p-4 text-xs space-y-2 text-ink-soft">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7A2333" strokeWidth="1.5">
                  <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
                </svg>
                <span>Dispatches in 24–48 hours across India</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7A2333" strokeWidth="1.5">
                  <path d="M4 12a8 8 0 1 0 3-6.2M4 4v5h5" />
                </svg>
                <span>Easy 15-day return and exchange policy</span>
              </div>
            </div>

            {/* Care Instructions */}
            {product.careInstructions && product.careInstructions.length > 0 ? (
              <div className="pt-2">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-maroon">
                  Care Instructions
                </h3>
                <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-ink-soft">
                  {product.careInstructions.map((instruction, i) => (
                    <li key={i}>{instruction}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
