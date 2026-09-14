import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

const products = [
  { image: p1, name: "Meenakshi Block-Print Kurta", price: "₹1,899", mrp: "₹2,499", tag: "-24%" },
  { image: p2, name: "Neela Indigo Kurta Set", price: "₹2,749", tag: "New" },
  { image: p3, name: "Haldi Cotton Co-ord Set", price: "₹2,299", mrp: "₹2,899", tag: "-20%" },
  { image: p4, name: "Ivory Chikankari Kurta", price: "₹2,999", tag: "New" },
  { image: p5, name: "Olive Zari Kurta with Dupatta", price: "₹3,249" },
  { image: p6, name: "Rosewood Blush Kurta Set", price: "₹2,499", mrp: "₹3,199", tag: "-22%" },
];

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-[28px] text-ink sm:text-[36px]">Bestsellers</h2>
          <a
            href="#"
            className="shrink-0 border-b border-maroon pb-1 text-[12px] uppercase tracking-[0.08em] text-maroon"
          >
            View all
          </a>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {products.map((product) => (
            <a
              key={product.name}
              href="#"
              className="w-[240px] shrink-0 snap-start sm:w-[268px]"
            >
              <div className="relative bg-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-[330px] w-full object-cover sm:h-[360px]"
                />
                {product.tag ? (
                  <span className="absolute left-0 top-4 bg-maroon px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-paper">
                    {product.tag}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 font-display text-[17px] text-ink">{product.name}</h3>
              <p className="mt-1 flex items-center gap-2 text-sm text-ink">
                <span>{product.price}</span>
                {product.mrp ? (
                  <span className="text-ink-soft line-through">{product.mrp}</span>
                ) : null}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
