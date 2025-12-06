"use client";

import { montserrat } from "@/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

function getLogoContent() {
  return (
    <Link href="/" arial-label="Clique para ir à página inicial">
      <span
        className={`${montserrat.className} text-3xl text-qd-100 lowercase [word-spacing:-0.5em] after:content-['.'] after:text-[#b4b4b4]`}
      >
        <span>Quero</span> <span className="font-bold">Direito</span>
      </span>
    </Link>
  );
}

export function Logo({ noHeading = false }: { noHeading?: boolean }) {
  const pathname = usePathname();

  const isNotHomePage = pathname !== "/" && pathname !== "";
  if (noHeading || isNotHomePage) {
    return <>{getLogoContent()}</>;
  }

  return <h1>{getLogoContent()}</h1>;
}
