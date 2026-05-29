import type { Metadata } from "next";
import BlogPage from "@/components/BlogPage";

export const metadata: Metadata = {
  title: "Blog | Prakhar Mathur — SRE, Kubernetes & AIOps Articles",
  description:
    "Practical articles on Site Reliability Engineering, Kubernetes, AIOps, observability, and cloud-native systems by Prakhar Mathur.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Prakhar Mathur — SRE & AIOps Writing",
    description:
      "Practical SRE articles on Kubernetes, AIOps, observability, and cloud infrastructure.",
    url: "https://prakhar-mathur4.github.io/blog",
    type: "website",
  },
};

async function getMediumPosts() {
  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mathurprakhar1",
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    if (data.status !== "ok") return [];

    return data.items.map((item: any) => ({
      title: item.title,
      link: item.link,
      date: new Date(item.pubDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      tags: (item.categories || []).slice(0, 3),
      readTime: Math.max(1, Math.round(item.content.split(" ").length / 200)),
    }));
  } catch {
    return [];
  }
}

export default async function Page() {
  const posts = await getMediumPosts();
  return <BlogPage posts={posts} />;
}
