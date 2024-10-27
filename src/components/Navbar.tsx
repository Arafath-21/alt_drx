"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const navItem = [
    {
      name: "About us  +",
      url: "/about",
    },
    {
      name: "Private Property",
      url: "/private-property",
    },
    {
      name: "Invest +",
      url: "/invest", // Corrected the URL here for consistency
    },
    {
      name: "FAQs",
      url: "/faqs", // Make sure URL is consistent (lowercase)
    },
  ];

  const [visible, setVisible] = useState(false);

  const toggleMobileMenu = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="w-full sm:px-3 md:px-5 lg:px-8 py-5 flex items-center justify-between border-b-2 fixed bg-white">
      <div className="flex items-center justify-between w-full">
        <Link href={"/"}>
          <Image
            src={"https://altdrx.com/images/common/alt-dim-logo.svg"}
            alt="logo"
            width={200}
            height={200}
          />
        </Link>

        <div className="lg:flex items-center gap-2 md:gap-10 text-parenttheme-primary text-[14px] uppercase hidden">
          {navItem.map((nav) => (
            <Link key={nav.name} href={nav.url}>
              {" "}
              {/* Added key here */}
              {nav.name}
            </Link>
          ))}
          <Button className="rounded-full uppercase font-bold">
            sign up | sign in
          </Button>
        </div>
      </div>

      {/* Mobile screen */}
      <div className="lg:hidden">
        <Image
          src={"https://altdrx.com/images/icons/menu-icon.svg"}
          alt="mobilenav"
          width={50}
          height={50}
          onClick={toggleMobileMenu}
        />
        <div
          className={`absolute left-0 flex flex-col justify-center w-full h-screen bg-white ${
            visible ? "-translate-y-0" : "-translate-y-[140vh]"
          }`}
        >
          {visible && (
            <div
              className={`text-parenttheme-primary font-bold text-[14px] uppercase gap-8 flex flex-col z-50 items-center`}
            >
              {navItem.map((nav) => (
                <Link key={nav.name} href={nav.url}>
                  {" "}
                  {/* Added key here */}
                  {nav.name}
                </Link>
              ))}
              <Button className="rounded-full uppercase font-bold">
                sign up | sign in
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
