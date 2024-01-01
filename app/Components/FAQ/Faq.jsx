"use client";
import useAnimationHook from "@/app/hooks/useAnimation";
import React, { useState } from "react";
import Heading from "../Heading";
import { motion } from "framer-motion";
const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setSelectedQuestion((prev) => (prev === index ? null : index));
  };
  const { controls: controls1, ref: ref1 } = useAnimationHook();

  const faqData = [
    {
      question: "What is website?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      question: "What is the profit do you earn?",
      answer: "Answer for the second question goes here.",
    },
    {
      question: "What is your website name?",
      answer: "Answer for the third question goes here.",
    },
    {
      question: "How many time do you spend to develop the project?",
      answer: "Answer for the fourth question goes here.",
    },
  ];

  return (
    <section className="flex items-center">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
        <Heading>
          <h2 className="pb-2 text-pretty text-4xl mb-10 font-bold text-center text-gray-800 md:text-5xl">
            Software Development{" "}
            <span className="text-primary underline">FAQs</span>
          </h2>
        </Heading>
        <div className="flex flex-wrap items-center justify-center mb-12">
          <div className="w-full flex justify-center mb-4 lg:mb-0">
            <div className="lg:max-w-xl">
              {faqData.map((faq, index) => (
                <motion.div
                  ref={ref1}
                  initial="hidden"
                  animate={controls1}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 },
                  }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className={`flex flex-col justify-between w-full px-6 py-4 mb-4 bg-gray-100 border rounded-lg cursor-pointer`}
                  onClick={() => toggleAnswer(index)}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{faq.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`${
                        selectedQuestion === index ? "rotate-180" : ""
                      } text-blue-600`}
                      viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                  </div>
                  <div
                    className={`text-sm text-gray-500 transition-max-height duration-300 overflow-hidden ${
                      selectedQuestion === index ? "max-h-48" : "max-h-0"
                    }`}>
                    {faq.answer}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
