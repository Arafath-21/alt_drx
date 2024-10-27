import React from "react";
import image1 from "/public/InvestWithAltDrx/Click-to-sell.svg";
import image2 from "/public/InvestWithAltDrx/Collect-rental-income.svg";
import image3 from "/public/InvestWithAltDrx/Diversity-investments.svg";
import image4 from "/public/InvestWithAltDrx/Earn-longterm-gains.svg";
import image5 from "/public/InvestWithAltDrx/Start-small.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import InvestWithAltDrxMobileView from "@/components/InvestWithAltDrxMobileView";

const InvestWithAltDrx = () => {
  const card = [
    {
      id: 1,
      image: image1,
      title: "Collect Rental Income",
      desc: "Earn consistent rental income from your ALT.SQFT",
    },
    {
      id: 2,
      image: image2,
      title: "Earn Long Term Gains",
      desc: "Watch your ALT.SQFT Real Estate investments appreciate over time",
    },
    {
      id: 3,
      image: image3,
      title: "Start Small!",
      desc: "Start investing in real estate with as little as Rs. 10,000",
    },
    {
      id: 4,
      image: image4,
      title: "Diversify Investments",
      desc: "Your ALT.SQFT gives you the benefit of a diversified portfolio of properties",
    },
    {
      id: 5,
      image: image5,
      title: "Click to Sell",
      desc: "Easy to Buy and Sell ALT.SQFT whenever you want!",
    },
  ];
  return (
    <div className="min-h-screen  w-full my-20 justify-center items-center flex flex-col px-10 ">
      <h1 className="font-bold text-parenttheme-secondary  text-[35px] md:text-[80px]">
        Why invest with Alt DRX?
      </h1>
      <h2 className=" text-parenttheme-primary text-[18px] font-bold">
        WE ENABLE YOU TO INVEST IN REAL ESTATE 1 SQFT AT A TIME
      </h2>
      <div className=" hidden md:grid-cols-2 md:grid lg:grid-cols-5 gap-7 mt-16 ">
        {card.map((ised) => (
          <div className=" " key={ised.id}>
            <Image src={ised.image} alt="" />
            <h1 className="font-bold text-[20px] text-parenttheme-secondary ">
              {ised.title}
            </h1>
            <h2 className="font-light text-[16px] text-gray">{ised.desc}</h2>
          </div>
        ))}
      </div>
      <div className="md:hidden ">
        <InvestWithAltDrxMobileView />
      </div>
      <Button className="bg-background-secondary px-2 py-1 rounded-full mt-20 w-[150px]">
        {" "}
        Start Investing
      </Button>
    </div>
  );
};

export default InvestWithAltDrx;
