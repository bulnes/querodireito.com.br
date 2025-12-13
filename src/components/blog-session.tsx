"use client";

import { Card } from "@/components/card";
import { Heading2 } from "@/components/heading-2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const defaultPosts = [
  {
    title: "Direitos trabalhistas que você deve conhecer",
    excerpt:
      "Conheça os principais direitos trabalhistas garantidos por lei e saiba como reivindicá-los.",
    link: "#",
    author: {
      name: "Maria Silva",
      avatar: "/_media/images/profile-cover.png",
    },
    category: "Trabalhista",
  },
  {
    title: "Como lidar com assédio no ambiente de trabalho",
    excerpt:
      "Dicas práticas para identificar, prevenir e agir contra o assédio no trabalho.",
    link: "#",
    author: {
      name: "João Pereira",
      avatar: "/_media/images/profile-cover.png",
    },
    category: "Trabalhista",
  },
  {
    title: "Guia para entender seu contrato de trabalho",
    excerpt:
      "Tudo o que você precisa saber sobre os diferentes tipos de contratos de trabalho.",
    link: "#",
    author: {
      name: "Ana Costa",
      avatar: "/_media/images/profile-cover.png",
    },
    category: "Trabalhista",
  },
];

const categories = [
  {
    title: "Trabalhista",
    posts: [...defaultPosts],
  },
  {
    title: "Previdenciário",
    posts: [...defaultPosts],
  },
  {
    title: "Consumidor",
    posts: [...defaultPosts],
  },
  {
    title: "Família",
    posts: [...defaultPosts],
  },
  {
    title: "Criminal",
    posts: [...defaultPosts],
  },
];

export function BlogSession() {
  const [currentCategory, setCurrentCategory] = useState(categories[0].title);

  console.log(currentCategory);

  return (
    <section className="centered-container default-section-space">
      <div className="bg-qd-200 lg:bg-white rounded-2xl lg:rounded-none">
        <div className="px-4 pt-5 lg:px-0 lg:pt-0">
          <Heading2>Conteúdos simples para entender seus direitos</Heading2>

          <p className="max-w-xl text-lg lg:text-2xl mb-6">
            Informações claras e diretas para você saber o que fazer em
            situações do dia a dia.
          </p>
        </div>

        <Card>
          <Carousel className="max-w-3/4 lg:max-w-full mx-auto mb-10">
            <CarouselContent>
              {categories.map((category) => (
                <CarouselItem
                  key={category.title}
                  className="basis-full lg:basis-1/5"
                >
                  <div
                    key={category.title}
                    className="flex items-center justify-between bg-qd-100 p-4 rounded-full"
                    onClick={() => setCurrentCategory(category.title)}
                  >
                    <span>{category.title}</span>
                    <ChevronRight />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="lg:hidden" />
            <CarouselNext className="lg:hidden" />
          </Carousel>

          <Carousel className="lg:max-w-3/4 mx-auto mb-10">
            <CarouselContent>
              {defaultPosts.map((post) => (
                <CarouselItem
                  key={post.title}
                  className="basis-full lg:basis-1/3 gap-6"
                >
                  <div className="bg-qd-100 rounded-2xl p-6 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-qd-500 text-sm">
                        {post.category}
                      </span>

                      <h3 className="text-xl lg:text-2xl font-semibold mt-2 mb-4">
                        {post.title}
                      </h3>

                      <p className="text-qd-700 mb-6">{post.excerpt}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <Image
                        src={post.author.avatar}
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                      />

                      <span className="text-qd-700">{post.author.name}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-end gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0 w-12 h-12 rounded-2xl border shadow-sm bg-qd-500 text-white disabled:bg-gray-300 disabled:text-black lg:hidden" />
              <CarouselNext className="static translate-y-0 w-12 h-12 rounded-2xl border shadow-sm bg-qd-500 text-white disabled:bg-gray-300 disabled:text-black lg:hidden" />
            </div>
          </Carousel>

          <Link href="#" className="block text-center">
            <Button className="default-cta bg-qd-100 text-qd-500 hover:text-qd-100 lg:max-w-1/2">
              Ver mais conteúdos
              <span className="ml-1 bg-qd-500 rounded-full text-qd-100">
                <ChevronRightIcon />
              </span>
            </Button>
          </Link>
        </Card>
      </div>
    </section>
  );
}
