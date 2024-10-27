import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import image from "/public/BottunSlide/Realassets.png";

const RealAssets = () => {
  return (
    <div className="h-screen px-20 w-full md:flex  gap-10 justify-between items-center">
      <div className="">
        <h1 className="font-semibold text-[30px]">
          Real assets,
          <br /> owned digitally!
        </h1>
        <p className="font-light text-[18px]">
          Invest in high quality real estate assets with ALT.
          <br />
          Buy, sell, trade as little as 1 SQFT at a time
          <br />
          whenever you want to!
        </p>
        <div className="flex gap-5 mt-10">
          <Button className="rounded-full ">Invest Now</Button>
          <Button className="rounded-full ">Know More</Button>
        </div>
      </div>
      <div className="mt-10">
        <Image src={image} alt="" className="w-[400px]" />
      </div>
    </div>
  );
};

export default RealAssets;
