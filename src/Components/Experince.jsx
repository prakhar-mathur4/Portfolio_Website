import React from "react";
import Hexagon from "../assets/hexagon_technology_sdn_bhd_logo.jpeg";
import logodecurtis from "../assets/logo-decurtis-corporation.png";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-screen min-h-screen bg-gradient-to-b from-black to-gray-800 p-8 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        {/* Experience Card Component */}
        {[
          {
            company: "Hexagon Technology Sdn. Bdh.",
            role: "Site Reliability Engineer",
            duration: "01/2024 - Present",
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
            className="flex flex-col md:flex-row items-center md:items-start mb-12"
          >
            <div className="md:w-1/3 flex flex-col items-center">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-40 md:w-48 object-contain mb-4"
              />
              <h1 className="text-lg md:text-xl font-bold text-center">
                {exp.company}
              </h1>
              <h2 className="text-md md:text-lg text-center">{exp.role}</h2>
              <p className="text-sm md:text-base text-gray-300 text-center mt-2">
                {exp.duration}
              </p>
            </div>
            <div className="md:w-2/3 mt-6 md:mt-0 md:pl-6">
              <h1 className="text-lg md:text-xl font-semibold mb-2">
                Roles & Responsibilities
              </h1>
              <ul className="text-sm md:text-base space-y-2">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx} className="list-disc list-inside">
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
