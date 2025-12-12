import { Card } from "@/components/card";
import { CTA } from "@/components/cta";
import { Heading2 } from "@/components/heading-2";
import Image from "next/image";

export function TalkToUs() {
  return (
    <section className="centered-container default-section-space">
      <Card className="flex flex-row items-center gap-32">
        <div className="space-y-6 lg:space-y-16 px-4 lg:px-0 lg:max-w-md lg:pl-20">
          <Heading2>Pronto para entender seu caso?</Heading2>

          <p className="text-lg lg:text-2xl">
            Conte rapidamente o que aconteceu e fale com um especialista —
            gratuito e sem compromisso.
          </p>

          <Image
            src="/_media/images/talk-to-us-mobile.png"
            alt=""
            width={250}
            height={250}
            className="mx-auto -mb-6 md:hidden"
          />

          <CTA />
        </div>

        <Image
          src="/_media/images/talk-to-us-desktop.jpeg"
          alt=""
          width={400}
          height={400}
          className="hidden md:block rounded-2xl w-full"
        />
      </Card>
    </section>
  );
}
