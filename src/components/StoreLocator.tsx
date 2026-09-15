import { Link } from "@tanstack/react-router";
import store1 from "../assets/store-1.jpg";
import store2 from "../assets/store-2.jpg";
import store3 from "../assets/store-3.jpg";
import store4 from "../assets/store-4.jpg";

const stores = [
  { image: store1, city: "Coimbatore", address: "12 Race Course Road, Coimbatore 641018" },
  { image: store2, city: "Chennai", address: "48 Kasturi Rangan Road, Alwarpet, Chennai 600018" },
  { image: store3, city: "Bengaluru", address: "7 Sampige Road, Malleshwaram, Bengaluru 560003" },
  { image: store4, city: "Kochi", address: "23 Bazaar Road, Mattancherry, Kochi 682002" },
];

export default function StoreLocator() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-[28px] text-ink sm:text-[36px]">Visit us in person</h2>
          <Link
            to="/stores"
            className="shrink-0 border-b border-maroon pb-1 text-[12px] uppercase tracking-[0.08em] text-maroon"
          >
            View all locations
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stores.map((store) => (
            <article key={store.city}>
              <Link to="/stores">
                <img
                  src={store.image}
                  alt={`House of Thiraa store in ${store.city}`}
                  loading="lazy"
                  className="h-[200px] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </Link>
              <h3 className="mt-5 font-display text-xl text-ink">{store.city}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{store.address}</p>
              <Link
                to="/stores"
                className="mt-4 inline-block border-b border-maroon pb-1 text-[12px] uppercase tracking-[0.08em] text-maroon hover:text-maroon-deep transition-colors"
              >
                Visit Store
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
