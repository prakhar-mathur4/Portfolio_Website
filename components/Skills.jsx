"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  HiOutlineServer,
  HiOutlineDesktopComputer,
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineSparkles,
  HiOutlineCog,
} from "react-icons/hi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const categories = [
  {
    icon: <HiOutlineServer size={22} />,
    label: "Infrastructure & Cloud",
    desc: "Cloud platforms, container orchestration, and infrastructure automation at scale.",
    skills: ["Linux", "AWS", "Azure", "Docker", "Kubernetes", "Terraform", "ArgoCD"],
    accent: "blue",
  },
  {
    icon: <HiOutlineDesktopComputer size={22} />,
    label: "Observability",
    desc: "Monitoring, logging, alerting, and full-stack observability for production systems.",
    skills: ["Prometheus", "Grafana", "New Relic", "Elasticsearch", "Kibana", "Robusta", "DataDog"],
    accent: "blue",
  },
  {
    icon: <HiOutlineCode size={22} />,
    label: "Languages & Dev",
    desc: "Programming languages and frontend technologies for tooling and automation.",
    skills: ["Python", "C++", "JavaScript", "ReactJS", "TailwindCSS", "HTML", "CSS"],
    accent: "blue",
  },
  {
    icon: <HiOutlineDatabase size={22} />,
    label: "Data & ML",
    desc: "Data engineering, machine learning frameworks, and database management.",
    skills: ["Tensorflow", "Keras", "Scikit-Learn", "Power BI", "PostgreSQL", "MySQL", "Kafka"],
    accent: "blue",
  },
  {
    icon: <HiOutlineSparkles size={22} />,
    label: "AIOps & Automation",
    desc: "AI-powered operations, intelligent alerting, and workflow automation.",
    skills: ["AIOps", "MLOps", "Ansible", "GitHub Actions", "CI/CD", "Bash"],
    accent: "blue",
  },
  {
    icon: <HiOutlineCog size={22} />,
    label: "Tools & Platforms",
    desc: "Developer tools, project management, and collaboration platforms.",
    skills: ["GitHub", "Jira", "Postman", "Lens", "Graylog", "Argo CD"],
    accent: "blue",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      name="skills"
      className="py-20 border-b border-gray-100"
      aria-label="Skills and Tech Stack"
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
          SKILLS & EXPERTISE{" "}
          <span className="flex-1 max-w-[40px] h-px bg-blue-400 inline-block" />
        </p>
        <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-3">
          SRE & DevOps Tech Stack — Kubernetes, AWS, Terraform & More
          <span className="text-blue-500">.</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-lg">
          A production-grade stack built around Site Reliability Engineering, cloud-native infrastructure,
          observability, automation, and AIOps.
        </p>
      </motion.div>

      {/* Category cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {categories.map(({ icon, label, desc, skills }, i) => (
          <motion.div
            key={label}
            custom={i * 0.08}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200 flex flex-col"
          >
            {/* Icon + title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0" aria-hidden="true">
                {icon}
              </div>
              <h3 className="text-sm font-bold text-gray-900">{label}</h3>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500 leading-relaxed mb-5">{desc}</p>

            {/* Skill list */}
            <ul
              className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 list-none"
              aria-label={`${label} skills`}
            >
              {skills.map((skill) => (
                <li key={skill}>
                  <span className="text-[11px] font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-lg hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors duration-150 cursor-default block">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
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
          { value: "30+", label: "Technologies", sub: "Across cloud, infra & dev" },
          { value: "6", label: "Core Categories", sub: "Infra, Obs, Dev, Data, AI, Tools" },
          { value: "3+", label: "Years Hands-on", sub: "Production-grade experience" },
          { value: "Always", label: "Learning", sub: "AIOps, MLOps & cloud-native" },
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

export default Skills;
