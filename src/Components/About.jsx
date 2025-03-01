import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="pt-20 md:pt-0 w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Header */}
        <div>
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            About Me...
          </p>
        </div>

        {/* Main Content */}
        <p className="text-sm sm:text-base md:text-lg mt-6 sm:mt-10 text-justify">
          Hello there! I'm Prakhar Mathur, an Engineer based in{" "}
          <span className="text-orange-300">IN</span>
          <span className="text-blue-500">D</span>
          <span className="text-green-300">IA</span>, with a Bachelor's in
          Information Technology from Poornima College of Engineering,Jaipur. I
          thrive at the intersection of cloud infrastructure, DevOps, and
          reliability engineering, ensuring that systems not only stay up but
          stay fast, efficient, and resilient.{" "}
          <span className="font-semibold text-blue-300">
            I specialize in Kubernetes monitoring, cloud automation, and
            incident management, making sure applications don’t just run but run
            like a well-oiled machine. Whether it’s optimizing performance,
            automating alerts, or debugging production issues at 3 AM, I get the
            job done.
          </span>
        </p>

        <p className="text-sm sm:text-base md:text-lg mt-4 text-justify">
          For me, SRE isn’t just about fixing things—it’s about building better,
          self-healing systems that keep businesses running smoothly. I geek out
          over observability tools, container orchestration, and SLIs/SLAs,
          making sure users have a seamless experience while we crush downtime.
        </p>

        <p className="text-sm sm:text-base md:text-lg mt-4 text-justify">
          {/* I'm not just about skills;{" "} */}
          <span className="font-bold text-blue-300">
            When I’m not busy scaling Kubernetes clusters or setting up killer
            Grafana dashboards, you’ll find me tinkering with frontend
            development, exploring data science, or just chilling with some good
            Aussie humor (Oi! 😆).
          </span>{" "}
          Always up for new challenges, tech banter, and cool projects—let’s
          connect and make the internet a more reliable place! 💻✨
        </p>
      </div>
    </div>
  );
};

export default About;
