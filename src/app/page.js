"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Learn from "@/components/Learn";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { StickyScrollAnimation } from "@/components/StickyScrollAnimation";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function Home() {
  return (
    <div className="bg-neutral-950 py-5 overflow-hidden">
      <Navbar />
      <Hero />
      <StickyScrollAnimation />
      <Services />
      <Learn />
      <Testimonials />
      <Footer />
    </div>
  );
}
