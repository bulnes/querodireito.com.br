import { Card } from "@/components/card";
import { Heading2 } from "@/components/heading-2";
import { SITE_NAME } from "@/constants";

const cards = [
  {
    title: "Análise gratuita do caso",
    description: "Tire suas dúvidas sem pagar nada",
  },
  {
    title: "Advogados especialistas",
    description: "Fale com quem entende do problema",
  },
  {
    title: "Atendimento rápido",
    description: "Respostas em poucos minutos",
  },
  {
    title: "Sem compromisso",
    description: "Você decide se quer seguir",
  },
  {
    title: "Linguagem simples",
    description: "Tudo explicado de forma fácil",
  },
  {
    title: "Atendimento em todo Brasil",
    description: "De qualquer cidade ou estado",
  },
];

export function Why() {
  return (
    <section className="centered-container default-section-space">
      <Card>
        <Heading2>Por que escolher a {SITE_NAME}</Heading2>

        <p className="max-w-xl lg:max-w-2xl text-lg lg:text-2xl mb-6">
          Ajudamos você a escolher seus direitos de forma simples, rápida e sem
          custo inicial.
        </p>

        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
          {cards.map((cardData) => (
            <div
              key={cardData.title}
              className="flex flex-col items-start gap-2 bg-qd-100 p-4 rounded-2xl"
            >
              <p className="text-lg font-bold">{cardData.title}</p>
              <p>{cardData.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
