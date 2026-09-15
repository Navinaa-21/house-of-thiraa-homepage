import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product, ProductSize } from "../data/products";

export interface CartItem {
  id: string; // Unique cart item ID (product.id + "-" + size)
  productId: string;
  product: Product;
  size: ProductSize;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: ProductSize, quantity?: number) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  isFreeShipping: boolean;
}

const STORAGE_KEY = "house_of_thiraa_cart_v1";
const FREE_SHIPPING_THRESHOLD = 2999;

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? (JSON.parse(saved) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [items]);

  const addItem = (product: Product, size: ProductSize, quantity = 1) => {
    const cartItemId = `${product.id}-${size}`;
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        const existing = updated[existingIndex];
        if (existing) {
          updated[existingIndex] = {
            ...existing,
            quantity: existing.quantity + quantity,
          };
        }
        return updated;
      }
      return [
        ...prev,
        {
          id: cartItemId,
          productId: product.id,
          product,
          size,
          quantity,
        },
      ];
    });
  };

  const removeItem = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item)),
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        totalItems,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        amountNeededForFreeShipping,
        isFreeShipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
