"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import blogImage from "@/../public/blog.webp";
import ecommerceImage from "@/../public/ecommerce.webp";
import portfolioImage from "@/../public/portfolio.jpg";
import taskManagerImage from "@/../public/taskmanager.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { GlowingEffect } from "./ui/glowing-effect";

const dummyProjects = [
  {
    id: 1,
    title: "Neura - Coding Learning Platform",
    image: portfolioImage,
    live: "#",
    code: "https://github.com/dev-mosarof66/AI-TUTOR",
  },
  {
    id: 2,
    title: "Alpha - Icon Finding Platform",
    image: blogImage,
    live: "https://alpha-icon-app.vercel.app",
    code: "https://github.com/dev-mosarof66/ALPHA-ICON-APP",
  },
  {
    id: 3,
    title: "Plan Management System",
    image: taskManagerImage,
    live: "#",
    code: "https://github.com/dev-mosarof66/TO-DO-APP-CLIENT",
  },
  {
    id: 4,
    title: "E-commerce Website",
    image: ecommerceImage,
    live: "#",
    code: "https://github.com/dev-mosarof66/rencart",
  },
];

const Projects = () => {
  return (
    <div
      id="Projects"
      className="w-full min-h-screen bg-gray-900 text-white py-16 px-6"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {dummyProjects.map((project, index) => (
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
}

const GridItem = ({ title, source, live, code }: GridItemProps) => {
  return (
    <div className="relative h-full rounded-lg  border border-gray-600 cursor-pointer transition duration-300 delay-75">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />
      <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg bg-gray-800">
        <Image
          src={source}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="w-full px-4 mb-3 flex flex-col gap-2">
          <h3 className="text-lg text-gray-600 dark:text-gray-300 font-semibold">{title}</h3>
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
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-sm text-white px-4 py-2 rounded-lg transition"
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
