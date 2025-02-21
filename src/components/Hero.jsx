import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className=" bg-gradient-to-br from-[#581CA0] to-[#96259C] pt-10 pb-20 rounded-b-[90px] space-y-10">
      <div className="bg-[#8E249C] text-slate-50 text-center py-2">
        Served more than 1000+ Clients & counting{" "}
      </div>
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center justify-center text-white">
        <div className="lg:w-1/2 p-4 flex flex-col gap-5">
          <h1 className="text-7xl text-balance">Plan File & Save-Taxes</h1>
          <p className="text-balance lg:max-w-xl text-left">
            Offering customized solutions tailored to your specific tax
            situation and financial goals.
          </p>
          <div className="flex flex-row gap-5 items-center ">
            <Button className="bg-white px-8 py-4">Contact Us</Button>
            <Link href="/#services" className="underline underline-offset-2">
              Our services
            </Link>
          </div>
        </div>
        <div>
          <Image src="/1.svg" alt="tax" width={500} height={1000} />
        </div>
      </div>
    </div>
  );
}
