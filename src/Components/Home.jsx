import { motion } from "framer-motion";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter"; // Importing the Typewriter component
import image from "../assets/Myimage2.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="pt-28 h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full w-full text-center md:text-left">
          <motion.h2
            className="text-4xl sm:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            I'm Prakhar Mathur
          </motion.h2>

          <p className="text-slate-400 py-4 max-w-md mx-auto md:mx-0 text-lg sm:text-xl">
            <span>
              <Typewriter
                words={[
                  "Site Reliability Engineer",
                  "DevOps",
                  "Frontend Developer",
                  "Data Analyst",
                  "Machine Learning Engineer",
                ]}
                loop={0} // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>

          <motion.div
            className="mt-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-[#60efff] to-[#0061ff] hover:scale-105 duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="rounded-2xl overflow-hidden w-full md:w-10/12 lg:w-11/12 xl:w-full">
            <img
              src={image}
              alt="Prakhar Mathur"
              className="w-full h-auto object-cover"
              style={{
                objectPosition: "center top",
                transform: "scale(1.2)", // Increase zoom effect
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
