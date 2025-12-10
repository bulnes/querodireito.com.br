import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full bg-qd-200 px-3 py-5 lg:px-6 lg:py-7 rounded-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
