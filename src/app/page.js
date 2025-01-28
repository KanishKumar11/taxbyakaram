"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Learn from "@/components/Learn";
import LearnGST from "@/components/LearnGST";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Why from "@/components/Why";
import { Simula } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <div className="bg-white  relative">
      <Navbar />
      <Hero />
      <Services />
      <div
        className=" bg-gradient-to-b from-[#70209E]  to-[#70209E]   px-4 py-28"
        id="learn"
      >
        <motion.h2
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-8 mx-auto text-white max-w-4xl",
            Simula.className
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Not Sure Which ITR to Choose?
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-slate-50 mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Confused about the right ITR for you? Here&#39;s a quick guide
        </motion.p>
        <Learn />
        <motion.h2
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-8 mx-auto text-white max-w-4xl",
            Simula.className
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Learn about GST
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-slate-50 mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Wanna know more about GST ? Here&#39;s a quick guide
        </motion.p>
        <LearnGST />
      </div>
      {/* <StickyScrollAnimation />
       */}
      {/* <Testimonials /> */}
      <Why />
      <Footer />
    </div>
  );
}
