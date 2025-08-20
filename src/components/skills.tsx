"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiMongoose,
  SiClerk 
} from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" size={40} /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-300" size={40} />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" size={40} />,
  },
  { name: "React", icon: <FaReact className="text-cyan-400" size={40} /> },

  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" size={35} />,
  },
  { name: "Node JS", icon: <FaNodeJs className="text-green-500" size={40} /> },
  {
    name: "Express JS",
    icon: <SiExpress className="text-green-500" size={40} />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" size={40} /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" size={40} /> },

  {
    name: "Mongoose",
    icon: <SiMongoose className="text-pink-400" size={45} />,
  },
  { name: "Next JS", icon: <SiNextdotjs className="text-white" size={40} /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600" size={40} /> },
  {
    name: "Firebase",
    icon: <BiLogoFirebase className="text-amber-600" size={40} />,
  },
  {
    name: "Clerk",
    icon: <SiClerk  className="text-white" size={35} />,
  },
];

const Skills = () => {
  return (
    <div
      id="Skills"
      className="w-full min-h-screen bg-gray-900 text-white py-16 px-6"
    >
      <motion.h2
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl mx-auto text-center py-6 text-gray-700 dark:text-gray-400"
      >
        A curated collection of my technical expertise and creative tools,
        representing years of dedication to mastering modern development and
        design. These skills empower me to craft efficient, impactful, and
        visually engaging solutions.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <HoverBorderGradient
            key={index}
            className="w-full  bg-gray-900 text-gray-100  cursor-pointer transition duration-300 delay-75 rounded-sm"
          >
            <motion.div
              className="w-full flex flex-col items-center gap-2 py-3 bg-gray-900"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="flex flex-col items-center gap-1 p-4">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            </motion.div>
          </HoverBorderGradient>
        ))}
      </div>
    </div>
  );
};

export default Skills;
