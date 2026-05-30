"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiOutlineDownload } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: 1, link: "about", label: "About" },
    { id: 2, link: "experience", label: "Experience" },
    { id: 3, link: "portfolio", label: "Projects" },
    { id: 4, link: "skills", label: "Skills" },
    { id: 5, link: "blog", label: "Blog" },
    { id: 6, link: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-gray-200 bg-slate-50/95 backdrop-blur-sm" : "bg-slate-50"
      }`}
    >
      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-10 md:px-20 2xl:px-28 h-20 flex items-center justify-between">
        <Link to="home" smooth duration={500} offset={-96} className="cursor-pointer" aria-label="Prakhar Mathur — go to top">
          <img src="/assets/Prakhar_mathur_logoBlack.png" alt="Prakhar Mathur logo" className="h-14 w-auto object-contain" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map(({ id, link, label }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              offset={-80}
              className="text-sm tracking-[0.12em] uppercase text-gray-400 hover:text-gray-900 transition-colors duration-200 cursor-pointer font-medium"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1XZUV8UJaaP6FdoxNIhHCHc8lwkO1_idG/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm tracking-[0.12em] uppercase border border-gray-900 text-gray-900 px-5 py-2 font-medium hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            Résumé <HiOutlineDownload size={15} />
          </a>
        </nav>

        <button onClick={() => setNav(!nav)} className="md:hidden text-gray-600" aria-label={nav ? "Close menu" : "Open menu"} aria-expanded={nav}>
          {nav ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {nav && (
        <nav className="md:hidden absolute top-20 left-0 right-0 bg-slate-50 border-b border-gray-200 px-10 py-8 flex flex-col gap-6" aria-label="Mobile navigation">
          {links.map(({ id, link, label }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setNav(false)}
              className="text-sm tracking-[0.15em] uppercase text-gray-500 hover:text-gray-900 cursor-pointer transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1tSEY1NWGAf4EGPlyCFDC09mNp7bIvPsz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase border border-gray-900 text-gray-900 px-4 py-2 w-fit hover:bg-gray-900 hover:text-white transition-all"
          >
            Résumé <HiOutlineDownload size={14} />
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
