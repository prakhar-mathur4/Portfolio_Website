import React from "react";
import Gymwebsite from "../assets/Gymwebsite.png";
import ecom from "../assets/ecom.png";
import jobportal from "../assets/jobportal.png";
import signlang from "../assets/signlang.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "House Price Predection",
      domain: "Machine Learning & Data Analytics",
      link: "https://github.com/prakhar-mathur4/House-Price-Predction",
      src: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5lksNVWUW8prwtwOAiq1pQ.jpeg",
    },
    {
      id: 2,
      name: "Customer Churn Predection",
      domain: "Machine Learning & Data Analytics",
      link: "https://github.com/prakhar-mathur4/Churn-prediction-Reliance-Jio-Info-COMM-Limited-Telecom-Industry-",
      src: "https://cdn.analyticsvidhya.com/wp-content/uploads/2019/05/customer-churn-edit.jpeg",
    },
    {
      id: 3,
      name: "Sign Language Detection",
      domain: "Machine Learning & Deep Learning",
      link: "https://github.com/prakhar-mathur4/Sign-Language-Recognition-System/tree/main",
      src: signlang,
    },
    {
      id: 4,
      name: "Ecommerce Project",
      domain: "Frontend Website with Ecommerce functionality",
      link: "https://6570a7f90f58ec161970fb6f--aquamarine-malabi-a15292.netlify.app/",
      src: ecom,
    },
    {
      id: 5,
      name: "Job Portal",
      domain: "Fullstack website using Firebase",
      link: "https://pcas-job-portal.vercel.app/",
      src: jobportal,
    },
    {
      id: 3,
      name: "Fitclub Gym Website",
      domain: "Frontend Website",
      link: "https://65664545a7cccb0c94a37575--phenomenal-queijadas-e0a852.netlify.app/",
      src: Gymwebsite,
    },
  ];

  return (
    <div
      name="portfolio"
      className=" pt-[55rem] md:pt-0 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, domain, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-[10rem] w-full object-contain "
              />
              <p className="flex pt-2 pb-0 items-center justify-center font-semibold">
                {name}
              </p>
              <div className="flex flex-col items-center justify-center">
                <p className="pt-1 px-5">Domain: {domain}</p>
                <a href={link} target="_blank" className="py-3 items-center">
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
