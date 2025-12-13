import { BlogSession } from "@/components/blog-session";
import { ChatSection } from "@/components/chat-section";
import { CountryAreas } from "@/components/country-areas";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Steps } from "@/components/steps";
import { TalkToUs } from "@/components/talk-to-us";
import { Testimony } from "@/components/testimony";
import { Why } from "@/components/why";
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
        <main>
          {children}
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
