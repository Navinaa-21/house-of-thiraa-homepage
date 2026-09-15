import { Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { PRODUCTS, type Product } from "../data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return PRODUCTS.filter((product) => {
      return (
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.color.toLowerCase().includes(q) ||
        product.fabric.toLowerCase().includes(q) ||
        product.craft.toLowerCase().includes(q)
      );
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-12 sm:pt-20">
        <div className="relative w-full max-w-2xl rounded-[2px] border border-hairline bg-paper text-ink shadow-2xl overflow-hidden">
          {/* Search Header */}
          <div className="flex items-center gap-3 border-b border-hairline px-5 py-4 bg-cream">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A2333" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>

            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search kurtas, co-ords, indigo, chikankari..."
              className="w-full bg-transparent text-sm text-ink placeholder:text-ink-soft focus:outline-none"
            />

            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-xs uppercase tracking-[0.1em] text-ink-soft hover:text-maroon"
              >
                Clear
              </button>
            ) : null}

            <button
              type="button"
              onClick={onClose}
              className="p-1 text-ink-soft hover:text-maroon transition-colors"
              aria-label="Close search"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Results / Empty Body */}
          <div className="max-h-[60vh] overflow-y-auto p-5">
            {!query.trim() ? (
              <div className="py-8 text-center space-y-2">
                <p className="font-display text-base text-ink">Search our collection</p>
                <p className="text-xs text-ink-soft">
                  Type a design name, craft technique (e.g. <em>Block-print</em>, <em>Chikankari</em>), or fabric.
                </p>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="py-12 text-center space-y-4">
                <p className="font-display text-lg text-ink">No pieces found</p>
                <p className="text-xs text-ink-soft">
                  We couldn't find any designs matching "{query}". Try searching for another keyword.
                </p>
                <Link
                  to="/collections/$slug"
                  params={{ slug: "all" }}
                  onClick={onClose}
                  className="inline-block rounded-[2px] bg-maroon px-6 py-2.5 text-[11px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-maroon-deep"
                >
                  Explore All Collections
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-maroon">
                  {searchResults.length} {searchResults.length === 1 ? "Result" : "Results"} Found
                </p>
                <div className="divide-y divide-hairline">
                  {searchResults.map((product: Product) => (
                    <Link
                      key={product.id}
                      to="/products/$productId"
                      params={{ productId: product.id }}
                      onClick={onClose}
                      className="flex items-center gap-4 py-3 group transition-colors hover:bg-cream/50 px-2 rounded-[2px]"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="h-16 w-12 shrink-0 object-cover rounded-[2px]"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-sm text-ink group-hover:text-maroon transition-colors truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs text-ink-soft mt-0.5">
                          {product.craft} • {product.color}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-ink shrink-0">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
