import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
import "slick-carousel/slick/slick.css"; // Import slick styles

import Gymwebsite from "../assets/Gymwebsite.png";
import ecom from "../assets/ecom.png";
import jobportal from "../assets/jobportal.png";
import signlang from "../assets/signlang.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "House Price Prediction",
      domain: "Machine Learning & Data Analytics",
      link: "https://github.com/prakhar-mathur4/House-Price-Predction",
      src: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5lksNVWUW8prwtwOAiq1pQ.jpeg",
    },
    {
      id: 2,
      name: "Customer Churn Prediction",
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
      id: 6,
      name: "Fitclub Gym Website",
      domain: "Frontend Website",
      link: "https://65664545a7cccb0c94a37575--phenomenal-queijadas-e0a852.netlify.app/",
      src: Gymwebsite,
    },
  ];

  const settings = {
    dots: true, // Adds navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides visible (default for large screens)
    slidesToScroll: 1, // Scroll one card at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay every 3 seconds
    responsive: [
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      name="portfolio"
      className="pt-10 md:pt-20 bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {portfolios.map(({ id, src, name, domain, link }) => (
            <div key={id} className="p-4">
              <div className="shadow-md shadow-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg h-[20rem] w-full flex flex-col ">
                <img
                  src={src}
                  alt={name}
                  loading="lazy"
                  className="rounded-t-md duration-200 hover:scale-105 h-[12rem] w-full object-cover "
                />
                <div className="flex flex-col justify-between p-4 flex-grow">
                  <p className="text-lg font-bold text-center truncate">
                    {name}
                  </p>
                  <p className="text-sm text-gray-400 text-center truncate">
                    Domain: {domain}
                  </p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center hover:underline mt-2"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
