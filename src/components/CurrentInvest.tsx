import React from "react";
import SlideImages from "./SlideImages";
// import ProgressIndex from "@/components/ProgressIndex";

const CurrentInvest = () => {
  return (
    <div className=" w-full   min-h-screen flex flex-col items-center my-20    mx-auto ">
      <h1 className="font-bold text-[30px] flex justify-center">
        Current Investment Opportunity
      </h1>
      <div className="border border-black p-4 lg:p-8 xl:p-14  h-[450px] md:h-full w-[340px] md:w-[600px] lg:w-[900px] xl:w-[1140px] ">
        {/* <ProgressIndex /> */}
        <div className="  ">
          <SlideImages />
        </div>
      </div>
    </div>
  );
};

export default CurrentInvest;
