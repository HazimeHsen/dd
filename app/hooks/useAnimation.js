// useAnimationHook.js
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

const useAnimationHook = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return { controls, ref };
};

export default useAnimationHook;
