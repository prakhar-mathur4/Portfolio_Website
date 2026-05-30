"use client";
import { motion } from "framer-motion";
import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";






const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const portfolios = [
  {
    id: 1,
    name: "House Price Prediction",
    domain: "Machine Learning · Data Analytics",
    desc: "ML regression model to predict house prices using feature engineering, Scikit-Learn, and data visualization pipelines.",
    tags: ["Python", "Scikit-Learn", "Pandas", "EDA"],
    link: "https://github.com/prakhar-mathur4/House-Price-Predction",
    github: "https://github.com/prakhar-mathur4/House-Price-Predction",
    src: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5lksNVWUW8prwtwOAiq1pQ.jpeg",
    type: "ML / Data",
  },
  {
    id: 2,
    name: "Customer Churn Prediction",
    domain: "Machine Learning · Data Analytics",
    desc: "Telecom churn prediction for Reliance Jio using classification models with feature selection and business insight reporting.",
    tags: ["Python", "XGBoost", "Feature Engineering", "Visualization"],
    link: "https://github.com/prakhar-mathur4/Churn-prediction-Reliance-Jio-Info-COMM-Limited-Telecom-Industry-",
    github: "https://github.com/prakhar-mathur4/Churn-prediction-Reliance-Jio-Info-COMM-Limited-Telecom-Industry-",
    src: "https://cdn.analyticsvidhya.com/wp-content/uploads/2019/05/customer-churn-edit.jpeg",
    type: "ML / Data",
  },
  {
    id: 3,
    name: "Sign Language Detection",
    domain: "Machine Learning · Deep Learning",
    desc: "Real-time sign language recognition system using CNN and computer vision for accessibility and communication aid.",
    tags: ["TensorFlow", "Keras", "OpenCV", "CNN"],
    link: "https://github.com/prakhar-mathur4/Sign-Language-Recognition-System/tree/main",
    github: "https://github.com/prakhar-mathur4/Sign-Language-Recognition-System/tree/main",
    src: "/assets/signlang.png",
    type: "Deep Learning",
  },
  {
    id: 4,
    name: "Ecommerce Project",
    domain: "Frontend · Ecommerce",
    desc: "Fully responsive ecommerce storefront with product listing, cart, and modern UI built with React and TailwindCSS.",
    tags: ["ReactJS", "TailwindCSS", "JavaScript", "Netlify"],
    link: "https://6570a7f90f58ec161970fb6f--aquamarine-malabi-a15292.netlify.app/",
    github: null,
    src: "/assets/ecom.png",
    type: "Frontend",
  },
  {
    id: 5,
    name: "Job Portal",
    domain: "Fullstack · Firebase",
    desc: "Full-stack job portal with Firebase authentication, real-time database, and role-based access for recruiters and applicants.",
    tags: ["ReactJS", "Firebase", "Vercel", "Auth"],
    link: "https://pcas-job-portal.vercel.app/",
    github: null,
    src: "/assets/jobportal.png",
    type: "Fullstack",
  },
  {
    id: 6,
    name: "Fitclub Gym Website",
    domain: "Frontend",
    desc: "Modern gym landing page with animated hero section, service cards, and responsive layout built for conversion.",
    tags: ["ReactJS", "CSS", "Animations", "Netlify"],
    link: "https://65664545a7cccb0c94a37575--phenomenal-queijadas-e0a852.netlify.app/",
    github: null,
    src: "/assets/Gymwebsite.png",
    type: "Frontend",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      name="portfolio"
      className="py-20 border-b border-gray-100"
      aria-label="Projects and Portfolio"
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-xs tracking-[0.3em] font-semibold text-blue-500 mb-5 flex items-center gap-3">
          PROJECTS{" "}
          <span className="flex-1 max-w-[40px] h-px bg-blue-400 inline-block" />
        </p>
        <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-3">
          ML, Fullstack & Frontend Projects
          <span className="text-blue-500">.</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-lg">
          A selection of machine learning, deep learning, and fullstack projects spanning data science,
          computer vision, and modern web development.
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {portfolios.map(({ id, src, name, domain, desc, tags, link, github, type }, i) => (
          <motion.article
            key={id}
            custom={i * 0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200 flex flex-col"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-44 bg-gray-50">
              <img
                src={src}
                alt={name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-semibold tracking-wider bg-white/90 text-gray-600 border border-gray-200 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {type}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-sm font-bold text-gray-900 mb-1">{name}</h3>
              <p className="text-[11px] text-blue-500 font-medium mb-3">{domain}</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">{desc}</p>

              {/* Tags */}
              <ul className="flex flex-wrap gap-1.5 mb-4 list-none">
                {tags.map((tag) => (
                  <li key={tag}>
                    <span className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-150"
                >
                  <HiOutlineExternalLink size={13} /> View Project
                </a>
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-gray-800 transition-colors duration-150"
                  >
                    <FaGithub size={12} /> GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Bottom strip */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 grid grid-cols-2 xl:grid-cols-4 border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden"
      >
        {[
          { value: "6", label: "Projects", sub: "ML, Fullstack & Frontend" },
          { value: "3", label: "ML Projects", sub: "Prediction & deep learning" },
          { value: "React", label: "Frontend Stack", sub: "ReactJS + TailwindCSS" },
          { value: "GitHub", label: "Open Source", sub: "All projects on GitHub" },
        ].map(({ value, label, sub }, i) => (
          <div
            key={i}
            className="flex flex-col p-6 border-r border-gray-100 last:border-r-0 border-b xl:border-b-0 hover:bg-blue-50/40 transition-colors duration-200"
          >
            <p className="text-xl font-bold text-blue-500 mb-0.5">{value}</p>
            <p className="text-xs font-semibold text-gray-700 tracking-wide">{label}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
