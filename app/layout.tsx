import type { Metadata, Viewport } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { CONTACT, LOCATIONS, SITE } from "@/lib/site";

const display = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
});

const sans = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

const title =
  "Yonker y Repuestos en El Progreso, Yoro | Autopartes Fajardo Honduras";

const description = SITE.description;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: `%s | ${SITE.name}`,
  },
  description,
  keywords: [
    "yonker El Progreso",
    "yonker Yoro",
    "repuestos El Progreso",
    "repuestos Yoro Honduras",
    "autopartes Fajardo",
    "deshuese Honduras",
    "piezas usadas carro",
    "reparación vehículos Yoro",
    "autopartes Santa Rita",
    "desguace El Progreso",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title,
    description,
    images: [{ url: "/logo.png", width: 800, height: 400, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE.url },
  category: "automotive",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#DC2626" },
    { media: "(prefers-color-scheme: dark)", color: "#172554" },
  ],
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoPartsStore",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        description,
        url: SITE.url,
        email: CONTACT.email,
        telephone: `+${CONTACT.phoneE164}`,
        image: `${SITE.url}/logo.png`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.department,
          addressCountry: "HN",
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Yoro, Honduras",
        },
        sameAs: [CONTACT.facebook, CONTACT.instagram],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "07:30",
            closes: "17:30",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Repuestos y piezas de yonker",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Repuestos automotrices",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Piezas de yonker y deshuese",
              },
            },
          ],
        },
      },
      ...LOCATIONS.map((loc) => ({
        "@type": "AutoPartsStore",
        name: `${SITE.name} — ${loc.name}`,
        description: loc.reference,
        geo: {
          "@type": "GeoCoordinates",
          latitude: loc.lat,
          longitude: loc.lng,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: loc.address,
          addressLocality: SITE.city,
          addressRegion: SITE.department,
          addressCountry: "HN",
        },
        parentOrganization: { "@id": `${SITE.url}/#organization` },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
