"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { poppins } from "@/lib/fonts";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className={poppins.className}>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-semibold">Income Tax Services</h1>
          <p className="text-base">
            At <b>TaxbyAkram</b>, we specialize in making Income Tax Return
            (ITR) filing simple, accurate, and stress-free. Our team of experts
            ensures that your ITR filing is done seamlessly, complying with all
            legal requirements. Whether you are a salaried individual,
            self-employed, or a business owner, we&#39;ve got you covered for
            all types of ITR filings: <b>ITR-1, ITR-2, ITR-3, and ITR-4</b>.
          </p>
          <h2 className="text-2xl font-semibold">
            Understanding the Different ITR Forms
          </h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <b className="font-semibold">ITR-1 (Sahaj)</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>For individuals with income from:</li>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Salary or pension.</li>
                  <li>One house property.</li>
                  <li>Other sources (e.g., interest income).</li>
                </ul>
                <li>Total income should not exceed ₹50 lakh.</li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">ITR-2</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  For individuals and Hindu Undivided Families (HUFs) with
                  income from:
                </li>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Salary or pension.</li>
                  <li>Multiple house properties.</li>
                  <li>Capital gains.</li>
                  <li>Other sources (e.g., interest, dividends).</li>
                </ul>
                <li>
                  Applicable if total income exceeds ₹50 lakh or if there is no
                  business income.
                </li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">ITR-3</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>For individuals and HUFs with income from:</li>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Business or profession.</li>
                  <li>
                    Any other sources, including salary, house property, and
                    capital gains.
                  </li>
                </ul>
              </ul>
            </li>
            <li>
              <b className="font-semibold">ITR-4 (Sugam)</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  For individuals, HUFs, and firms (other than LLPs) opting for
                  the Presumptive Taxation Scheme under Sections 44AD, 44ADA, or
                  44AE:
                </li>
                <li>Total income should not exceed ₹50 lakh.</li>
              </ul>
            </li>
          </ol>
          <h2 className="text-2xl font-semibold">
            Documents Required for ITR Filing
          </h2>
          <p className="text-base">
            To ensure smooth and accurate filing, you’ll need the following
            documents:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <b className="font-semibold">Personal Information:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>PAN Card.</li>
                <li>Aadhaar Card.</li>
                <li>Bank account details (including IFSC code).</li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">Income Proof:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>Salary slips or Form 16 for salaried individuals.</li>
                <li>Bank statements showing interest earned.</li>
                <li>Income from capital gains (if applicable).</li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">Investment Proof:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Documents related to tax-saving investments (e.g., PPF, ELSS,
                  LIC premiums).
                </li>
                <li>Proof of housing loan principal repayment.</li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">Tax Deduction Documents:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>TDS certificates.</li>
                <li>Form 26AS (Tax Credit Statement).</li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">
                Additional Documents for Specific Cases:
              </b>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Business income: Profit and loss statements, balance sheet,
                  and GST details.
                </li>
                <li>Rental income: Rent receipts and ownership documents.</li>
                <li>Capital gains: Purchase and sale details of assets.</li>
              </ul>
            </li>
          </ol>
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <p className="text-base">
            At <b>TaxbyAkram</b>, we offer a seamless, end-to-end solution for
            filing your Income Tax Returns:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <b className="font-semibold">Customized Filing Assistance:</b>{" "}
              Whether you need ITR-1, ITR-2, ITR-3, or ITR-4, we determine the
              right form for you based on your income sources.
            </li>
            <li>
              <b className="font-semibold">Document Management:</b> We collect,
              organize, and verify all required documents to avoid errors and
              ensure compliance.
            </li>
            <li>
              <b className="font-semibold">Expert Advice:</b> Our tax
              professionals optimize deductions and exemptions to reduce your
              tax liability.
            </li>
            <li>
              <b className="font-semibold">Accurate Filing:</b> We prepare and
              file your return with precision to avoid notices or penalties.
            </li>
            <li>
              <b className="font-semibold">Post-Filing Support:</b> We provide
              assistance with refunds, assessments, or any queries from the
              Income Tax Department.
            </li>
          </ol>
        </div>
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold">Income Tax Services</h1>
          <p className="text-base">
            At <b>TaxbyAkram</b>, we specialize in making Income Tax Return
            (ITR) filing simple, accurate, and stress-free. Our team of experts
            ensures that your ITR filing is done seamlessly, complying with all
            legal requirements. Whether you are a salaried individual,
            self-employed, or a business owner, we&#9;ve got you covered for all
            types of ITR filings: <b>ITR-1, ITR-2, ITR-3, and ITR-4</b>.
          </p>
          <h2 className="text-2xl font-semibold">
            Understanding the Different ITR Forms
          </h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <b className="font-semibold">ITR-1 (Sahaj)</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>For individuals with income from:</li>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Salary or pension.</li>
                  <li>One house property.</li>
                  <li>Other sources (e.g., interest income).</li>
                </ul>
                <li>Total income should not exceed ₹50 lakh.</li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">ITR-2</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  For individuals and Hindu Undivided Families (HUFs) with
                  income from:
                </li>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Salary or pension.</li>
                  <li>Multiple house properties.</li>
                  <li>Capital gains.</li>
                  <li>Other sources (e.g., interest, dividends).</li>
                </ul>
                <li>
                  Applicable if total income exceeds ₹50 lakh or if there is no
                  business income.
                </li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">ITR-3</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>For individuals and HUFs with income from:</li>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Business or profession.</li>
                  <li>
                    Any other sources, including salary, house property, and
                    capital gains.
                  </li>
                </ul>
              </ul>
            </li>
            <li>
              <b className="font-semibold">ITR-4 (Sugam)</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  For individuals, HUFs, and firms (other than LLPs) opting for
                  the Presumptive Taxation Scheme under Sections 44AD, 44ADA, or
                  44AE:
                </li>
                <li>Total income should not exceed ₹50 lakh.</li>
              </ul>
            </li>
          </ol>
          <h2 className="text-2xl font-semibold">
            Documents Required for ITR Filing
          </h2>
          <p className="text-base">
            To ensure smooth and accurate filing, you’ll need the following
            documents:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <b className="font-semibold">Personal Information:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>PAN Card.</li>
                <li>Aadhaar Card.</li>
                <li>Bank account details (including IFSC code).</li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">Income Proof:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>Salary slips or Form 16 for salaried individuals.</li>
                <li>Bank statements showing interest earned.</li>
                <li>Income from capital gains (if applicable).</li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">Investment Proof:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Documents related to tax-saving investments (e.g., PPF, ELSS,
                  LIC premiums).
                </li>
                <li>Proof of housing loan principal repayment.</li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">Tax Deduction Documents:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>TDS certificates.</li>
                <li>Form 26AS (Tax Credit Statement).</li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">
                Additional Documents for Specific Cases:
              </b>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Business income: Profit and loss statements, balance sheet,
                  and GST details.
                </li>
                <li>Rental income: Rent receipts and ownership documents.</li>
                <li>Capital gains: Purchase and sale details of assets.</li>
              </ul>
            </li>
          </ol>
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <p className="text-base">
            At <b>TaxbyAkram</b>, we offer a seamless, end-to-end solution for
            filing your Income Tax Returns:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <b className="font-semibold">Customized Filing Assistance:</b>{" "}
              Whether you need ITR-1, ITR-2, ITR-3, or ITR-4, we determine the
              right form for you based on your income sources.
            </li>
            <li>
              <b className="font-semibold">Document Management:</b> We collect,
              organize, and verify all required documents to avoid errors and
              ensure compliance.
            </li>
            <li>
              <b className="font-semibold">Expert Advice:</b> Our tax
              professionals optimize deductions and exemptions to reduce your
              tax liability.
            </li>
            <li>
              <b className="font-semibold">Accurate Filing:</b> We prepare and
              file your return with precision to avoid notices or penalties.
            </li>
            <li>
              <b className="font-semibold">Post-Filing Support:</b> We provide
              assistance with refunds, assessments, or any queries from the
              Income Tax Department.
            </li>
          </ol>
        </div>
        <Button
          as={Link}
          href="https://wa.me/+919949947465"
          className="bg-[rgba(1,154,212,1)] ml-5 text-white px-8 lg:py-6 lg:px-12 text-base lg:text-xl rounded-lg"
        >
          Contact us
        </Button>
        <div className="w-full h-0.5 my-10 mx-auto bg-slate-500/20" />
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold">GST Services</h1>
          <p className="text-base">
            GST Registration is a pivotal process for businesses operating in
            India, mandated under the Goods and Services Tax (GST) Act. It is a
            legal obligation for entities whose annual turnover exceeds the
            prescribed threshold. By obtaining GST registration, businesses
            ensure compliance with taxation laws, enabling them to collect GST
            from customers and remit it to the government. This not only fosters
            transparency but also streamlines tax administration across the
            country.
          </p>
          <h2 className="text-2xl font-semibold">
            Who Needs GST Registration?
          </h2>
          <p className="text-base">
            GST registration is essential for various categories of businesses
            and individuals. These include:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <b className="font-semibold">Businesses Dealing in Goods:</b>{" "}
              Entities with an annual turnover exceeding ₹40 lakh are required
              to register under GST. For businesses in special category states,
              the threshold is ₹20 lakh.
            </li>
            <li>
              <b className="font-semibold">Service Providers:</b> Businesses
              offering services must register if their annual turnover exceeds
              ₹20 lakh (₹10 lakh for special category states).
            </li>
            <li>
              <b className="font-semibold">Interstate Suppliers:</b> Individuals
              or entities supplying goods or services across state boundaries
              must obtain GST registration.
            </li>
            <li>
              <b className="font-semibold">E-commerce Operators:</b> Platforms
              facilitating online sales, as well as aggregators, are obligated
              to register.
            </li>
            <li>
              <b className="font-semibold">
                Casual Taxable Persons and Non-Resident Taxable Persons:
              </b>{" "}
              These include temporary businesses and foreign entities operating
              in India.
            </li>
            <li>
              <b className="font-semibold">
                Businesses under Reverse Charge Mechanism:
              </b>{" "}
              Entities responsible for paying GST on behalf of their suppliers
              must also register.
            </li>
          </ol>
          <h2 className="text-2xl font-semibold">
            Benefits of GST Registration
          </h2>
          <p className="text-base">
            Registering under GST offers several advantages:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <b className="font-semibold">Legal Recognition:</b> It provides a
              business with formal recognition, enhancing its credibility and
              trustworthiness.
            </li>
            <li>
              <b className="font-semibold">Input Tax Credit (ITC):</b>{" "}
              Registered entities can claim ITC on taxes paid for inputs,
              reducing their overall tax liability.
            </li>
            <li>
              <b className="font-semibold">Business Expansion:</b> GST
              registration facilitates seamless business operations across state
              borders, promoting growth opportunities.
            </li>
          </ol>
          <h2 className="text-2xl font-semibold">
            Documents Required for GST Registration
          </h2>
          <p className="text-base">
            Obtaining GST registration requires the submission of specific
            documents, categorized as follows:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <b className="font-semibold">Business Details:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>PAN card of the business or proprietor.</li>
                <li>
                  Proof of business registration, such as a Certificate of
                  Incorporation or Partnership Deed.
                </li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">Identity and Address Proof:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Aadhaar card and passport-sized photographs of the proprietor,
                  partners, or directors.
                </li>
                <li>
                  Address proof of the business location, such as a rent
                  agreement or utility bill.
                </li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">Bank Details:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  A canceled cheque or the first page of the bank
                  statement/passbook.
                </li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">Digital Signature:</b>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  A Class 2 or Class 3 Digital Signature Certificate (DSC) for
                  companies and Limited Liability Partnerships (LLPs).
                </li>
              </ul>
            </li>
            <li>
              <b className="font-semibold">
                Additional Documents (If Applicable):
              </b>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  A Letter of Authorization for authorized representatives.
                </li>
                <li>A Letter of Undertaking (LUT) or Bond for exporters.</li>
              </ul>
            </li>
          </ol>
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <p className="text-base">
            At <b>TaxbyAkram</b>, we take the hassle out of the GST registration
            process, allowing you to focus on growing your business. Our expert
            team handles every aspect of the registration process efficiently,
            ensuring compliance with all legal requirements.
          </p>
          <h3 className="text-xl font-semibold">Here&#39;s How We Help You:</h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <b className="font-semibold">Comprehensive Guidance:</b> We
              provide step-by-step assistance to ensure your GST registration is
              seamless.
            </li>
            <li>
              <b className="font-semibold">Document Preparation:</b> From
              verifying your PAN and Aadhaar details to preparing necessary
              documents like business registration proofs and bank statements,
              we handle it all.
            </li>
            <li>
              <b className="font-semibold">Application Submission:</b> Our
              experts ensure your application is accurately filled and promptly
              submitted to avoid delays.
            </li>
            <li>
              <b className="font-semibold">Quick Approvals:</b> With our
              thorough process, we expedite approvals so you can start
              benefiting from GST registration sooner.
            </li>
            <li>
              <b className="font-semibold">Post-Registration Support:</b> We
              don’t stop at registration. We also assist you in understanding
              GST compliance, filing returns, and leveraging Input Tax Credit
              (ITC).
            </li>
          </ol>
          <h3 className="text-xl font-semibold">Why Choose TaxbyAkram?</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Experienced professionals with a deep understanding of GST laws.
            </li>
            <li>End-to-end support for a stress-free experience.</li>
            <li>Affordable pricing for hassle-free GST registration.</li>
          </ul>
          <p className="text-base">
            <b>TaxbyAkram</b> simplifies GST registration for you. Reach out to
            us today, and we’ll ensure you’re GST-ready in no time!
          </p>
        </div>
        <Button
          as={Link}
          href="https://wa.me/+919949947465"
          className="bg-[rgba(1,154,212,1)] ml-5 text-white px-8 lg:py-6 lg:px-12 text-base lg:text-xl rounded-lg"
        >
          Contact us
        </Button>
      </div>

      <Footer />
    </div>
  );
}
