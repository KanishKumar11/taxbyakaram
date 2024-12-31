"use client";
import React from "react";
import Image from "next/image";
import StickyScroll from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Hi, I’m Shaik Akram Basha, a dedicated tax consultant and finance enthusiast with over 5 years of experience in helping clients plan and file their taxes effectively.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "With expertise in Income Tax Return (ITR) filing, GST services, and financial compliance, I aim to make tax processes simple, accurate, and stress-free for my clients. Whether you’re a salaried individual, an entrepreneur, or a stock market enthusiast, I tailor my services to your unique needs.",
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
      "5+ years of experience in tax planning and filing, ensuring maximum accuracy and compliance.\nProven track record in filing accurate ITRs and handling GST compliance.\nFull support after filing your taxes, including assistance with any notices or queries from the Income Tax Department.\nPersonalized guidance to help you save time and maximize your tax benefits.\nTransparent pricing with no hidden costs.\nRemote consultations to make services accessible and convenient.\nWhen you choose me, you’re not just hiring a tax consultant—you’re gaining a reliable partner committed to your financial well-being.",
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
