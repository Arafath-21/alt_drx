"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BiDownArrow } from "react-icons/bi";
import { Button } from "./ui/button";

const TradeCard: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const [dropDown, setDropdown] = useState<boolean>(false);
  const [limitPrice, setLimitPrice] = useState<string>("6787"); // Initial state as string

  const handleDropDown = () => {
    setDropdown((prev) => !prev);
  };

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => Math.max(prev - 1, 1)); // Ensure count does not go below 1
  };

  const cardValues = [
    {
      name: "A) Trade Value",
      amount: "1.00",
    },
    {
      name: "B) Fees & Other Levies",
      amount: "0",
    },
    {
      name: "C) Volatility Margin",
      amount: "0.05",
    },
  ];

  return (
    <div className="lg:max-w-[434px] max-h-[606px] bg-background-primary rounded-md px-4 py-6 mt-10">
      <div className="text-white w-full flex flex-col gap-6 justify-center items-center">
        <h1 className="text-[25px] font-bold">TradeX (Beta)</h1>
        <h1 className="text-[20px] font-bold">Buy Now</h1>
        <div
          className="bg-background-secondary w-full rounded-sm border-white border justify-between flex items-center px-2 cursor-pointer"
          onClick={handleDropDown}
        >
          Set Options
          <IoIosArrowDown />
        </div>
        <div className="flex justify-between w-full px-10">
          <h1 className="font-bold">Quantity</h1>
          <div className="flex items-center bg-background-secondary rounded-lg py-1 px-3">
            <FaMinus
              className="font-bold cursor-pointer"
              onClick={decrementCount}
            />
            <h1 className="bg-background-primary px-4">{count}</h1>
            <FaPlus
              className="font-bold cursor-pointer"
              onClick={incrementCount}
            />
          </div>
        </div>
        <div className="flex justify-between w-full px-5">
          <div>
            <input type="radio" /> <span> Daily Market Price</span>
          </div>
          <h1>
            ₹ 6787.01/
            <span className="font-light text-[10px]">ALT.SQFT</span>
          </h1>
        </div>
        <div className="flex justify-between w-full px-5">
          <div>
            <input type="radio" /> <span> Limit Price </span>
          </div>
          <div className="bg-white px-1 py-2 rounded-md text-black">
            <span>₹</span>
            <input
              type="text"
              value={limitPrice} // Controlled input
              onChange={(e) => {
                // Allow only numbers and dot (for decimal) in the input
                const newValue = e.target.value;
                // Type check and regex validation
                if (/^\d*\.?\d*$/.test(newValue)) {
                  setLimitPrice(newValue);
                }
              }}
              className="outline-none text-[15px]"
            />
            <span className="font-light text-[10px]">/ALT.SQFT</span>
          </div>
        </div>
        <div
          className="border border-parenttheme-secondary rounded-md w-full px-10 flex flex-col justify-between items-center text-[12px] cursor-pointer"
          onClick={handleDropDown}
        >
          <div className="flex justify-between w-full items-center">
            <h2>Purchase Consideration (Incl. Fees & Other Levies)</h2>
            <p className="font-bold">₹ 0</p>
            <BiDownArrow
              className={`${
                dropDown
                  ? "rotate-180 transition-transform duration-500"
                  : "duration-500"
              }`}
            />
          </div>

          {dropDown && (
            <div className="flex flex-col gap-5 w-full my-6">
              {cardValues.map((item, idex) => (
                <div key={idex} className="flex justify-between items-center">
                  <div>{item.name}</div>
                  <div>{item.amount}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col items-start w-full">
          <h1 className="font-bold text-[14px]">
            Virtual Bank Wallet Balance: ₹ 0
          </h1>
          <h2 className="font-semibold text-[12px]">
            Since the DMP differs on a daily basis, a Volatility margin of 5% is
            included in your trade value. Refund shall be processed after your
            order&apos;s settlement. {/* Escape the apostrophe here */}
          </h2>
        </div>
        <Button className="rounded-full">BUY NOW</Button>
      </div>
    </div>
  );
};

export default TradeCard;
