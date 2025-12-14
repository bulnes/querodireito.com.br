import { DecapFooter } from "@/@types/decap-footer";
import { Logo } from "@/components/logo";
import { SITE_NAME } from "@/constants";
import { getMarkup } from "@/lib/cms-content";
import { MoveRight as MoveRightIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const { data } = getMarkup(
    "cmsContent/components",
    "footer.md"
  ) as unknown as {
    data: DecapFooter;
  };

  return (
    <footer className="default-section-space">
      <div className="centered-container mb-8">
        <hr className="my-6 border border-qd-200" />
      </div>

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
          {data.sections.map((section) => (
            <section key={section.title} className="w-full">
              <h3 className="font-semibold mb-2">{section.title}</h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.url}
                      className="text-qd-700 hover:underline flex items-center justify-start gap-2"
                    >
                      {item.label}

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
          <h3 className="font-semibold">Informações da empresa</h3>

          <div>
            <p>
              <strong className="font-semibold">Razão Social:</strong>{" "}
              {data.razao_social}
            </p>

            <p>
              <strong className="font-semibold">CNPJ:</strong> {data.cnpj}
            </p>
          </div>

          <div>
            <strong className="font-semibold">Endereço:</strong>
            <address className="not-italic flex flex-col items-start">
              {data.address.split("\n").map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </address>
          </div>

          <p className="flex items-center gap-1">
            <strong className="font-semibold">Contato</strong>:{" "}
            <Link
              href={`tel:${data.phone_number.replace(/[^+\d]/g, "")}`}
              className="flex items-center justify-start gap-1"
            >
              <span>{data.phone_number}</span>{" "}
              <MoveRightIcon height={12} width={12} />
            </Link>
          </p>

          <p>
            <Link
              href={`mailto:${data.email}`}
              className="flex items-center justify-start gap-1"
            >
              <span>{data.email}</span>
            </Link>
          </p>
        </section>
      </div>

      <div className="centered-container mb-9">
        <section className="space-y-0">
          <h3 className="font-semibold">Aviso legal</h3>

          {data.aviso_legal.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </section>

        <hr className="my-6 border border-qd-200" />

        <p className="text-qd-500 text-left">
          © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
