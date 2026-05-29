import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import BlogStrip from "@/components/BlogStrip";
import Contact from "@/components/Contact";
import Fotter from "@/components/Fotter";
import SocialLinks from "@/components/SocialLinks";

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

  return (
    <div className="bg-slate-50 min-h-screen text-gray-900 overflow-x-hidden">
      <Navbar />
      <main className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-10 md:px-20 2xl:px-28 pt-[112px] pb-28">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <BlogStrip posts={posts} />
        <Contact />
      </main>
      <Fotter />
      <SocialLinks />
    </div>
  );
}
