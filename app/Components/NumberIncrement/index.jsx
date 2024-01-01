"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

const Card = ({ nb, className }) => {
  const [element, setElement] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  useEffect(() => {
    if (isInView) {
      setElement(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className={className}>
      {element && <CountUp start={0} end={nb} duration={2} delay={0} />}
    </div>
  );
};

export default Card;
