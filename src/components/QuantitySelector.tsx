interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export default function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
  className = "",
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-[11px] uppercase tracking-[0.14em] text-maroon font-semibold block">
        Quantity
      </label>
      <div className="inline-flex items-center rounded-[2px] border border-hairline bg-paper">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={handleDecrement}
          disabled={quantity <= min}
          className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:bg-cream disabled:opacity-30"
        >
          −
        </button>
        <span className="flex h-10 w-10 items-center justify-center text-sm font-medium text-ink">
          {quantity}
        </span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={handleIncrement}
          disabled={quantity >= max}
          className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:bg-cream disabled:opacity-30"
        >
          +
        </button>
      </div>
    </div>
  );
}
