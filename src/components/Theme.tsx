'use client';
import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./ThemeWrapper";

const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center p-2 rounded-lg border border-purple-700 dark:border-purple-900 hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer duration-500 delay-75"
    >
      {theme !== "dark" ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
};

export default Theme;
