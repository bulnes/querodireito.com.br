import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/constants";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "advogado trabalhista online",
    "advogado trabalhista gratuito",
    "consultoria jurídica online",
    "advogado pelo whatsapp",
    "atendimento jurídico online",
    "falar com advogado agora",
    "quero direito advogado online",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  publisher: SITE_NAME,
  robots: "index, follow",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}`,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/_media/images/og-image-1200x630.png`,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
