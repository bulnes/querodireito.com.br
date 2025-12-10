import { Card } from "@/components/card";
import { Heading2 } from "@/components/heading-2";
import { Search } from "lucide-react";
import { ChatBubble } from "./chat-bubble";
import { ChatInput } from "./chat-input";

export function ChatSection() {
  return (
    <section className="centered-container default-section-space">
      <Card>
        <header className="relative mb-8">
          <div className="max-w-2/3 lg:max-w-full">
            <Heading2>Não achou o seu problema?</Heading2>
            <p>Descreva o seu caso abaixo:</p>
          </div>

          <Search width={50} height={50} className="absolute top-0 right-0" />
        </header>

        <main className="flex flex-col mx-auto border rounded-2xl overflow-hidden">
          {/* Área de mensagens */}
          <div className="flex-1 p-4 overflow-y-auto bg-white">
            <ChatBubble>Hi, how can I help you today?</ChatBubble>

            <ChatBubble variant="user">
              Hey, I&apos;m having trouble with my account.
            </ChatBubble>

            <ChatBubble>What seems to be the problem?</ChatBubble>

            <ChatBubble variant="user">I can&apos;t log in.</ChatBubble>
          </div>

          {/* Input */}
          <ChatInput />
        </main>
      </Card>
    </section>
  );
}
