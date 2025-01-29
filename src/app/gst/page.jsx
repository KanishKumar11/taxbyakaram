import React from "react";
import { Simula } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const documents = [
  {
    title: "For Individuals/Proprietors",
    items: [
      "PAN Card",
      "Aadhaar Card",
      "Passport-size photograph",
      "Business address proof (utility bill/rent agreement & NOC)",
      "Bank account details (passbook or canceled cheque)",
    ],
  },
  {
    title: "For Partnership Firms/LLP",
    items: [
      "PAN Card of firm and partners",
      "Partnership deed/LLP agreement",
      "Aadhaar and photos of partners",
      "Business address proof",
      "Bank account details",
    ],
  },
  {
    title: "For Companies",
    items: [
      "PAN Card of company and directors",
      "Certificate of Incorporation",
      "MOA & AOA",
      "Business address proof",
      "Bank account details",
      "Board resolution for authorized signatory",
    ],
  },
];

export default function ITR1Page() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto space-y-10 p-6">
        <div className="bg-[#0A66C2] text-white p-10 rounded-xl text-center flex flex-col items-center">
          <h2 className={`text-4xl lg:text-6xl ${Simula.className}`}>
            Want to file GST
          </h2>
          <p className="text-lg mt-2">
            We at TaxByAkram are here to handle it all for you.
          </p>
          <button className="mt-4 px-6 py-3 bg-white text-[#0A66C2] font-bold rounded-lg">
            Contact Us
          </button>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            Documents Required for GST Registration
          </h3>
          <p className="mt-2">
            Filing Income Tax Return (ITR-1) in India requires you to gather
            certain documents and details to ensure a smooth and accurate filing
            process.
          </p>

          <ul className="mt-4 space-y-6">
            {documents.map((section, index) => (
              <li key={index}>
                <h4 className="text-xl font-bold">
                  {index + 1}. {section.title}
                </h4>
                <ul className="list-disc pl-6 mt-1">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-4 px-16 py-6 bg-[#96259C] text-white font-bold rounded-lg text-3xl">
          Contact Us
        </button>
      </div>
      <Footer />
    </>
  );
}
