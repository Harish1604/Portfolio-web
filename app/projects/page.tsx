"use client";

import { useEffect, useState } from "react";
import { Code, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TransitionWrapper from "@/app/transition-wrapper";

export default function ProjectsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const glowStyle = {
    background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 200, 0.4), transparent 40%)`,
  };

  return (
    <TransitionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white relative overflow-hidden"
      >
        {/* Mouse glow effect */}
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

        {/* 💡 Featured Projects Section */}
        <section
          id="projects"
          className="pt-32 pb-20 px-4 relative z-20 font-[Poppins]"
        >
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
              💡 Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Vendor-ERP Supply Chain Management System",
                  description:
                    "This system streamlines stock tracking, order management, and delivery operations — tailored for Manufacturer, Employees, and Retailers with a smart, role-based interface.",
                  techs: [
                    "Next.js",
                    "TypeScript",
                    "Django",
                    "PostgreSQL",
                    "Electron",
                    "MQTT",
                  ],
                  gradient: "from-blue-500 to-cyan-500",
                  github: "https://github.com/Harish1604/Vendor-frontend2",
                  demo: "https://vendor-frontend-production-be99.up.railway.app",
                },
                {
                  title: "Deduvault",
                  description:
                    "A Web3 Streamlit app for uploading images, detecting duplicates via Ethereum smart contracts, and storing them on IPFS. Features a visual preview across mock e-commerce platforms.",
                  techs: [
                    "Python",
                    "Streamlit",
                    "IPFS",
                    "SHA-256",
                    "Solidity",
                    "web3.py",
                  ],
                  gradient: "from-cyan-500 to-blue-500",
                  github: "https://github.com/Harish1604/DeduVault",
                  demo: "",
                },
                {
                  title: "Fake News Predictor",
                  description:
                    "A machine learning tool that detects fake news using NLP and text classification.",
                  techs: [
                    "Python",
                    "Scikit-learn",
                    "Pandas",
                    "NLP",
                    "TfidfVectorizer",
                  ],
                  gradient: "from-teal-500 to-cyan-500",
                  github: "",
                  demo: "",
                },
              ].map((project, index) => (
                <Card
                  key={project.title}
                  className="bg-gray-900/60 backdrop-blur-md border border-blue-500/20 shadow-xl hover:shadow-blue-500/40 transition-all duration-500 hover:scale-[1.03] group rounded-2xl overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`aspect-video bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-100 transition-all duration-500 relative`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Code className="w-10 h-10 text-white animate-pulse" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="px-6 pt-6">
                    <CardTitle className="text-blue-300 text-xl font-bold group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400 mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techs.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-blue-500/20 text-blue-300 border border-blue-400/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* ✅ Fixed Button Section */}
                    <div className="flex space-x-3">
                      {project.github && (
                        <Button
                          asChild
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white hover:shadow-[0_0_15px_rgba(0,0,139,0.5)] transition-all duration-300 hover:scale-105"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}

                      {project.demo && (
                        <Button
                          asChild
                          variant="outline"
                          className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </TransitionWrapper>
  );
}
