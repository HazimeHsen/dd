"use client";
import useAnimationHook from "@/app/hooks/useAnimation";
import Image from "next/image";
import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const { controls: controls1, ref: ref1 } = useAnimationHook();

  return (
    <motion.footer
      ref={ref1}
      initial="hidden"
      animate={controls1}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
      }}
      transition={{ duration: 0.3 }}
      className="bg-primary text-white p-4 lg:p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 lg:mb-0">
          <Image
            src="/acksession_logo_white.png" // Replace with the path to your logo
            alt="Company Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 pb-4">
          <a href="#" className="text-xl text-white">
            <FaGithub />
          </a>
          <a href="#" className="text-xl text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-xl text-white">
            <FaLinkedin />
          </a>
          <a href="#" className="text-xl text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="pt-4 border-t text-center border-gray/40">
        Copyright &copy; 2023 Acksession Inc. All rights reserved
      </div>
    </motion.footer>
  );
};

export default Footer;
