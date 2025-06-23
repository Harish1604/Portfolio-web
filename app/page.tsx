"use client";
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Zap,
  Star,
  Globe,
  Palette,
  BookOpen,
  Award,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e:any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const glowStyle = {
    background: `radial-gradient(1500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 139, 0.4), transparent 40%)`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white relative overflow-hidden">
      {/* Mouse glow effect */}
      <div
        className="fixed inset-0 pointer-events-none z-10 transition-all duration-300"
        style={glowStyle}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-blue-500/30 z-50 shadow-lg shadow-blue-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Portfolio
            </h1>
            <div className="hidden md:flex space-x-8">
              {[
                "About",
                "Qualifications",
                "Skills",
                "Certifications",
                "Projects",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,0,139,0.8)] relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-20">
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
                <img
                  src="/1.jpg" // <-- replace with your image path
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent animate-pulse">
                Harish J
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              ⚡ Full-Stack Developer & ML trainee{" "}
              <span className="text-blue-400 font-semibold">budding</span>{" "}
              Software Engineer
            </p>

            <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-600">
              <Button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,139,0.5)] animate-pulse"
                onClick={() => window.open("/resume (1).pdf", "_blank")}
              >
                <Star className="w-5 h-5 mr-2" />
                Download My Resume
              </Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* About and Qualifications Section */}
      <section className="py-20 px-4 relative z-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* About Section */}
            <div id="about" className="flex-1">
              <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
                About Me
              </h2>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105 animate-fade-in-up">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I'm a budding full-stack developer with a strong foundation in
                  web development. My journey in the tech world has been driven
                  by a passion for creating efficient, scalable, and
                  user-friendly web applications. I have a solid understanding
                  of both front-end and back-end technologies, which allows me
                  to build comprehensive solutions that cater to diverse
                  business needs.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  As a tech enthusiast, I am always eager to learn and adapt to
                  new technologies and frameworks. I enjoy tackling complex
                  problems and turning them into simple, effective solutions. My
                  interests span across various domains, including artificial
                  intelligence, cloud computing, and cybersecurity.
                </p>
              </div>
            </div>

            {/* Qualifications Section */}
            <div id="qualifications" className="flex-1">
              <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
                Qualifications
              </h2>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105 animate-fade-in-up">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-10 h-10 mr-4 text-blue-400" />
                  <h3 className="text-2xl font-bold text-blue-400">
                    Education
                  </h3>
                </div>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  I am currently pursuing a Bachelor of Technology (B.Tech) in
                  Computer Science and Engineering at Amrita Vishwa
                  Vidyapeetham, Coimbatore campus. My academic journey has
                  equipped me with a robust understanding of computer science
                  principles and software development practices.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Beyond academics, I am deeply interested in leadership and
                  have actively participated in various college clubs and
                  societies. I believe in the power of teamwork and have honed
                  my skills in managing and leading teams towards successful
                  project completions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Frontend",
                skills: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Vue.js",
                ],
                color: "blue",
              },
              {
                icon: Globe,
                title: "Backend",
                skills: [
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "GraphQL",
                ],
                color: "cyan",
              },
              {
                icon: Code,
                title: "Programming",
                skills: [
                  "Python",
                  "Java",
                  "C++",
                  "C",
                  "JavaScript",
                  "TypeScript",
                  "Haskell",
                ],
                color: "teal",
              },
            ].map((category, index) => (
              <Card
                key={category.title}
                className={`bg-gray-800/50 backdrop-blur-sm border-${category.color}-500/30 shadow-2xl shadow-${category.color}-500/20 hover:shadow-${category.color}-500/40 transition-all duration-500 hover:scale-105 animate-fade-in-up group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <category.icon
                    className={`w-16 h-16 mx-auto mb-4 text-${category.color}-400 group-hover:animate-bounce transition-all duration-300`}
                  />
                  <CardTitle
                    className={`text-${category.color}-400 text-2xl font-bold`}
                  >
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className={`bg-${category.color}-500/20 text-${category.color}-300 border-${category.color}-500/30 hover:bg-${category.color}-500/30 transition-all duration-300 hover:scale-110`}
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

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 relative z-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
            Certifications
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105 animate-fade-in-up">
              <div className="flex items-center mb-4">
                <Award className="w-10 h-10 mr-4 text-blue-400" />
                <h3 className="text-2xl font-bold text-blue-400">
                  Certifications
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-4 text-lg text-gray-300 leading-relaxed">
                <li>MERN Stack training</li>
                <li>Postman API Fundamentals Student Expert</li>
                <li>AWS Cloud Practioner - [CIR Amrita]</li>
                <li>Machine Learning Crash Course - Google for Developers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-stack e-commerce solution with mind-blowing animations and smooth user experience",
                techs: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Task Management App",
                description:
                  "A collaborative tool with real-time updates and stunning visual feedback",
                techs: ["React", "Node.js", "Socket.io", "MongoDB"],
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                title: "Weather Dashboard",
                description:
                  "A beautiful weather dashboard with interactive maps and smooth animations",
                techs: ["Vue.js", "D3.js", "OpenWeather API", "Mapbox"],
                gradient: "from-teal-500 to-cyan-500",
              },
            ].map((project, index) => (
              <Card
                key={project.title}
                className="bg-gray-800/50 backdrop-blur-sm border-blue-500/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105 animate-fade-in-up group overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-100 transition-all duration-300`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Code className="w-10 h-10 text-white animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-400 text-xl font-bold group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,139,0.5)]"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up">
            Get In Touch
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-10 border border-blue-500/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:scale-105">
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                🚀 I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
              <div className="flex justify-center space-x-6">
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,139,139,0.5)]"
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
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
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
                    className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
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

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-blue-500/30 bg-gray-900/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-lg">
            © 2024 Harish J. Built with{" "}
            <span className="text-blue-400 font-semibold">Next.js</span> and{" "}
            <span className="text-cyan-400 font-semibold">Tailwind CSS</span> •
            Powered by ⚡ and lots of ☕
          </p>
        </div>
      </footer>

      <style jsx>{`
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
