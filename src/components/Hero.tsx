import Link from "next/link";
import Image from "next/image";

import heroImage from "/public/server-guy.svg";

export default function Hero() {
  return (
    <section className="xl:px-20 max-w-[1440px] py-20 px-4 mx-auto">
      <div className="grid items-center justify-between gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-base font-bold text-[#0DD6BE]">
            Fast. Reliable. Secure.
          </p>
          <p className="mt-2 mb-8 text-4xl font-semibold sm:text-5xl">
            Unleash the Power of High <br /> Performance VPS
          </p>
          <p className="text-lg font-medium text-primary-2 text-[rgb(101,159,159)]">
            Experience unparalleled performance with our VPS and Bare Metal
            Servers. <br /> Enjoy{" "}
            <span className="font-bold underline">
              0ms ping to [insert name] RPCs
            </span>{" "}
            for seamless connectivity.
          </p>
          <div className="flex items-center gap-4 mt-16">
            <Link
              href="#plans"
              className="border-transparent rounded-full bg-[rgb(102,255,240)] text-[rgb(0,23,26)] text-lg leading-7 py-3 px-8 font-bold hover:bg-[rgb(99,158,152)] duration-300"
            >
              Get started
            </Link>
            <Link
              href="/"
              className="border border-[rgb(0,57,61)] rounded-full bg-[rgb(0,23,26)] text-[rgb(102,255,240)] text-lg leading-7 py-3 px-8 font-bold hover:bg-[rgb(0,57,61)] duration-300"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end lg:col-span-5">
          <Image src={heroImage} alt="hero-image" />
        </div>
      </div>
    </section>
  );
}
