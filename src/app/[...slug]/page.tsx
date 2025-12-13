import { Problems } from "@/components/problems";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  console.log([...slug].join("/"));

  return (
    <>
      <Problems />
    </>
  );
}
