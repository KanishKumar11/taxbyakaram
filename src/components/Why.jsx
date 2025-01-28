import { Simula } from "@/lib/fonts";
import React from "react";

const data = [
  {
    subtitle: "We Strive for perfection",
    title: "Personalized Tax Solutions",
    description:
      "Tailored services to meet your unique tax situation and financial objectives, ensuring compliance and optimization.",
  },
  {
    subtitle: "Your benefits",
    title: "Expert Support and Guidance",
    description:
      "Assistance with tax notices, audits, and effective planning strategies to minimize your tax burden.",
  },
  {
    subtitle: "We Strive for perfection",
    title: "Timely and Client-Focused Service",
    description:
      "Prompt, accurate support with a client-centric approach to meet your tax needs efficiently and effectively.",
  },
  {
    subtitle: "Your benefits",
    title: "Handling Notices",
    description:
      "If you receive a notice from the tax department, I offer expert assistance to help you respond effectively.",
  },
  {
    subtitle: "We Strive for perfection",
    title: "Tax Planning and Optimization",
    description:
      "I help you minimize your tax burden through effective tax planning and optimization strategies.",
  },
  {
    subtitle: "Your benefits",
    title: "Consultations on Tax Audits",
    description:
      "In the event of a tax audit, I provide guidance and support throughout the process to ensure a smooth experience.",
  },
];

export default function Why() {
  return (
    <div className="max-w-7xl mx-auto p-5 py-20">
      <h2
        className={`${Simula.className} lg:text-6xl text-4xl text-center my-10`}
      >
        Why choose Tax by Akram
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {data.map((item, index) => (
          <WhyCard
            key={index}
            subtitle={item.subtitle}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <ContactUs />
    </div>
  );
}

function WhyCard({ subtitle, title, description }) {
  return (
    <div className="bg-gradient-to-br from-[#581CA0] to-[#96259C] rounded-xl p-7 pb-20 flex flex-col gap-8 text-white">
      <div className="bg-[#ECBF53] text-[#1C003E] p-2 px-7 w-max rounded-3xl font-medium">
        {subtitle}
      </div>
      <h3 className={`lg:text-4xl text-2xl font-bold ${Simula.className}`}>
        {title}
      </h3>
      <p className="lg:text-xl">{description}</p>
    </div>
  );
}

function ContactUs() {
  return (
    <div className="bg-black text-white rounded-xl px-20 py-16 mt-10 flex flex-col gap-4 ">
      <h2 className="text-6xl  font-bold">Contact Us</h2>
      <p className="text-lg">
        Reach out today for expert tax solutions and personalized
        guidance—let&#39;s simplify your tax journey together!
      </p>
      <button className="bg-[#96259C] text-white px-5 py-3 rounded-md font-semibold w-max">
        Contact us
      </button>
    </div>
  );
}
