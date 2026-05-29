"use client";

import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { fadeUp } from "@/lib/motion";
import { CONTACT, LOCATIONS } from "@/lib/site";

const LocationsMap = dynamic(
  () => import("@/components/LocationsMap").then((m) => m.LocationsMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[320px] items-center justify-center rounded-2xl bg-slate-200 text-slate-600 dark:bg-slate-800">
        Cargando mapa…
      </div>
    ),
  }
);

export function LocationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string | null>(LOCATIONS[0]?.id ?? null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LOCATIONS;
    return LOCATIONS.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.address.toLowerCase().includes(q) ||
        l.reference.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="ubicaciones" className="bg-slate-50 py-20 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-fajardo-red">
            Dónde estamos
          </p>
          <h2 className="font-display mt-2 text-3xl font-black italic text-fajardo-blue dark:text-white">
            Dos sucursales en El Progreso, Yoro
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
            Buscá por nombre o dirección. Tocá una sucursal para verla en el mapa.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mt-10 grid gap-8 lg:grid-cols-5"
        >
          <div className="space-y-4 lg:col-span-2">
            <label htmlFor="location-search" className="sr-only">
              Buscar sucursal
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                id="location-search"
                type="search"
                placeholder="Buscar: Santa Rita, El Progreso…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 shadow-sm outline-none ring-fajardo-red focus:ring-2 dark:border-slate-700 dark:bg-slate-800"
              />
            </div>

            <ul className="space-y-3" role="list">
              {filtered.length === 0 ? (
                <li className="rounded-xl border border-dashed border-slate-300 p-4 text-center text-slate-500">
                  No hay resultados. Probá otra palabra clave.
                </li>
              ) : (
                filtered.map((loc) => (
                  <li key={loc.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(loc.id)}
                      className={`w-full rounded-xl border p-4 text-left transition ${
                        activeId === loc.id
                          ? "border-fajardo-red bg-white shadow-md ring-2 ring-fajardo-red/20 dark:bg-slate-800"
                          : "border-slate-200 bg-white hover:border-fajardo-blue dark:border-slate-700 dark:bg-slate-800"
                      }`}
                    >
                      <p className="font-display font-bold text-fajardo-blue dark:text-white">
                        {loc.name}
                      </p>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {loc.address}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">{loc.reference}</p>
                      <p className="mt-2 text-xs font-medium text-fajardo-red">{loc.hours}</p>
                    </button>
                  </li>
                ))
              )}
            </ul>

            <a
              href={CONTACT.mapsSearch}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-fajardo-blue hover:text-fajardo-red dark:text-fajardo-yellow"
            >
              Abrir en Google Maps
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg lg:col-span-3 dark:border-slate-700">
            <LocationsMap locations={LOCATIONS} activeId={activeId} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
