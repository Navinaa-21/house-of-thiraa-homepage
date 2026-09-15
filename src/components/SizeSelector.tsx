import type { ProductSize } from "../data/products";

interface SizeSelectorProps {
  sizes: ProductSize[];
  selectedSize: ProductSize | null;
  onSelectSize: (size: ProductSize) => void;
  className?: string;
}

export default function SizeSelector({
  sizes,
  selectedSize,
  onSelectSize,
  className = "",
}: SizeSelectorProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        <label className="text-[11px] uppercase tracking-[0.14em] text-maroon font-semibold">
          Select Size
        </label>
        <span className="text-[11px] text-ink-soft underline cursor-pointer hover:text-maroon">
          Size Guide
        </span>
      </div>

      <div className="flex flex-wrap gap-2 pt-1">
        {sizes.map((size) => {
          const isSelected = selectedSize === size;
          return (
            <button
              key={size}
              type="button"
              onClick={() => onSelectSize(size)}
              className={`flex h-10 min-w-10 items-center justify-center rounded-[2px] border px-3 text-[12px] font-medium transition-all ${
                isSelected
                  ? "border-maroon bg-maroon text-paper shadow-sm"
                  : "border-hairline bg-paper text-ink hover:border-maroon"
              }`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
