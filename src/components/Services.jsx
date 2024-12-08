import { services } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tags = [
  { text: "Our services", color: "bg-green-400" },
  { text: "Our services", color: "bg-orange-400" },
];

export default function Services() {
  return (
    <div className="min-h-screen text-center text-white py-20 px-4 max-w-7xl mx-auto ">
      <motion.h2
        className="text-3xl md:text-5xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let us handle the headaches,
      </motion.h2>
      <motion.p
        className="text-3xl md:text-5xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        so you can focus on what really matters
      </motion.p>
      <motion.p
        className="text-lg mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Just embed Check into your platform, then leave the rest to us.
      </motion.p>

      <div className="flex flex-col lg:flex-row justify-center gap-8 mb-16">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      <motion.div
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
      </motion.div>

      <motion.div
        className="flex justify-start"
        initial={{ opacity: 0, x: -50, scale: 1.5 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Image src="/1.svg" alt="Illustration" width={150} height={100} />
      </motion.div>
    </div>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      className={cn(
        "rounded-lg p-8 items-start text-start shadow-lg",
        service.bgColor
      )}
      style={{ color: service.color, background: service.bgColor }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
    >
      <div className="flex justify-start mb-4">
        <Image
          src={service.icon}
          alt={service.title}
          width={120}
          height={120}
        />
      </div>
      <h3 className="text-2xl lg:text-4xl font-semibold mb-2">
        {service.title}
      </h3>
      <p className="text-lg lg:text-xl mb-4">{service.description}</p>
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
