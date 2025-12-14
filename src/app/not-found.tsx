import { Heading2 } from "@/components/heading-2";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="centered-container default-section-space text-center py-20">
      <Heading2>404 - Página Não Encontrada</Heading2>

      <p className="max-w-xl lg:max-w-2xl text-lg lg:text-2xl mx-auto">
        A página que você está procurando não existe. Verifique o endereço ou{" "}
        <Link href="/" className="underline">
          volte para a página inicial
        </Link>
        .
      </p>
    </section>
  );
}
