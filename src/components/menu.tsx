"use client";

import { DecapMenu } from "@/@types/decap-menu";
import { CTA } from "@/components/cta";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  X as CloseIcon,
  Menu as MenuIcon,
  MoveRight as MoveRightIcon,
} from "lucide-react";
import Link from "next/link";

export function Menu({ sections }: { sections: DecapMenu["sections"] }) {
  return (
    <Drawer direction="right">
      <DrawerTrigger
        className="cursor-pointer h-full w-12 flex items-center justify-center"
        aria-label="Abrir menu"
      >
        <MenuIcon />
      </DrawerTrigger>
      <DrawerContent className="border-l border-qd-500 w-full! max-w-full! lg:w-1/3!">
        <header className="bg-qd-500 text-qd-100 px-4">
          <div className="centered-container h-16 flex flex-row items-center justify-between">
            <Logo />

            <DrawerClose
              className="cursor-pointer h-full w-12 flex items-center justify-center"
              aria-label="Fechar menu"
            >
              <CloseIcon />
            </DrawerClose>
          </div>
        </header>

        <main className="flex flex-col items-start justify-start gap-6 p-4">
          {sections.map((section) => (
            <section key={section.title} className="w-full">
              <h2 className="font-semibold mb-2">{section.title}</h2>

              <ul className="flex flex-col gap-2">
                {section.links.map((sectionLink) => (
                  <li key={sectionLink.label + sectionLink.url}>
                    <Link
                      href={sectionLink.url || "#"}
                      className="text-qd-700 hover:underline flex items-center justify-start gap-2"
                    >
                      {sectionLink.label}

                      <MoveRightIcon height={12} width={12} />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </main>

        <DrawerFooter>
          <CTA />

          <DrawerClose>
            <Button
              variant="outline"
              className="default-cta"
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
