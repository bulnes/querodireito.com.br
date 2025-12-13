// Import global styles and fonts
import { BlogSession } from "@/components/blog-session";
import { ChatSection } from "@/components/chat-section";
import { CountryAreas } from "@/components/country-areas";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Heading2 } from "@/components/heading-2";
import { Steps } from "@/components/steps";
import { TalkToUs } from "@/components/talk-to-us";
import { Testimony } from "@/components/testimony";
import { Why } from "@/components/why";
import { openSans } from "@/fonts";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 - Página Não Encontrada",
  description: "A página que você está procurando não existe.",
};

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body className={`${openSans.variable} text-qd-500 antialiased`}>
        <Header />
        <main>
          <section className="centered-container default-section-space text-center py-20">
            <Heading2>404 - Página Não Encontrada</Heading2>

            <p className="max-w-xl lg:max-w-2xl text-lg lg:text-2xl mx-auto">
              A página que você está procurando não existe. Verifique o endereço
              ou{" "}
              <Link href="/" className="underline">
                volte para a página inicial
              </Link>
              .
            </p>
          </section>

          <ChatSection />
          <Steps />
          <Why />
          <Testimony />
          <Faq />
          <CountryAreas />
          <TalkToUs />
          <BlogSession />
        </main>
        <Footer />
      </body>
    </html>
  );
}
