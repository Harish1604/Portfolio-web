"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionWrapper from "@/app/transition-wrapper";

export default function BlogPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const glowStyle = {
    background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 200, 255, 0.3), transparent 40%)`,
  };

  return (
    <TransitionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 19, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white relative overflow-hidden"
      >
        {/* Glow effect */}
        <div
          className="fixed inset-0 pointer-events-none z-10 transition-all duration-300"
          style={glowStyle}
        />

        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-[#0f172a]/90 to-gray-900 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_8px_32px_0_rgba(0,200,255,0.25)] animate-fade-slide-down">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
                <span className="text-cyan-300 animate-flicker">⚡</span>{" "}
                Harish_x64
              </h1>
              <div className="hidden md:flex space-x-10 text-lg font-semibold tracking-wide">
                {[
                  { label: "Home", href: "/" },
                  { label: "Projects", href: "/projects" },
                  { label: "Blog", href: "/blog" },
                ].map(({ label, href }, i) => (
                  <Link
                    key={label}
                    href={href}
                    className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 transform group hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.7)]"
                    style={{ animationDelay: `${i * 120}ms` }}
                  >
                    {label}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-500"></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Blog Section */}
        <section className="pt-32 px-6 pb-20 relative z-20 font-[Poppins]">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-10 animate-fade-in-up">
              ✍️ Tech Blog
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
              Where I log my dev adventures, systems I’ve built, and things I’ve
              broken (on purpose).
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "🧠 DeduVault: Blockchain-Powered Cloud Deduplication",
                  summary:
                    "Decentralized file storage using IPFS, smart contracts, and Python. Say goodbye to duplicates forever.",
                  link: "https://github.com/Harish1604/Blogs/blob/main/deduvault.md",
                },
                {
                  title:
                    "🏭 SmartChainERP: Real-Time ERP using Sony IMX + MQTT",
                  summary:
                    "How we built an AI-powered warehouse management system with Raspberry Pi, anomaly detection, and Electron.",
                  link: "https://github.com/Harish1604/Blogs/blob/main/Sony-Aitrios_Hackathon_Final.md",
                },
                {
                  title: "☁️ Cloud vs Edge vs Chain: A Rant on Modern Infra",
                  summary:
                    "Exploring decentralization, edge computing, and when cloud infra starts to feel like a trap.",
                  link: "https://github.com/Harish1604/Blogs/blob/main/cloud.md",
                },
              ].map((blog, i) => (
                <a
                  key={i}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-500/20 p-6 rounded-xl bg-gray-800/30 backdrop-blur-md hover:bg-gray-700/30 transition-all duration-300 hover:scale-105 text-left block"
                >
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400">{blog.summary}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </TransitionWrapper>
  );
}
