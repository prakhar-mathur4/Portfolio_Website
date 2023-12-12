import React from "react";
import logodecurtis from "../assets/logo-decurtis-corporation.png";

const Experience = () => {
  return (
    <div
      name="experience"
      className="pt-[50rem] md:pt-36 w-screen min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 md:pr-6">
            <figure className="mx-auto md:mx-0 w-40 md:w-64 m-4 md:m-0">
              <img src={logodecurtis} alt="Decurtis" className="pb-5" />
              <h1 className="text-lg md:text-xl text-center">Associate</h1>
              <h1 className="text-lg md:text-xl text-center">
                Site Reliability Engineer
              </h1>
              <figcaption className="pt-4 text-center text-sm md:text-base">
                02/2023 - 12/2023
              </figcaption>
            </figure>
          </div>
          <div className="pt-6 md:pt-0 md:w-2/3">
            <h1 className="text-lg md:text-xl font-semibold mb-2">
              Roles & Responsibilities
            </h1>
            <ul className="text-sm md:text-base">
              <li className="mb-2">
                1. Production support that involves two levels of debugging:
                <br />
                - Level 1 debugging with external tools like Chrome developer
                tools, SQL Queries, Charles logs, ELK Logs, Postman, Kafka,
                Kubernetes, Prometheus, Grafana, Instana etc.
                <br />- Level 2 debugging by reading code for DXP Platform stack
                that involves: React, ReactNative, Node.js, JAVA, PostgreSQL,
                Couchbase
              </li>
              <li className="mb-2">
                2. Development role to build small utilities and monitoring
                framework for proactive production monitoring. This involves
                development on the following stack: Python, PostgreSQL, Jenkins,
                Docker.
              </li>
              <li className="mb-2">
                3. Daily trouble ticket resolution, client interaction and
                customer support via email and calls.
              </li>
              <li className="mb-2">
                4. Troubleshooting the production issue to the level where I
                pinpoint the exact component/module that is creating problems in
                production.
              </li>
              <li className="mb-2">
                5. Develop automation and solutions to simplify the operation
                and monitoring of the service.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
