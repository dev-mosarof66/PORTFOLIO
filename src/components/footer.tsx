'use client'
import React from "react";
import {motion} from 'motion/react'

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center py-1 bg-gray-900">
      <motion.div className="py-0">
        All @copyright reserved by - mosarof
      </motion.div>
    </div>
  );
};

export default Footer;
