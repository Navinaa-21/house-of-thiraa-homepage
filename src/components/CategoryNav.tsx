const links = [
  "New Arrivals",
  "Kurtas",
  "Kurta Sets",
  "Co-ords",
  "Dresses",
  "Bottoms",
  "Dupattas & Stoles",
  "Sale",
];

export default function CategoryNav() {
  return (
    <nav
      aria-label="Categories"
      className="border-b border-hairline bg-cream"
    >
      <ul className="mx-auto flex max-w-[1240px] gap-7 overflow-x-auto px-5 py-3 text-[12px] uppercase tracking-[0.08em] whitespace-nowrap md:justify-center">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className={`border-b border-transparent pb-1 transition-colors hover:border-current ${
                link === "Sale" ? "text-maroon" : "text-ink"
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
