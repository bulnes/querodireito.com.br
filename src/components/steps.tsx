import { Card } from "@/components/card";
import { CTA } from "@/components/cta";
import { Heading2 } from "@/components/heading-2";
import { SITE_NAME } from "@/constants";
import Image from "next/image";

const cards = [
  {
    step: "1",
    title: "Você conta rapidinho o que aconteceu",
    description: "Responde algumas perguntas simples sobre seu caso.",
    className: "step-a",
  },
  {
    step: "2",
    title: "Um especialista analisa seu caso gratuitamente",
    description: "Você recebe orientação inicial sem pagar nada.",
    className: "step-b",
  },
  {
    step: "3",
    title: "Você decide se quer seguir com o processo",
    description: "Sem compromisso. Totalmente seguro e sem pressão.",
    className: "step-c",
  },
  {
    step: "4",
    title: "Escolhemos o advogado certo para cuidar do seu caso.",
    description:
      "Se você quiser seguir, conectamos você a um advogado especialista no seu tipo de problema, com experiência em casos semelhantes — e ele assume o caso daqui pra frente.",
    className: "step-d",
  },
];

export function Steps() {
  return (
    <section className="centered-container default-section-space">
      <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-20">
        {/* Cards */}
        <div className="mb-5 lg:mb-0 space-y-6 lg:space-y-8">
          <Heading2>Como funciona a {SITE_NAME}.</Heading2>

          <p className="text-lg lg:text-2xl">
            Veja como é simples receber orientação jurídica:
          </p>

          <div className="grid-steps">
            {cards.map((cardData) => (
              <Card
                key={cardData.step}
                className={`flex flex-row items-start gap-4 ${cardData.className}`}
              >
                <div className="flex items-center justify-center min-w-10 w-10 h-10 text-lg lg:text-xl rounded-full bg-qd-500 text-qd-100">
                  {cardData.step}
                </div>
                <div className="">
                  <div className="font-bold text-lg lg:text-xl lg:mb-2">
                    {cardData.title}
                  </div>
                  <div className="text-base lg:text-lg">
                    {cardData.description}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <CTA />
        </div>

        {/* Vídeos */}
        <div className="lg:min-w-80">
          <p className="lg:text-lg mb-6">
            Assista o vídeo e veja como a{" "}
            <strong className="font-bold">{SITE_NAME}</strong> pode te ajudar:
          </p>

          <Image
            src="/_media/images/cellphone-cover.png"
            alt=""
            width={265}
            height={509}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
