/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Star,
  Globe,
  Award,
  GraduationCap,
  Server,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white relative overflow-hidden">
      {/* Mouse glow effect */}
      <div
        className="fixed inset-0 pointer-events-none z-10 transition-all duration-300"
        style={glowStyle}
      />
      {/* 🔥 Hyper-Stylized Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-[#0f172a]/90 to-gray-900 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_8px_32px_0_rgba(0,200,255,0.25)] animate-fade-slide-down">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Subtle Animated Logo */}
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
              <span className="text-cyan-300 animate-flicker">⚡</span>{" "}
              Harish_x64
            </h1>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-10 text-lg font-semibold tracking-wide">
              {[
                { label: "About", href: "/#about" },
                { label: "Qualifications", href: "/#qualifications" },
                { label: "Skills", href: "/#skills" },
                { label: "Certifications", href: "/#certifications" },
                { label: "Projects", href: "/projects" }, // 🔗 separate page
                { label: "Blog", href: "/blog" }, // ✅ ADDED THIS
                { label: "Contact", href: "/#contact" },
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-20 scroll-mt-32">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative mb-8">
              <div className="w-40 h-40 mx-auto mb-8 animate-bounce rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg">
                <Image
                  src="/1.jpg" // <-- replace with your image path
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Hi, {"I'm "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent ">
                Harish J
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mt-4 text-center max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              ⚡ Full-Stack Developer & ML Trainee {"| "}
              <span className="text-blue-400 font-semibold">budding</span>{" "}
              Software Engineer <br />
              ☁️ Passionate about{" "}
              <span className="text-cyan-400 font-semibold">
                Cloud Computing
              </span>{" "}
              &{" "}
              <span className="text-purple-400 font-semibold">Blockchain</span>{" "}
              Technologies
            </p>

            <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-600 mt-10">
              <Button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,139,0.5)] animate-pulse"
                onClick={() => window.open("/resume_harish.pdf", "_blank")}
              >
                <Star className="w-5 h-5 mr-2 " />
                Download My Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* 🚀 About and 🎓 Qualifications Section */}
      <section className="py-20 px-4 relative z-20 font-[Poppins] scroll-mt-32">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* 🔍 About Section */}
            <div id="about" className="flex-1">
              <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
                🧑‍💻 About Me
              </h2>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:scale-[1.03] animate-fade-in-up">
                <p className="text-[1.1rem] text-slate-300 mb-6 leading-relaxed tracking-wide">
                  Hey there! 👋 I'm a{" "}
                  <span className="text-blue-300 font-semibold">
                    budding full-stack developer
                  </span>{" "}
                  💻 who loves building clean, scalable, and user-friendly
                  applications 🚀. With skills in both{" "}
                  <span className="text-purple-300 font-medium">front-end</span>{" "}
                  🎨 and{" "}
                  <span className="text-green-300 font-medium">back-end</span>{" "}
                  🧠 tech, I create powerful web solutions tailored to
                  real-world needs.
                </p>
                <p className="text-[1.1rem] text-slate-300 mb-6 leading-relaxed tracking-wide">
                  I'm always exploring new frameworks and tech 🧪 — currently
                  vibing with{" "}
                  <span className="text-yellow-300 font-medium">
                    cloud computing ☁️
                  </span>{" "}
                  and diving deep into{" "}
                  <span className="text-pink-400 font-medium">
                    blockchain 🔗
                  </span>{" "}
                  for decentralized applications.
                </p>
                <p className="text-[1.1rem] text-slate-300 leading-relaxed tracking-wide">
                  Big fan of AI 🤖 and solving logic puzzles 🧩. I believe tech
                  should be smart *and* simple. Let's build cool stuff and break
                  the internet (the good way) 💥.
                </p>
              </div>
            </div>

            {/* 📚 Qualifications Section */}
            <div id="qualifications" className="flex-1">
              <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
                🎓 Qualifications
              </h2>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:scale-[1.03] animate-fade-in-up">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-10 h-10 mr-4 text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">
                    Education
                  </h3>
                </div>
                <p className="text-[1.1rem] text-slate-300 mb-4 leading-relaxed tracking-wide">
                  🎓 Pursuing a{" "}
                  <span className="text-blue-300 font-medium">
                    B.Tech in Computer Science and Engineering
                  </span>{" "}
                  at Amrita Vishwa Vidyapeetham, Coimbatore. Gaining strong
                  fundamentals in CS theory, data structures, software
                  engineering, and practical tech stacks 🧠💡.
                </p>
                <p className="text-[1.1rem] text-slate-300 leading-relaxed tracking-wide">
                  Beyond the books 📖, I'm active in student clubs, hackathons,
                  and tech communities. Leadership, teamwork, and the thrill of
                  solving real problems — that’s where I thrive 💪🎯.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 🛠️ Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 relative z-20 font-[Poppins] scroll-mt-32"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
            ⚙️ Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: Code,
                title: "Frontend 💻",
                skills: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Vue.js",
                ],
              },
              {
                icon: Globe,
                title: "Backend 🧠",
                skills: [
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "GraphQL",
                ],
              },
              {
                icon: Code,
                title: "Programming 🧩",
                skills: [
                  "Python",
                  "Java",
                  "C++",
                  "C",
                  "JavaScript",
                  "TypeScript",
                  "Haskell",
                ],
              },
              {
                icon: Server,
                title: "Cloud & Blockchain ☁️🔗",
                skills: [
                  "AWS",
                  "IPFS",
                  "Pinata",
                  "Web3.py",
                  "Remix IDE",
                  "Solidity",
                  "Polygon",
                  "Smart Contracts",
                ],
              },
            ].map((category, index) => (
              <Card
                key={category.title}
                className="bg-gray-900/60 backdrop-blur-xl border border-blue-500/20 shadow-md hover:shadow-blue-500/40 transition-all duration-500 hover:scale-[1.03] rounded-2xl animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center mb-2">
                  <category.icon className="w-12 h-12 mx-auto mb-3 text-blue-400 group-hover:animate-bounce transition-all duration-300" />
                  <CardTitle className="text-xl font-semibold text-blue-300 tracking-wide">
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="px-3 py-1 text-sm font-medium text-blue-300 border border-blue-400/30 hover:bg-blue-500/10 hover:scale-105 transition-all duration-300 rounded-xl backdrop-blur-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* 🏅 Certifications & Achievements */}
      <section
        id="certifications"
        className="py-20 px-4 relative z-20 font-[Poppins] scroll-mt-32"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
            🧾 Certifications & 🏆 Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Certifications */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105 animate-fade-in-up">
              <div className="flex items-center mb-4">
                <Award className="w-10 h-10 mr-4 text-blue-400" />
                <h3 className="text-2xl font-bold text-blue-400">
                  Certifications
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-4 text-lg text-gray-300 leading-relaxed">
                <li>💻 MERN Stack Training</li>
                <li>🧪 Postman API Fundamentals - Student Expert</li>
                <li>☁️ AWS Cloud Practitioner - [CIR Amrita]</li>
                <li>🤖 Machine Learning Crash Course - Google Developers</li>
              </ul>
            </div>

            {/* Achievements */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-500 hover:scale-105 animate-fade-in-up">
              <div className="flex items-center mb-4">
                <Trophy className="w-10 h-10 mr-4 text-yellow-400" />
                <h3 className="text-2xl font-bold text-yellow-400">
                  Achievements
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-4 text-lg text-gray-300 leading-relaxed">
                <li>
                  🏅{" "}
                  <span className="text-yellow-300 font-semibold">
                    Finalist
                  </span>{" "}
                  — Sony <strong>AITRIOS Hackathon 2025</strong> (Top 15 from
                  India 🇮🇳)
                </li>
                <li>🚀 Built a cross-cloud blockchain deduplication project</li>
                <li>🎓 Active contributor in technical clubs & hackathons</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 📬 Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 relative z-20 font-[Poppins] scroll-mt-32"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
            📬 Get In Touch
          </h2>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-900/60 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-10 shadow-xl hover:shadow-blue-500/40 transition-all duration-500 hover:scale-[1.02]">
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                🚀 I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just wanna say hey —
                hit me up!
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(0,139,139,0.5)] transition-all duration-300"
                  onClick={() =>
                    (window.location.href = "mailto:harish16042005@gmail.com")
                  }
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>

                <a
                  href="https://www.linkedin.com/in/harish16042005"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-6 py-3 rounded-full hover:scale-105 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </a>

                <a
                  href="https://github.com/Harish1604"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-3 rounded-full hover:scale-105 transition-all duration-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 🌐 Footer */}
      <footer className="py-12 px-4 border-t border-blue-500/30 bg-gray-900/60 backdrop-blur-md relative z-20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-lg tracking-wide">
            © 2024 <span className="text-blue-400 font-semibold">Harish J</span>{" "}
            — Built with{" "}
            <span className="text-blue-400 font-semibold">Next.js</span> +{" "}
            <span className="text-cyan-400 font-semibold">Tailwind CSS</span> •
            Powered by ⚡ and lots of ☕
          </p>
        </div>
      </footer>
      <style jsx>{`
        @keyframes fadeSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-slide-down {
          animation: fadeSlideDown 0.7s ease-out forwards;
        }

        .animate-glow {
          animation: pulse 2s;
        }

        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-flicker {
          animation: flicker 3s infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
          }
          50% {
            text-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff;
          }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
