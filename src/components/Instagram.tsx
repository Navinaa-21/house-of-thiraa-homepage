import p1 from "../assets/p1.jpg";
import p3 from "../assets/p3.jpg";
import p6 from "../assets/p6.jpg";
import catKurtas from "../assets/cat-kurtas.jpg";
import catCoords from "../assets/cat-coords.jpg";
import catDupattas from "../assets/cat-dupattas.jpg";

const images = [catKurtas, p1, catCoords, p6, catDupattas, p3];

export default function Instagram() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-5 text-center">
        <h2 className="font-display text-[28px] text-ink sm:text-[36px]">Follow along</h2>
        <a
          href="https://instagram.com"
          className="mt-3 inline-block text-[12px] uppercase tracking-[0.14em] text-maroon"
        >
          @houseofthiraa on Instagram
        </a>

        <div className="mt-10 grid grid-cols-3 gap-3 md:grid-cols-6">
          {images.map((image, i) => (
            <a key={i} href="https://instagram.com" className="block overflow-hidden">
              <img
                src={image}
                alt="House of Thiraa on Instagram"
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
