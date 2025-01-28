import React from "react";
import { Simula } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const documents = [
  {
    title: "Personal Information",
    items: [
      "PAN card",
      "Aadhaar card",
      "Bank account details (Account number, IFSC, bank name, and type of account)",
      "Form 26AS: Tax Credit Statement (downloadable from the income tax portal)",
    ],
  },
  {
    title: "Income from Business or Profession (Presumptive Taxation)",
    items: [
      "Gross receipts or turnover details:",
      "For Section 44AD: Business turnover",
      "For Section 44ADA: Professional receipts",
      "For Section 44AE: Income from goods vehicles",
      "Proof of GST registration (if registered under GST)",
      "Bank statements related to the business/profession",
      "Details of vehicles (for Section 44AE, if applicable)",
    ],
  },
  {
    title: "Income from Salary",
    items: [
      "Form 16: Provided by your employer, detailing salary and TDS deductions",
      "Salary slips (if required)",
    ],
  },
  {
    title: "Income from House Property",
    items: [
      "Details of owned properties (self-occupied/rented)",
      "Rent receipts (for rental income)",
      "Home loan interest certificate (if claiming deductions under Section 24(b))",
      "Municipal taxes paid receipts",
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
      "Proof of investments under Section 80C, 80D, etc., such as:",
      "Life insurance premium receipts",
      "Public Provident Fund (PPF) contribution",
      "ELSS mutual fund statements",
      "National Savings Certificate (NSC)",
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
      "Income earned abroad or through foreign investments",
      "Details of foreign property or assets",
    ],
  },
  {
    title: "Other Supporting Documents",
    items: [
      "Aadhaar-linked mobile number for OTP verification",
      "Documents for carry-forward of losses (if applicable)",
    ],
  },
];

export default function ITR3Page() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto space-y-10 p-6">
        <div className="bg-[#96259C] text-white p-10 rounded-xl text-center flex flex-col items-center">
          <h2 className={`text-4xl lg:text-6xl ${Simula.className}`}>
            Want to file ITR-3
          </h2>
          <p className="text-lg mt-2">
            We at Taab/Akram are here to handle it all for you.
          </p>
          <button className="mt-4 px-6 py-3 bg-white text-[#96259C] font-bold rounded-lg">
            Contact Us
          </button>
        </div>

        <div>
          <h3 className="text-3xl font-bold">Documents needed to file ITR-3</h3>
          <p className="mt-2">
            Filing Income Tax Return (ITR-3) in India requires you to gather
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
