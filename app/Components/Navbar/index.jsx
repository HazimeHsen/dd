"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import useAnimationHook from "@/app/hooks/useAnimation";
import { motion, useAnimation, useInView } from "framer-motion";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleMouseEnter = (index) => {
    setShowDropdown(index);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };

  const links = [
    { text: "Home", url: "#" },
    { text: "About", url: "#" },
    {
      text: "Services",
      url: "#",
    },
    {
      text: "prices",
      url: "#",
    },
    { text: "Contact", url: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldShow = scrollTop > 0;
      setIsScrolled(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 transition-all duration-200 w-full ${
        isScrolled ? "bg-bgWhite shadow-md" : ""
      }`}>
      <nav className="p-4 md:px-6 lg:px-10">
        <div className="mx-auto flex items-center justify-between">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white font-bold text-lg">
            <Image
              width={150}
              height={70}
              src="/acksession_logo.png"
              alt="Logo"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            transition={{ duration: 1, delay: 1 }}
            className="space-x-4 hidden lg:flex">
            {links.map((link, index) => (
              <div
                key={index}
                className="relative inline-block group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                <a
                  href={link.url}
                  className="text-lg flex items-center font-semibold rounded-full hover:bg-primary hover:text-white px-4 py-2 transition-all duration-200 cursor-pointer relative">
                  {link.text}
                  {link.dropdown && (
                    <span className="ml-1 transition-transform duration-200 transform group-hover:rotate-180">
                      <FaAngleDown size={16} />
                    </span>
                  )}
                </a>
                {link.dropdown && showDropdown === index && (
                  <div className="absolute z-10 mt-2 bg-white shadow-xl rounded-md overflow-hidden transition-all duration-300 opacity-100 transform translate-y-0">
                    {link.dropdown.map((item, subIndex) => (
                      <a
                        key={subIndex}
                        href={item.url}
                        className="block hover:bg-primary px-4 py-2 hover:text-white">
                        {item.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 },
            }}
            transition={{ duration: 1, delay: 1 }}
            className="lg:hidden mt-4">
            <button
              onClick={toggleSidebar}
              className="text-black text-2xl focus:outline-none">
              {showSidebar ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </motion.div>
        </div>
      </nav>

      <>
        <div
          onClick={toggleSidebar}
          className={`${
            showSidebar ? "" : "hidden"
          } fixed inset-0 bg-black bg-opacity-50 z-10`}></div>
        <div
          className={`${
            showSidebar ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 z-50 bg-white h-screen w-64 p-4 shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out`}>
          <div className="flex justify-end">
            <button
              onClick={toggleSidebar}
              className="text-black focus:outline-none">
              <FaTimes size={25} />
            </button>
          </div>
          <div className="flex flex-col gap-3 pt-8 items-center w-full">
            {links.map((link, index) => (
              <div
                key={index}
                className="relative group w-full border-b border-gray/30 flex justify-center"
                onClick={() =>
                  showDropdown ? handleMouseLeave() : handleMouseEnter(index)
                }>
                <a
                  href={link.url}
                  className="text-lg w-full justify-center flex items-center gap-2 font-semibold py-2 px-4 rounded-full hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer">
                  {link.text}
                  {link.dropdown && (
                    <span className="ml-1">
                      <FaAngleDown size={16} />
                    </span>
                  )}
                </a>
                {link.dropdown && showDropdown === index && (
                  <div className="mt-2 bg-white shadow-xl rounded-md overflow-hidden">
                    {link.dropdown.map((item, subIndex) => (
                      <a
                        key={subIndex}
                        href={item.url}
                        className="block px-4 py-2 hover:bg-primary hover:text-white">
                        {item.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
