import React from "react";
import Image from "next/image";
import EarnPeriodic from "/public/money-hand.svg";
import longTerm from "/public/long-term.svg";
import { Button } from "./ui/button";
import TradeCard from "./TradeCard";

const Hero = () => {
  return (
    <div className="lg:flex  px-10  pt-28 justify-between  items-center h-full gap-10">
      <div className="mx-32 md:mx-auto">
        <h1 className="text-[24px] sm:text-[55px] lg:text-[55px] font-bold text-parenttheme-primary">
          Invest in Real Estate
        </h1>
        <h1 className="text-[24px] px-2 sm:text-[55px] sm:p-0 lg:text-[55px] lg:p-0 font-bold text-parenttheme-secondary">
          1 SQFT at a time
        </h1>
        <h2 className="uppercase text-[16px]  font-thin ">
          starts with $10,000 onwards
        </h2>
        <div className="">
          <div className="lg:flex flex-row gap-2 gap-x-2 font-light text-[16px]">
            <div className="flex items-center gap-x-12">
              <Image src={EarnPeriodic} alt="" />
              <h2 className="font-light text-[16px] w-[100px]">
                Earn Periodic Income{" "}
              </h2>
            </div>
            <div className="flex items-center gap-x-12">
              <Image src={longTerm} alt="" />
              <h2 className="font-light  text-[16px] w-[100px]">
                Long Term Capital Appreciation
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center gap-10 mt-5">
            <Button className="rounded-full">Sign Up </Button>
            <Button className="rounded-full">Invest Now</Button>
          </div>
        </div>
      </div>
      <div className="">
        <TradeCard />
      </div>
    </div>
  );
};

export default Hero;
