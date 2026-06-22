import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aureonbridge.com"),
  title: {
    default: "Aureon Bridge — AI Automation for Independent Businesses",
    template: "%s | Aureon Bridge",
  },
  description:
    "Aureon Bridge builds custom AI automation systems for independent businesses. Booking, follow-up, reviews, and reporting — integrated and automated.",
  openGraph: {
    title: "Aureon Bridge — Bridge the Gap. Automate the Rest.",
    description:
      "Custom AI automation for businesses that want to run leaner without hiring more people.",
    url: "https://aureonbridge.com",
    siteName: "Aureon Bridge",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Aureon Bridge",
              url: "https://aureonbridge.com",
              email: "hello@aureonbridge.com",
              description:
                "Custom AI automation agency for independent businesses. Booking, follow-up, reviews, and operational dashboards — integrated into one system.",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Washington, D.C. Metropolitan Area",
              },
              serviceType: "AI Automation Services",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
