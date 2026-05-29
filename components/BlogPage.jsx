"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiOutlineClock, HiOutlineExternalLink, HiOutlineSearch } from "react-icons/hi";
import { FaMedium } from "react-icons/fa";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const BlogPage = ({ posts = [] }) => {
  const [search, setSearch] = useState("");

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="bg-slate-50 min-h-screen text-gray-900">
      {/* Top nav strip */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-slate-50/95 backdrop-blur-sm">
        <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-10 md:px-20 2xl:px-28 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs tracking-[0.15em] uppercase text-gray-400 hover:text-gray-900 transition-colors font-medium flex items-center gap-2"
          >
            ← Back to Portfolio
          </Link>
          <a
            href="https://medium.com/@mathurprakhar1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors"
          >
            <FaMedium size={14} /> Follow on Medium
          </a>
        </div>
      </div>

      <main className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-10 md:px-20 2xl:px-28 pt-28 pb-28">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <p className="text-xs tracking-[0.3em] font-semibold text-blue-500 mb-5 flex items-center gap-3">
            WRITING{" "}
            <span className="flex-1 max-w-[40px] h-px bg-blue-400 inline-block" />
          </p>
          <h1 className="text-3xl xl:text-4xl font-bold text-gray-900 leading-tight mb-3">
            SRE, DevOps & AIOps Articles
            <span className="text-blue-500">.</span>
          </h1>
          <p className="text-sm text-gray-500 max-w-lg mb-8">
            Practical writing on Kubernetes, observability, cloud-native systems, and AIOps —
            from real production experience.
          </p>

          {/* Search */}
          <div className="relative max-w-sm">
            <HiOutlineSearch size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles or tags..."
              className="w-full pl-9 pr-4 py-3 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-blue-300 transition-colors placeholder-gray-300"
            />
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="grid grid-cols-2 xl:grid-cols-4 border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden mb-10"
        >
          {[
            { value: `${posts.length}`, label: "Articles", sub: "Published on Medium" },
            { value: "SRE", label: "Core Topic", sub: "Kubernetes · AIOps · Cloud" },
            { value: "3-4", label: "Min Read", sub: "Concise & practical" },
            { value: "Weekly", label: "Cadence", sub: "Consistent publishing" },
          ].map(({ value, label, sub }, i) => (
            <div key={i} className="flex flex-col p-6 border-r border-gray-100 last:border-r-0 border-b xl:border-b-0 hover:bg-blue-50/40 transition-colors duration-200">
              <p className="text-xl font-bold text-blue-500 mb-0.5">{value}</p>
              <p className="text-xs font-semibold text-gray-700 tracking-wide">{label}</p>
              <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Posts grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">
            No articles found for "{search}"
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((post, i) => (
              <motion.article
                key={post.link}
                custom={i * 0.08}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200 flex flex-col"
              >
                {/* Tags */}
                {post.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag) => (
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
                <h2 className="text-sm font-bold text-gray-900 leading-snug mb-4 flex-1">
                  {post.title}
                </h2>

                {/* Meta + link */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[11px] text-gray-400">
                      <HiOutlineClock size={11} /> {post.readTime} min
                    </span>
                    <span className="text-[11px] text-gray-400">{post.date}</span>
                  </div>
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
        )}
      </main>
    </div>
  );
};

export default BlogPage;
