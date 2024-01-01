"use client";
import React, { useEffect } from "react";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="md:pt-10 flex justify-center items-center h-screen text-center flex-col gap-5 md:gap-10 w-full px-4 md:px-10">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        transition={{ duration: 1 }}
        className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold text-primary capitalize max-w-4xl">
        Leading <span className="text-secondary">web & mobile</span> application
        development company
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray max-w-xl text-sm md:text-lg font-semibold">
        We specialize in offering comprehensive web and mobile application
        development services to cater to the unique requirements of both budding
        startups and established enterprises.
      </motion.div>
      <div className="flex md:flex-row flex-col w-full md:w-1/2 gap-4 items-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -50 },
          }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full">
          <Button text="Get free quote" Icon={FaArrowRight} />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -50 },
          }}
          transition={{ duration: 1, delay: 0.9 }}
          className="w-full">
          <Button text="Join Us" outline />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
