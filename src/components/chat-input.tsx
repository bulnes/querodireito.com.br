import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function ChatInput() {
  return (
    <div className="border-t p-3 flex items-center gap-2">
      <Input
        placeholder="Escreva aqui..."
        className="flex-1 bg-qd-100 text-qd-500"
      />

      <Button size="icon" className="rounded-full">
        <Send size={18} />
      </Button>
    </div>
  );
}
