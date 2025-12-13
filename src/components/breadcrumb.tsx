import {
  Breadcrumb as BreadcrumbComponent,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export function Breadcrumb({ pathname }: { pathname: string }) {
  const pieces = pathname.split("/").filter(Boolean);

  return (
    <section className="centered-container px-4 lg:px-0 py-4">
      <BreadcrumbComponent>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          {pieces.map((piece, index) => {
            const href = `/${pieces.slice(0, index + 1).join("/")}`;
            const isLast = index === pieces.length - 1;
            const label = piece.charAt(0).toUpperCase() + piece.slice(1);

            return (
              <React.Fragment key={href}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </BreadcrumbComponent>
    </section>
  );
}
