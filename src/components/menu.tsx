"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { getWhatsappLink } from "@/lib/utils";
import {
  ChevronRight as ChevronRightIcon,
  X as CloseIcon,
  Menu as MenuIcon,
  MoveRight as MoveRightIcon,
} from "lucide-react";
import Link from "next/link";

const menuContent = [
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
];

export function Menu() {
  const whatsAppLink = getWhatsappLink();

  return (
    <Drawer direction="right">
      <DrawerTrigger
        className="cursor-pointer h-full w-12 flex items-center justify-end"
        aria-label="Abrir menu"
      >
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className="border-l border-qd-500 w-full! max-w-full! lg:w-1/3!">
        <header className="bg-qd-500 text-qd-100 px-4">
          <div className="centered-container h-16 flex flex-row items-center justify-between">
            <Logo />

            <DrawerClose
              className="cursor-pointer h-full w-12 flex items-center justify-end"
              aria-label="Fechar menu"
            >
              <CloseIcon />
            </DrawerClose>
          </div>
        </header>

        <main className="flex flex-col items-start justify-start gap-6 p-4">
          {menuContent.map((section) => (
            <section key={section.sectionTitle} className="w-full">
              <h2 className="font-semibold mb-2">{section.sectionTitle}</h2>
              <ul className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <li key={item.href}>
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
        </main>

        <DrawerFooter>
          <Link href={whatsAppLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full cursor-pointer h-12 rounded-full">
              Quero falar com especialista
              <span className="ml-1 bg-qd-100 rounded-full text-qd-500">
                <ChevronRightIcon />
              </span>
            </Button>
          </Link>

          <DrawerClose>
            <Button
              variant="outline"
              className="w-full cursor-pointer h-12 rounded-full"
              aria-label="Fechar menu"
            >
              Fechar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
