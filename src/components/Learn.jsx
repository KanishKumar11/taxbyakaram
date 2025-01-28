import React, { useState } from "react";
import { motion } from "framer-motion";
import { learnTabs } from "@/lib/data";
import { Button } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { Simula } from "@/lib/fonts";
import Link from "next/link";

export default function Learn() {
  const [activeTab, setActiveTab] = useState(learnTabs[0]);

  return (
    <div className="bg-gray-50 text-center py-20 lg:px-4 my-20 flex flex-col items-center justify-center gap-10 lg:w-max mx-auto rounded-3xl ">
      <motion.div
        className=" rounded-xl p-4 md:p-8 lg:p-12 lg:w-max "
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 ">
          {learnTabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2 md:px-14 md:py-3 rounded-lg w-[40%] sm:w-auto font-medium text-sm md:text-base uppercase ${
                activeTab.id === tab.id
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.id}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <whileInViewPresence mode="wait">
          <motion.div
            key={activeTab.id}
            className="rounded-lg max-w-4xl mx-auto p-4 md:p-8 text-left space-y-6 md:space-y-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className={cn(
                "text-3xl md:text-5xl lg:text-7xl font-et-light text-gray-800",
                Simula.className
              )}
            >
              {activeTab.label}
            </h3>
            <div className="w-[90%] h-[1px] bg-slate-200 mx-auto my-16" />
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
              {activeTab.content}
            </p>

            <Button
              as={Link}
              href="https://wa.me/+919949947465"
              className="bg-[#1E0938] text-white px-8 lg:py-8 lg:px-12 text-base lg:text-xl rounded-xl"
            >
              Contact us
            </Button>
          </motion.div>
        </whileInViewPresence>
      </motion.div>
    </div>
  );
}
