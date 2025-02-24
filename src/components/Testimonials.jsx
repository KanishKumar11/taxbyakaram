import React from "react";
import Marquee from "./ui/marquee";
import Image from "next/image";
const testimonials = [
  "/5.svg",
  "/5.svg",
  "/5.svg",
  "/5.svg",
  "/5.svg",
  "/5.svg",
  "/5.svg",
  "/5.svg",
  "/5.svg",
];
export default function Testimonials() {
  return (
    <div className="relative flex min-h-[300px] lg:min-h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg my-20 mx-auto border py-10 bg-background md:shadow-xl max-w-[95vw]">
      {" "}
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {testimonials.map((testimonial, i) => (
          <div key={i}>
            <Image
              src={testimonial}
              alt=""
              // fill
              width={1000}
              height={1000}
              className=" max-h-[300px] lg:max-h-[500px] lg:mx-10 w-auto"
            />{" "}
          </div>
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 lg:w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 lg:w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
}
