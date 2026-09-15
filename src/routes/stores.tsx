import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Divider from "../components/Divider";
import { STORES } from "../data/stores";

export const Route = createFileRoute("/stores")({
  component: StoresPage,
});

function StoresPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <div className="bg-maroon-deep py-2 text-center text-[11px] uppercase tracking-[0.12em] text-paper">
        Complimentary shipping on orders above ₹2,999
      </div>
      <Header />
      <CategoryNav />

      <main className="mx-auto max-w-[1240px] px-5 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: "Our Stores" }]} />

        {/* Hero Header */}
        <div className="mt-4 text-center py-6 max-w-2xl mx-auto">
          <h1 className="font-display text-[32px] text-ink sm:text-[42px]">Visit Us in Person</h1>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">
            Experience our fabrics, hand-block prints, and tailored fits in our physical store locations across South India.
          </p>
          <div className="flex justify-center mt-2">
            <Divider />
          </div>
        </div>

        {/* Store Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STORES.map((store) => (
            <article
              key={store.id}
              className="flex flex-col justify-between rounded-[2px] border border-hairline bg-paper overflow-hidden"
            >
              <div>
                <img
                  src={store.image}
                  alt={store.name}
                  loading="lazy"
                  className="h-[220px] w-full object-cover"
                />
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-maroon">
                    {store.city} Boutique
                  </span>
                  <h3 className="font-display text-xl text-ink">{store.city}</h3>
                  <p className="text-xs leading-relaxed text-ink-soft">{store.address}</p>
                  <div className="pt-2 text-xs space-y-1 text-ink-soft border-t border-hairline">
                    <p>
                      <strong className="text-ink">Hours:</strong> {store.hours}
                    </p>
                    <p>
                      <strong className="text-ink">Phone:</strong> {store.phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <a
                  href={store.mapQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b border-maroon pb-1 text-[11px] uppercase tracking-[0.1em] text-maroon hover:text-maroon-deep transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
