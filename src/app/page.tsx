import { Areas } from "@/components/areas";
import { ChatSection } from "@/components/chat-section";
import { Jumbotron } from "@/components/jumbotron";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <Areas />
      <ChatSection />
    </>
  );
}
