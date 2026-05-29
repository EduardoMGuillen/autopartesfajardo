"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/motion";
import { brandLogoUrl, CAR_BRANDS } from "@/lib/site";

export function BrandCarousel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const doubled = [...CAR_BRANDS, ...CAR_BRANDS];

  return (
    <section id="marcas" className="overflow-hidden border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-10 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-fajardo-red">
            Marcas
          </p>
          <h2 className="font-display mt-2 text-3xl font-black italic text-fajardo-blue dark:text-white">
            Repuestos para las marcas que manejás
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-600 dark:text-slate-400">
            Japonesas, americanas, coreanas y europeas. Si no está en la lista,
            preguntanos igual por WhatsApp.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-slate-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-slate-950" />

        <div className="flex overflow-hidden">
          <div className="flex min-w-full animate-marquee items-center gap-10 py-2">
            {doubled.map((brand, i) => (
              <BrandLogo key={`${brand.slug}-${i}`} name={brand.name} slug={brand.slug} />
            ))}
          </div>
        </div>

        <div className="mt-4 flex overflow-hidden">
          <div className="flex min-w-full animate-marquee-reverse items-center gap-10 py-2 opacity-80">
            {[...doubled].reverse().map((brand, i) => (
              <BrandLogo key={`rev-${brand.slug}-${i}`} name={brand.name} slug={brand.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandLogo({ name, slug }: { name: string; slug: string }) {
  return (
    <div
      className="flex h-20 w-28 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 px-3 grayscale transition hover:grayscale-0 dark:border-slate-800 dark:bg-slate-900"
      title={name}
    >
      <Image
        src={brandLogoUrl(slug)}
        alt={`Repuestos ${name} en El Progreso Yoro — Autopartes Fajardo`}
        width={96}
        height={56}
        className="h-12 w-auto object-contain"
        unoptimized
      />
    </div>
  );
}
