"use client";
import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaPaperPlane,
  FaDownload,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { motion } from "motion/react";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import GetInTouch from "./GetInTouch";
import { useTheme } from "./ThemeWrapper";

const Hero = () => {
  const { theme } = useTheme(); 

  const socialLinks = [
    {
      id: 1,
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/mosarof066/",
    },
    {
      id: 2,
      icon: FaFacebook,
      link: "https://www.facebook.com/md.mosarof.hossain.544610",
    },
    {
      id: 3,
      icon: FaGithub,
      link: "https://github.com/dev-mosarof66",
    },
    {
      id: 4,
      icon: FaYoutube,
      link: "https://youtube.com/yourchannel",
    },
  ];

  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = "/Mosarof_Hossain.pdf";
    link.download = "Mosarof_Hossain.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const bgColor = theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900";
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-gray-100";
  const cardHeaderBg = theme === "dark" ? "bg-gray-700" : "bg-gray-200";
  const codeTextColor = theme === "dark" ? "text-gray-200" : "text-gray-900";

  return (
    <section
      id="Home"
      className={`w-full min-h-screen flex items-center justify-center ${bgColor}`}
    >
      <div className="w-full h-full lg:flex lg:items-center lg:justify-center py-28 px-4">
        <div className="w-full sm:w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center gap-6"
          >
            {/* Animated Text */}
            <div>
              <h1 className="text-xl sm:text-2xl">I&#8217;m a</h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">
                <ReactTyped
                  strings={[
                    "Full Stack Developer",
                    "Backend Developer",
                    "React Native Developer",
                    "Rest API Integrator",
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  loop
                />
              </h1>
            </div>

            {/* Intro Line */}
            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} max-w-lg leading-relaxed`}>
              Innovative full-stack developer skilled in JavaScript, TypeScript,
              React, Next.js, MongoDB, and Node.js. Dedicated to crafting
              efficient solutions and optimizing for performance and
              optimization.
            </p>

            {/* Social Icons */}
            <div className={`flex gap-5 text-2xl ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
              {socialLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 active:text-purple-500 active:scale-[1.08] transition-colors duration-300"
                >
                  <item.icon />
                </Link>
              ))}
            </div>

            {/* Buttons */}
            <div className="hidden lg:flex flex-col sm:flex sm:flex-row gap-4 mt-4">
              <GetInTouch cls="px-6 py-2 rounded-lg text-white text-base" />
              <button
                onClick={handleCVDownload}
                className="flex items-center justify-center gap-2 px-6 py-2 border border-purple-500 hover:bg-purple-500 hover:text-white rounded-lg active:scale-105 shadow-lg transition-all duration-300 cursor-pointer"
              >
                <FaDownload /> Download CV
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE (Custom Mac Terminal) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 mt-10 md:mt-0 flex justify-center"
          >
            <BackgroundGradient>
              <div className={`w-full rounded-lg overflow-hidden ${cardBg}`}>
                {/* Terminal Header */}
                <div className={`flex items-center gap-2 px-4 py-2 ${cardHeaderBg}`}>
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>

                {/* Terminal Body */}
                <div className={`p-4 font-mono text-sm ${codeTextColor}`}>
                  <p>$ name</p>
                  <span className="text-purple-400 px-2">Mosarof Hossain</span>

                  <p className="mt-3">$ role</p>
                  <p className="text-purple-400 px-2">Full Stack Developer</p>

                  <p className="mt-3">$ skills</p>
                  <p className="text-purple-400 px-2">
                    HTML5, CSS3, TailwindCSS, JavaScript, TypeScript, React,
                    Next.js, Node.js, MongoDB
                  </p>

                  <p className="mt-3">$ Target</p>
                  <p className="text-green-400 px-2">
                    while(alive) {"{"} Learn(); Implement(); Build(); {"}"}
                  </p>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>

          {/* Small screen buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:hidden gap-4 mt-6"
          >
            <Link
              href="#Contact"
              scroll={true}
              className="flex items-center justify-center gap-2 px-6 py-2 sm:py-3 bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg hover:scale-100 active:scale-105 transition-all duration-300 cursor-pointer"
            >
              <FaPaperPlane /> Get in Touch
            </Link>
            <button
              onClick={handleCVDownload}
              className="flex items-center justify-center gap-2 px-6 py-2 sm:py3 border border-purple-500 hover:bg-purple-500 hover:text-white rounded-lg active:scale-105 shadow-lg transition-all duration-300 cursor-pointer"
            >
              <FaDownload /> Download CV
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
