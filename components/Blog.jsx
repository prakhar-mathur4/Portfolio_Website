"use client";
import { motion } from "framer-motion";
import React from "react";
import { HiOutlineExternalLink, HiOutlineClock, HiOutlineTag } from "react-icons/hi";
import { FaMedium } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Blog = ({ posts = [] }) => {
  return (
    <section
      id="blog"
      name="blog"
      className="py-20 border-b border-gray-100"
      aria-label="Blog and Writing"
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
          WRITING{" "}
          <span className="flex-1 max-w-[40px] h-px bg-blue-400 inline-block" />
        </p>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-3">
              SRE, DevOps & AIOps Articles
              <span className="text-blue-500">.</span>
            </h2>
            <p className="text-sm text-gray-500 max-w-lg">
              Writing about Kubernetes, observability, cloud-native systems, and AIOps on Medium.
              Practical insights from production experience.
            </p>
          </div>
          <a
            href="https://medium.com/@mathurprakhar1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-gray-900 hover:text-gray-900 transition-all duration-150 shrink-0"
          >
            <FaMedium size={14} /> View all on Medium
          </a>
        </div>
      </motion.div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {posts.map((post, i) => (
          <motion.article
            key={post.link}
            custom={i * 0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200 flex flex-col"
          >
            {/* Tags */}
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="text-sm font-bold text-gray-900 leading-snug mb-3 flex-1">
              {post.title}
            </h3>

            {/* Meta */}
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
              <span className="flex items-center gap-1 text-[11px] text-gray-400">
                <HiOutlineClock size={12} /> {post.readTime} min read
              </span>
              <span className="text-[11px] text-gray-400">{post.date}</span>
            </div>

            {/* Link */}
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-150 mt-3"
            >
              <HiOutlineExternalLink size={13} /> Read on Medium
            </a>
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
          { value: `${posts.length}+`, label: "Articles", sub: "Published on Medium" },
          { value: "SRE", label: "Core Topic", sub: "Kubernetes, AIOps, Cloud" },
          { value: "3-4", label: "Min Read", sub: "Concise & practical" },
          { value: "Medium", label: "Platform", sub: "High-authority domain" },
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

export default Blog;
