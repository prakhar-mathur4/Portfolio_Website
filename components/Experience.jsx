"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const experiences = [
  {
    company: "IQM Corporation",
    role: "Site Reliability Engineer",
    duration: "Jun 2025 — Present",
    location: "Remote",
    type: "Full-time",
    current: true,
    tags: ["DataDog", "Grafana", "AIOps", "SLO/SLI", "Kubernetes"],
    summary: "Building AI-ready observability infrastructure for high-frequency algorithmic bidding engines.",
    highlights: [
      "Engineered AI-ready observability pipelines via DataDog & Grafana for real-time latency tracking",
      "Implemented anomaly detection & behavioral analysis for performance deviation monitoring",
      "Defined and monitored SLOs, SLIs, and SLAs in collaboration with Data and AdOps teams",
      "Led capacity planning and performance optimization for data-intensive workloads",
    ],
  },
  {
    company: "Lakshya Consultancy Inc",
    role: "Site Reliability Engineer",
    duration: "Jan 2024 — May 2025",
    location: "On-site",
    type: "Full-time",
    current: false,
    tags: ["Kubernetes", "Prometheus", "Grafana", "ArgoCD", "New Relic"],
    summary: "Owned Kubernetes observability, alerting automation, and incident response for production workloads.",
    highlights: [
      "Automated Kubernetes alerting with Prometheus & Alertmanager — reduced response time by 60%",
      "Built comprehensive dashboards & alerts in Grafana and New Relic for full-stack monitoring",
      "Troubleshot Kubernetes services using Robusta, Argo CD, Lens, Graylog, and Kibana",
      "Monitored pod crashes, deployment failures, resource exhaustion, and cluster health",
    ],
  },
  {
    company: "Decurtis Corporation",
    role: "Associate Site Reliability Engineer",
    duration: "Feb 2023 — Dec 2023",
    location: "On-site",
    type: "Full-time",
    current: false,
    tags: ["ELK", "Kafka", "Kubernetes", "PostgreSQL", "Python"],
    summary: "Provided L1 & L2 production support and built internal tooling for SRE operations.",
    highlights: [
      "Delivered L1 & L2 production support using ELK, Postman, Kafka, Kubernetes, and Chrome DevTools",
      "Built interactive SRE Tech Radar using ReactJS & TailwindCSS",
      "Enforced PostgreSQL data quality, accuracy, and consistency as Data Quality Analyst",
      "Developed Python automation scripts to simplify microservice operations and monitoring",
    ],
  },
];

const Experience = () => {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="experience"
      name="experience"
      className="py-20 border-b border-gray-100"
      aria-label="Work Experience"
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-xs tracking-[0.3em] font-semibold text-blue-500 mb-5 flex items-center gap-3">
          WORK EXPERIENCE{" "}
          <span className="flex-1 max-w-[40px] h-px bg-blue-400 inline-block" />
        </p>
        <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-3">
          Site Reliability Engineer — Career Timeline
          <span className="text-blue-500">.</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-lg">
          3+ years building and operating production-grade cloud infrastructure,
          Kubernetes platforms, and observability systems.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => (
          <motion.article
            key={i}
            custom={i * 0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-200 ${
              open === i ? "border-blue-200 shadow-md" : "border-gray-100 hover:border-blue-100 hover:shadow-md"
            }`}
          >
            {/* Card header — always visible */}
            <button
              className="w-full text-left p-6 flex items-start justify-between gap-4 group"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <div className="flex items-start gap-4 flex-1 min-w-0">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                  exp.current ? "bg-blue-500 text-white" : "bg-blue-50 text-blue-500"
                }`}>
                  <HiOutlineBriefcase size={18} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-base font-bold text-gray-900">{exp.company}</h3>
                    {exp.current && (
                      <span className="text-[10px] font-semibold tracking-wider bg-blue-50 text-blue-600 border border-blue-200 px-2 py-0.5 rounded-full">
                        CURRENT
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-blue-600 font-medium mb-2">{exp.role}</p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <HiOutlineCalendar size={12} /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <HiOutlineLocationMarker size={12} /> {exp.location}
                    </span>
                  </div>

                  {/* Tags */}
                  <ul className="flex flex-wrap gap-1.5 mt-3 list-none">
                    {exp.tags.map((tag) => (
                      <li key={tag}>
                        <span className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Toggle */}
              <div className="shrink-0 mt-1 text-gray-400 group-hover:text-blue-500 transition-colors">
                {open === i ? <HiOutlineChevronUp size={18} /> : <HiOutlineChevronDown size={18} />}
              </div>
            </button>

            {/* Expanded content */}
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                    <p className="text-sm text-gray-600 leading-relaxed mt-4 mb-4 font-medium">
                      {exp.summary}
                    </p>
                    <ul className="space-y-3 list-none">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                          <HiOutlineCheckCircle size={16} className="text-blue-400 shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>

      {/* Bottom strip */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-8 grid grid-cols-2 xl:grid-cols-4 border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden"
      >
        {[
          { value: "3+", label: "Years Experience", sub: "SRE / DevOps Engineering" },
          { value: "3", label: "Companies", sub: "Production environments" },
          { value: "60%", label: "Faster Alerting", sub: "Reduced incident response time" },
          { value: "24/7", label: "Reliability Focus", sub: "Always-on production systems" },
        ].map(({ value, label, sub }, i) => (
          <div
            key={i}
            className="flex flex-col p-6 border-r border-gray-100 last:border-r-0 border-b xl:border-b-0 hover:bg-blue-50/40 transition-colors duration-200"
          >
            <p className="text-xl font-bold text-blue-500 mb-0.5">{value}</p>
            <p className="text-xs font-semibold text-gray-700 tracking-wide">{label}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default Experience;
