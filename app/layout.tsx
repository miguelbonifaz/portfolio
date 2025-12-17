import type { Metadata } from "next";
import { Space_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import { generateWebSiteSchema } from "@/lib/json-ld";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miguelbonifaz.dev"),
  title: {
    default: "Miguel Bonifaz - Desarrollador Laravel | Portafolio",
    template: "%s | Miguel Bonifaz",
  },
  description: "Desarrollador Laravel con más de 5 años de experiencia. Especializado en Laravel, Vue.js, Livewire, Filament y automatizaciones con IA. Basado en Guayaquil, Ecuador.",
  keywords: ["Laravel Developer", "PHP Developer", "Vue.js", "Livewire", "Filament", "Inertia.js", "Desarrollo Web", "Guayaquil", "Ecuador"],
  authors: [{ name: "Miguel Bonifaz" }],
  creator: "Miguel Bonifaz",
  publisher: "Miguel Bonifaz",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://miguelbonifaz.dev/",
    siteName: "Miguel Bonifaz Portfolio",
    title: "Miguel Bonifaz - Desarrollador Laravel",
    description: "Desarrollador Laravel con más de 5 años de experiencia. Especializado en Laravel, Vue.js, Livewire, Filament y automatizaciones con IA.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Miguel Bonifaz - Desarrollador Laravel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Bonifaz - Desarrollador Laravel",
    description: "Desarrollador Laravel con más de 5 años de experiencia. Especializado en Laravel, Vue.js, Livewire, Filament y automatizaciones con IA.",
    images: ["/assets/images/og-image.jpg"],
    creator: "@miguelbonifaz",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <JsonLd data={websiteSchema} />
      </head>
      <body
        className={`${spaceMono.variable} ${playfairDisplay.variable} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
