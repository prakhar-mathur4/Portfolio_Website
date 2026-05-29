"use client";
import { motion } from "framer-motion";
import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import {
  HiBriefcase,
  HiOutlineServer,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineCloud,
  HiOutlineDesktopComputer,
  HiOutlineCode,
  HiOutlineSparkles,
  HiOutlineOfficeBuilding,
  HiOutlineLocationMarker,
  HiOutlineColorSwatch,
  HiOutlineLightBulb,
} from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const metricCards = [
  {
    icon: <HiBriefcase size={22} />,
    value: "3+",
    label: "YEARS EXPERIENCE",
    sub: "SRE / DevOps Engineer",
  },
  {
    icon: <HiOutlineServer size={22} />,
    value: "Cloud & On-Prem",
    label: "INFRASTRUCTURE",
    sub: "Managing hybrid infrastructure across environments",
  },
  {
    icon: <HiOutlineShieldCheck size={22} />,
    value: "99.9%",
    label: "RELIABILITY FOCUS",
    sub: "Designing systems that stay fast and available",
  },
  {
    icon: <HiOutlineLightningBolt size={22} />,
    value: "AI + SRE",
    label: "EXPLORING AIOPS",
    sub: "Intelligent monitoring, automation & operations",
  },
];

const expertiseCards = [
  {
    icon: <HiOutlineCloud size={24} />,
    title: "Cloud Infrastructure",
    desc: "Building scalable cloud infrastructure using AWS, Kubernetes, Terraform, and cloud-native architecture.",
    tags: ["AWS", "Kubernetes", "Terraform", "Docker"],
  },
  {
    icon: <HiOutlineDesktopComputer size={24} />,
    title: "Observability & Monitoring",
    desc: "Implementing monitoring, logging, and observability systems for production workloads.",
    tags: ["Prometheus", "Grafana", "ELK", "New Relic"],
  },
  {
    icon: <HiOutlineCode size={24} />,
    title: "Automation & DevOps",
    desc: "Automating deployments, CI/CD pipelines, and infrastructure workflows for faster delivery.",
    tags: ["GitHub Actions", "ArgoCD", "Bash", "CI/CD"],
  },
  {
    icon: <HiOutlineSparkles size={24} />,
    title: "AI + SRE Systems",
    desc: "Exploring AI-powered operations, intelligent alerting, and automation for modern SRE workflows.",
    tags: ["AIOps", "Alerting", "ML", "Automation"],
  },
];

const trustItems = [
  {
    icon: <HiOutlineOfficeBuilding size={22} />,
    label: "CURRENTLY AT",
    value: "IQM Corporation",
    sub: "Site Reliability Engineer",
  },
  {
    icon: <HiOutlineLocationMarker size={22} />,
    label: "BASED IN",
    value: "India",
    sub: "Open to remote opportunities",
  },
  {
    icon: <HiOutlineColorSwatch size={22} />,
    label: "FOCUS AREAS",
    value: "Kubernetes • Cloud • Observability",
    sub: "Automation • Reliability • AIOps",
  },
  {
    icon: <HiOutlineLightBulb size={22} />,
    label: "I BELIEVE IN",
    value: "Systems that heal,",
    sub: "automate and scale.",
  },
];

const About = () => {
  return (
    <section id="about" name="about" className="py-20 border-b border-gray-100" aria-label="About Prakhar Mathur - Site Reliability Engineer">

      {/* ── Part 1: Hero 2-col ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-16">

        {/* Left */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] font-semibold text-blue-500 mb-5 flex items-center gap-3">
            ABOUT ME <span className="flex-1 max-w-[40px] h-px bg-blue-400 inline-block" />
          </p>

          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-[1.15] mb-6">
            Building reliable infrastructure{" "}
            <span className="relative">
              that scales in production
              <span className="text-blue-500">.</span>
            </span>
          </h2>

          <div className="space-y-4 text-sm text-gray-500 leading-relaxed mb-8 max-w-lg">
            <p>
              I'm a <span className="text-gray-800 font-medium">Site Reliability Engineer (SRE)</span> and DevOps Engineer specializing in building scalable, resilient, and observable cloud infrastructure. My expertise lies in Kubernetes, AWS, CI/CD pipelines, infrastructure automation, and cloud-native systems designed for reliability at scale.
            </p>
            <p>
              I work across production environments to improve system performance, availability, and operational efficiency through monitoring, automation, incident response, and infrastructure optimization.
            </p>
            <p>
              My core stack includes <span className="text-gray-800 font-medium">Kubernetes, AWS, Terraform, Docker, ArgoCD, Prometheus, Grafana, ELK, and GitHub Actions</span>. I'm also exploring AIOps, intelligent monitoring, and automation to reduce operational overhead.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1XZUV8UJaaP6FdoxNIhHCHc8lwkO1_idG/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-gray-900 text-white text-xs tracking-[0.12em] uppercase font-semibold px-6 py-3.5 hover:bg-gray-700 transition-colors duration-200"
            >
              <HiOutlineDownload size={15} /> Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/mathurprakhar1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border border-gray-300 text-gray-700 text-xs tracking-[0.12em] uppercase font-semibold px-6 py-3.5 hover:border-gray-900 hover:text-gray-900 transition-colors duration-200"
            >
              <FaLinkedin size={14} /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right: 2x2 metric cards */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true }}
        >
          {metricCards.map(({ icon, value, label, sub }, i) => (
            <motion.div
              key={i}
              custom={i * 0.1 + 0.2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
                {icon}
              </div>
              <p className="text-xl xl:text-2xl font-bold text-blue-500 leading-tight mb-1">
                {value}
              </p>
              <p className="text-[10px] tracking-[0.18em] font-semibold text-gray-400 uppercase mb-1.5">
                {label}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">{sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Part 2: What I Do ── */}
      <div className="mb-14">
        <motion.p
          className="text-xs tracking-[0.3em] font-semibold text-blue-500 mb-8 flex items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          WHAT I DO <span className="flex-1 max-w-[40px] h-px bg-blue-400 inline-block" />
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {expertiseCards.map(({ icon, title, desc, tags }, i) => (
            <motion.div
              key={i}
              custom={i * 0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
                  {icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-5">{desc}</p>
              </div>
              <div className="flex flex-wrap gap-x-1 pt-4 border-t border-gray-100">
                {tags.map((tag, idx) => (
                  <span key={tag} className="text-[10px] text-gray-400 font-medium">
                    {tag}{idx < tags.length - 1 ? " •" : ""}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Part 3: Trust strip ── */}
      <motion.div
        className="grid grid-cols-2 xl:grid-cols-4 border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {trustItems.map(({ icon, label, value, sub }, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-6 border-r border-gray-100 last:border-r-0 border-b xl:border-b-0 hover:bg-blue-50/40 transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
              {icon}
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] font-semibold text-gray-400 uppercase mb-0.5">
                {label}
              </p>
              <p className="text-sm font-bold text-gray-900 leading-tight">{value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
            </div>
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default About;
