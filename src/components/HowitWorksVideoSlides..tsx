import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Tokenization from "/public/YouTube/tokenizationnew.jpg";
import AboutDRX from "/public/YouTube/aboutaltdrxnew.jpg";
import investDrx from "/public/YouTube/investaltdrxnew.jpg";

import Image from "next/image";
import Link from "next/link";

const SlideImages = () => {
  const Slide = [
    {
      link: "https://youtu.be/4P5hHLcgWh4",
      image: Tokenization,
    },
    {
      link: "https://youtu.be/LycjyTRCABc",
      image: AboutDRX,
    },
    {
      link: " https://youtu.be/BBh4-mN1G7k",
      image: investDrx,
    },
  ];

  return (
    <div className=" flex justify-center">
      <Carousel className=" w-[400px] md:w-[600px]   px-2 lg:mx-5 ">
        <CarouselContent className="">
          {Slide.map((items, keys) => (
            <CarouselItem
              key={keys}
              className="flex flex-col w-full items-center gap-4"
            >
              <Link href={items.link}>
                <Image src={items.image} alt="" />
              </Link>
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
