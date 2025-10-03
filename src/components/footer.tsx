'use client';
import React from "react";
import { motion } from "motion/react";
import { useTheme } from "./ThemeWrapper";

const Footer = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-gray-100";
  const textColor = theme === "dark" ? "text-gray-300" : "text-gray-900";

  return (
    <footer className={`${bgColor} w-full flex items-center justify-center py-2`}>
      <motion.div className={`py-0 ${textColor}`}>
        All © copyright reserved by - Mosarof Hossain
      </motion.div>
    </footer>
  );
};

export default Footer;
