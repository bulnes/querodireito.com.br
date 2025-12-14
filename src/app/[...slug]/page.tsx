import { Breadcrumb } from "@/components/breadcrumb";
import { JumbotronL2 } from "@/components/jumbotron-l2";
import { Problems } from "@/components/problems";
import { getMarkup } from "@/lib/cms-content";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const pathname = Array.isArray(slug) ? `/${slug.join("/")}` : `/${slug}`;

  const fileContent = getMarkup(`cmsContent/pages${pathname}`, "index.md");

  if (!fileContent) {
    notFound();
  }

  const {
    data: { title, description },
  } = fileContent;

  return (
    <>
      <Breadcrumb pathname={pathname} />
      <JumbotronL2 title={title} description={description} />
      <Problems />
    </>
  );
}
