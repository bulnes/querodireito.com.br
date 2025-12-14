import { DecapFaq } from "@/@types/decap-faq";
import { Heading2 } from "@/components/heading-2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getMarkup } from "@/lib/cms-content";

const faqItems = [
  {
    question: "Preciso pagar algo agora?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Em quanto tempo recebo uma resposta?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Quem são os advogados que atendem?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Vocês atendem em qual cidade?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Quanto tempo demora pra resolver meu caso?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    question: "Posso falar com um advogado pelo WhatsApp?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
  },
];

export function Faq() {
  const { data } = getMarkup("cmsContent/components", "faq.md") as unknown as {
    data: DecapFaq;
  };

  return (
    <section className="centered-container default-section-space">
      <Heading2>Dúvidas mais comuns</Heading2>

      <p className="max-w-xl text-lg lg:text-2xl mb-6">
        Respostas rápidas para as dúvidas de quem usa a Quero Direito pela
        primeira vez.
      </p>

      <Accordion type="single" collapsible className="max-w-4xl">
        {data.qna.map((item, index) => (
          <AccordionItem value={`item-${index + 2}`} key={index}>
            <AccordionTrigger className="text-lg font-bold cursor-pointer hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
