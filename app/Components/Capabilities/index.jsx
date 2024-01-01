"use client";
import Image from "next/image";
import React from "react";
import Heading from "../Heading";
import useAnimationHook from "@/app/hooks/useAnimation";
import { motion } from "framer-motion";
const Capabilities = ({ capabilities }) => {
  return (
    <div className="py-20 px-4 md:px-8">
      <div>
        <Heading>
          <div className="text-4xl font-bold text-center md:text-5xl">
            Our <span className="text-primary underline">Services</span>
          </div>
        </Heading>

        <div className="flex justify-center mt-10">
          <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {capabilities.map((item, index) => (
              <div key={index}>
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;

const Card = ({ item }) => {
  const { controls: controls1, ref: ref1 } = useAnimationHook();

  return (
    <motion.div
      ref={ref1}
      initial="hidden"
      animate={controls1}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
      }}
      transition={{ duration: 0.3 }}
      className="flex md:block text-center md:text-start justify-center flex-col items-center">
      <div className="">
        <Image
          width={300}
          height={200}
          alt={item.title}
          className="hover:scale-110 transition-transform duration-200"
          src={item.image}
        />
      </div>
      <div className="text-xl font-semibold">{item.title}</div>
      <div className="max-w-[300px]">{item.desc}</div>
    </motion.div>
  );
};
