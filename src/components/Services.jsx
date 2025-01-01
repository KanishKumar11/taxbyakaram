import { services } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Simula } from "@/lib/fonts";

const tags = [
  { text: "Our services", color: "bg-green-400" },
  { text: "Our services", color: "bg-orange-400" },
];

export default function Services() {
  return (
    <div className="min-h-screen text-center text-neutral-950 py-20 px-4 max-w-7xl mx-auto ">
      <motion.h2
        className={cn(
          "text-4xl md:text-8xl max-w-4xl mx-auto font-extralight text-center mb-4",
          Simula.className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I&#39;m Shaik Akram Basha
      </motion.h2>
      <motion.p
        className="text-base max-w-5xl mx-auto md:text-xl mb-8"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <TagItem
                  key={`${index}-${i}`}
                  tag={tag}
                  delay={0.1 * (index * 4 + i)}
                />
              ))}
          </React.Fragment>
        ))}
      </motion.div> */}
    </div>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      className={cn("rounded-lg px-8 items-center  gap-4 text-start flex ")}
      // style={{ color: service.color, background: service.bgColor }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
    >
      <div className="flex justify-start mb-4 h-10 w-10 aspect-square">
        <Image
          src={service.icon}
          alt={service.title}
          width={120}
          height={120}
        />
      </div>
      {/* <h3 className="text-2xl lg:text-4xl font-semibold mb-2">
        {service.title}
      </h3> */}
      <p className="text-base lg:text-xl mb-4">{service.description}</p>
    </motion.div>
  );
}

function TagItem({ tag, delay }) {
  return (
    <motion.div
      className="flex items-center justify-center gap-2 py-2 px-4 bg-white rounded-full text-black shadow-md"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <div className={`h-2 w-2 rounded-full ${tag.color}`}></div>
      <span className="text-sm">{tag.text}</span>
    </motion.div>
  );
}
