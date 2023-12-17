import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import image from "../assets/Myimage2.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className=" pt-44 md:pt-0 h-screen w-screen bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-16 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Prakhar Mathur
          </h2>
          <p className=" text-slate-400 py-4 max-w-md text-3xl">
            Frontend Developer | Site Reliability Engineer | DevOps | Data
            Analyst | Machine Learning Engineer
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#60efff] to-[#0061ff] cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className=" md:justify-center md:items-center md:pt-12">
          <img
            src={image}
            alt="PrakharPictur"
            className="rounded-2xl mx-auto w-[30rem] md:w-2/3 md:object-cover md:h-96 h-[12rem] mb-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
