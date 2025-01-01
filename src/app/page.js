"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Learn from "@/components/Learn";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { StickyScrollAnimation } from "@/components/StickyScrollAnimation";
import Testimonials from "@/components/Testimonials";
import { Simula } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <div className="bg-white py-5 relative">
      <div className=" bg-gradient-to-b from-[#00ADEE] to-[#006388]  rounded-3xl pt-5 lg:mb-[500px] mb-[140px] sm:mb-[250px] lg:px-4 px-2">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <div className=" bg-gradient-to-b from-[#00ADEE]  to-[#006388] lg:mx-10 rounded-3xl px-4 py-20">
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
      </div>
      {/* <StickyScrollAnimation />
       */}
      <Testimonials />
      <Footer />
    </div>
  );
}
