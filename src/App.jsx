import { useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experince from "./Components/Experince";
import Fotter from "./Components/Fotter";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Experince />
      <Contact />
      <Fotter />
      <SocialLinks />
    </>
  );
}

export default App;
