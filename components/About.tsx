"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clientImages } from "@/lib/demo-images";
import { fadeUp } from "@/lib/motion";
import { CONTACT, SITE } from "@/lib/site";

const CHECKS = [
  "Dos puntos de atención en El Progreso, Yoro",
  "Yonker con inventario rotativo de deshuese",
  "Repuestos para mecánica, carrocería y eléctrico",
  "Cotización rápida por WhatsApp al 3167-7432",
  "Atención a talleres y clientes finales",
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-fajardo-red/10" />
          <div className="relative overflow-hidden rounded-3xl border-4 border-fajardo-blue shadow-xl">
            <Image
              src={clientImages.about}
              alt={`Local de ${SITE.name} — autopartes y yonker en ${SITE.city}`}
              width={700}
              height={500}
              className="h-[320px] w-full object-cover sm:h-[400px]"
            />
          </div>
          <motion.div
            variants={fadeUp}
            className="absolute -bottom-4 -right-2 rounded-2xl border-2 border-fajardo-yellow bg-fajardo-blue px-5 py-4 shadow-lg sm:-right-6"
          >
            <p className="font-display text-2xl font-black italic text-fajardo-yellow">
              2 sucursales
            </p>
            <p className="text-sm text-white">en El Progreso, Yoro</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest text-fajardo-red">
            Sobre nosotros
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display mt-2 text-3xl font-black italic text-fajardo-blue sm:text-4xl dark:text-white"
          >
            Autopartes Fajardo en el corazón de El Progreso
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
            Somos un negocio familiar dedicado a <strong>repuestos automotrices</strong> y{" "}
            <strong>yonker</strong> en {SITE.city}, {SITE.department}. Con sucursal en la{" "}
            <strong>Carretera a Santa Rita</strong> y presencia en la zona urbana, ayudamos a
            que tu vehículo vuelva a la calle sin gastar de más.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
            Ya sea que busques una pieza nueva, un componente de deshuese o asesoría para
            una reparación, nuestro equipo te atiende con la claridad que merecés. Seguinos en{" "}
            <a href={CONTACT.facebook} className="font-medium text-fajardo-red hover:underline" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>{" "}
            e{" "}
            <a href={CONTACT.instagram} className="font-medium text-fajardo-red hover:underline" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{" "}
            para novedades de inventario.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-6 space-y-3">
            {CHECKS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fajardo-yellow text-fajardo-blue">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
