import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import logo from "../assets/Prakhar_mathur_logoWhite.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "skills" },
    { id: 5, link: "experience" },
    { id: 6, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed z-50 px-4 sm:px-8 lg:px-20">
      {/* Logo with Zoom Effect */}
      <div>
        <motion.figure
          className="w-16 h-16"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={logo} alt="Logo" className="cursor-pointer" />
        </motion.figure>
      </div>

      {/* Desktop Navigation with Motion Links */}
      <ul className="hidden md:flex space-x-6 lg:space-x-8">
        {links.map(({ id, link }) => (
          <motion.li
            key={id}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center px-2 cursor-pointer capitalize font-medium text-white relative"
          >
            <Link
              to={link}
              smooth
              duration={500}
              className="hover:text-[#0061ff] transition duration-200"
            >
              {link}
            </Link>
            {/* Underline Animation */}
            <motion.div
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0061ff]"
              whileHover={{
                width: "100%",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
          </motion.li>
        ))}
        {/* Resume Button with Hover Animation */}
        <li>
          <div className="relative group">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1tSEY1NWGAf4EGPlyCFDC09mNp7bIvPsz/view?usp=sharing"
              className="relative text-white w-fit px-4 py-2 lg:px-5 lg:py-3 flex items-center overflow-hidden rounded-md bg-gradient-to-l from-[#60efff] to-[#0061ff] cursor-pointer"
            >
              <span className="relative z-10 flex items-center">
                Resume
                <HiOutlineDownload size={20} className="ml-1 lg:ml-2" />
              </span>
              {/* Hover Effect */}
              <span className="absolute inset-0 bg-gradient-to-l from-[#0061ff] to-[#60efff] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300 ease-in-out"></span>
            </a>
          </div>
        </li>
      </ul>

      {/* Mobile Navigation Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl sm:text-3xl hover:text-[#0061ff]"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <li>
            <div className="relative group">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1tSEY1NWGAf4EGPlyCFDC09mNp7bIvPsz/view?usp=sharing"
                className="relative text-white w-fit px-4 py-2 flex items-center overflow-hidden rounded-md bg-gradient-to-l from-[#60efff] to-[#0061ff] cursor-pointer"
              >
                <span className="relative z-10 flex items-center">
                  Resume
                  <HiOutlineDownload size={20} className="ml-2" />
                </span>
                {/* Hover Effect */}
                <span className="absolute inset-0 bg-gradient-to-l from-[#0061ff] to-[#60efff] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300 ease-in-out"></span>
              </a>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
