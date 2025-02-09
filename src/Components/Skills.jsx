import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import ArgoCD from "../../src/assets/ArgoCD.png";
import aws from "../../src/assets/aws.png";
import azuree from "../../src/assets/Azure.png";
import cplusplus from "../../src/assets/c++.png";
import css from "../../src/assets/css.png";
import Docker from "../../src/assets/Docker.png";
import Elasticsearch from "../../src/assets/Elasticsearch.png";
import github from "../../src/assets/github.png";
import Grafana from "../../src/assets/Grafana.svg";
import html5 from "../../src/assets/HTML5.png";
import javascript from "../../src/assets/javscript.png";
import Jira from "../../src/assets/Jira.png";
import Kafka from "../../src/assets/Kafka.png";
import keras from "../../src/assets/keras.png";
import Kibana from "../../src/assets/Kibana.png";
import k8s from "../../src/assets/Kubernetes.png";
import Linux from "../../src/assets/Linux.png";
import mysql from "../../src/assets/mysql.png";
import NewRelic from "../../src/assets/NewRelic.png";
import postgresql from "../../src/assets/postgresql.png";
import powerbi from "../../src/assets/powerbi.png";
import Prometheus from "../../src/assets/Prometheus.png";
import python from "../../src/assets/python.png";
import reactjs from "../../src/assets/reactjs.png";
import Robusta from "../../src/assets/Robusta.svg";
import sklearn from "../../src/assets/sklearn.png";
import TailwindCSS from "../../src/assets/tailwindcss.png";
import tensorflow from "../../src/assets/tensorflow.png";
import Terraform from "../../src/assets/Terraform.png";

const Experience = () => {
  const techs = [
    { id: 1, src: Linux, title: "Linux" },
    { id: 2, src: cplusplus, title: "C++" },
    { id: 3, src: python, title: "Python" },
    { id: 4, src: aws, title: "AWS" },
    { id: 5, src: azuree, title: "Azure" },
    { id: 5, src: github, title: "GitHub" },
    { id: 7, src: Docker, title: "Docker" },
    { id: 8, src: k8s, title: "Kubernetes" },
    { id: 9, src: Robusta, title: "Robusta" },
    { id: 10, src: Kibana, title: "Kibana" },
    { id: 11, src: ArgoCD, title: "ArgoCD" },
    { id: 12, src: Elasticsearch, title: "Elasticsearch" },
    { id: 13, src: Prometheus, title: "Prometheus" },
    { id: 14, src: Grafana, title: "Grafana" },
    { id: 15, src: Terraform, title: "Terraform" },
    { id: 16, src: NewRelic, title: "New Relic" },
    { id: 17, src: Jira, title: "Jira" },
    { id: 18, src: mysql, title: "MySQL" },
    { id: 19, src: postgresql, title: "PostgreSQL" },
    { id: 20, src: Kafka, title: "Kafka" },
    { id: 21, src: html5, title: "HTML" },
    { id: 22, src: css, title: "CSS" },
    { id: 23, src: javascript, title: "JavaScript" },
    { id: 24, src: reactjs, title: "ReactJS" },
    { id: 25, src: TailwindCSS, title: "TailwindCSS" },
    { id: 26, src: tensorflow, title: "Tensorflow" },
    { id: 27, src: keras, title: "Keras" },
    { id: 28, src: sklearn, title: "Scikit-Learn" },
    { id: 29, src: powerbi, title: "Power BI" },
  ];

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    // pauseOnHover: true,
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
          <p className="py-4">
            These are the tools & technologies I've worked with.
          </p>
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
