import kurtas from "../assets/cat-kurtas.jpg";
import kurtaSets from "../assets/cat-kurta-sets.jpg";
import coords from "../assets/cat-coords.jpg";
import dupattas from "../assets/cat-dupattas.jpg";
import bottoms from "../assets/cat-bottoms.jpg";
import Divider from "./Divider";

function Tile({
  image,
  label,
  className,
}: {
  image: string;
  label: string;
  className?: string;
}) {
  return (
    <a
      href="#"
      className={`group relative block overflow-hidden ${className ?? ""}`}
    >
      <img
        src={image}
        alt={label}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <span className="absolute bottom-5 left-5 font-display text-xl text-paper sm:text-2xl">
        {label}
      </span>
    </a>
  );
}

export default function Categories() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="text-center">
          <h2 className="font-display text-[28px] text-ink sm:text-[36px]">
            Shop by category
          </h2>
          <Divider />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:h-[560px] md:grid-cols-4 md:grid-rows-2">
          <Tile
            image={kurtas}
            label="Kurtas"
            className="col-span-2 row-span-2 h-[300px] md:h-full"
          />
          <Tile image={kurtaSets} label="Kurta Sets" className="h-[220px] md:h-full" />
          <Tile image={coords} label="Co-ord Sets" className="h-[220px] md:h-full" />
          <Tile image={dupattas} label="Dupattas & Stoles" className="h-[220px] md:h-full" />
          <Tile image={bottoms} label="Bottoms" className="h-[220px] md:h-full" />
        </div>

      </div>
    </section>
  );
}
