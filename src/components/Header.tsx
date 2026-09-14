import logo from "../assets/thiraa-logo.png.asset.json";

const icons = [
  {
    label: "Search",
    path: (
      <>
        <circle cx="11" cy="11" r="7" />
        <line x1="16.5" y1="16.5" x2="21" y2="21" />
      </>
    ),
  },
  {
    label: "Store locator",
    path: (
      <>
        <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  {
    label: "Account",
    path: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
      </>
    ),
  },
  {
    label: "Wishlist",
    path: (
      <path d="M12 20s-7.5-4.6-7.5-9.5A4.5 4.5 0 0 1 12 7.8a4.5 4.5 0 0 1 7.5 2.7C19.5 15.4 12 20 12 20z" />
    ),
  },
  {
    label: "Bag",
    path: (
      <>
        <path d="M5 8h14l-1 12H6L5 8z" />
        <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
      </>
    ),
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper/95 backdrop-blur">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
        <a href="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="House of Thiraa"
            width={56}
            height={56}
            className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
          />
          <span className="min-w-0 leading-none">
            <span className="block text-[10px] tracking-[0.28em] text-maroon sm:text-[11px]">
              HOUSE OF
            </span>
            <span className="block font-display text-2xl font-normal text-maroon sm:text-3xl">
              Thiraa
            </span>
          </span>
        </a>

        <nav aria-label="Utilities" className="flex shrink-0 items-center gap-3 sm:gap-5">
          {icons.map((icon) => (
            <button
              key={icon.label}
              type="button"
              aria-label={icon.label}
              className="text-ink transition-colors hover:text-maroon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icon.path}
              </svg>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
