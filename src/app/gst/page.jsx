import React from "react";
import { Simula } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

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
          <Link href="/https://wa.me/+919949947465">
            <button className="mt-4 px-6 py-3 bg-white text-[#96259C] hover:bg-slate-100 font-bold rounded-lg">
              Contact Us
            </button>
          </Link>
        </div>

        <div>
          <h3 className={`lg:text-7xl text-4xl ${Simula.className} py-10 `}>
            Documents needed to file GST
          </h3>
          {/* <p className="mt-2">
          Filing Income Tax Return (ITR-1) in India requires you to gather
          certain documents and details to ensure a smooth and accurate filing
          process.
        </p> */}

          <ul className="mt-4 space-y-6">
            {documents.map((section, index) => (
              <li
                key={index}
                className="flex lg:gap-5 gap-1 lg:flex-row flex-col"
              >
                <h4 className="text-xl flex items-center justify-center lg:min-w-[300px] max-w-[300px] bg-[#EFEFEF] py-5 lg:px-10 rounded-2xl text-balance text-center lg:font-normal font-bold">
                  {section.title}
                </h4>
                <ul className="list-none pl-6  bg-[#EFEFEF] py-5 px-10 rounded-2xl w-full text-lg">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <Link href="https://wa.me/+919949947465">
          <button className="mt-4 px-16 py-6 bg-[#96259C] hover:bg-[#96259C]/90 my-20 text-white font-bold rounded-lg text-3xl">
            Contact Us
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
