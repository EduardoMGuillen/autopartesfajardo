export const SITE = {
  name: "Autopartes Fajardo",
  tagline: "Yonker y repuestos en El Progreso, Yoro",
  description:
    "Autopartes Fajardo: yonker, repuestos nuevos y usados, deshuese y piezas para todo tipo de vehículos en El Progreso, Yoro, Honduras. Dos sucursales, cotización por WhatsApp.",
  url: "https://autopartesfajardo.com",
  locale: "es_HN",
  city: "El Progreso",
  department: "Yoro",
  country: "Honduras",
} as const;

export const CONTACT = {
  phone: "3167-7432",
  phoneE164: "50431677432",
  whatsappUrl: "https://wa.me/50431677432",
  email: "autosfajardo98@gmail.com",
  facebook:
    "https://web.facebook.com/p/Auto-Partes-Fajardo-61552006826265/",
  instagram: "https://www.instagram.com/autopartes_fajardo_/",
  mapsSearch:
    "https://www.google.com/maps/search/autopartes+fajardo+el+progreso+yoro",
} as const;

export const NEXUS_URL = "https://www.nexusglobalsuministros.com/";

export type Location = {
  id: string;
  name: string;
  address: string;
  reference: string;
  lat: number;
  lng: number;
  hours: string;
};

export const LOCATIONS: Location[] = [
  {
    id: "santa-rita",
    name: "Sucursal Carretera a Santa Rita",
    address: "Salida, Carretera a Santa Rita",
    reference: "El Progreso, Yoro — rumbo a Santa Rita de Copán",
    lat: 15.3928,
    lng: -87.8085,
    hours: "Lun–Sáb 7:30 AM – 5:30 PM",
  },
  {
    id: "progreso-centro",
    name: "Sucursal El Progreso",
    address: "Zona urbana, El Progreso",
    reference: "Yoro, Honduras — cerca del eje comercial de la ciudad",
    lat: 15.3962,
    lng: -87.8221,
    hours: "Lun–Sáb 7:30 AM – 5:30 PM",
  },
];

export const SERVICES = [
  {
    icon: "wrench",
    title: "Repuestos nuevos y usados",
    description:
      "Motor, transmisión, suspensión, frenos, eléctrico y carrocería para sedanes, pickups y SUVs.",
  },
  {
    icon: "car",
    title: "Yonker y deshuese",
    description:
      "Piezas originales extraídas de vehículos en deshuese. Ahorrá sin sacrificar compatibilidad.",
  },
  {
    icon: "search",
    title: "Búsqueda por modelo",
    description:
      "Decinos marca, modelo y año por WhatsApp; te ayudamos a ubicar la pieza en stock o en yonker.",
  },
  {
    icon: "truck",
    title: "Envíos en Yoro",
    description:
      "Entregas en El Progreso y alrededores. Consultá disponibilidad y tiempo de entrega al cotizar.",
  },
  {
    icon: "shield",
    title: "Asesoría honesta",
    description:
      "Te orientamos para que compres lo que realmente necesitás tu vehículo, sin vueltas.",
  },
  {
    icon: "clock",
    title: "Atención rápida",
    description:
      "Respuesta ágil por WhatsApp y mostrador. Ideal para talleres, flotillas y dueños de carro.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Encontré el alternador para mi Hilux en el yonker. Precio justo y me lo instalaron el mismo día en mi taller.",
    author: "Carlos M.",
    role: "Cliente, El Progreso",
  },
  {
    quote:
      "Siempre les escribo por WhatsApp con el número de chasis y me responden con lo que tienen. Muy confiables.",
    author: "María L.",
    role: "Dueña de taller",
  },
  {
    quote:
      "Buen surtido de piezas japonesas y americanas. Las dos sucursales facilitan cuando uno va en camino a Santa Rita.",
    author: "José R.",
    role: "Mecánico, Yoro",
  },
] as const;

export const CAR_BRANDS = [
  { name: "Toyota", slug: "toyota" },
  { name: "Honda", slug: "honda" },
  { name: "Nissan", slug: "nissan" },
  { name: "Chevrolet", slug: "chevrolet" },
  { name: "Ford", slug: "ford" },
  { name: "Mazda", slug: "mazda" },
  { name: "Hyundai", slug: "hyundai" },
  { name: "Kia", slug: "kia" },
  { name: "Mitsubishi", slug: "mitsubishi" },
  { name: "Suzuki", slug: "suzuki" },
  { name: "Isuzu", slug: "isuzu" },
  { name: "Volkswagen", slug: "volkswagen" },
  { name: "BMW", slug: "bmw" },
  { name: "Mercedes-Benz", slug: "mercedes" },
  { name: "Dodge", slug: "dodge" },
  { name: "Jeep", slug: "jeep" },
  { name: "Ram", slug: "ram" },
  { name: "Subaru", slug: "subaru" },
  { name: "Daihatsu", slug: "daihatsu" },
  { name: "Peugeot", slug: "peugeot" },
] as const;

export function brandLogoUrl(slug: string) {
  return `https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset@master/logos/optimized/${slug}.png`;
}
