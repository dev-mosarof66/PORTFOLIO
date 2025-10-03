"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import GetInTouch from "./GetInTouch";
import Theme from "./Theme";
import { useTheme } from "./ThemeWrapper";

type NavbarProps = {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
};

const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  const nav = useMemo(
    () => ["Home", "Skills", "Projects", "Services", "Contact"],
    []
  );
  const [handleNav, setHandleNav] = useState(false);
  const { theme } = useTheme(); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setHandleNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = nav.map((id) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveTab(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );
    sections.forEach((section) => section && observer.observe(section));
    return () =>
      sections.forEach((section) => section && observer.unobserve(section));
  }, [nav, setActiveTab]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`w-full flex items-center justify-center fixed z-50 ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} backdrop-blur-sm py-6 px-6`}
    >
      <div className="w-full sm:w-[90%]  mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold">{"M"}</h1>

        {/* Mobile Menu Icon */}
        <div className="flex items-center gap-4 md:hidden">
          <Theme />
          <div className="cursor-pointer">
            {handleNav ? (
              <FaTimes size={25} onClick={() => setHandleNav(false)} />
            ) : (
              <FaBars size={22} onClick={() => setHandleNav(true)} />
            )}
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-6">
          {nav.map((item) => (
            <p
              key={item}
              onClick={() => scrollToSection(item)}
              className={`cursor-pointer text-sm sm:text-base transition-colors duration-300 ${
                activeTab === item ? `${theme === "dark" ? "text-purple-500 hover:text-purple-500/80" : "text-purple-500 hover:text-purple-500/80"}` : `${theme === "dark" ? "text-gray-100 hover:text-gray-100/80" : "text-gray-900 hover:text-gray-700/80"}`
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="md:flex items-center gap-4 hidden">
          <Theme />
          <div>
            <GetInTouch cls={`px-4 py-2 rounded-sm font-semibold text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`} />
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {handleNav && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className={`w-full fixed top-20 right-0 backdrop-blur-sm ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"} shadow-lg flex flex-col gap-4 pb-6 z-50`}
          >
            <div className="w-full flex flex-col items-center gap-4">
              {nav.map((item) => (
                <p
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setHandleNav(false);
                    setActiveTab(item);
                  }}
                  className={`cursor-pointer text-sm transition-colors duration-300 ${
                    activeTab === item ? `${theme === "dark" ? "text-purple-500 hover:text-purple-500/80" : "text-purple-500 hover:text-purple-500/80"}` : `${theme === "dark" ? "text-gray-100 hover:text-gray-100/80" : "text-gray-900 hover:text-gray-700/80"}`
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className={`w-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"} h-[1px]`} />
            <div className="max-w-[80%] mx-auto">
              <GetInTouch cls={`px-4 py-2 rounded-sm text-base ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
