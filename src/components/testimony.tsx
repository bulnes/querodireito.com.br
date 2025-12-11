import { Card } from "@/components/card";
import { Heading2 } from "@/components/heading-2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SITE_NAME } from "@/constants";
import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

const testimonies = [
  {
    name: "Joaquim Ferreira de Menezes",
    role: "Açougueiro",
    description:
      "Expliquei meu caso e em poucos minutos já estava falando com um advogado. Foi tudo muito simples e educado. Me senti finalmente entendido.",
  },
  {
    name: "Joaquim Ferreira de Menezes",
    role: "Açougueiro",
    description:
      "Expliquei meu caso e em poucos minutos já estava falando com um advogado. Foi tudo muito simples e educado. Me senti finalmente entendido.",
  },
  {
    name: "Joaquim Ferreira de Menezes",
    role: "Açougueiro",
    description:
      "Expliquei meu caso e em poucos minutos já estava falando com um advogado. Foi tudo muito simples e educado. Me senti finalmente entendido.",
  },
];

export function Testimony() {
  return (
    <section className="centered-container default-section-space">
      <Card className="space-y-6">
        <Heading2>O que os pessoas dizem sobre a {SITE_NAME}.</Heading2>

        <p className="max-w-xl lg:max-w-2xl text-lg lg:text-2xl">
          Histórias reais de pessoas que receberam orientação e conseguiram
          entender seus direitos.
        </p>

        <div className="flex flex-col items-start gap-2 bg-qd-100 p-4 rounded-2xl">
          <p className="text-2xl font-bold flex">
            <span className="mr-2">4.9</span>
            <Star fill="black" />
            <Star fill="black" />
            <Star fill="black" />
            <Star fill="black" />
            <StarHalf fill="black" />
          </p>
          <p>+ 12 mil avaliações</p>
        </div>

        <Carousel>
          <CarouselContent>
            {testimonies.map((testimony) => (
              <CarouselItem
                key={testimony.name}
                className="basis-full lg:basis-1/3"
              >
                <div className="flex flex-col lg:flex-col-reverse items-start gap-4 lg:gap-6 bg-qd-100 p-4 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/_media/images/profile-cover.png"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-bold">{testimony.name}</p>
                      <p className="text-qd-700">{testimony.role}</p>
                    </div>
                  </div>

                  <p>&ldquo;{testimony.description}&rdquo;</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-end gap-2 mt-4">
            <CarouselPrevious
              className={cn(
                "static translate-y-0 w-12 h-12 rounded-2xl border shadow-sm bg-qd-500 text-white disabled:bg-gray-300 disabled:text-black",
                {
                  "lg:hidden": testimonies.length < 4,
                }
              )}
            />
            <CarouselNext
              className={cn(
                "static translate-y-0 w-12 h-12 rounded-2xl border shadow-sm bg-qd-500 text-white disabled:bg-gray-300 disabled:text-black",
                {
                  "lg:hidden": testimonies.length < 4,
                }
              )}
            />
          </div>
        </Carousel>
      </Card>
    </section>
  );
}
