import logo from "../assets/thiraa-logo.png.asset.json";
import plumeria from "../assets/plumeria-band.jpg";

const socials = [
  { label: "Instagram", path: "M12 7.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9zM17 6.3a1.05 1.05 0 1 0 1.05 1.05A1.05 1.05 0 0 0 17 6.3zM12 4.4c2.5 0 2.8 0 3.8.06a5 5 0 0 1 1.7.32 3 3 0 0 1 1.72 1.72 5 5 0 0 1 .32 1.7c.05 1 .06 1.3.06 3.8s0 2.8-.06 3.8a5 5 0 0 1-.32 1.7 3 3 0 0 1-1.72 1.72 5 5 0 0 1-1.7.32c-1 .05-1.3.06-3.8.06s-2.8 0-3.8-.06a5 5 0 0 1-1.7-.32 3 3 0 0 1-1.72-1.72 5 5 0 0 1-.32-1.7c-.05-1-.06-1.3-.06-3.8s0-2.8.06-3.8a5 5 0 0 1 .32-1.7A3 3 0 0 1 6.5 4.78a5 5 0 0 1 1.7-.32c1-.05 1.3-.06 3.8-.06z" },
  { label: "Facebook", path: "M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2h-2.4V14h2.4v7z" },
  { label: "Pinterest", path: "M12 4a8 8 0 0 0-2.9 15.4c-.1-.7-.2-1.7 0-2.4l1-4s-.2-.5-.2-1.2c0-1.2.7-2 1.5-2 .7 0 1 .5 1 1.1 0 .7-.4 1.8-.7 2.8-.2.8.4 1.5 1.2 1.5 1.5 0 2.6-1.9 2.6-4.1 0-1.7-1.2-3-3.3-3-2.5 0-4 1.8-4 3.8 0 .8.3 1.6.6 2 .1.1.1.2.1.3l-.2.9c0 .2-.2.2-.3.1-1-.5-1.7-1.9-1.7-3.1 0-2.5 1.8-4.8 5.2-4.8 2.8 0 4.9 2 4.9 4.6 0 3-1.7 5.2-4.2 5.2-.9 0-1.6-.5-1.9-1l-.5 2c-.2.7-.7 1.6-1 2.1A8 8 0 1 0 12 4z" },
];

function Column({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-maroon">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-ink-soft">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="transition-colors hover:text-maroon">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cream via-[#F7E9E6] to-[#F3DCDA]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-10 px-5 pt-16 pb-10 lg:grid-cols-4">
        <div>
          <img
            src={logo.url}
            alt="House of Thiraa"
            loading="lazy"
            className="h-16 w-16 rounded-full border border-hairline bg-paper object-contain p-1"
          />
          <p className="mt-5 max-w-[260px] text-sm leading-relaxed text-ink-soft">
            Everyday ethnic wear for women, made in small batches in South India — cotton
            kurtas, sets and co-ords with handcrafted detail.
          </p>
        </div>

        <Column title="About Thiraa" links={["About Us", "Our Stores"]} />
        <Column
          title="Policies"
          links={[
            "Privacy Policy",
            "Shipping Policy",
            "Cancellation Policy",
            "Return & Exchange Policy",
          ]}
        />

        <div>
          <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-maroon">
            Contact Us
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-soft">
            <li>
              <a href="tel:+919000000000" className="hover:text-maroon">
                +91 90000 00000
              </a>
            </li>
            <li>
              <a href="mailto:care@houseofthiraa.com" className="hover:text-maroon">
                care@houseofthiraa.com
              </a>
            </li>
          </ul>

          <h4 className="mt-8 text-[12px] font-semibold uppercase tracking-[0.12em] text-maroon">
            Find Us On
          </h4>
          <div className="mt-4 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon transition-colors hover:bg-maroon-deep"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FBF8F2">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="h-[130px] w-full sm:h-[200px]"
        style={{
          backgroundImage: `url(${plumeria})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 200px",
          backgroundPosition: "center bottom",
        }}
      />
    </footer>
  );
}
