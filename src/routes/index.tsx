import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import Hero from "../components/Hero";
import UspStrip from "../components/UspStrip";
import Categories from "../components/Categories";
import Bestsellers from "../components/Bestsellers";
import Craft from "../components/Craft";
import Testimonials from "../components/Testimonials";
import Instagram from "../components/Instagram";
import StoreLocator from "../components/StoreLocator";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Thiraa — Everyday Ethnic Wear for Women" },
      {
        name: "description",
        content:
          "Handcrafted cotton kurtas, kurta sets and co-ords for everyday wear. Small-batch ethnic clothing from South India, online and in store.",
      },
      { property: "og:title", content: "House of Thiraa — Everyday Ethnic Wear for Women" },
      {
        property: "og:description",
        content:
          "Handcrafted cotton kurtas, kurta sets and co-ords, made in small batches in South India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <div className="bg-maroon-deep py-2 text-center text-[11px] uppercase tracking-[0.12em] text-paper">
        Complimentary shipping on orders above ₹2,999
      </div>
      <Header />
      <CategoryNav />
      <main>
        <Hero />
        <UspStrip />
        <Categories />
        <Bestsellers />
        <Craft />
        <Testimonials />
        <Instagram />
        <StoreLocator />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
