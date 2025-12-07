import { Logo } from "@/components/logo";
import { SITE_NAME } from "@/constants";
import { MoveRight as MoveRightIcon } from "lucide-react";
import Link from "next/link";

const footerContent = [
  {
    sectionTitle: "Serviços",
    items: [
      { title: "Advogado Trabalhista", href: "#" },
      {
        title: "Advogado Previdenciário",
        href: "#",
      },
      {
        title: "Advogado do Consumidor",
        href: "#",
      },
      { title: "Advogado de Família", href: "#" },
      { title: "Advogado Criminal", href: "#" },
    ],
  },
  {
    sectionTitle: "Localidades",
    items: [{ title: "Onde atendemos", href: "#" }],
  },
  {
    sectionTitle: "Institucional",
    items: [
      {
        title: "Política de Privacidade",
        href: "#",
      },
      { title: "Termos de Uso", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="px-4 lg:px-0">
      <div className="centered-container flex flex-col gap-7 lg:flex-row-reverse lg:items-start lg:justify-between mb-8 lg:mb-16">
        {/* Logo */}
        <div className="flex flex-col items-start justify-start gap-6 lg:items-end lg:justify-end lg:gap-2">
          <Logo isReversed noHeading />

          <p className="text-base lg:text-lg flex flex-col items-start justify-start lg:items-end lg:text-right max-w-64 lg:max-w-80">
            <span>
              Conectamos você com advogados especialistas no seu problema.{" "}
            </span>
            <span>É rápido e gratuito.</span>
          </p>
        </div>

        {/* Serviços */}
        <div className="flex flex-col items-start justify-start gap-6">
          {footerContent.map((section) => (
            <section key={section.sectionTitle} className="w-full">
              <h2 className="font-semibold mb-2">{section.sectionTitle}</h2>
              <ul className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-qd-700 hover:underline flex items-center justify-start gap-2"
                    >
                      {item.title}

                      <MoveRightIcon height={12} width={12} />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Informações da empresa */}
        <section className="space-y-2">
          <h2 className="font-semibold">Informações da empresa</h2>

          <div>
            <p>
              <strong className="font-semibold">Razão Social:</strong> Caio
              George Santos Assessoria LTDA
            </p>

            <p>
              <strong className="font-semibold">CNPJ:</strong>{" "}
              42.958.930/0001-00
            </p>
          </div>

          <div>
            <strong className="font-semibold">Endereço:</strong>
            <address className="not-italic flex flex-col items-start">
              <span>Avenida Paulista, 1636</span>
              <span>Conj. 04 — Andar 15</span>
              <span>Bela Vista</span>
              <span>São Paulo — SP</span>
              <span>CEP: 01310-200</span>
            </address>
          </div>

          <p className="flex items-center gap-1">
            <strong className="font-semibold">Contato</strong>:{" "}
            <Link
              href={"tel:+551151232482"}
              className="flex items-center justify-start gap-1"
            >
              <span>(11) 5123-2482</span>{" "}
              <MoveRightIcon height={12} width={12} />
            </Link>
          </p>

          <p>atendimento@querodireito.com.br</p>
        </section>
      </div>

      <div className="centered-container mb-9">
        <section className="space-y-0">
          <h2 className="font-semibold">Aviso legal</h2>

          <p>
            A Quero Direito é uma plataforma de conexão entre usuários e
            advogados. Não prestamos serviços jurídicos diretamente. A análise
            inicial é gratuita. A contratação do advogado é opcional e feita
            diretamente entre cliente e profissional.
          </p>

          <p>Simples. Claro. Seguro.</p>
        </section>

        <hr className="my-6 border-2 border-qd-200" />

        <p className="text-qd-500 text-left">
          © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
