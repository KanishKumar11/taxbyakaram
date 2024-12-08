import React, { useState } from "react";
import { motion, whileInViewPresence } from "framer-motion";
import { learnTabs } from "@/lib/data";

export default function Learn() {
  const [activeTab, setActiveTab] = useState(learnTabs[0]);

  return (
    <div className="bg-gray-50 text-center py-20 px-4 my-20 flex flex-col items-center justify-center gap-10">
      <motion.h2
        className="text-4xl md:text-6xl lg:text-8xl font-medium mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Learn about GST
      </motion.h2>
      <motion.div
        className="bg-slate-500/20 rounded-xl p-4 md:p-8 lg:p-12 w-full max-w-6xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {learnTabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 md:px-6 md:py-2 rounded-lg font-medium text-sm md:text-base ${
                activeTab.id === tab.id
                  ? "bg-black text-white"
                  : "bg-white text-black border border-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
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
            <h3 className="text-3xl md:text-5xl lg:text-7xl font-medium">
              {activeTab.label}
            </h3>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600">
              {activeTab.content}
            </p>
          </motion.div>
        </whileInViewPresence>
      </motion.div>
    </div>
  );
}
