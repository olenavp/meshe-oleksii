import type { Metadata, Viewport } from "next";
import {
  Inter,
  Playfair_Display,
  Montserrat as MontserratFont,
} from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["cyrillic", "latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const montserrat = MontserratFont({
  subsets: ["cyrillic", "latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Меше Олексій",
  description:
    "Комплексі послуги для бізнесу з маркетингу та реклами, оподаткування, комерційної діяльності, форм ведення бізнесу та менеджменту ІТ проєктів.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Меше Олексій",
    description:
      "Комплексі послуги для бізнесу з маркетингу та реклами, оподаткування, комерційної діяльності, форм ведення бізнесу та менеджменту ІТ проєктів.",
    url: SITE_URL,
    siteName: "Меше Олексій",
    images: [
      {
        url: "/images/og-image.jpg",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Комплексі послуги для бізнесу з маркетингу та реклами, оподаткування, комерційної діяльності, форм ведення бізнесу та менеджменту ІТ проєктів.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1a2744",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${montserrat.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}