import React from "react";
import { Simula } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const documents = [
  {
    title: "Personal Information",
    items: [
      "PAN Card",
      "Aadhaar Card",
      "Bank account details (Account number, IFSC, bank name, and type of account)",
      "Form 26AS: Tax Credit Statement (downloadable from the income tax portal)",
    ],
  },
  {
    title: "Income from Salary",
    items: [
      "Form 16 provided by your employer, detailing salary and TDS deductions",
      "Salary slips if required",
    ],
  },
  {
    title: "Income from House Property",
    items: [
      "Details of owned properties (self-occupied/rented)",
      "Rent receipts (for rental income)",
      "Home loan interest certificates (if claiming deductions under Section 24(b))",
      "Municipal taxes paid receipts",
    ],
  },
  {
    title: "Income from Capital Gains",
    items: [
      "Transaction statements from broker/demat account for shares, mutual funds, etc.",
      "Purchase and sale deeds for property transactions",
      "Capital gains computation statement if applicable",
      "Indexation cost details for long-term assets",
    ],
  },
  {
    title: "Income from Other Sources",
    items: [
      "Interest certificates from banks and post offices",
      "Dividend income details",
      "Details of any gifts received (if applicable)",
      "Income from fixed deposits, recurring deposits, or other investments",
    ],
  },
  {
    title: "Tax-Saving Investments & Deductions",
    items: [
      "Proof of investment under Section 80C, 80D, etc., such as:",
      "Life insurance premium receipts",
      "Public Provident Fund (PPF) contribution",
      "ELSS mutual fund investment",
      "National Saving Certificate (NSC)",
      "Tuition fees paid for children",
      "Health insurance premium receipts (Section 80D)",
      "Donations receipts (Section 80G)",
      "Home loan principal repayment receipts",
    ],
  },
  {
    title: "TDS & Advance Tax Payments",
    items: [
      "Form 16A/16B/16C for TDS on interest, rent, or property sale",
      "Self-assessment/advance tax payment receipts (if applicable)",
    ],
  },
  {
    title: "Foreign Income/Assets (if applicable)",
    items: [
      "Foreign bank account details",
      "Income earned from foreign investments",
      "Details of foreign property or assets",
    ],
  },
  {
    title: "Other Supporting Documents",
    items: [
      "Aadhaar-linked mobile number for OTP verification",
      "Documents for carry-forward of losses (e.g., capital loss statements from previous years)",
    ],
  },
];

export default function ITR2Page() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto space-y-10 p-6">
        <div className="bg-[#96259C] text-white p-10 rounded-xl text-center flex flex-col items-center">
          <h2 className={`text-4xl lg:text-6xl ${Simula.className}`}>
            Want to file ITR-2
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
            Documents needed to file ITR-2
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
