const quotes = [
  {
    quote:
      "The cotton is genuinely soft — I have worn my kurta through a Chennai summer and it still looks new.",
    name: "Divya R.",
    city: "Chennai",
  },
  {
    quote:
      "Fit is true to size and the block print is neat up close. It has become my everyday work uniform.",
    name: "Anitha S.",
    city: "Coimbatore",
  },
  {
    quote:
      "Bought a co-ord set for a family function and got asked about it all evening. Quiet, not loud.",
    name: "Meera K.",
    city: "Bengaluru",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 md:grid-cols-3 md:gap-12">
        {quotes.map((item) => (
          <blockquote key={item.name} className="border-t border-hairline pt-6">
            <p className="font-display text-[19px] italic leading-relaxed text-ink">
              “{item.quote}”
            </p>
            <footer className="mt-5 text-[11px] uppercase tracking-[0.14em] text-ink-soft">
              {item.name} — {item.city}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
