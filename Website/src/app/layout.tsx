import type { Metadata, Viewport } from "next";
import {
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
  IBM_Plex_Mono,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SITE_URL } from "@/lib/site";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});
const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Aalam Drug Store | مستودع العلم للأدوية — Pharmaceutical Distributor in Amman, Jordan",
    template: "%s · Aalam Drug Store | مستودع العلم للأدوية",
  },
  description:
    "Aalam Drug Store (Al-Alam · Alam Pharma · مستودع العلم للأدوية) is a licensed pharmaceutical distributor in Amman, Jordan, supplying pharmacies and clinics with dependable, properly-handled medicine and medical supplies.",
  applicationName: "Aalam Drug Store",
  icons: {
    icon: "/brand/logo-mark.png",
    shortcut: "/brand/logo-mark.png",
    apple: "/brand/logo-mark.png",
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Aalam Drug Store",
    "Al-Alam Drug Store",
    "Alam Pharma",
    "Aalam pharma",
    "alalam",
    "مستودع العلم",
    "مستودع العلم للأدوية",
    "مستودع أدوية عمان",
    "pharmaceutical distributor Jordan",
    "drug store Amman",
    "medical supplies Jordan",
  ],
  openGraph: {
    title:
      "Aalam Drug Store | مستودع العلم للأدوية — Pharmaceutical Distributor in Amman",
    description:
      "Licensed pharmaceutical distribution serving pharmacies and clinics across Jordan.",
    siteName: "Aalam Drug Store",
    url: SITE_URL,
    type: "website",
    locale: "en_JO",
    alternateLocale: "ar_JO",
    images: [{ url: "/brand/logo-mark.png", width: 512, height: 415, alt: "Aalam Drug Store" }],
  },
  twitter: {
    card: "summary",
    title: "Aalam Drug Store | مستودع العلم للأدوية",
    description:
      "Licensed pharmaceutical distributor in Amman, Jordan — pharmacies & clinics supply.",
    images: ["/brand/logo-mark.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a111d" },
  ],
};

const noFlash = `(function(){try{var l=localStorage.getItem('alalam-locale');var t=localStorage.getItem('alalam-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var theme=(t==='dark'||t==='light')?t:(d?'dark':'light');var locale=(l==='ar'||l==='en')?l:'en';var r=document.documentElement;r.setAttribute('data-theme',theme);r.lang=locale;r.dir=(locale==='ar')?'rtl':'ltr';}catch(e){}})();`;

// Machine-readable company facts for search engines and AI assistants (schema.org).
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalOrganization"],
  name: "Aalam Drug Store",
  alternateName: [
    "مستودع العلم للأدوية",
    "مستودع العلم",
    "Al-Alam Drug Store",
    "Alam Pharma",
  ],
  description:
    "Licensed pharmaceutical distributor in Amman, Jordan, supplying pharmacies, clinics and healthcare providers with dependable, properly-handled medicine and medical products. Registered with Jordan's Ministry of Health (MoH) and operating in line with JFDA requirements.",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-mark.png`,
  image: `${SITE_URL}/brand/logo-mark.png`,
  telephone: "+962799998825",
  knowsLanguage: ["ar", "en"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khalil Dabbas St. 10",
    addressLocality: "Amman",
    addressCountry: "JO",
  },
  areaServed: { "@type": "Country", name: "Jordan" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+962799998825",
      contactType: "sales",
      availableLanguage: ["Arabic", "English"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${sans.variable} ${arabic.variable} ${mono.variable}`}
    >
      <body>
        <Script id="alalam-no-flash" strategy="beforeInteractive">
          {noFlash}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
