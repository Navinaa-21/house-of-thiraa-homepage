import { Link } from "@tanstack/react-router";
import { useState } from "react";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    kicker: "Festive Edit — New In",
    title: "Everyday elegance, stitched with heritage",
    text: "Hand-block printed cotton kurtas and sets, made in small batches in South India.",
  },
  {
    image: hero2,
    kicker: "Summer Cottons",
    title: "Light fabrics for long, warm days",
    text: "Breathable mul cotton and handloom weaves in soft, wearable tones.",
  },
  {
    image: hero3,
    kicker: "Occasion Wear",
    title: "Quietly festive, never overdone",
    text: "Zari borders and hand embroidery, cut for comfort and movement.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = slides[active] ?? slides[0]!;

  return (
    <section className="relative h-[440px] w-full overflow-hidden bg-cream sm:h-[560px]">
      {slides.map((s, i) => (
        <img
          key={s.image}
          src={s.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="relative mx-auto flex h-full max-w-[1240px] items-center px-5">
        <div className="max-w-[520px] bg-paper/90 px-7 py-8 sm:px-10 sm:py-10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-maroon">
            {slide.kicker}
          </p>
          <h1 className="mt-4 font-display text-[30px] leading-tight text-ink sm:text-[44px]">
            {slide.title}
          </h1>
          <p className="mt-4 max-w-[400px] text-sm leading-relaxed text-ink-soft">
            {slide.text}
          </p>
          <Link
            to="/collections/$slug"
            params={{ slug: "new-arrivals" }}
            className="mt-7 inline-block rounded-[2px] bg-maroon px-7 py-3 text-[12px] uppercase tracking-[0.08em] text-paper transition-colors hover:bg-maroon-deep"
          >
            Shop New Arrivals
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((s, i) => (
          <button
            key={s.kicker}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 w-2 rounded-full border border-paper transition-colors ${
              i === active ? "bg-paper" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
