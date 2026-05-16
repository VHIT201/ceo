import PostDetailClient from "./PostDetailClient";

export async function generateStaticParams() {
  return [
    { slug: "from-outsourcing-to-saas" },
    { slug: "context-driven-testing" },
    { slug: "engineering-culture" },
    { slug: "raising-capital" },
    { slug: "hidden-cost-offshore" },
  ];
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PostDetailClient slug={slug} />;
}
