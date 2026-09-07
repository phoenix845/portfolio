import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Cursor } from "@/components/layout/cursor";
import { NoiseOverlay } from "@/components/layout/noise-overlay";
import { PageTransition } from "@/components/layout/page-transition";
import { themeBootScript } from "@/lib/theme-script";
import { certifications, site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  keywords: [
    "portfolio",
    "software engineer",
    "frontend developer",
    "creative technologist",
    "react",
    "next.js",
    "typescript",
    ...site.socials.map((social) => social.label),
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "portfolio",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — ${site.role}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: [`${site.url}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: site.email,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: site.location },
  knowsAbout: [
    "Data Analytics",
    "Data Engineering",
    "Machine Learning",
    "Python",
    "SQL",
    "Power BI",
    "ETL Pipelines",
    "Predictive Modeling",
  ],
  hasCredential: certifications.map((cert) => ({
    "@type": "EducationalOccupationalCredential",
    name: cert.title,
    awardedBy: { "@type": "Organization", name: cert.issuer },
  })),
  sameAs: site.socials.map((social) => social.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background font-sans text-foreground">
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <MotionConfig reducedMotion="user">
          <ThemeProvider>
            <SmoothScroll>
              <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-accent-ink"
              >
                Skip to content
              </a>
              <Navbar />
              <PageTransition />
              <NoiseOverlay />
              {children}
              <Footer />
            </SmoothScroll>
          </ThemeProvider>
        </MotionConfig>
        <Cursor />
      </body>
    </html>
  );
}