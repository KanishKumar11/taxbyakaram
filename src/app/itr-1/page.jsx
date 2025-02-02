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
      "Bank account details (including IFSC code) for refund purposes.",
    ],
  },
  {
    title: "Income Proof",
    items: [
      "Salary Income: Form 16 (provided by your employer).",
      "Pension Income: Pension slips or bank statements showing credited pension.",
      "Other Income:",
      "Interest certificates from banks or Post Office (for savings accounts, fixed deposits, etc.).",
      "Income from other sources such as dividends, gifts, etc.",
    ],
  },
  {
    title: "Tax Deduction Proofs",
    items: [
      "Investments under Section 80C, 80D, etc.:",
      "Life insurance premium receipts.",
      "Public Provident Fund (PPF) contribution receipts.",
      "National Savings Certificates (NSC).",
      "ELSS mutual fund investment proofs.",
      "Tuition fee receipts for children.",
      "Home loan principal repayment certificate.",
      "Medical insurance premium receipts under Section 80D.",
      "Donations receipts for claiming deductions under Section 80G.",
      "Education loan interest payment certificate under Section 80E.",
    ],
  },
  {
    title: "TDS Certificates",
    items: [
      "Form 16A: For TDS deducted on income other than salary (e.g., interest).",
      "Form 16B: For TDS deducted on property sale transactions.",
      "Form 16C: For TDS deducted on rent by a tenant.",
    ],
  },
  {
    title: "Bank Statements",
    items: [
      "Statements/passbooks for all your bank accounts for the financial year.",
    ],
  },
  {
    title: "Form 26AS",
    items: [
      "A consolidated tax statement available on the Income Tax Department’s website showing TDS, advance tax, and self-assessment tax details.",
    ],
  },
  {
    title: "Advance Tax or Self-Assessment Tax",
    items: [
      "Challan receipts for any advance tax or self-assessment tax paid.",
    ],
  },
  {
    title: "Exempt Income",
    items: [
      "If you have exempt income like agricultural income (up to ₹5,000), interest from tax-free bonds, etc., details are required.",
    ],
  },
  {
    title: "Rental Income (if applicable)",
    items: [
      "Rent receipts or details of rent received (though limited income is allowed under ITR-1).",
      "Ensure all the details are accurate before filing your return to avoid errors or notices from the Income Tax Department.",
    ],
  },
];

export default function ITR1Page() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto space-y-10 p-6">
        <div className="bg-[#96259C] text-white p-10 rounded-xl text-center flex flex-col items-center">
          <h2 className={`text-4xl lg:text-6xl ${Simula.className}`}>
            Want to file ITR-1
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
            Documents needed to file ITR-1
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
