"use client";
import React from "react";
import Image from "next/image";
import StickyScroll from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Taxbyakram is a premier design, development, and branding agency headquartered in Chennai. ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "Specializing in delivering top-tier creative solutions, Taxbyakram is dedicated to helping businesses enhance their brand identity, develop innovative digital products, and achieve their strategic goals with excellence and precision.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Our team consists of experienced designers, developers, and branding experts who are passionate about bringing creative ideas to life.  Our team’s innovative approach and dedication to quality make Taxbyakram a trusted partner for businesses looking to elevate their brand and digital presence.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
];
export function StickyScrollAnimation() {
  return (
    <div className="py-16 my-10 bg-slate-50">
      <StickyScroll content={content} />
    </div>
  );
}
