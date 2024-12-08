"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });
const SubHead = () => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.div
        className="rounded-full mx-auto w-max bg-amber-400/90 px-5 py-2 flex flex-row gap-3 items-center justify-center text-base font-normal"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <motion.svg
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.2854 6.36754C22.352 4.99421 21.2854 3.71421 20.0854 2.56754C19.6187 2.11421 18.832 2.54088 18.9654 3.18088C19.2187 4.43421 19.4854 6.08754 19.4854 7.56754C19.4854 10.3142 17.6854 12.5409 14.9387 12.5409C12.8854 12.5409 11.2054 11.3009 10.472 9.52754C10.3387 9.26088 10.2854 9.10088 10.2054 8.80754C10.0587 8.24754 9.32536 8.07421 9.00536 8.56754C8.76536 8.92754 8.5387 9.28754 8.32536 9.67421C6.7387 12.3942 5.83203 15.5675 5.83203 18.9542C5.83203 24.8475 10.6054 29.6209 16.4987 29.6209C22.392 29.6209 27.1654 24.8475 27.1654 18.9542C27.1654 14.3009 25.7254 9.98088 23.2854 6.36754ZM16.112 25.6209C13.7387 25.6209 11.8187 23.7542 11.8187 21.4342C11.8187 19.2742 13.2187 17.7542 15.5654 17.2742C17.5254 16.8742 19.5387 16.0342 20.9387 14.7142C21.312 14.3675 21.9254 14.5275 22.032 15.0209C22.3387 16.3809 22.4987 17.7942 22.4987 19.2209C22.512 22.7542 19.6454 25.6209 16.112 25.6209Z"
            fill="black"
          />
        </motion.svg>

        <motion.span className={poppins.className}>
          We are Taxbyakram
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default SubHead;
