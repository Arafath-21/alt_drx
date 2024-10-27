import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import image1 from "/public/SlideImages/BRHIO Banner Image.png";
import image2 from "/public/SlideImages/GHHIO Banner Image-1.png";
import image3 from "/public/SlideImages/HPLIO Banner.png";
import image4 from "/public/SlideImages/KHHIO Banner Image.png";
import image5 from "/public/SlideImages/MUMSUBHI Banner Image.png";

import Image from "next/image";

const SlideImages = () => {
  const Slide = [
    {
      h1: " Bangalore Rental Housing Investment Opportunity",
      image: image1,
    },
    {
      h1: "  Goa Holiday Homes Investment Opportunity",
      image: image2,
    },
    {
      h1: "  Hyderabad Prime Land Investment Opportunity",
      image: image3,
    },
    {
      h1: "   Kerala Holiday Homes Investment Opportunity",
      image: image4,
    },
    {
      h1: " Mumbai Suburban Housing Investment Opportunity",
      image: image5,
    },
  ];

  return (
    <div className="relative">
      <Carousel className="   px-2 lg:mx-5 ">
        <CarouselContent className="">
          {Slide.map((im, ims) => (
            <CarouselItem
              key={ims}
              className="flex flex-col w-full items-center gap-4"
            >
              <h1 className="font-bold text-[24px] ">{im.h1}</h1>
              <Image src={im.image} alt="" />
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
