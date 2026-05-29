import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Fotter from "@/components/Fotter";
import SocialLinks from "@/components/SocialLinks";

export default function Page() {
  return (
    <div className="bg-slate-50 min-h-screen text-gray-900 overflow-x-hidden">
      <Navbar />
      <main className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-10 md:px-20 2xl:px-28 pt-[112px] pb-28">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Fotter />
      <SocialLinks />
    </div>
  );
}
