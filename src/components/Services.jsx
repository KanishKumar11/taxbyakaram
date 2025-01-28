import { services } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Simula } from "@/lib/fonts";

export default function Services() {
  return (
    <div
      id="about"
      className="min-h-screen text-center text-neutral-950 py-20 px-4 max-w-7xl mx-auto "
    >
      <motion.h2
        className={cn(
          "text-4xl md:text-8xl max-w-6xl mx-auto font-extralight text-center mb-4",
          Simula.className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I&#39;m Shaik Akram Basha
      </motion.h2>
      <motion.p
        className="text-base max-w-6xl mx-auto text-justify md:text-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A tax consultant with 5+ years of expertise in ITR filing, GST services,
        and tax planning. I provide accurate, stress-free solutions,
        personalized guidance, and full post-filing support. With transparent
        pricing and remote consultations, I ensure your financial well-being and
        maximize your tax benefits effortlessly.{" "}
      </motion.p>

      <div className="grid grid-cols-1 max-w-5xl mx-auto gap-4 mb-16">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      className={cn("rounded-lg px-8 items-center  gap-4 text-start flex ")}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
    >
      <div className="flex justify-start mb-4 h-10 w-10 lg:h-12 lg:w-12 aspect-square">
        <Image
          src={service.icon}
          alt={service.title}
          width={120}
          height={120}
        />
      </div>
      <p className="text-base lg:text-2xl mb-4">{service.description}</p>
    </motion.div>
  );
}
