import React from "react";
import Hexagon from "../assets/hexagon_technology_sdn_bhd_logo.jpeg";
import logodecurtis from "../assets/logo-decurtis-corporation.png";
import iqmlogo from "../assets/iqmlogo.png";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-8 text-white pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </h2>
        </div>

        {/* Experience Card Component */}
        {[{
          company: "IQM Corporation",
          role: "Site Reliability Engineer",
          duration: "06/2025 - Present",
          logo: iqmlogo,
          responsibilities: [
            "Leveraging DataDog and Grafana to implement advanced monitoring strategies. Focusing on anomaly detection and behavioral analysis to identify performance deviations in real-time, laying the groundwork for AI/ML workload observability.",
            "Assisting Platform team in capacity planning and performance optimization to ensure efficiently scaled resources for data-intensive processing.",
            "Engineered AI-ready observability pipelines using DataDog and Grafana to distinguish between infrastructure noise and application anomalies, enabling real-time latency tracking for high-frequency algorithmic bidding engines.",
            "Defined, monitored, and improved SLOs, SLIs, and SLAs to ensure alignment with business goals.",
            "Collaborated with cross-functional Data and AdOps teams to define Service Level Objectives (SLOs), ensuring the reliability of the platform and automated bidding system.",
          ],
        },
        {
          company: "Lakshya Consultancy Inc",
          role: "Site Reliability Engineer",
          duration: "01/2024 - 05/2025",
          logo: Hexagon,
          responsibilities: [
            "Monitored and troubleshot applications and Kubernetes services using tools like Robusta, Argo CD, Lens, Graylog, and Kibana.",
            "Automated alerting for critical Kubernetes events using Prometheus and Alertmanager, reducing response time by 60%.",
            "Developed comprehensive dashboards and alerts in Grafana and New Relic to improve monitoring efficiency.",
            "Defined, monitored, and improved SLOs, SLIs, and SLAs to ensure alignment with business goals.",
            "Configured Prometheus alerts for Kubernetes workloads, monitoring pod crashes, deployment failures, resource exhaustion, and cluster health to enhance proactive incident management.",
          ],
        },
        {
          company: "Decurtis Corporation",
          role: "Associate Site Reliability Engineer",
          duration: "02/2023 - 12/2023",
          logo: logodecurtis,
          responsibilities: [
            "Provided Level 1 & Level 2 production support using Chrome DevTools, SQL Queries, ELK Logs, Postman, Kafka, Kubernetes, and more.",
            "Developed an interactive SRE Tech Radar using ReactJS & TailwindCSS.",
            "Ensured data accuracy and consistency for PostgreSQL databases as a Data Quality Analyst.",
            "Developed Python automation to simplify microservice operations and monitoring.",
          ],
        },
        ].map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start mb-12 bg-gray-900/40 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-800/50"
          >
            <div className="md:w-1/3 flex flex-col items-center">
              <div className={`p-2 rounded-lg mb-4 flex items-center justify-center h-24 ${exp.company === 'Decurtis Corporation' ? 'bg-gray-100' : ''}`}>
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="max-h-full max-w-full object-contain"
                  style={{ width: "160px" }}
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-center">
                {exp.company}
              </h3>
              <p className="text-base md:text-lg text-center font-medium text-gray-200">{exp.role}</p>
              <p className="text-sm md:text-base text-gray-400 text-center mt-2">
                {exp.duration}
              </p>
            </div>
            <div className="md:w-2/3 mt-6 md:mt-0 md:pl-10">
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-[#0061ff]">
                Roles & Responsibilities
              </h4>
              <ul className="text-sm md:text-base space-y-3 list-disc pl-5">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="text-gray-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
