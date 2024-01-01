"use client";
import Image from "next/image";
import React from "react";
import Slideshow from "../Slideshow/Slideshow";

const WorkedWith = ({ logos }) => {
  return (
    <div className="bg-primary text-white">
      <div className="px-4 md:px-8 py-10">
        <div className="pb-10">
          <div className="">
            <div className="text-3xl md:text-4xl text-center font-bold ">
              We've Worked With <span className="text-third mx-2">Amazing</span>{" "}
              Companies
            </div>
            <div className="text-xl text-center max-w-3xl mx-auto mt-5 font-semibold my-2">
              We provide top notch solutions for Custom Software Development &
              Enterprise Mobile Application Development to Start-ups and Fortune
              500.
            </div>
          </div>
          <div className="mt-10">
            <Slideshow
              images={logos}
              className="max-w-[100px] md:max-w-[200px] max-h-[200px] w-full h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkedWith;
