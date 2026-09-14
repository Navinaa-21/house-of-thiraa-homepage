import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="bg-maroon py-14 text-paper">
      <div className="mx-auto max-w-[640px] px-5 text-center">
        <h2 className="font-display text-[28px] sm:text-[34px]">
          Get 10% off your first order
        </h2>
        <p className="mt-3 text-sm text-paper/80">
          New arrivals, restocks and store events — one thoughtful email a month.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="mx-auto mt-8 flex max-w-[440px] items-center gap-4"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full border-b border-paper/50 bg-transparent pb-2 text-sm text-paper placeholder:text-paper/60 focus:border-paper focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 border-b border-paper pb-2 text-[12px] uppercase tracking-[0.08em] text-paper"
          >
            Subscribe
          </button>
        </form>

        {done ? (
          <p className="mt-4 text-[12px] uppercase tracking-[0.1em] text-paper/80">
            Thank you — your code is on its way.
          </p>
        ) : null}
      </div>
    </section>
  );
}
