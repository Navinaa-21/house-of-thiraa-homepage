const items = [
  { label: "Free shipping over ₹2,999", icon: "M3 7h11v8H3zM14 10h4l3 3v2h-7z" },
  { label: "Easy 15-day returns", icon: "M4 12a8 8 0 1 0 3-6.2M4 4v5h5" },
  { label: "Handcrafted details", icon: "M12 3l2.2 5.6L20 10l-4.4 3 1.4 6-5-3.3L7 19l1.4-6L4 10l5.8-1.4z" },
  { label: "Cash on delivery", icon: "M3 7h18v10H3zM7 12h.01M17 12h.01" },
];

export default function UspStrip() {
  return (
    <section className="bg-maroon text-paper">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 opacity-90"
            >
              <path d={item.icon} />
            </svg>
            <span className="text-[12px] uppercase tracking-[0.08em]">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
