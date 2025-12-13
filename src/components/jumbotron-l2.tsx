import { CTA } from "@/components/cta";
import Image from "next/image";

export function JumbotronL2() {
  return (
    <section className="centered-container mb-8 mt-8 lg:mt-0 px-4 lg:px-0 flex flex-col lg:flex-row lg:items-center lg:justify-between relative py-10 lg:py-0">
      <div className="lg:max-w-2/5 lg:pr-20 float-left z-20">
        <div className="lg:max-w-lg pl-0 lg:pl-10 text-qd-100">
          <h1 className="text-2xl font-bold mb-5 lg:text-3xl xl:text-4xl lg:font-medium lg:mb-8">
            Advogado trabalhista para entender seus direitos no trabalho. É
            rápido e gratuito.
          </h1>

          <p className="text-lg mg-5 lg:text-xl lg:mb-8">
            Fale com um advogado trabalhista e entenda de forma simples seus
            direitos sobre horas extras, FGTS, demissão, carteira assinada,
            assédio e outros problemas no trabalho.
          </p>

          <Image
            src="/_media/images/jumbotron-cover-mobile.png"
            alt=""
            width={250}
            height={250}
            className="mx-auto block lg:hidden z-0"
          />

          <CTA />

          <div className="mt-3 flex items-center justify-center lg:mt-8 lg:text-lg">
            <div>
              <div>⭐ +20.000 pessoas atendidas</div>
              <div>👩‍⚖️ Advogados especialistas</div>
              <div>🟢 Atendimento inicial gratuito</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:max-w-3/5 float-right 2xl:-mr-5">
        <Image
          src="/_media/images/jumbotron-cover-desktop.jpeg"
          alt=""
          width={900}
          height={900}
          className="object-contain"
        />
      </div>

      <div className="clear-both"></div>

      <div className="absolute bottom-0 left-0 w-full h-full bg-qd-500 opacity-85 lg:opacity-70"></div>
    </section>
  );
}
