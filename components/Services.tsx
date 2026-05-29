"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger } from "@/lib/motion";
import { SERVICES } from "@/lib/site";

const ICONS: Record<string, React.ReactNode> = {
  wrench: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  ),
  car: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM5 11l1.5-4.5h11L19 11M5 11h14v6H5v-6z" />
  ),
  search: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  ),
  truck: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0h4m-4 0a2 2 0 11-4 0m4 0a2 2 0 104 0m-8 0H3m13 0v-2a1 1 0 00-1-1h-2" />
  ),
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  clock: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
};

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" className="bg-slate-50 py-20 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="text-center"
        >
          <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest text-fajardo-red">
            Qué hacemos
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-2 text-3xl font-black italic text-fajardo-blue sm:text-4xl dark:text-white"
          >
            Repuestos, yonker y más en Yoro
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
            Somos tu aliado en El Progreso para reparación, mantenimiento y
            restauración. Piezas nuevas, usadas y de deshuese con trato directo.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-fajardo-red/30 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-4 inline-flex rounded-xl bg-fajardo-blue p-3 text-fajardo-yellow transition group-hover:bg-fajardo-red group-hover:text-white">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {ICONS[service.icon]}
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold text-fajardo-blue dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
