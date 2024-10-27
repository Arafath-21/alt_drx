import React from "react";
import Image from "next/image";
import RightArrow from "/public/rightarrow.svg";
import { Button } from "./ui/button";

const EmailCard = () => {
  return (
    <div className="w-[300px] lg:w-[500px] h-[230px] bg-white rounded-lg">
      <div className="bg-background-secondary flex justify-between px-5 py-3  rounded-t-lg">
        <h1 className="text-white text-[16px]">JOIN OUR MAILING LIST</h1>
        <Image src={RightArrow} alt="" className="w-[12px]" />
      </div>
      <div className="border-b flex items-center gap-3 py-3 px-4">
        <h2 className="text-black font-bold ">Email</h2>
        <input
          type="text"
          placeholder="Enter Your email Address"
          className="outline-none px-2 py-1   w-full"
        />
      </div>
      <div className=" border-b flex items-center gap-3 py-3 px-4">
        <h2 className="text-black font-bold ">Subject</h2>
        <input
          type="text"
          placeholder="I don't want to miss out on anything! "
          className="outline-none px-2 py-1  w-full  "
        />
      </div>
      <div className="flex justify-end mt-3 w-full pr-5">
        <Button className="rounded-full ">Subscribe</Button>
      </div>
    </div>
  );
};

export default EmailCard;
