"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ecommerceImage from "@/../public/ecommerce.webp";
import taskManagerImage from "@/../public/taskmanager.png";
import AlphaIcon from '@/../public/alpha.png';
import SenseiIcon from '@/../public/sensei.png';
import AIcon from "@/../public/ai-tutor.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GlowingEffect } from "./ui/glowing-effect";
import { useTheme } from "./ThemeWrapper";

const projects = [
  {
    id: 1,
    title: "Neura - Coding Learning Platform",
    image: AIcon,
    live: "https://ai-tutor-flame.vercel.app",
    code: "https://github.com/dev-mosarof66/AI-TUTOR",
  },
  {
    id: 2,
    title: "Sensei - Coding Learning Website",
    image: SenseiIcon,
    live: "https://sensei-green.vercel.app",
    code: "https://github.com/dev-mosarof66/sensei.git",
  },
  {
    id: 3,
    title: "Alpha - Icon Finding Platform",
    image: AlphaIcon,
    live: "https://alpha-icon-app.vercel.app",
    code: "https://github.com/dev-mosarof66/ALPHA-ICON-APP",
  },
  {
    id: 4,
    title: "Plan Management System",
    image: taskManagerImage,
    live: "#",
    code: "https://github.com/dev-mosarof66/TO-DO-APP-CLIENT",
  },
  {
    id: 5,
    title: "E-commerce Website",
    image: ecommerceImage,
    live: "#",
    code: "https://github.com/dev-mosarof66/rencart",
  },
];

const Projects = () => {
  const { theme } = useTheme(); // ✅ get current theme

  const bgColor = theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900";
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-gray-100";
  const cardHeaderText = theme === "dark" ? "text-gray-300" : "text-gray-900";
  const codeBtnBg = theme === "dark" ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-900";

  return (
    <div id="Projects" className={`w-full min-h-screen py-20 px-6 ${bgColor}`}>
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <GridItem
              title={project.title}
              source={project.image}
              live={project.live}
              code={project.code}
              cardBg={cardBg}
              cardHeaderText={cardHeaderText}
              codeBtnBg={codeBtnBg}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

interface GridItemProps {
  title: string;
  source: StaticImageData;
  live: string;
  code: string;
  cardBg: string;
  cardHeaderText: string;
  codeBtnBg: string;
}

const GridItem = ({ title, source, live, code, cardBg, cardHeaderText, codeBtnBg }: GridItemProps) => {
  return (
    <div className="relative h-full rounded-lg border border-gray-600 cursor-pointer transition duration-300 delay-75">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className={`relative flex flex-col gap-4 overflow-hidden rounded-lg ${cardBg}`}>
        <Image
          src={source}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="w-full px-4 mb-3 flex flex-col gap-2">
          <h3 className={`text-lg font-semibold ${cardHeaderText}`}>{title}</h3>
          <div className="w-full flex justify-between gap-3 mt-auto">
            <Link
              href={live}
              target="_blank"
              className="flex items-center text-sm bg-purple-500 hover:ring ring-green-600 active:ring active:scale-[0.97] gap-2 px-4 py-2 rounded-lg transition duration-200 delay-75"
            >
              Live <FaExternalLinkAlt size={14} />
            </Link>
            <Link
              href={code}
              target="_blank"
              className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition ${codeBtnBg}`}
            >
              Code <FaGithub size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
