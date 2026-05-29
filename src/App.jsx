import { useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Fotter from "./Components/Fotter";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";

function App() {
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

export default App;
