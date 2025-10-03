'use client';
import React, { useState } from "react";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Skills from "@/components/skills";
import { useTheme } from "@/components/ThemeWrapper";

const Page = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const separator = theme === "dark"
    ? "bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900"
    : "bg-gradient-to-r from-gray-100 via-purple-400 to-gray-100";

  return (
    <div className={`${bgColor} w-full overflow-x-hidden transition-colors duration-500`}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Home />
      <div className={`w-full h-[1px] ${separator}`} />
      <Skills />
      <div className={`w-full h-[1px] ${separator}`} />
      <Projects />
      <div className={`w-full h-[1px] ${separator.replace('purple', 'green')}`} />
      <Services />
      <div className={`w-full h-[1px] ${separator}`} />
      <Contact />
      <div className={`w-full h-[1px] ${separator}`} />
      <Footer />
    </div>
  );
};

export default Page;
