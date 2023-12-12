import React from "react";
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
    {
      id: 11,
      src: cplusplus,
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 13,
      src: mysql,
      title: "My SQL",
      style: "shadow-gray-400",
    },
    {
      id: 14,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-cyan-400",
    },
    {
      id: 1,
      src: html5,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactjs,

      title: "ReactJS",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: TailwindCSS,
      title: "TailwindCSS",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: tensorflow,
      title: "Tensorflow",
      style: "shadow-white",
    },
    {
      id: 7,
      src: keras,

      title: "Keras",
      style: "shadow-red-400",
    },
    {
      id: 9,
      src: sklearn,

      title: "Skit-Learn",
      style: "shadow-orange-400",
    },
    {
      id: 15,
      src: aws,

      title: "AWS",
      style: "shadow-orange-400",
    },
    {
      id: 10,
      src: powerbi,
      title: "Power BI",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: github,

      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="pt-[52rem] md:pt-96 block bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 h-19 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20  mx-auto overflow-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
