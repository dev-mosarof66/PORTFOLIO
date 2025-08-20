import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Home from "@/components/home";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Skills from "@/components/skills";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-gray-900 overflow-x-hidden">
      <Navbar />
      <Home />
      <div className="w-full h-[1px] bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900" />
      <Skills />
      <div className="w-full h-[1px] bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900" />
      <Projects />
      <div className="w-full h-[1px] bg-gradient-to-r from-gray-900 via-green-600 to-gray-900" />
      <Services />
      <div className="w-full h-[1px] bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900" />
      <Contact />
      <div className="w-full h-[1px] bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900" />
      <Footer />
    </div>
  );
};

export default page;
