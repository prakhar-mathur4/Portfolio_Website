import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";
import { FaArrowRight, FaChartLine, FaCloud, FaCode } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { BsGrid3X3 } from "react-icons/bs";
import { MdOutlineTerminal } from "react-icons/md";
import image from "../assets/IMG_20241122_155102115(1).jpg";
import heroIllustration from "../assets/hero-illustration.png";

const stats = [
  {
    icon: <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="1" width="30" height="10" rx="2"/><rect x="1" y="13" width="30" height="10" rx="2"/><circle cx="5" cy="6" r="1.5" fill="currentColor"/><circle cx="5" cy="18" r="1.5" fill="currentColor"/></svg>,
    title: "CLOUD NATIVE",
    sub: "AWS, GCP, Azure",
  },
  {
    icon: <SiKubernetes size={28} />,
    title: "KUBERNETES",
    sub: "EKS, AKS, GKE",
  },
  {
    icon: <FaChartLine size={26} />,
    title: "OBSERVABILITY",
    sub: "Prometheus, Grafana",
  },
  {
    icon: <svg width="30" height="24" viewBox="0 0 30 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="6,8 2,12 6,16"/><polyline points="24,8 28,12 24,16"/><line x1="18" y1="4" x2="12" y2="20"/></svg>,
    title: "AUTOMATION",
    sub: "Terraform, Ansible, CI/CD",
  },
];

const Home = () => {
  return (
    <div name="home">
      {/* Hero */}
      <section className="flex flex-col pt-2 pb-0">
        <div className="flex items-center gap-4 flex-1">
          {/* Left */}
          <motion.div
            className="flex flex-col justify-center"
            style={{ width: "48%" }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.3em] text-gray-400 font-mono-dm mb-3">
              HI, I'M
            </p>

            <h1 className="text-6xl sm:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-gray-900 leading-none mb-5 tracking-tight">
              Prakhar Mathur
            </h1>

            <p className="text-lg sm:text-xl 2xl:text-2xl font-mono-dm tracking-[0.15em] text-blue-600 mb-5 font-medium">
              SITE RELIABILITY ENGINEER & AIOPS SPECIALIST
            </p>

            <div className="w-10 h-px bg-gray-400 mb-7" />

            <p className="font-mono-dm text-sm 2xl:text-base text-gray-500 leading-relaxed max-w-sm 2xl:max-w-md mb-10">
              Building scalable, AI-ready infrastructure on AWS & Kubernetes. Specializing in AIOps, MLOps observability, automation, and cloud-native systems — keeping production fast, resilient, and self-healing.
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="contact"
                smooth
                duration={500}
                className="text-sm tracking-[0.15em] uppercase text-gray-500 font-mono-dm cursor-pointer border-b border-dotted border-gray-400 pb-0.5 hover:text-gray-900 hover:border-gray-900 transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Right: Image + floating icons */}
          <motion.div
            className="hidden lg:flex items-center justify-center relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ width: "52%", minHeight: "520px" }}
          >
            {/* Dot grid bg */}
            <div className="absolute inset-0 z-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Illustration */}
            <div className="relative z-10 w-full">
              <img
                src={heroIllustration}
                alt="Prakhar Mathur — Site Reliability Engineer and AIOps Specialist"
                className="w-full h-auto object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="border-t border-gray-200 mt-10 grid grid-cols-2 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map(({ icon, title, sub }, i) => (
            <div
              key={i}
              className="flex items-center gap-4 py-6 px-4 border-r border-gray-200 last:border-r-0 hover:bg-gray-50 transition-colors"
            >
              <div className="text-gray-400 shrink-0">{icon}</div>
              <div>
                <p className="text-xs tracking-[0.18em] font-semibold text-gray-800">{title}</p>
                <p className="text-xs text-gray-400 mt-0.5 font-mono-dm">{sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
