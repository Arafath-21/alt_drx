import React from "react";
import Image from "next/image";
import Icic from "../..//public/TrustedPartner/icici.png";
import Eylogo from "../../public/TrustedPartner/eylogo.png";
import IndusLaw from "../..//public/TrustedPartner/induslaw.png";
import mitcon from "../..//public/TrustedPartner/mitcoin.png";
import orbis from "../..//public/TrustedPartner/orbis.png";
import jll from "../..//public/TrustedPartner/partner.png";
import knightPrank from "../..//public/TrustedPartner/knight.png";
import ksk from "../..//public/TrustedPartner/ksk.jpg";

const TrustedPartner = () => {
  const bank = [
    {
      image: Icic,
      regid: "",
      name: "Banking Partner",
    },
    {
      image: Eylogo,
      regid: "",
      name: "Tax Advisor",
    },
    {
      image: IndusLaw,
      regid: "",
      name: "Legal Advisor",
    },
    {
      image: mitcon,
      regid: "SEBI Reg id :- IND000000596",
      name: "Alt DRX Master Escrow Agent",
    },
    {
      image: orbis,
      regid: "",
      name: "SPV Escrow Agent & Administrator",
    },
    {
      image: jll,
      regid: "",
      name: "Building Technical Due Diligence Partnerr",
    },
    {
      image: knightPrank,
      regid: "",
      name: "Micro-Market & Price Due Diligence Partner",
    },
    {
      image: ksk,
      regid: "",
      name: "Property Title Due Diligence Partner",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <h1 className="text-[30px] font-bold uppercase">Trusted Partner</h1>
      <div className=" px-10 mt-10 items-center gap-8  grid grid-cols-2 md:grid-cols-4  justify-center ">
        {bank.map((details, isted) => (
          <div
            key={isted}
            className=" flex flex-col gap-8 items-center justify-center h-[300px]"
          >
            <Image
              src={details.image}
              alt={details.name}
              className="w-36 md:w-48 lg:w-48 min-h-50px md:min-h-80px lg:min-h-90px object-contain"
            />
            <div className="">
              <span className="">{details.regid}</span>
              <span className="w-[150px]">{details.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedPartner;
