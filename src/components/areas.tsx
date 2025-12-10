import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    type: "Trabalhista",
    footer: {
      label: "Ver mais",
      url: "#",
    },
    links: [
      {
        label: "Não recebeu horas extras",
        url: "#",
      },
      {
        label: "Fui demitido sem justa causa",
        url: "#",
      },
      {
        label: "Trabalhou sem carteira assinada",
        url: "#",
      },
    ],
  },
  {
    type: "Previdenciário",
    footer: {
      label: "Ver mais",
      url: "#",
    },
    links: [
      {
        label: "Problemas na aposentadoria",
        url: "#",
      },
      {
        label: "INSS negou o benefício",
        url: "#",
      },
      {
        label: "Auxílio doença cancelado",
        url: "#",
      },
    ],
  },
  {
    type: "Consumidor",
    footer: {
      label: "Ver mais",
      url: "#",
    },
    links: [
      {
        label: "Nome sujo injustamente",
        url: "#",
      },
      {
        label: "Produto não entregue/defeito",
        url: "#",
      },
      {
        label: "Cobrança indevida, fraude/golpe",
        url: "#",
      },
    ],
  },
  {
    type: "Família",
    footer: {
      label: "Ver mais",
      url: "#",
    },
    links: [
      {
        label: "Guarda e divórcio",
        url: "#",
      },
      {
        label: "Herança e partilha de bens",
        url: "#",
      },
      {
        label: "Pensão alimentícia",
        url: "#",
      },
    ],
  },
  {
    type: "Criminal",
    footer: {
      label: "Ver mais",
      url: "#",
    },
    links: [
      {
        label: "Ameaças ou violência",
        url: "#",
      },
      {
        label: "Acusações injustas ou calúnia",
        url: "#",
      },
      {
        label: "Prisões em flagrante",
        url: "#",
      },
    ],
  },
];

export function Areas() {
  return (
    <section className="centered-container default-section-space">
      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-3">
        <div className="w-full pr-6 py-5 lg:pr-28 lg:py-7">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Em qual área do direito está o seu problema?
          </h2>
          <p className="text-lg lg:text-2xl">
            Escolha um dos problemas ou áreas abaixo para entender seus direitos
            e receber ajuda:
          </p>
        </div>

        {sections.map((section) => (
          <div
            key={section.type}
            className="w-full bg-qd-200 px-3 py-5 lg:px-6 lg:py-7 rounded-2xl"
          >
            <h3 className="text-xl lg:text-2xl mb-3 ml-3">
              Advogado <strong className="font-bold">{section.type}</strong>
            </h3>

            <div className="flex flex-col gap-3">
              {section.links.map((link) => (
                <Link
                  key={link.label}
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
              <Link href={section.footer.url} className="underline">
                {section.footer.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
