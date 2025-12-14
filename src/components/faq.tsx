import { DecapFaq } from "@/@types/decap-faq";
import { Heading2 } from "@/components/heading-2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getMarkup } from "@/lib/cms-content";

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
