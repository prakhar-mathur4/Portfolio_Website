"use client";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const SocialLinks = () => {
  const links = [
    { id: 1, icon: <FaLinkedin size={15} />, label: "LINKEDIN", href: "https://www.linkedin.com/in/mathurprakhar1/" },
    { id: 2, icon: <FaGithub size={15} />, label: "GITHUB", href: "https://github.com/prakhar-mathur4" },
    { id: 3, icon: <MdOutlineEmail size={16} />, label: "EMAIL", href: "mailto:mathurprakhar1@gmail.com" },
  ];

  return (
    <div className="hidden lg:flex flex-col items-center gap-5 fixed top-1/2 -translate-y-1/2 left-7">
      {links.map(({ id, icon, label, href }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1.5 group"
        >
          <span className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200">{icon}</span>
          <span
            className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
            style={{
              fontSize: "9px",
              letterSpacing: "0.18em",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            {label}
          </span>
        </a>
      ))}
      <div className="w-px h-10 bg-gray-300 mt-1" />
      <div className="w-2 h-2 rounded-full bg-blue-500" />
    </div>
  );
};

export default SocialLinks;
