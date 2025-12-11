import { Areas } from "@/components/areas";
import { ChatSection } from "@/components/chat-section";
import { Faq } from "@/components/faq";
import { Jumbotron } from "@/components/jumbotron";
import { Steps } from "@/components/steps";
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
    </>
  );
}
