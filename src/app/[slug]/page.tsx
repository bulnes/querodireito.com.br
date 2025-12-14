import { Breadcrumb } from "@/components/breadcrumb";
import { JumbotronL2 } from "@/components/jumbotron-l2";
import { Problems } from "@/components/problems";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const pathname = Array.isArray(slug) ? `/${slug.join("/")}` : `/${slug}`;

  return (
    <>
      <Breadcrumb pathname={pathname} />
      <JumbotronL2 />
      <Problems />
    </>
  );
}
