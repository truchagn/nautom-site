"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";

const clients = [
  { name: "El Jumillano", src: "/images/logos/ivess-logo-footer.svg" },
  { name: "Peerforum", src: "/images/logos/peerforum.png" },
  { name: "Integra Groupe", src: "/images/logos/integra.png" },
  { name: "KeepSmiling", src: "/images/logos/keepsmiling.svg" },
  { name: "Impacto Positivo", src: "/images/logos/Impacto%20Positivo_IsoLogotipo-02.png" },
  { name: "Avenida Más", src: "/images/logos/avenida+_logo_dark.png" },
  { name: "YPF Gas", src: "/images/logos/ypf-gas2.png" },
  { name: "Visible", src: "/images/logos/visible.svg" },
];

const SPEED = 50; // px per second — constant across all viewports

export default function ClientLogos() {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [animStyle, setAnimStyle] = useState<string>("");

  const measure = useCallback(() => {
    if (!firstSetRef.current) return;
    const setWidth = firstSetRef.current.offsetWidth;
    // account for the gap after the first set
    const gap = 80;
    const offset = setWidth + gap;
    const duration = offset / SPEED;

    setAnimStyle(`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${offset}px); }
      }
      .marquee-track {
        animation: marquee ${duration}s linear infinite;
        white-space: nowrap;
        will-change: transform;
      }
    `);
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [measure]);

  return (
    <div className="overflow-hidden">
      <style>{animStyle}</style>
      <div ref={trackRef} className="marquee-track flex items-center gap-[80px]">
        {/* First set — measured via ref */}
        <div ref={firstSetRef} className="flex items-center gap-[80px] flex-shrink-0">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex-shrink-0 transition-opacity duration-300"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.5 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
            >
              <Image
                src={client.src}
                alt={client.name}
                width={160}
                height={32}
                className="h-8 max-md:h-6 w-auto object-contain"
                style={{ width: "auto" }}
              />
            </div>
          ))}
        </div>
        {/* Clone sets for seamless loop */}
        {[1, 2].map((copy) => (
          <div key={copy} className="flex items-center gap-[80px] flex-shrink-0" aria-hidden>
            {clients.map((client) => (
              <div
                key={`${client.name}-${copy}`}
                className="flex-shrink-0 transition-opacity duration-300"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.5 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={160}
                  height={32}
                  className="h-8 max-md:h-6 w-auto object-contain"
                  style={{ width: "auto" }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
