import { Button, cn } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { data } from "@/lib/data";
import BoxReveal from "./ui/box-reveal";

export default function Hero() {
  return (
    <div className="my-20 content-center max-w-7xl mx-auto text-center text-balance space-y-8 px-4 flex flex-col items-center">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <motion.h2
          className="text-4xl md:text-6xl text-slate-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          We handle the complexity of GST & Tax. So you can focus on your
          business.
        </motion.h2>
      </BoxReveal>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <motion.p
          className="text-xl md:text-2xl text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Check into your platform, then leave the rest to us.
        </motion.p>
      </BoxReveal>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="px-10 md:px-20 py-4 md:py-6 text-lg bg-slate-50 text-neutral-950 font-medium">
            Contact me
          </Button>
        </motion.div>
      </BoxReveal>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        <div className="space-y-4 ">
          {data[0].map((item, idx) => (
            <Card {...item} key={idx} direction={"left"} delay={idx * 0.1} />
          ))}
        </div>
        <motion.div
          className="relative h-72 w-[250px] "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Image src="/1.svg" alt="Hero Image" fill />
        </motion.div>
        <div className="space-y-4 ">
          {data[1].map((item, idx) => (
            <Card
              {...item}
              key={idx}
              direction={"right"}
              delay={(idx + 3) * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ direction, title, desc, color, delay }) {
  const rotate = direction === "left" ? 3 : -3;

  return (
    <motion.div
      className={cn(
        "px-6 md:px-8 py-4 md:py-6 rounded-lg bg-slate-50/50 text-slate-50",
        "transition-transform transform hover:scale-105"
      )}
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50, rotate: 0 }}
      animate={{ opacity: 1, x: 0, rotate: rotate }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center gap-2 ">
        <div
          className={cn("h-2 w-2 rounded-full")}
          style={{ backgroundColor: color }}
        />
        <h2 className="font-semibold text-lg md:text-xl ">{title}</h2>
      </div>
      <p className="text-base md:text-lg ">{desc}</p>
    </motion.div>
  );
}
