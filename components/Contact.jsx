"use client";
import { motion } from "framer-motion";
import React from "react";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineChatAlt2 } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Contact = () => {
  return (
    <section
      id="contact"
      name="contact"
      className="py-20"
      aria-label="Contact Prakhar Mathur"
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
          GET IN TOUCH{" "}
          <span className="flex-1 max-w-[40px] h-px bg-blue-400 inline-block" />
        </p>
        <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-3">
          Let's Build Something Together
          <span className="text-blue-500">.</span>
        </h2>
        <p className="text-sm text-gray-500 max-w-lg">
          Open to SRE, DevOps, and AIOps opportunities. Whether it's a full-time role, freelance project,
          or just a tech conversation — reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left: contact info cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <a
            href="mailto:mathurprakhar1@gmail.com"
            className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
              <HiOutlineMail size={20} />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] font-semibold text-gray-400 uppercase mb-0.5">Email</p>
              <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                mathurprakhar1@gmail.com
              </p>
            </div>
          </a>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
              <HiOutlineLocationMarker size={20} />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] font-semibold text-gray-400 uppercase mb-0.5">Location</p>
              <p className="text-sm font-bold text-gray-900">India — Available Worldwide</p>
              <p className="text-xs text-gray-400 mt-0.5">Remote-first · Open to global opportunities</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
              <HiOutlineChatAlt2 size={20} />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] font-semibold text-gray-400 uppercase mb-0.5">Availability</p>
              <p className="text-sm font-bold text-gray-900">Open to opportunities</p>
              <p className="text-xs text-gray-400 mt-0.5">SRE · DevOps · AIOps roles</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://www.linkedin.com/in/mathurprakhar1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-blue-200 hover:text-blue-600 transition-all duration-150"
            >
              <FaLinkedin size={13} /> LinkedIn
            </a>
            <a
              href="https://github.com/prakhar-mathur4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-gray-800 hover:text-gray-900 transition-all duration-150"
            >
              <FaGithub size={13} /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true }}
          className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
        >
          <h3 className="text-sm font-bold text-gray-900 mb-6">Send a Message</h3>
          <form action="#" method="POST" className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 bg-gray-50 focus:outline-none focus:border-blue-300 focus:bg-white transition-all duration-150"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 bg-gray-50 focus:outline-none focus:border-blue-300 focus:bg-white transition-all duration-150"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-subject" className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 bg-gray-50 focus:outline-none focus:border-blue-300 focus:bg-white transition-all duration-150"
                placeholder="SRE opportunity / project collaboration"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gray-400">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 bg-gray-50 focus:outline-none focus:border-blue-300 focus:bg-white resize-none transition-all duration-150"
                placeholder="Tell me about the opportunity or project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white text-xs tracking-[0.15em] uppercase font-semibold py-4 rounded-xl hover:bg-gray-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
