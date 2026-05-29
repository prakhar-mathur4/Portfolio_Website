"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Fotter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 bg-white" aria-label="Footer">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-10 md:px-20 2xl:px-28 py-10">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">

          {/* Brand */}
          <div>
            <p className="text-sm font-bold text-gray-900 tracking-tight mb-1">Prakhar Mathur</p>
            <p className="text-xs text-gray-400">Site Reliability Engineer · AIOps Specialist</p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {["about", "experience", "skills", "portfolio", "contact"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth
                duration={500}
                offset={-80}
                className="text-xs tracking-[0.15em] uppercase text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
              >
                {section}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-gray-300 tracking-[0.12em]">
            © {year} Prakhar Mathur — All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/mathurprakhar1/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-150"
            >
              <FaLinkedin size={14} />
            </a>
            <a
              href="https://github.com/prakhar-mathur4"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-100 transition-all duration-150"
            >
              <FaGithub size={14} />
            </a>
            <a
              href="mailto:mathurprakhar1@gmail.com"
              aria-label="Email"
              className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-150"
            >
              <HiOutlineMail size={15} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Fotter;
