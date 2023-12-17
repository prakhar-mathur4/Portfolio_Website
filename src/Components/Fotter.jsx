import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Fotter = () => {
  const year = new Date().getFullYear();
  return (
    <div
      name="contact"
      className=" h-36 w-screen bg-gradient-to-b from-black to-black p-4 text-white"
    >
      <hr className="w-auto" />
      {/* Logo */}

      <div className=" flex items-center justify-center mt-8 gap-10">
        <a href="https://www.linkedin.com/in/mathurprakhar1/">
          <FaLinkedin size={30} />
        </a>
        <a href="">
          <FaGithub size={30} />
        </a>
        <a href="mailto:mathurprakhar1@gmail.com">
          <HiOutlineMail size={30} />
        </a>
        <a href="">
          <BsFillPersonLinesFill size={30} />
        </a>
      </div>
      <p className=" text-center py-5">
        &copy; {year} Prakhar Mathur. All Rights Reserved.
      </p>
    </div>
  );
};

export default Fotter;
