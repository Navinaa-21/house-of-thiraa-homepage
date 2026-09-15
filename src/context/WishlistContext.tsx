import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "../data/products";

interface WishlistContextType {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  toggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
  totalItems: number;
}

const STORAGE_KEY = "house_of_thiraa_wishlist_v1";

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as Product[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save wishlist to localStorage", e);
    }
  }, [items]);

  const isWishlisted = (productId: string) => {
    return items.some((item) => item.id === productId);
  };

  const addItem = (product: Product) => {
    setItems((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const toggleWishlist = (product: Product) => {
    if (isWishlisted(product.id)) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        toggleWishlist,
        isWishlisted,
        totalItems: items.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
