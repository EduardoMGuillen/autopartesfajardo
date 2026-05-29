"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger } from "@/lib/motion";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonios" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-fajardo-red">
            Testimonios
          </p>
          <h2 className="font-display mt-2 text-3xl font-black italic text-fajardo-blue dark:text-white">
            Lo que dicen en El Progreso y Yoro
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.blockquote
              key={t.author}
              variants={fadeUp}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <span className="font-display text-5xl leading-none text-fajardo-yellow" aria-hidden>
                &ldquo;
              </span>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{t.quote}</p>
              <footer className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-700">
                <cite className="not-italic font-bold text-fajardo-blue dark:text-white">
                  {t.author}
                </cite>
                <p className="text-sm text-slate-500">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
