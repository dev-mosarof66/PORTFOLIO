import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const GetInTouch = ({ cls }: { cls: string }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={() => scrollToSection("Contact")}
      className={`flex items-center justify-center gap-2 ${cls} bg-purple-500 hover:bg-purple-600 shadow-lg hover:scale-100 active:scale-105 transition-all duration-300 cursor-pointer`}
    >
      <FaPaperPlane /> Get in Touch
    </div>
  );
};

export default GetInTouch;
