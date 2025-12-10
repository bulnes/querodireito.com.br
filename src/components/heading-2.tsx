import { cn } from "@/lib/utils";

export function Heading2({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLHeadingElement>;
}) {
  return (
    <h2
      {...props}
      className={cn("text-2xl lg:text-3xl font-bold mb-4", props?.className)}
    >
      {children}
    </h2>
  );
}
