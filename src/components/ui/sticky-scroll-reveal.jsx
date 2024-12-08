"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import SubHead from "../SubHead.jsx";
import Image from "next/image";

const StickyScroll = ({ content, contentClassName }) => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start center", "center start"],
  });
  const cardLength = isSmallDevice ? content.length - 1 : content.length - 1;

  useEffect(() => {
    const isSmall = window.matchMedia(
      "only screen and (max-width: 768px)"
    ).matches;
    setIsSmallDevice(isSmall);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="overflow-y-auto overflow-x-hidden flex items-center flex-col justify-center relative space-x-10 rounded-md max-w-[1550px] p-10 lg:p-0"
      ref={ref}
    >
      <SubHead />
      <div className="">
        <Image
          src="/images/1.svg"
          alt=""
          width={130}
          height={80}
          className="absolute lg:left-[17%] left-[7%] w-[90px] lg:w-[130px] lg:top-0 top-28"
        />
        <Image
          src="/images/2.svg"
          alt=""
          width={250}
          height={200}
          className="absolute -left-[3%] lg:top-[20%] top-[20%] z-10 lg:w-[250px] w-[130px]"
        />
        <Image
          src="/images/3.svg"
          alt=""
          width={160}
          height={250}
          className="absolute lg:-left-[0%] lg:h-[250px] -left-10 h-[130px] bottom-[24%] z-10"
        />
        <Image
          src="/images/4.svg"
          alt=""
          width={180}
          height={150}
          className="absolute lg:left-[13%] left-[0%] lg:w-[180px] w-[100px] lg:bottom-[26%] bottom-[35%]  z-0"
        />
        <Image
          src="/images/5.svg"
          alt=""
          width={150}
          height={150}
          className="absolute lg:right-[3%] right-0 lg:w-[150px] w-[80px]   top-[6%] z-0"
        />
        <Image
          src="/images/6.svg"
          alt=""
          width={300}
          height={250}
          className="absolute -right-[3%] lg:w-[250px] w-[140px] top-[20%] z-0"
        />
        <Image
          src="/images/7.svg"
          alt=""
          width={300}
          height={250}
          className="absolute -right-[3%] lg:w-[300px] w-[140px] lg:bottom-[26%] bottom-[45%] z-0"
        />
      </div>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-black lg:text-4xl max-w-2xl mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};
export default StickyScroll;
