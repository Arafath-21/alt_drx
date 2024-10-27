import Hero from "@/components/Hero";
import React from "react";
import CurrentInvest from "@/components/CurrentInvest";
import InvestWithAltDrx from "@/components/InvestWithAltDrx";
import HowitWorks from "@/components/HowitWorks";
import InvestmentStages from "@/components/InvestmentStages";
import TrustedPartner from "@/components/TrustedPartner";
import RealAssets from "@/components/RealAssets";
import SignupAndToBePart from "@/components/SignupAndToBePart";

const page = () => {
  return (
    <div className=" mx-auto">
      <Hero />
      <CurrentInvest />
      <InvestWithAltDrx />
      <HowitWorks />
      <InvestmentStages />
      <TrustedPartner />
      <RealAssets />
      <SignupAndToBePart />
    </div>
  );
};

export default page;
