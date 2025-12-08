import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/utils";
import { ChevronRight as ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export function CTA() {
  const whatsAppLink = getWhatsappLink();

  return (
    <Link href={whatsAppLink} target="_blank" rel="noopener noreferrer">
      <Button className="default-cta bg-qd-500 text-qd-100">
        Quero falar com especialista
        <span className="ml-1 bg-qd-100 rounded-full text-qd-500">
          <ChevronRightIcon />
        </span>
      </Button>
    </Link>
  );
}
