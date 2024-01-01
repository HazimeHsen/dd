"use client";
import React from "react";
import Card from "../NumberIncrement";
import { motion } from "framer-motion";
import useAnimationHook from "@/app/hooks/useAnimation";
const data = [
  {
    id: 1,
    nb: 10,
    icon: "+",
    desc: "Years Experience",
  },
  {
    id: 2,
    nb: 320,
    icon: "+",
    desc: "Successful Projects",
  },
  {
    id: 3,
    nb: 15,
    icon: "+",
    desc: "Countries Served",
  },
  {
    id: 4,
    nb: 99,
    icon: "%",
    desc: "Customer Satisfaction",
  },
];

const History = () => {
  const { controls: controls1, ref: ref1 } = useAnimationHook();
  const { controls: controls2, ref: ref2 } = useAnimationHook();
  const { controls: controls3, ref: ref3 } = useAnimationHook();

  return (
    <div className="bg-primary text-white">
      <div className="px-4 md:px-8 py-14">
        <div className="flex lg:flex-row flex-col pb-10">
          <div className="lg:w-1/2">
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -50 },
              }}
              transition={{ duration: 0.3 }}
              className="text-4xl md:text-5xl font-bold ">
              <span className="text-third mr-2">Trusted</span>
              by more than 140
              <span className="text-third mx-2">businesses</span>
              and their
              <span className="text-third ml-2">teams.</span>
            </motion.div>
            <motion.div
              ref={ref2}
              initial="hidden"
              animate={controls2}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -50 },
              }}
              transition={{ duration: 0.3 }}
              className="text-xl font-semibold my-2">
              With our expert team, we are continuously meeting the needs of
              businesses and startups to help them reduce complexity and overall
              cost related to software development.
            </motion.div>
          </div>
          <div className="flex justify-center lg:w-1/2">
            <motion.div
              ref={ref3}
              initial="hidden"
              animate={controls3}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -50 },
              }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-20 w-3/4">
              {data.map((d) => (
                <NumbersWithDescription
                  key={d.id}
                  nb={d.nb}
                  icon={d.icon}
                  desc={d.desc}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

const NumbersWithDescription = ({ nb, desc, icon }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col items-center ">
        <div className="text-5xl flex gap-2 items-center font-bold">
          <Card nb={nb} />
          <div className="text-third">{icon}</div>
        </div>
        <div className="">{desc}</div>
      </div>
    </div>
  );
};
