"use client";

import Image from "next/image";
import Link from "next/link";
import icon1 from "/public/icon.svg";
import { useState } from "react";

const navLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "#about" },
  { id: 3, name: "Plans", link: "#plans" },
  { id: 4, name: "Faq", link: "#faq" },
  { id: 5, name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="w-full py-3 lg:py-6 transition-all ease-in-out lg:delay-150 lg:duration-700 max-w-[1440px] mx-auto px-4 xl:px-20 text-white">
      <div className="flex flex-col justify-between w-full gap-4 lg:gap-12 lg:flex-row lg:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="w-auto h-14">
            <Image src={icon1} width={56} alt="icon"></Image>
          </Link>
          <div className="lg:hidden">
            <button
              onClick={() => setActive(!active)}
              className="p-2 outline-none"
            >
              <span
                className={`
                  ${
                    active ? "rotate-45 translate-y-[6px]" : ""
                  } block bg-[rgb(88,201,201)] w-[20px] h-[2px] m-1 duration-300`}
              ></span>
              <span
                className={`
                  ${
                    active ? "opacity-0" : "opacity-100"
                  } block bg-[rgb(88,201,201)] w-[20px] h-[2px] m-1 duration-300`}
              ></span>
              <span
                className={`
                  ${
                    active ? "-rotate-45 translate-y-[-6px]" : ""
                  } block bg-[rgb(88,201,201)] w-[20px] h-[2px] m-1 duration-300`}
              ></span>
            </button>
          </div>
        </div>
        <div
          className={`${
            active
              ? "w-full lg:block py-6 lg:py-0 border-t border-t-[#00393D] lg:border-none px-6 lg:px-0"
              : "hidden w-full lg:block py-6 lg:py-0 border-t border-t-muted lg:border-none px-6 lg:px-0"
          } transition-opacity`}
        >
          <div className="flex flex-col items-baseline gap-4 lg:flex-row lg:items-center">
            <div className="flex flex-col w-full gap-4 lg:items-center lg:w-auto lg:flex-row lg:mx-auto lg:p-2 lg:border lg:border-muted lg:rounded-full lg:gap-2 border-[rgb(0,57,61)]">
              {navLinks.map((link) => (
                <span key={link.id}>
                  <Link
                    href={link.link}
                    className="lg:py-3 lg:text-lg lg:font-medium lg:border lg:border-transparent lg:hover:border-[rgb(0,57,61)] lg:hover:bg-[rgb(0,42,44)] lg:rounded-full relative flex items-center gap-1 lg:px-5 lg:bg-gradient-to-tr overflow-hidden lg:from-[rgba(0,29,31,0)] lg:to-[rgba(0,48,51,1)] lg:after:block lg:after:h-px lg:after:content-[''] lg:after:w-full lg:after:bg-gradient-to-r lg:after:from-[#00998A]/0 lg:after:via-[#00998A] lg:after:to-[#00998A]/0 lg:after:absolute lg:after:inset-x-0 lg:after:bottom-0 lg:after:z-10 duration-300"
                  >
                    {link.name}
                  </Link>
                </span>
              ))}
            </div>
            <div className="w-full lg:w-auto">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center border border-[rgb(0,57,61)] bg-[rgb(0,23,26)] text-lg leading-7 rounded-full py-3 px-8 lg:hover:bg-[rgb(0,42,44)] duration-300"
              >
                Client Area
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
