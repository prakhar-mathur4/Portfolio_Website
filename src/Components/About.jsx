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
          Hello there! I'm Prakhar Mathur, an Engineer based in{" "}
          <span className="text-orange-300">IN</span>
          <span className="text-blue-500">D</span>
          <span className="text-green-300">IA</span>, with a Bachelor's in
          Information Technology from Poornima College of Engineering. I'm a
          tech enthusiast passionate about merging the worlds of technology and
          innovation.{" "}
          <span className=" font-semibold text-blue-300">
            My skill set revolves around a fusion of Frontend Development, Data
            Science, Data Analytics, and Machine Learning. I have expertise
            spanning diverse domains.
          </span>{" "}
          On one hand, I excel in optimizing product applications, ensuring they
          are robust, reliable, and efficient through rigorous application
          monitoring and production support. My technical expertise allows me to
          design and implement solutions that keep systems performing at their
          peak. On the other hand, my fascination with both frontend development
          and data science enables me to create captivating, user-friendly
          interfaces and extract meaningful insights from complex data sets,
          blending creativity with analytical precision.
        </p>

        <br />

        <p className="text-lg text-justify">
          I'm not just about skills;
          <span className=" font-bold text-blue-300">
            {" "}
            I'm driven by the desire to apply these proficiencies in meaningful
            ways.
          </span>{" "}
          ranging from ML engineering to frontend development, DevOps, and
          diving deep into data analytics. My motivation stems from the
          convergence of these diverse fields, constantly seeking to combine
          user-centric design with data-driven insights and incorporate the
          complexities of machine learning into reliable systems.{" "}
          <span className=" font-bold text-blue-300">
            {" "}
            Whether it’s creating engaging frontend experiences, optimizing
            applications for peak performance, or leveraging data science to
            extract actionable insights, I’m excited to embrace these challenges
            and drive progress through innovative solutions.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
