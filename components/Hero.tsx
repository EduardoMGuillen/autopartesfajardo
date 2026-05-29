"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clientImages } from "@/lib/demo-images";
import { fadeUp } from "@/lib/motion";
import { CONTACT, SITE } from "@/lib/site";

const STATS = [
  { value: "2", label: "Sucursales en El Progreso" },
  { value: "20+", label: "Marcas atendidas" },
  { value: "HN", label: "Envíos en Yoro" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-hero-gradient pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-fajardo-yellow/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-fajardo-red/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="text-center text-white lg:text-left"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-fajardo-yellow/40 bg-white/10 px-4 py-1.5 text-sm font-medium text-fajardo-yellow backdrop-blur"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-fajardo-yellow" />
            Yonker · Repuestos · {SITE.city}, {SITE.department}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-black italic leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            El yonker de confianza
            <span className="mt-1 block text-gradient-fajardo">
              en El Progreso, Yoro
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-lg text-white/85 lg:mx-0">
            En <strong>Autopartes Fajardo</strong> encontrás repuestos nuevos y usados,
            piezas de deshuese y asesoría para tu carro, pickup o SUV. Cotizá al instante
            por WhatsApp.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-fajardo-red px-6 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-fajardo-red-dark hover:shadow-xl"
            >
              <WhatsAppIcon />
              Escribinos al {CONTACT.phone}
            </a>
            <a
              href="#ubicaciones"
              className="inline-flex items-center rounded-full border-2 border-white/80 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white hover:text-fajardo-blue"
            >
              Ver sucursales
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-8 text-center lg:text-left"
          >
            {STATS.map((s) => (
              <li key={s.label} className="flex flex-col items-center lg:items-start">
                <p className="font-display text-2xl font-black text-fajardo-yellow sm:text-3xl">
                  {s.value}
                </p>
                <p className="text-xs text-white/75 sm:text-sm">{s.label}</p>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
        >
          <div className="absolute -inset-3 rounded-3xl bg-fajardo-yellow/30 blur-xl" />
          <div className="relative overflow-hidden rounded-3xl border-4 border-fajardo-yellow shadow-2xl">
            <Image
              src={clientImages.hero}
              alt="Inventario de repuestos y yonker en Autopartes Fajardo, El Progreso Yoro"
              width={800}
              height={600}
              className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fajardo-blue-dark/90 to-transparent p-5 text-center lg:text-left">
              <p className="font-display text-lg font-bold italic text-white">
                Repuestos · Yonker · Deshuese
              </p>
              <p className="text-sm text-fajardo-yellow">
                Auto Partes Fajardo y Fajardo #1
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
