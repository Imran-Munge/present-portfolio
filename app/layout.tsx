import type { Metadata } from "next";
import { Orbitron, Manrope } from "next/font/google";
import "../styles/globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import Footer from "@/components/layout/Footer";
import { personalInfo, socialLinks, seoKeywords } from "@/lib/data";
import { ThemeProvider } from "@/components/theme-provider";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Imran Munge — Founder & AI Engineer | Blackmint Labs",
    template: "%s | Imran Munge",
  },
  description:
    "Imran Munge is the Founder & CEO of Blackmint Labs — an AI Engineer and Full Stack Developer building intelligent products and scalable web applications in India.",
  keywords: [...seoKeywords],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: personalInfo.siteUrl,
    siteName: personalInfo.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
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
  },
  description:
    "AI Engineer and Full Stack Developer, Founder of Blackmint Labs",
  sameAs: [socialLinks.linkedin, socialLinks.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${orbitron.variable} ${manrope.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            {children}
          </main>
          <FloatingNav />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
