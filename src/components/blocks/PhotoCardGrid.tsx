import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoCard {
  imageSrc: string;
  imageAlt: string;
}

interface PhotoCardGridProps {
  cards: PhotoCard[];
}

/**
 * PhotoCardGrid — full-bleed Cobalt, asymmetric staggered grid
 * of photo cards (24px radius, small Cobalt-circle "+" overlay).
 * Thin Mist decorative SVG curve sweeps diagonally in background.
 */
export function PhotoCardGrid({ cards }: PhotoCardGridProps) {
  return (
    <section className="bg-cobalt py-24 md:py-32 relative overflow-hidden">
      {/* Decorative curve */}
      <svg
        className="absolute top-0 right-0 w-[60%] h-auto text-mist/10 pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M400 0 C300 100 250 300 0 400"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="grid-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={cn(
                "relative rounded-[24px] overflow-hidden group",
                i === 0 && "col-span-2 row-span-2",
                i === 1 && "col-span-1 row-span-1",
                i === 2 && "col-span-1 row-span-1",
                i === 3 && "col-span-1 row-span-2",
                i === 4 && "col-span-1 row-span-1"
              )}
            >
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                width={1200}
                height={900}
                className="w-full h-full object-cover aspect-[4/3]"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
              <div className="absolute bottom-3 left-3 size-8 rounded-full bg-cobalt/90 flex items-center justify-center text-white text-lg font-light">
                +
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
