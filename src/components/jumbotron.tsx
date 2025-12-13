import { CTA } from "@/components/cta";
import Image from "next/image";

export function Jumbotron() {
  return (
    <section className="centered-container mb-8 mt-8 lg:mt-0 px-4 lg:px-0 flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className="lg:max-w-2/5 lg:pr-32 xl:pr-20 2xl:pr-32">
        <div className="lg:max-w-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 lg:text-3xl xl:text-4xl 2xl:text-5xl lg:font-medium lg:mb-8">
            Conectamos você com advogados especialistas no seu problema. É
            rápido e gratuito.
          </h2>

          <p className="text-lg mg-5 lg:text-xl xl:text-2xl 2xl:text-3xl lg:mb-8">
            Explique seu caso e veja se você tem direito.
          </p>

          <Image
            src="/_media/images/jumbotron-cover-mobile.png"
            alt=""
            width={250}
            height={250}
            className="mx-auto block lg:hidden"
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

      <div className="hidden lg:block lg:max-w-3/5">
        <Image
          src="/_media/images/jumbotron-cover-desktop.jpeg"
          alt=""
          width={900}
          height={900}
          className="object-cover"
        />
      </div>
    </section>
  );
}
