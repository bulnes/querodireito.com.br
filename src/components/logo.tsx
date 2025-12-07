"use client";

import { montserrat } from "@/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function getLogoContent({ isReversed = false }: { isReversed?: boolean }) {
  return (
    <Link
      href="/"
      arial-label="Clique para ir à página inicial"
      className="block h-fit"
    >
      <span
        className={cn(
          `${montserrat.className} text-3xl lowercase [word-spacing:-0.5em] after:content-['.'] after:text-5xl after:-ml-0.5 after:leading-0`,
          {
            "text-qd-100 after:text-[#b4b4b4]": !isReversed,
            "text-qd-500 after:text-qd-500": isReversed,
          }
        )}
      >
        <span>Quero</span> <span className="font-bold">Direito</span>
      </span>
    </Link>
  );
}

export function Logo({
  noHeading = false,
  isReversed = false,
}: {
  noHeading?: boolean;
  isReversed?: boolean;
}) {
  const pathname = usePathname();

  const isNotHomePage = pathname !== "/" && pathname !== "";
  if (noHeading || isNotHomePage) {
    return <>{getLogoContent({ isReversed })}</>;
  }

  return <h1>{getLogoContent({ isReversed })}</h1>;
}
