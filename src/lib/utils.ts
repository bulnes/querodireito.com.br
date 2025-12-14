import { DEFAULT_WHATSAPP_MESSAGE, DEFAULT_WHATSAPP_PHONE } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWhatsappLink(message = DEFAULT_WHATSAPP_MESSAGE, phone = DEFAULT_WHATSAPP_PHONE) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function formatPhoneNumber(phone: string) {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
  if (match) {
    const [, ddd, firstPart, secondPart] = match;
    return `(${ddd}) ${firstPart}-${secondPart}`;
  }
  return phone;
}

export function openInNewTab(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function openButtonInNewTab(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault();

  const url = getWhatsappLink();
  openInNewTab(url);
}

export function isWorkingHours() {
  // Obtém hora respeitando o fuso do Brasil
  const currentHour = Number(
    new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Sao_Paulo",
      hour: "numeric",
      hour12: false,
    }).format(new Date())
  );

  return currentHour >= 9 && currentHour < 18;
}
