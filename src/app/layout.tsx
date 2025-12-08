import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { openSans } from "@/fonts";
import "./globals.css";

export { metadata } from "@/metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.variable} text-qd-500 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
