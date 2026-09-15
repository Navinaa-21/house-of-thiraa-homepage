import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  altText: string;
  className?: string;
}

export default function ProductGallery({
  images,
  altText,
  className = "",
}: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeImage = images[activeImageIndex] ?? images[0]!;

  return (
    <div className={`flex flex-col-reverse gap-4 sm:flex-row ${className}`}>
      {/* Thumbnails */}
      {images.length > 1 ? (
        <div className="flex flex-row gap-3 overflow-x-auto sm:flex-col sm:overflow-y-auto shrink-0">
          {images.map((img, index) => {
            const isActive = index === activeImageIndex;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveImageIndex(index)}
                className={`relative h-20 w-16 overflow-hidden rounded-[2px] border transition-all ${
                  isActive
                    ? "border-maroon ring-1 ring-maroon"
                    : "border-hairline opacity-75 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`${altText} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>
      ) : null}

      {/* Main Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream rounded-[2px] flex-1">
        <img
          src={activeImage}
          alt={altText}
          className="h-full w-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
}
