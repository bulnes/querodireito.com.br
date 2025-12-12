import { Heading2 } from "@/components/heading-2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import { Card } from "./card";

const areas = [
  {
    area: "Sudeste",
    states: [
      {
        name: "São Paulo",
      },
      {
        name: "Rio de Janeiro",
      },
      {
        name: "Minas Gerais",
      },
      {
        name: "Espírito Santo",
      },
    ],
  },
  {
    area: "Sul",
    states: [
      {
        name: "Paraná",
      },
      {
        name: "Santa Catarina",
      },
      {
        name: "Rio Grande do Sul",
      },
    ],
  },
  {
    area: "Centro-Oeste",
    states: [
      {
        name: "Mato Grosso",
      },
      {
        name: "Mato Grosso do Sul",
      },
      {
        name: "Goiás",
      },
      {
        name: "Distrito Federal",
      },
    ],
  },
  {
    area: "Nordeste",
    states: [
      {
        name: "Maranhão",
      },
      {
        name: "Piauí",
      },
      {
        name: "Ceará",
      },
      {
        name: "Rio Grande do Norte",
      },
      {
        name: "Paraíba",
      },
      {
        name: "Pernambuco",
      },
      {
        name: "Alagoas",
      },
      {
        name: "Sergipe",
      },
      {
        name: "Bahia",
      },
    ],
  },
  {
    area: "Norte",
    states: [
      {
        name: "Acre",
      },
      {
        name: "Amapá",
      },
      {
        name: "Amazonas",
      },
      {
        name: "Rondônia",
      },
      {
        name: "Roraima",
      },
      {
        name: "Pará",
      },
      {
        name: "Tocantins",
      },
    ],
  },
];

export function CountryAreas() {
  return (
    <section className="centered-container default-section-space">
      <div className="bg-qd-200 lg:bg-white rounded-2xl lg:rounded-none">
        <div className="px-4 pt-5 lg:px-0 lg:pt-0">
          <Heading2>Atendemos em todo Brasil</Heading2>

          <p className="max-w-2xl text-lg lg:text-2xl mb-6">
            Escolha o seu estado e veja todas as cidades atendidas:
          </p>
        </div>

        <Card>
          <Accordion type="single" collapsible className="space-y-4">
            {areas.map((item, index) => (
              <AccordionItem
                value={`item-${index + 2}`}
                key={index}
                className="bg-qd-300 px-4 py-1 rounded-2xl"
              >
                <AccordionTrigger className="text-lg cursor-pointer hover:no-underline">
                  <span>
                    Região <span className="font-bold">{item.area}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg space-y-3">
                  {item.states.map((state, stateIndex) => (
                    <p
                      key={stateIndex}
                      className="flex items-center justify-between bg-qd-100 p-4 rounded-full"
                    >
                      <span>{state.name}</span>
                      <ChevronRight />
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
}
