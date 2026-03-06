"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {useMemo} from "react";

type Slide = {src: string; alt: string};

export function HeroCarousel({
  slides,
  className = ""
}: {
  slides: Slide[];
  className?: string;
}) {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 2800,
        stopOnMouseEnter: true
      }),
    []
  );

  const [emblaRef] = useEmblaCarousel({loop: true}, [autoplay]);

  return (
    <div className={`w-full ${className}`}>
      <div ref={emblaRef} className="overflow-hidden rounded-2xl border border-white/10 bg-transparent">
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative aspect-[16/9]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
