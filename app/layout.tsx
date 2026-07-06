import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
// FloatingNav removed — sticky header serves as sole navigation
import Footer from "@/components/layout/Footer";
import { personalInfo, socialLinks, seoKeywords } from "@/lib/data";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: "Imran Munge | Full-Stack Developer & AI Engineer",
    template: "%s | Imran Munge",
  },
  description:
    "Portfolio of Imran Munge, full-stack developer and AI engineer building scalable web applications, SaaS products, and intelligent software solutions.",
  keywords: [
    ...seoKeywords,
    "Full Stack Developer",
    "AI Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "BlackMint Labs",
    "Imran Munge Portfolio",
  ],
  authors: [{ name: personalInfo.name }],
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: personalInfo.siteUrl,
    siteName: "Imran Munge",
    title: "Imran Munge | Full-Stack Developer & AI Engineer",
    description:
      "Portfolio of Imran Munge, full-stack developer and AI engineer building scalable web applications, SaaS products, and intelligent software solutions.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imran Munge | Full-Stack Developer & AI Engineer",
    description:
      "Portfolio of Imran Munge, full-stack developer and AI engineer building scalable web applications, SaaS products, and intelligent software solutions.",
    creator: "@imranmunge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: personalInfo.siteUrl,
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    name: "Blackmint Labs",
    url: "https://blackmintlabs.com",
  },
  description:
    "Founder & CEO of Blackmint Labs, AI Engineer and Full Stack Developer building AI-powered products, scalable web applications, and automation systems.",
  sameAs: [
    socialLinks.linkedin,
    socialLinks.github,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
