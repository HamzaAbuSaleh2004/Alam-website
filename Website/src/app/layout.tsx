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
  title: {
    default: "Aalam Drug Store — Pharmaceutical Distribution in Jordan",
    template: "%s · Aalam Drug Store",
  },
  description:
    "Aalam Drug Store (مستودع العلم للأدوية) is a licensed pharmaceutical distributor in Amman, Jordan, supplying pharmacies and clinics with dependable, properly-handled medicine and medical products.",
  icons: {
    icon: "/brand/logo-mark.png",
    shortcut: "/brand/logo-mark.png",
    apple: "/brand/logo-mark.png",
  },
  keywords: [
    "pharmaceutical distributor Jordan",
    "drug store Amman",
    "medical supplies Jordan",
    "مستودع أدوية",
    "Aalam Drug Store",
  ],
  openGraph: {
    title: "Aalam Drug Store — Pharmaceutical Distribution in Jordan",
    description:
      "Licensed pharmaceutical distribution serving pharmacies and clinics across Jordan.",
    type: "website",
    locale: "en_JO",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a111d" },
  ],
};

const noFlash = `(function(){try{var l=localStorage.getItem('alalam-locale');var t=localStorage.getItem('alalam-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var theme=(t==='dark'||t==='light')?t:(d?'dark':'light');var locale=(l==='ar'||l==='en')?l:'en';var r=document.documentElement;r.setAttribute('data-theme',theme);r.lang=locale;r.dir=(locale==='ar')?'rtl':'ltr';}catch(e){}})();`;

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
