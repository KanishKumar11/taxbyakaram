import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <div className="font-medium lg:text-3xl text-base lg:mr-16">
        Taxbyakram
      </div>
    </Link>
  );
}
