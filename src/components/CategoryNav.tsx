import { Link } from "@tanstack/react-router";

const links = [
  { label: "New Arrivals", slug: "new-arrivals" },
  { label: "Kurtas", slug: "kurtas" },
  { label: "Kurta Sets", slug: "kurta-sets" },
  { label: "Co-ords", slug: "co-ords" },
  { label: "Dresses", slug: "dresses" },
  { label: "Bottoms", slug: "bottoms" },
  { label: "Dupattas & Stoles", slug: "dupattas-stoles" },
  { label: "Sale", slug: "sale" },
];

export default function CategoryNav() {
  return (
    <nav
      aria-label="Categories"
      className="border-b border-hairline bg-cream"
    >
      <ul className="mx-auto flex max-w-[1240px] gap-7 overflow-x-auto px-5 py-3 text-[12px] uppercase tracking-[0.08em] whitespace-nowrap md:justify-center">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              to="/collections/$slug"
              params={{ slug: item.slug }}
              className={`border-b border-transparent pb-1 transition-colors hover:border-current ${
                item.label === "Sale" ? "text-maroon font-semibold" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

