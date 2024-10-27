import React from "react";
import HowitWorksYtLink from "@/components/HowitWorksVideoSlides.";

const HowitWorks = () => {
  return (
    <div className="">
      <h1 className="text-[80px] text-parenttheme-secondary font-bold">
        How it Works{" "}
      </h1>
      <div className="my-10">
        <HowitWorksYtLink />
      </div>
    </div>
  );
};

export default HowitWorks;
