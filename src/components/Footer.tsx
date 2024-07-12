import Image from "next/image";
import Link from "next/link";

import {
  frameC,
  frameI,
  icon1,
  twitter,
  youtube,
  discord,
  arrowUR,
} from "./ui/images";

export default function Footer() {
  return (
    <footer className="max-w-screen-2xl lg:px-12 sm:pt-[60px] mx-auto pb-5">
      <div className="relative overflow-hidden rounded-[40px] sm:p-5 sm:pb-0">
        <Image
          src={frameC}
          alt="background frame"
          className="absolute inset-x-0 top-0 hidden w-full sm:block"
        />
        <div className="relative p-4 overflow-hidden lg:p-20 rounded-[20px] bg-dark-1">
          <Image
            src={frameI}
            alt="inner container frame"
            className="absolute top-0 left-0 hidden w-full -z-0 sm:block"
          />
          <div className="relative flex flex-wrap justify-between gap-10 border-b border-b-[rgb(0,57,61)]">
            <div className="flex flex-col gap-8 pb-6">
              <Link href="/" className="w-auto h-14">
                <Image src={icon1} alt="brand icon" className="w-full h-full" />
              </Link>
              <div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 p-3 border rounded-full w-max border-[rgb(0,57,61)] bg-dark-2">
                    <Link
                      href=""
                      target="_blank"
                      className="p-2 border border-[rgb(0,57,61)] rounded-full"
                    >
                      <Image src={twitter} alt="twitter icon" />
                    </Link>
                    <Link
                      href=""
                      target="_blank"
                      className="p-2 border border-[rgb(0,57,61)] rounded-full"
                    >
                      <Image src={youtube} alt="youtube icon" />
                    </Link>
                    <Link
                      href=""
                      target="_blank"
                      className="p-2 border border-[rgb(0,57,61)] rounded-full"
                    >
                      <Image src={discord} alt="discord icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-2xl min-h-[390px] flex flex-col justify-between gap-12">
              <div className="flex flex-col w-full gap-6 sm:flex-row sm:justify-between sm:flex-wrap">
                <div className="flex flex-col gap-5">
                  <p className="text-lg font-semibold sm:text-xl text-[rgb(204,255,250)]">
                    Products
                  </p>
                  <Link
                    href=""
                    className="text-base font-medium text-[rgb(101,159,159)] hover:text-[rgb(204,255,250)] duration-300"
                  >
                    Intel VPS
                  </Link>
                  <Link
                    href=""
                    className="text-base font-medium text-[rgb(101,159,159)] hover:text-[rgb(204,255,250)] duration-300"
                  >
                    AMD VPS
                  </Link>
                  <Link
                    href=""
                    className="text-base font-medium text-[rgb(101,159,159)] hover:text-[rgb(204,255,250)] duration-300"
                  >
                    Bare Metal Servers
                  </Link>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-lg font-semibold sm:text-xl text-[rgb(204,255,250)]">
                    Resources
                  </p>
                  <Link
                    href=""
                    className="text-base font-medium text-[rgb(101,159,159)] hover:text-[rgb(204,255,250)] duration-300"
                  >
                    Network Status
                  </Link>
                  <Link
                    href=""
                    className="text-base font-medium text-[rgb(101,159,159)] hover:text-[rgb(204,255,250)] duration-300"
                  >
                    Knowledge Base
                  </Link>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-lg font-semibold sm:text-xl text-[rgb(204,255,250)]">
                    Company
                  </p>
                  <Link
                    href=""
                    className="text-base font-medium text-[rgb(101,159,159)] hover:text-[rgb(204,255,250)] duration-300"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
              <div className="lg:pt-8 lg:px-8 lg:pb-10 p-3 sm:p-5 rounded-t-[20px] border border-[rgb(0,57,61)] border-b-0 flex flex-col gap-3">
                <p className="text-sm font-semibold sm:text-lg text-[rgb(101,159,159)]">
                  Have a sales question or looking for support?
                </p>
                <Link
                  href="/"
                  target="_blank"
                  className="inline-flex items-center gap-4 w-max"
                >
                  <span className="text-base font-semibold sm:text-xl text-[rgb(204,255,250)]">
                    Get in touch
                  </span>
                  <span className="border border-[rgb(0,57,61)] rounded-full p-2 hover:bg-[rgb(0,57,61)] duration-300">
                    <Image src={arrowUR} alt="arrow icon" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-5 pt-6 sm:flex-row">
            <div className="flex flex-wrap items-center gap-1 sm:gap-3">
              <span className="text-sm font-medium sm:text-base text-[rgb(101,159,159)]">
                Brought to you by the same people as
              </span>
              <Link href="">
                <Image src={icon1} alt="icon" className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-xs font-medium sm:text-base text-[rgb(101,159,159)]">
              &#169; 2024 [insert name] All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
