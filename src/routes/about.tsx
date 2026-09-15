import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import Breadcrumbs from "../components/Breadcrumbs";
import Craft from "../components/Craft";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Divider from "../components/Divider";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <div className="bg-maroon-deep py-2 text-center text-[11px] uppercase tracking-[0.12em] text-paper">
        Complimentary shipping on orders above ₹2,999
      </div>
      <Header />
      <CategoryNav />

      <main className="mx-auto max-w-[1240px] px-5 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: "Our Story" }]} />

        {/* Hero Banner */}
        <div className="mt-4 text-center py-8 sm:py-14 max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] text-maroon font-semibold">
            About House of Thiraa
          </p>
          <h1 className="mt-3 font-display text-[32px] leading-tight text-ink sm:text-[46px]">
            Rooted in Craft. Made for Today.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft max-w-xl mx-auto">
            Everyday ethnic clothing crafted in small batches, honoring South Indian handloom traditions and modern comfort.
          </p>
          <div className="flex justify-center mt-2">
            <Divider />
          </div>
        </div>

        {/* Brand Philosophy Section */}
        <div className="my-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-[2px] border border-hairline bg-paper p-8 text-center space-y-3">
            <h3 className="font-display text-xl text-ink">Handcrafted Detail</h3>
            <p className="text-xs leading-relaxed text-ink-soft">
              Block printing and delicate needlework finished by hand in small artisan workshops. Small irregularities are celebrated as marks of human artistry.
            </p>
          </div>

          <div className="rounded-[2px] border border-hairline bg-paper p-8 text-center space-y-3">
            <h3 className="font-display text-xl text-ink">Natural Breathability</h3>
            <p className="text-xs leading-relaxed text-ink-soft">
              We select soft cottons, fine mulmul, and light handloom weaves engineered for warm days, daily wear, and effortless movement.
            </p>
          </div>

          <div className="rounded-[2px] border border-hairline bg-paper p-8 text-center space-y-3">
            <h3 className="font-display text-xl text-ink">Small-Batch Mindset</h3>
            <p className="text-xs leading-relaxed text-ink-soft">
              Stitched in limited quantities to maintain quality, reduce waste, and bring quiet elegance to everyday wear rather than mass production.
            </p>
          </div>
        </div>

        {/* Reused Craft Component */}
        <div className="my-12">
          <Craft />
        </div>

        {/* Closing CTA */}
        <div className="my-16 rounded-[2px] bg-maroon p-10 sm:p-14 text-center text-paper max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl">Explore Our Collection</h2>
          <p className="text-xs text-paper/80 max-w-md mx-auto">
            Discover handcrafted kurtas, kurta sets, and co-ords made for ordinary Tuesdays and special gatherings alike.
          </p>
          <div className="pt-2">
            <Link
              to="/collections/$slug"
              params={{ slug: "all" }}
              className="inline-block rounded-[2px] border border-paper px-8 py-3 text-[12px] uppercase tracking-[0.1em] text-paper transition-colors hover:bg-paper hover:text-maroon"
            >
              Discover the Collection
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
