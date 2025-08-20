"use client";
import React from "react";
import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Tech Solutions Ltd.",
    date: "2024 - Present",
    description:
      "Building responsive and interactive web applications using React, TailwindCSS, and modern tooling.",
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "CodeCraft Inc.",
    date: "2023 - 2024",
    description:
      "Assisted in developing full-stack applications, fixed bugs, and optimized performance.",
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    role: "B.Sc in CSE",
    company: "Rajshahi University of Engineering & Technology",
    date: "2020 - 2024",
    description:
      "Studied computer science fundamentals, algorithms, and web technologies.",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
];

const Experiences = () => {
  return (
    <div
      id="Experience"
      className="w-full min-h-screen py-16 bg-gradient-to-b from-gray-900 via-purple-950 to-purple-950 text-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experiences
        </motion.h2>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">

        </div>
        <div className="relative border-l-4 border-indigo-500">
          {experiences && experiences.length < 0 ? (
            experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-10 ml-6"
              >
                <span className="absolute -left-10 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500">
                  {exp.icon}
                </span>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-3">{exp.date}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <p>No Experience</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
