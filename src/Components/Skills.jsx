import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import html5 from "../../src/assets/HTML5.png";
import aws from "../../src/assets/aws.png";
import cplusplus from "../../src/assets/c++.png";
import css from "../../src/assets/css.png";
import github from "../../src/assets/github.png";
import javascript from "../../src/assets/javscript.png";
import keras from "../../src/assets/keras.png";
import mysql from "../../src/assets/mysql.png";
import postgresql from "../../src/assets/postgresql.png";
import powerbi from "../../src/assets/powerbi.png";
import python from "../../src/assets/python.png";
import reactjs from "../../src/assets/reactjs.png";
import sklearn from "../../src/assets/sklearn.png";
import TailwindCSS from "../../src/assets/tailwindcss.png";
import tensorflow from "../../src/assets/tensorflow.png";

const Experience = () => {
  const techs = [
    { id: 1, src: cplusplus, title: "C++" },
    { id: 2, src: python, title: "Python" },
    { id: 3, src: mysql, title: "MySQL" },
    { id: 4, src: postgresql, title: "PostgreSQL" },
    { id: 5, src: html5, title: "HTML" },
    { id: 6, src: css, title: "CSS" },
    { id: 7, src: javascript, title: "JavaScript" },
    { id: 8, src: reactjs, title: "ReactJS" },
    { id: 9, src: TailwindCSS, title: "TailwindCSS" },
    { id: 10, src: tensorflow, title: "Tensorflow" },
    { id: 11, src: keras, title: "Keras" },
    { id: 12, src: sklearn, title: "Scikit-Learn" },
    { id: 13, src: aws, title: "AWS" },
    { id: 14, src: powerbi, title: "Power BI" },
    { id: 15, src: github, title: "GitHub" },
    { id: 16, src: github, title: "Kubernetes" },
  ];

  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    rtl: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div
      name="skills"
      className="pt-16 md:pt-20 bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        <div className="mb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        {/* Skills Carousel */}
        <Slider {...settings}>
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36"
            >
              <img
                src={src}
                alt={title}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              {/* <p className="mt-2 text-sm sm:text-base text-center">{title}</p> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Experience;
