import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="bg-neutral-950 text-gray-200 euclid">
      <div className="mx-auto max-w-7xl lg:px-20 py-10 px-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-10 flex-row flex-wrap">
            <div className="flex flex-col gap-5">
              <h3 className="text-4xl text-white">
                <Logo />
              </h3>
              <p className="text-gray-300">Address : Ram nagar, Anantapur</p>
              <Link
                href="mailto:Taxbyakram@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Email: Taxbyakram@gmail.com
              </Link>
              <Link
                href="tel:+919949947465"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Phone: +91 99499 47465
              </Link>
            </div>
            <div className="flex gap-5 flex-col">
              <h3 className="text-3xl text-white">Company</h3>
              <div className="flex flex-col gap-5">
                <Link
                  href="/#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About us
                </Link>
                <Link
                  href="https://wa.me/+919949947465"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="#"
            className="justify-self-start self-start group"
            aria-label="Scroll to top"
          >
            <div className="cursor-pointer transition-transform group-hover:-translate-y-1">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-[#96259c] hover:bg-blue-600 rounded-full transition-colors"
              >
                <rect
                  width="56"
                  height="56"
                  rx="28"
                  className="fill-[#96259c]"
                />
                <path
                  d="M21.88 32.9386L28 26.8319L34.12 32.9386L36 31.0586L28 23.0586L20 31.0586L21.88 32.9386Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-10">
          <div className="lg:text-6xl text-4xl text-center my-10 text-white">
            @contact me
          </div>
          <div className="flex items-center justify-center gap-10">
            <Link
              href="#"
              className="hover:opacity-80 transition-opacity"
              aria-label="Social Media Link 1"
            >
              <Image src="/27.svg" alt="" width={50} height={50} />
            </Link>
            <Link
              href="#"
              className="hover:opacity-80 transition-opacity"
              aria-label="Social Media Link 2"
            >
              <Image src="/28.svg" alt="" width={50} height={50} />
            </Link>
            <Link
              href="#"
              className="hover:opacity-80 transition-opacity"
              aria-label="Social Media Link 3"
            >
              <Image src="/29.svg" alt="" width={50} height={50} />
            </Link>
          </div>
        </div>
        <div className="mt-10 text-gray-400 text-center border-t border-gray-800 pt-8">
          &copy; 2024 All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
