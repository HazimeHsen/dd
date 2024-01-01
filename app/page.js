"use client";
import Capabilities from "./Components/Capabilities";
import ClientOnly from "./Components/ClientOnly";
import Faq from "./Components/FAQ/Faq";
import Hero from "./Components/Hero";
import History from "./Components/History";
import Slideshow from "./Components/Slideshow/Slideshow";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import WhyUs from "./Components/WhyUs";
import WorkedWith from "./Components/WorkedWith";
import Works from "./Components/Works";

const images = [
  "/slideshow/slide-1.webp",
  "/slideshow/slide-2.webp",
  "/slideshow/slide-3.webp",
  "/slideshow/slide-4.webp",
  "/slideshow/slide-5.webp",
  "/slideshow/slide-6.webp",
];

const logos = [
  "/companies/1.webp",
  "/companies/2.webp",
  "/companies/3.webp",
  "/companies/4.webp",
  "/companies/5.webp",
  "/companies/6.webp",
  "/companies/7.webp",
  "/companies/8.webp",
  "/companies/9.webp",
  "/companies/10.webp",
];

const capabilities = [
  {
    title: "Mobile Application Development",
    desc: "We specialize in designing and developing feature-rich and high-performance mobile applications for iOS and Android that offer seamless user experiences.",
    image: "/Capabilities/1.webp",
  },
  {
    title: "Web Application Development​",
    desc: "With our decade of experience in web designing and development, API integration, and cloud solutions, we can modernize legacy systems and create digital solutions that are market-driven.",
    image: "/Capabilities/2.webp",
  },
  {
    title: "UI/UX Designing",
    desc: "We excel at human-centered design through extensive experience in design to ensure that every digital product your brand produces looks and feels impeccable.",
    image: "/Capabilities/3.webp",
  },
  // {
  //   title: "SEO & Digital Marketing",
  //   desc: "Our Digital Marketing Intellectuals helps global enterprises and businesses to reach right audience, increase sales, build fanbase, and dominate the competition through creative campaign, personalized content and 360-degree online reputation management.",
  //   image: "/Capabilities/4.webp",
  // },
  // {
  //   title: "Hire Dedicated Developers",
  //   desc: "Hire expert software developers from our talent pool at competitive prices with flexible hiring options. Our dedicated developers have expertise and experience to provide end-to-end solutions to startups and enterprises for web and mobile applications development.",
  //   image: "/Capabilities/5.webp",
  // },
  // {
  //   title: "Artificial Intelligence",
  //   desc: "Unlock the potential of Artificial Intelligence with our comprehensive AI integration services. From machine learning algorithms to natural language processing, we harness cutting-edge AI technologies to optimize processes, enhance decision-making, and drive innovation for your business.",
  //   image: "/Capabilities/6.png",
  // },
];

const work = [
  {
    title: "Sundae",
    desc: "Sundae is revolutionising the way homeowners sell houses that need repairs. Every day our team of Market Experts help homeowners sell their house in poor condition fast and for the highest off-market price possible.",
    image: "/Works/1.webp",
  },
  {
    title: "MCM",
    desc: "MCM Provides Nationwide Delivery – Soils, Aggregates & Waste Management Marketing website of famous Soil and Aggregates seller across United kingdom.",
    image: "/Works/2.webp",
  },
  {
    title: "Hapa Website",
    desc: "Hapa Cloud is the hospitality industry’s fastest-growing technology partner, serving a global customer base of thousands of properties across 157 countries.",
    image: "/Works/3.webp",
  },
];

export default function Home() {
  return (
    <ClientOnly>
      <Hero />
      {/* <Slideshow
        className="max-w-[500px] max-h-[300px] w-full h-full "
        images={images}
      /> */}
      <History />
      <WhatWeDo />
      <Capabilities capabilities={capabilities} />
      {/* <WorkedWith logos={logos} /> */}
      <Works work={work} />
      <Faq />
    </ClientOnly>
  );
}
