import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Card } from "./card";
import { CTA } from "./cta";
import { Heading2 } from "./heading-2";

const links = [
  {
    label: "Trabalhou sem carteira assinada",
    url: "#",
  },
  {
    label: "Foi demitido sem receber tudo",
    url: "#",
  },
  {
    label: "Não recebeu horas extras",
    url: "#",
  },
  {
    label: "FGTS não depositado",
    url: "#",
  },
  {
    label: "Assédio no trabalho",
    url: "#",
  },
  {
    label: "Acidente de trabalho",
    url: "#",
  },
  {
    label: "Insalubridade/Periculosidade",
    url: "#",
  },
  {
    label: "Demissão por justa causa",
    url: "#",
  },
  {
    label: "Trabalhou sem carteira assinada",
    url: "#",
  },
  {
    label: "Jornada Excessiva",
    url: "#",
  },
  {
    label: "Intervalo não concedido",
    url: "#",
  },
  {
    label: "Grávida demitida",
    url: "#",
  },
];

export function Problems() {
  return (
    <section className="centered-container default-section-space">
      <div className="bg-qd-200 lg:bg-white rounded-2xl lg:rounded-none space-y-10">
        <div className="px-4 pt-5 lg:px-0 lg:pt-0">
          <Heading2>Em qual situação do trabalho está o seu problema?</Heading2>

          <p className="max-w-xl text-lg lg:text-2xl mb-6">
            Escolha abaixo o problema que mais se parece com o seu para entender
            seus direitos e receber orientação trabalhista.
          </p>
        </div>

        <Card>
          <h3 className="text-xl lg:text-2xl mb-3 ml-3 font-bold">
            Principais problemas Trabalhistas
          </h3>

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3">
            {links.map((link, index) => (
              <Link
                key={link.label + index}
                href={link.url}
                className="flex items-center justify-between bg-qd-100 p-4 rounded-full"
              >
                <span>{link.label}</span>
                <ChevronRight />
              </Link>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-1">
            <div className="bg-qd-500 text-qd-100 rounded-full p-0.5">
              <ArrowRight width={18} height={18} />
            </div>
            <Link href={"#"} className="underline">
              Ver mais
            </Link>
          </div>
        </Card>

        <div className="lg:max-w-1/2 lg:mx-auto">
          <CTA />
        </div>
      </div>
    </section>
  );
}
