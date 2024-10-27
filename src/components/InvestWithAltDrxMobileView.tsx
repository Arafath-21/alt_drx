import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import image1 from "/public/InvestWithAltDrx/Click-to-sell.svg";
import image2 from "/public/InvestWithAltDrx/Collect-rental-income.svg";
import image3 from "/public/InvestWithAltDrx/Diversity-investments.svg";
import image4 from "/public/InvestWithAltDrx/Earn-longterm-gains.svg";
import image5 from "/public/InvestWithAltDrx/Start-small.svg";

import Image from "next/image";

const SlideImages = () => {
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
    <div className="relative">
      <Carousel className=" max-w-[400px]  px-2  ">
        <CarouselContent className="">
          {card.map((it) => (
            <CarouselItem
              className="flex flex-col w-full items-center gap-4"
              key={it.id}
            >
              <Image src={it.image} alt="" />
              <h2 className="text-parenttheme-secondary font-semibold">
                {it.title}
              </h2>
              <h2 className="font-light">{it.desc}</h2>
              <Button className="rounded-full"> Invest Now</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute  right-1/2 mt-8 ">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default SlideImages;
