"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import useAnimationHook from "@/app/hooks/useAnimation";

const Card = ({ info }) => {
  const { controls, ref } = useAnimationHook();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center mb-10"
      key={info.title}>
      <div className="w-full mx-auto mb-2">
        <Image
          src={info.image}
          width={65}
          className="mx-auto"
          height={65}
          alt={info.title}
        />
      </div>
      <div className="w-full text-center">
        <h2 className="font-bold text-xl underline text-primary mb-2">
          {info.title}
        </h2>
        <ul className="font-semibold text-gray-600 text-sm md:text-base">
          {info.text}
        </ul>
      </div>
    </motion.div>
  );
};

export default Card;
