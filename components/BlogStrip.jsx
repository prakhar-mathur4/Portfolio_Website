"use client";
import { motion } from "framer-motion";
import React from "react";
import { HiOutlineClock, HiOutlineExternalLink, HiOutlineArrowRight } from "react-icons/hi";
import { FaMedium } from "react-icons/fa";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const BlogStrip = ({ posts = [] }) => {
  const latest = posts.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section
      id="blog"
      name="blog"
      className="py-20 border-b border-gray-100"
      aria-label="Latest Writing"
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-end justify-between gap-4 mb-10 flex-wrap"
      >
        <div>
          <p className="text-xs tracking-[0.3em] font-semibold text-blue-500 mb-5 flex items-center gap-3">
            LATEST WRITING{" "}
            <span className="flex-1 max-w-[40px] h-px bg-blue-400 inline-block" />
          </p>
          <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
            From the Blog
            <span className="text-blue-500">.</span>
          </h2>
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-blue-200 hover:text-blue-600 transition-all duration-150 shrink-0"
        >
          View all articles <HiOutlineArrowRight size={12} />
        </Link>
      </motion.div>

      {/* 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {latest.map((post, i) => (
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

            <h3 className="text-sm font-bold text-gray-900 leading-snug flex-1 mb-4">
              {post.title}
            </h3>

            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="flex items-center gap-1 text-[11px] text-gray-400">
                <HiOutlineClock size={11} /> {post.readTime} min · {post.date}
              </span>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Read <HiOutlineExternalLink size={12} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogStrip;
