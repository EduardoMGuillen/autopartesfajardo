"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/motion";
import { CONTACT } from "@/lib/site";

export function CtaBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contacto" className="py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-cta-gradient px-6 py-12 text-center text-white shadow-2xl sm:px-12"
      >
        <h2 className="font-display text-3xl font-black italic sm:text-4xl">
          ¿Buscás una pieza hoy mismo?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/90">
          Mandanos marca, modelo, año y la pieza que necesitás. Te respondemos por
          WhatsApp con disponibilidad y precio.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-fajardo-red shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            WhatsApp {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3.5 font-bold text-white transition hover:bg-white/15"
          >
            {CONTACT.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
