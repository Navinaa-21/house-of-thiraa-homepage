import { Link } from "@tanstack/react-router";
import craft from "../assets/craft.jpg";

export default function Craft() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 md:grid-cols-2 md:gap-16">
        <img
          src={craft}
          alt="Artisan hand-block printing cotton fabric"
          loading="lazy"
          className="h-[360px] w-full object-cover sm:h-[520px]"
        />
        <div>
          <h2 className="font-display text-[28px] leading-snug text-ink sm:text-[38px]">
            Made for the everyday, rooted in tradition
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            Every Thiraa piece begins in a small workshop, cut and stitched in batches of
            forty or fewer. We work with cotton, mul and handloom blends chosen for how
            they feel on an ordinary Tuesday, not only on festival days.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Our prints come from block-printing families we have known for years, and our
            embroidery is finished by hand. Small irregularities stay — they are the mark of
            a person, not a machine.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block rounded-[2px] border border-maroon px-7 py-3 text-[12px] uppercase tracking-[0.08em] text-maroon transition-colors hover:bg-maroon hover:text-paper"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
