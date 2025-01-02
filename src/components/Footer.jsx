import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className=" text-neutral-900 euclid">
      <div className="mx-auto max-w-7xl lg:px-20 py-10 px-8">
        <div className=" flex items-center justify-between">
          <div className="flex gap-10  flex-row flex-wrap">
            <div className="flex flex-col gap-5 ">
              <h3 className="text-4xl text-slate-950">
                <Logo />
              </h3>
              <p>Address : Ram nagar, Anantapur</p>
              <Link href="mailto:Taxbyakram@gmail.com">
                Email: Taxbyakram@gmail.com
              </Link>
              <Link href="tel:+919949947465">Phone: +91 99499 47465</Link>
            </div>
            <div className="flex gap-5 flex-col">
              <h3 className="text-3xl text-[#000000]">Company</h3>

              <div className=" flex flex-col gap-5">
                <Link href="/#about">About us</Link>
                <Link href="https://wa.me/+919949947465">Contact us</Link>
              </div>
            </div>
          </div>
          <Link href="#" className=" justify-self-start self-start">
            {" "}
            <div className="cursor-pointer">
              {" "}
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="28" fill="#00ADEE" />
                <path
                  d="M21.88 32.9386L28 26.8319L34.12 32.9386L36 31.0586L28 23.0586L20 31.0586L21.88 32.9386Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="">
          <div className="lg:text-6xl text-4xl text-center my-10">
            @contact me{" "}
          </div>
          <div className="flex items-center justify-center gap-10">
            <Link href="#">
              <Image src="/27.svg" alt="" width={50} height={50} />
            </Link>
            <Link href="#">
              <Image src="/28.svg" alt="" width={50} height={50} />
            </Link>{" "}
            <Link href="#">
              <Image src="/29.svg" alt="" width={50} height={50} />
            </Link>
          </div>
        </div>
        <div className="mt-10">&copy; 2024 All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
