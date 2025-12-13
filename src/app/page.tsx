import { Areas } from "@/components/areas";
import { BlogSession } from "@/components/blog-session";
import { ChatSection } from "@/components/chat-section";
import { CountryAreas } from "@/components/country-areas";
import { Faq } from "@/components/faq";
import { Jumbotron } from "@/components/jumbotron";
import { Steps } from "@/components/steps";
import { TalkToUs } from "@/components/talk-to-us";
import { Testimony } from "@/components/testimony";
import { Why } from "@/components/why";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <Areas />
      <ChatSection />
      <Steps />
      <Why />
      <Testimony />
      <Faq />
      <CountryAreas />
      <TalkToUs />
      <BlogSession />
    </>
  );
}
