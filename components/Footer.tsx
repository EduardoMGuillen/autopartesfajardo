import Image from "next/image";
import Link from "next/link";
import { clientImages } from "@/lib/demo-images";
import { CONTACT, NEXUS_URL, SITE } from "@/lib/site";

const QUICK = [
  { href: "#servicios", label: "Servicios" },
  { href: "#marcas", label: "Marcas" },
  { href: "#ubicaciones", label: "Ubicaciones" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-fajardo-blue/20 bg-fajardo-blue-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 text-center sm:px-6 lg:grid-cols-4 lg:px-8 lg:text-left">
        <div className="flex flex-col items-center lg:col-span-2 lg:items-start">
          <Image
            src={clientImages.logo}
            alt={SITE.name}
            width={200}
            height={80}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-md text-sm text-white/75 lg:mx-0">
            {SITE.name}: yonker, repuestos nuevos y usados, deshuese y asesoría
            automotriz en {SITE.city}, {SITE.department}, {SITE.country}. Tu
            opción local para reparación y repación vehicular.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-fajardo-yellow">
            Enlaces
          </h3>
          <ul className="mt-4 space-y-2">
            {QUICK.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/80 hover:text-fajardo-yellow">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-fajardo-yellow">
            Contacto
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={CONTACT.whatsappUrl} className="hover:text-fajardo-yellow" target="_blank" rel="noopener noreferrer">
                WhatsApp: {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-fajardo-yellow">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.facebook} className="hover:text-fajardo-yellow" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={CONTACT.instagram} className="hover:text-fajardo-yellow" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-5 text-center text-xs text-white/60 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {year} {SITE.name}. Todos los derechos reservados.</p>
          <p>
            <a
              href={NEXUS_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="font-medium text-fajardo-yellow transition hover:text-white"
            >
              Powered by Nexus Global
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
