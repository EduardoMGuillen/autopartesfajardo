"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clientImages } from "@/lib/demo-images";
import { CONTACT } from "@/lib/site";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#marcas", label: "Marcas" },
  { href: "#sobre", label: "Nosotros" },
  { href: "#ubicaciones", label: "Ubicaciones" },
  { href: "#testimonios", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-fajardo-blue-dark/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#" className="flex shrink-0 items-center gap-2">
          <Image
            src={clientImages.logo}
            alt="Autopartes Fajardo — Yonker y repuestos en El Progreso, Yoro"
            width={180}
            height={72}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/90 transition hover:text-fajardo-yellow"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-fajardo-red px-4 py-2 text-sm font-bold text-white shadow-md transition hover:bg-fajardo-red-dark hover:shadow-lg sm:inline-flex"
          >
            Cotizar por WhatsApp
          </a>

          <button
            type="button"
            className="inline-flex rounded-lg border border-white/20 p-2 text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-fajardo-blue lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Móvil">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-white hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-fajardo-red px-4 py-3 text-center font-bold text-white"
                onClick={() => setOpen(false)}
              >
                WhatsApp {CONTACT.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
