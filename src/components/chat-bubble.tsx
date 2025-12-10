import { cn } from "@/lib/utils";

export function ChatBubble({
  children,
  variant = "bot",
}: {
  children: React.ReactNode;
  variant?: "bot" | "user";
}) {
  const isUser = variant === "user";

  return (
    <div
      className={cn(
        "w-full flex mb-3",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[75%] rounded-xl px-4 py-2 text-sm",
          isUser ? "bg-black text-white" : "bg-neutral-100 text-neutral-900"
        )}
      >
        {children}
      </div>
    </div>
  );
}
