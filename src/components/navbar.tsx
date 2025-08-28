"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const nav = useMemo(
    () => ["Home", "Skills", "Projects", "Services", "Contact"],
    []
  );
  const [handleNav, setHandleNav] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setHandleNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = nav.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('the section is running now: ',entry.target.id)
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.3,rootMargin:'-80px 0px 0px 0px' }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [nav]);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex items-center justify-center fixed my-3 z-50"
    >
      <div className="w-full sm:w-[90%] lg:w-[80%] mx-auto flex items-center justify-between fixed backdrop-blur-sm mt-6 py-3 px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold">{""}</h1>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden cursor-pointer">
          {handleNav ? (
            <FaTimes size={25} onClick={() => setHandleNav(false)} />
          ) : (
            <FaBars size={22} onClick={() => setHandleNav(true)} />
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-6">
          {nav.map((item) => (
            <p
              key={item}
              onClick={() => scrollToSection(item)}
              className={`cursor-pointer text-sm transition-colors duration-300 ${
                activeTab === item
                  ? "text-purple-500 hover:text-purple-500/80"
                  : "text-gray-100 hover:text-gray-100/80"
              }`}
            >
              {item}
            </p>
          ))}
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
            className="w-full fixed top-14 right-0 backdrop-blur-lg shadow-lg flex flex-col items-center p-6 gap-4 z-40"
          >
            {nav.map((item) => (
              <p
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setHandleNav(false);
                  setActiveTab(item)
                }}
                className={`cursor-pointer text-sm transition-colors duration-300 ${
                  activeTab === item
                    ? "text-purple-500 hover:text-purple-500/80"
                    : "text-gray-100 hover:text-gray-100/80"
                }`}
              >
                {item}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
