"use client";
import React from "react";
import { motion } from "motion/react";
import { BsFillSendFill } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const socialLinks = [
    {
      id: 1,
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/mosarof066/",
    },
    {
      id: 2,
      icon: FaFacebook,
      link: "https://www.facebook.com/md.mosarof.hossain.544610",
    },
    {
      id: 3,
      icon: FaWhatsapp,
      link: "https://wa.me/8801853025748",
    },
    {
      id: 4,
      icon: FaYoutube,
      link: "https://youtube.com/yourchannel",
    },
  ];

  return (
    <section
      id="Contact"
      className="min-h-screen w-full  flex flex-col items-center px-6 py-20  bg-gray-900 text-white"
    >
      <div className="w-full max-w-6xl flex flex-col gap-10 ">
        {/* Top Section - Header */}
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
            className="flex  flex-col items-center justify-center lg:items-start lg:text-left gap-6"
          >
            <p className="text-sm sm:text-base text-gray-300 w-full sm:w-md text-center">
              Let’s turn ideas into reality — drop me a message and let’s build
              something amazing together!
            </p>
            <div className="flex items-center justify-center px-4 gap-6 text-3xl text-gray-400">
              {socialLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-transform duration-300 hover:scale-110"
                >
                  <item.icon size={22} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-lg mx-auto"
          >
            <div className=" backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6">
                Send a Message
              </h3>
              <form className="space-y-5">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full text-sm px-4 py-2 rounded-lg  border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring focus:ring-purple-400 transition"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full text-sm px-4 py-3 rounded-lg  border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring focus:ring-purple-400 transition duration-300 delay-75 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-2 flex items-center justify-center gap-2 rounded-sm bg-purple-700 hover:bg-purple-800 transition duration-300 delay-75 shadow-md cursor-pointer"
                >
                  <BsFillSendFill />
                  <p>Send Mail</p>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
