"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Necesitábamos una plataforma completa — landing, app y automatizaciones — y Nautom la entregó mucho más rápido de lo que esperábamos. Se nota que entienden el producto, no solo la tecnología.",
    name: "Pedro Mejía",
    role: "CEO @ Visible",
    image: "/images/testimonials/pedro-mejia-v2.jpeg",
    logo: "/images/logos/visible.svg",
    company: "Visible",
  },
  {
    quote:
      "Lo que más valoro es que no tuvimos que explicar todo dos veces. Entendieron la operación rápido y propusieron cosas que ni habíamos considerado. Se siente como tener un equipo técnico propio.",
    name: "Alfredo Vargas",
    role: "CEO @ Integra",
    image: "/images/testimonials/alfredo-vargas-v2.webp",
    logo: "/images/logos/integra.png",
    company: "Integra",
  },
  {
    quote:
      "Son directos, proponen soluciones concretas y no te venden humo. Cada entrega fue exactamente lo que necesitábamos.",
    name: "Steve Brechner",
    role: "CEO @ Peerforum",
    image: "/images/testimonials/steve-brechner-v2.webp",
    logo: "/images/logos/peerforum.png",
    company: "Peerforum",
  },
  {
    quote:
      "Nos automatizaron procesos que consumían horas por semana del equipo. Ahora eso corre solo y nosotros nos enfocamos en lo que importa.",
    name: "Erika Zarate",
    role: "Directora de Ops @ KS",
    image: "/images/testimonials/erika-zarate-v2.webp",
    logo: "/images/logos/keepsmiling.svg",
    company: "KeepSmiling",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const nextIndex = (current + 1) % testimonials.length;

  return (
    <div className="relative">
      {/* Cards container with peek */}
      <div className="overflow-hidden">
        <div className="flex gap-6 items-stretch">
          {/* Active card */}
          <div className="w-full flex-shrink-0 md:w-[85%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(255, 255, 255, 0.04)" }}
              >
                {/* Mobile: stacked, Desktop: 2 columns */}
                <div className="flex flex-col md:flex-row">
                  {/* Left column — logo + person */}
                  <div className="p-6 md:p-8 md:w-[35%] flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/[0.06]">
                    <div className="mb-6">
                      <Image
                        src={testimonials[current].logo}
                        alt={testimonials[current].company}
                        width={120}
                        height={32}
                        className="h-7 w-auto object-contain opacity-60"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-white text-sm">
                          {testimonials[current].name}
                        </p>
                        <p className="text-muted text-xs">
                          {testimonials[current].role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right column — quote card */}
                  <div className="p-6 md:p-8 md:w-[65%] flex items-center">
                    <div className="bg-white rounded-xl p-6 md:p-8 w-full">
                      <svg
                        width="32"
                        height="24"
                        viewBox="0 0 32 24"
                        fill="none"
                        className="mb-4"
                      >
                        <path
                          d="M0 24V14.4C0 11.7333 0.4 9.33333 1.2 7.2C2.05333 5.06667 3.17333 3.2 4.56 1.6L9.36 4C8.18667 5.49333 7.33333 7.01333 6.8 8.56C6.32 10.1067 6.08 11.76 6.08 13.52H12V24H0ZM20 24V14.4C20 11.7333 20.4 9.33333 21.2 7.2C22.0533 5.06667 23.1733 3.2 24.56 1.6L29.36 4C28.1867 5.49333 27.3333 7.01333 26.8 8.56C26.32 10.1067 26.08 11.76 26.08 13.52H32V24H20Z"
                          fill="#2563EB"
                          fillOpacity="0.2"
                        />
                      </svg>
                      <p className="text-gray-800 text-base md:text-lg leading-relaxed font-mono">
                        {testimonials[current].quote}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Peek of next card (desktop only) */}
          <div
            className="hidden md:block flex-shrink-0 rounded-2xl overflow-hidden opacity-30"
            style={{
              width: "15%",
              background: "rgba(255, 255, 255, 0.03)",
            }}
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <Image
                src={testimonials[nextIndex].logo}
                alt={testimonials[nextIndex].company}
                width={100}
                height={28}
                className="h-6 w-auto object-contain opacity-40"
              />
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={testimonials[nextIndex].image}
                  alt={testimonials[nextIndex].name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-white text-xs font-bold">
                    {testimonials[nextIndex].name}
                  </p>
                  <p className="text-muted text-[10px]">
                    {testimonials[nextIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next button — circle on right edge */}
      <button
        onClick={next}
        className="absolute right-0 md:right-[13%] top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
        aria-label="Next testimonial"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6 4L10 8L6 12"
            stroke="#0a0a0f"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-primary" : "bg-card-border"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
