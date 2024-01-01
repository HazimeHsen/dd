import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import useAnimationHook from "@/app/hooks/useAnimation";
const Heading = ({ children }) => {
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
      className="">
      <h1>{children}</h1>
    </motion.div>
  );
};

export default Heading;
