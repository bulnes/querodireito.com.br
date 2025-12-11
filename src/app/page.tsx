import { Areas } from "@/components/areas";
import { ChatSection } from "@/components/chat-section";
import { Jumbotron } from "@/components/jumbotron";
import { Steps } from "@/components/steps";
import { Why } from "@/components/why";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <Areas />
      <ChatSection />
      <Steps />
      <Why />
    </>
  );
}
