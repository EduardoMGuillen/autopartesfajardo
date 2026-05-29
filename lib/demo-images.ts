/** Imágenes del cliente en /public. Unsplash solo como respaldo visual en hero. */

export const clientImages = {
  logo: "/logo.png",
  about: "/imagen1.jpg",
  hero: "/imagen2.jpg",
} as const;

/** Licencia Unsplash: https://unsplash.com/license — sustituir en producción si aplica */
export const demoImages = {
  heroFallback:
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80",
  aboutFallback:
    "https://images.unsplash.com/photo-1625047509248-ec889c97d630?w=800&q=80",
} as const;
