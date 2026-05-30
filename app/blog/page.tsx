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
    url: "https://prakharmathur.in/blog",
    type: "website",
  },
};

const ALLOWED_DOMAINS = ["medium.com", "mathurprakhar1.medium.com"];

function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (
      ["https:", "http:"].includes(parsed.protocol) &&
      ALLOWED_DOMAINS.some((d) => parsed.hostname === d || parsed.hostname.endsWith("." + d))
    );
  } catch {
    return false;
  }
}

async function getMediumPosts() {
  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mathurprakhar1",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (data.status !== "ok" || !Array.isArray(data.items)) return [];

    return data.items
      .filter((item: any) => item.title && item.link && isSafeUrl(item.link))
      .map((item: any) => ({
        title: String(item.title).slice(0, 200),
        link: item.link,
        date: new Date(item.pubDate).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        tags: (item.categories || []).slice(0, 3),
        readTime: Math.max(1, Math.round((item.content || "").split(" ").length / 200)),
      }));
  } catch {
    return [];
  }
}

export default async function Page() {
  const posts = await getMediumPosts();

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog | Prakhar Mathur — SRE, Kubernetes & AIOps Articles",
    url: "https://prakharmathur.in/blog",
    author: {
      "@type": "Person",
      name: "Prakhar Mathur",
      url: "https://prakharmathur.in",
    },
    blogPost: posts.map((post: { title: string; link: string; date: string }) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: post.link,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: "Prakhar Mathur",
        url: "https://prakharmathur.in",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <BlogPage posts={posts} />
    </>
  );
}
