"use client";
import React from "react";
import { FaCode, FaMobileAlt, FaDatabase, FaPaintBrush } from "react-icons/fa";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { motion } from "motion/react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode className="text-4xl text-purple-500" />,
      title: "Web Development",
      desc: "Building modern, fast, and responsive websites using React, Next.js, and Tailwind CSS.",
    },
    {
      id: 2,
      icon: <FaMobileAlt className="text-4xl text-purple-500" />,
      title: "Mobile Development",
      desc: "Creating cross-platform mobile apps with React Native with optimized and seamless performance.",
    },
    {
      id: 3,
      icon: <FaDatabase className="text-4xl text-purple-500" />,
      title: "Backend Development",
      desc: "Designing scalable APIs, handling authentication, and managing databases with Node.js and MongoDB.",
    },
    {
      id: 4,
      icon: <FaPaintBrush className="text-4xl text-purple-500" />,
      title: "UI/UX Design",
      desc: "Crafting clean, modern, and user-friendly interfaces to ensure the best user experience.",
    },
  ];

  return (
    <section
      id="Services"
      className="w-full min-h-screen py-20 bg-gray-900 text-white px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-purple-500">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className="text-gray-400 max-w-xl mx-auto mb-12"
        >
          Here are the core services I provide to bring your ideas to life with
          modern technology and best practices.
        </motion.p>

        {/* Service Cards */}
        <motion.div
          initial={{ y: 50 }}
          whileInView={{
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.4,
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <HoverBorderGradient key={service.id}>
              <div className="w-full flex flex-col justify-between gap-4 py-6 px-4 bg-gray-900">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            </HoverBorderGradient>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
