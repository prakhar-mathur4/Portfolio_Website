import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" pt-[55rem] md:pt-0 w-screen h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me...
          </p>
        </div>

        <p className="text-lg mt-20 text-justify">
          Hello there! I'm Prakhar Mohan Mathur, an Engineer based in{" "}
          <span className="text-orange-300">IN</span>
          <span className="text-blue-500">D</span>
          <span className="text-green-300">IA</span>, holding a Bachelor's in
          Information Technology from Poornima College of Engineering. I'm a
          tech enthusiast passionate about merging the worlds of technology and
          innovation.{" "}
          <span className=" font-semibold text-blue-300">
            My skill set revolves around a fusion of Frontend Development, Data
            Science, Data Analytics, and Machine Learning. I have expertise
            spanning diverse domains.
          </span>{" "}
          On one end, I thrive in crafting immersive frontend experiences,
          sculpting user interfaces that captivate and engage. Simultaneously,
          my love for numbers and patterns has led me into the realm of Data
          Science and Data Analytics, where I unravel insights from complex
          datasets. Moreover, my journey into Machine Learning involves crafting
          intelligent systems that learn and evolve.
        </p>

        <br />

        <p className="text-lg text-justify">
          I'm not just about skills;
          <span className=" font-bold text-blue-300">
            {" "}
            I'm driven by the desire to apply these proficiencies in meaningful
            ways.
          </span>{" "}
          My work interests are multifaceted, ranging from ML engineering to
          Frontend Development, from DevOps to Site Reliability Engineering
          (SRE), and diving deep into the world of Data Analytics. My motivation
          stems from the convergence of these diverse fields. I'm constantly
          searching for chances to combine user-centric design with data-driven
          insights or to incorporate the complexities of machine learning into
          reliable systems. If you're seeking someone passionate about these
          intersecting domains, someone who can seamlessly blend tech prowess
          with innovative solutions, let's connect!{" "}
          <span className=" font-bold text-blue-300">
            {" "}
            Whether it's crafting an intuitive Frontend, optimizing systems
            through ML, or diving deep into data analytics, I'm ready to embark
            on these ventures together.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
