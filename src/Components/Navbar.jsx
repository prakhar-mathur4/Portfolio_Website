import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import logo from "../assets/Prakhar_mathur_logoWhite.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "experience",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-screen h-20 text-white bg-black fixed px-4">
      <div>
        <figure className="w-16 h-16 ml-2 md:ml-72">
          <img src={logo} alt="Logo" />
        </figure>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="flex items-center px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:hover:text-[#0061ff] duration-200 "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        {/* Resume button */}
        <li>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1tSEY1NWGAf4EGPlyCFDC09mNp7bIvPsz/view?usp=sharing"
              className="group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-[#60efff] to-[#0061ff] cursor-pointer"
            >
              Resume
              <span className="">
                <HiOutlineDownload size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-[#0061ff]"
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
            <div>
              <Link
                to="#"
                smooth
                duration={500}
                className="group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-[#60efff] to-[#0061ff] cursor-pointer"
              >
                Resume
                <span className="">
                  <HiOutlineDownload size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
