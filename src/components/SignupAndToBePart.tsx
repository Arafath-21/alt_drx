import React from "react";
import { Button } from "./ui/button";
import slide2 from "/public/BottunSlide/bottomSlider2.png";
import Image from "next/image";

const SignupAndToBePart = () => {
  return (
    <div className="h-screen px-20 md:flex justify-between items-center">
      <div className="">
        <h2 className="text-[35px] font-semibold ">
          <span className="text-parenttheme-secondary">Sign-up</span> and be
          part of a regular stream of Digital Real Estate Investment
          Opportunities
        </h2>
        <div className=" flex gap-10 mt-5">
          <Button className="rounded-full">Sign Up </Button>
          <Button className="rounded-full">Invest Now</Button>
        </div>
      </div>
      <div className="">
        <Image src={slide2} alt="" className="w-[400px]" />
      </div>
    </div>
  );
};

export default SignupAndToBePart;
