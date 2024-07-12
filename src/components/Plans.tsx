import Image from "next/image";
import Link from "next/link";

import { plans } from "@/assets/planData";
import { bgFrame, checkmark, arrowR } from "@/components/ui/images";

const buttons = [
  { id: 1, text: "Monthly", discount: false },
  { id: 2, text: "Quarterly", discount: true, amount: 5 },
  { id: 3, text: "Yearly", discount: true, amount: 10 },
];

export default function Plans() {
  return (
    <section id="plans" className="relative max-w-[1440px] mx-auto pb-32">
      <div className="absolute max-w-[1200px] h-[1px] p-px mx-auto transform -translate-x-1/2 left-1/2 bg-gradient-to-r from-transparent from-[8%] via-[#125A4F] via-50% to-transparent"></div>
      <Image
        src={bgFrame}
        alt="background frame"
        className="absolute inset-x-0 top-0 hidden w-full sm:block -z-10"
      />
      <div className="px-4 sm:px-9 pt-20 pb-12 sm:pt-[100px] max-w-screen-2xl mx-auto relative flex flex-col gap-10 sm:gap-20">
        <div className="flex flex-wrap items-end justify-between gap-5 xl:flex-nowrap sm:px-11">
          <div>
            <p className="text-base font-bold text-[#0DD6BE]">
              Scalable. Affordable. Flexible.
            </p>
            <h1 className="mt-2 mb-8 text-4xl font-semibold sm:text-5xl">
              Choose a plan that works for you
            </h1>
            <p className="text-base font-medium sm:text-lg text-[rgb(101,159,159)]">
              Our tailored plans are designed to grow with you. Opt for longer
              commitments and enjoy <br /> exclusive discounts on our plans.
            </p>
          </div>
          <div className="flex items-center gap-2 p-2 overflow-x-auto border rounded-full border-muted bg-dark-2 snap-x snap-mandatory border-[rgb(0,57,61)]">
            {buttons.map((button) => (
              <button
                key={button.id}
                className="text-sm font-medium text-light-1 py-3 lg:text-lg border rounded-full relative min-w-max flex items-center gap-1 snap-start snap-always border-transparent hover:border-[rgb(0,57,61)] hover:bg-[rgb(0,42,44)] bg-gradient-to-tr from-[rgba(0,29,31,0)] to-[rgba(0,48,51,1)] after:block after:h-px lg:after:content-[''] after:w-full after:bg-gradient-to-r after:from-[#00998A]/0 after:via-[#00998A] after:to-[#00998A]/0 after:absolute after:inset-x-0 after:bottom-0 after:z-10 duration-300"
              >
                {button.text}
                {button.discount ? (
                  <span className="text-xs font-medium">
                    (<span className="text-[#0DD6BE]">-{button.amount}%</span>)
                  </span>
                ) : (
                  ""
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-8 sm:items-center"></div>
        <div className="relative">
          <div className="max-w-[1440px] mx-auto">
            <div className="h-[444px]">
              <div className="flex flex-wrap">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="mx-auto pt-px px-px rounded-[32px] xl:rounded-none xl:first:rounded-tl-[32px]   xl:last:rounded-tr-[32px] max-w-sm sm:max-w-xs w-full xl:max-w-xs bg-gradient-to-b from-[#00393D] to-transparent"
                  >
                    <div className="relative flex flex-col w-full h-full px-4 py-12 overflow-hidden rounded-[32px] sm:px-6 xl:rounded-none !xl:group-first:rounded-tl-[32px] bg-[rgb(0,19,20)] !xl:group-last:rounded-tr-[32px]">
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-semibold sm:text-xl">
                          {plan.title}
                        </p>
                        <div className="flex items-end gap-1.5">
                          <p className="inline-flex items-end font-semibold text-6xl">
                            ${plan.priceFull}
                            <small className="text-xl">
                              .{plan.priceCents}
                            </small>
                          </p>
                          <span className="font-medium text-[rgb(101,159,159)] text-base">
                            /month
                          </span>
                        </div>
                      </div>
                      <span className="block w-full h-px mt-6 mb-8 bg-gradient-to-r from-transparent via-[rgb(101,159,159)] to-transparent"></span>
                      <ul className="flexflex-col gap-3 mb-12 text-[rgb(101,159,159)]">
                        <li className="flex items-center gap-2 font-medium text-primary-2 text-base">
                          <Image src={checkmark} alt="checkmark icon"></Image>
                          {plan.cpu}
                        </li>
                        <li className="flex items-center gap-2 text-sm font-medium text-primary-2 sm:text-base">
                          <Image src={checkmark} alt="checkmark icon"></Image>
                          {plan.ram}
                        </li>
                        <li className="flex items-center gap-2 text-sm font-medium text-primary-2 sm:text-base">
                          <Image src={checkmark} alt="checkmark icon"></Image>
                          {plan.storage}
                        </li>
                      </ul>
                      <Link
                        href="/store"
                        className="inline-flex py-3 px-8 font-bold items-center justify-center rounded-full border border-[rgb(0,57,61)] text-[rgb(102,255,240)] text-lg leading-7 hover:bg-[rgb(0,42,44)] duration-300"
                      >
                        Get started{" "}
                        <Image src={arrowR} alt="arrow icon"></Image>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-center mt-6 gap-7 sm:px-11">
          <div className="flex flex-col max-w-md gap-3">
            <p className="text-base font-semibold">All plans include:</p>
            <ul className="grid grid-flow-col grid-rows-3 gap-y-3 gap-x-5 sm:gap-x-8">
              <li className="flex gap-2 text-sm font-medium sm:items-center text-primary-2 sm:text-base">
                <Image src={checkmark} alt="checkmark icon"></Image>10Gbps port
              </li>
              <li className="flex gap-2 text-sm font-medium sm:items-center text-primary-2 sm:text-base">
                <Image src={checkmark} alt="checkmark icon"></Image>Multiple
                locations
              </li>
              <li className="flex gap-2 text-sm font-medium sm:items-center text-primary-2 sm:text-base">
                <Image src={checkmark} alt="checkmark icon"></Image>Power
                controls
              </li>
              <li className="flex gap-2 text-sm font-medium sm:items-center text-primary-2 sm:text-base">
                <Image src={checkmark} alt="checkmark icon"></Image>Web-based
                VNC
              </li>
              <li className="flex gap-2 text-sm font-medium sm:items-center text-primary-2 sm:text-base">
                <Image src={checkmark} alt="checkmark icon"></Image>Multiple OS
              </li>
              <li className="flex gap-2 text-sm font-medium sm:items-center text-primary-2 sm:text-base">
                <Image src={checkmark} alt="checkmark icon"></Image>24x7 uptime
                & support
              </li>
            </ul>
          </div>
          <div className="px-px pt-px bg-gradient-to-b from-[#00393D] to-transparent rounded-t-[30px] overflow-hidden max-w-[600px]">
            <div className="px-8 py-6 overflow-hidden bg-[rgb(0,23,26)] rounded-[30px] relative">
              <div className="relative">
                <p className="text-sm font-semibold sm:text-base">
                  Can't find the perfect plan?
                </p>
                <p className="mt-2 mb-8 text-sm font-medium sm:text-base">
                  No problem! Our scalable plans are designed to grow with you.
                  If you need something more specific, we can create a custom
                  plan tailored to your unique requirements.
                </p>
                <div className="p-px rounded-full bg-gradient-to-br from-[#00998A] to-[#00998a00] w-max">
                  <Link
                    href="/"
                    className="border inline-flex border-[rgb(0,57,61)] rounded-full bg-[rgb(0,23,26)] text-[rgb(102,255,240)] text-lg leading-7 py-3 px-8 font-bold hover:bg-[rgb(0,57,61)] duration-300"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
