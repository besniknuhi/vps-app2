"use client";
import Image from "next/image";
import { useState } from "react";

import { plusIcon, minusIcon } from "./ui/images";

export default function Faq() {
  const [accButton1, setAccButton1] = useState(false);
  const [accButton2, setAccButton2] = useState(false);
  const [accButton3, setAccButton3] = useState(false);

  const data = [
    {
      id: 1,
      title: "What is the difference between VPS and Bare Metal servers?",
      description:
        "VPS are virtual servers with shared resources, while Bare Metal servers are dedicated physical servers, offering full access to the server's hardware without any shared resources or virtualization overhead.",
      button: accButton1,
      setButton: setAccButton1,
    },
    {
      id: 2,
      title: "How do I manage my server?",
      description:
        "Our portal provides comprehensive server management capabilities, allowing you to perform tasks such as power cycling, reinstallation of the operating system, monitoring server performance with detailed graphs, and much more, all through an intuitive interface.",
      button: accButton2,
      setButton: setAccButton2,
    },
    {
      id: 3,
      title: "Can I upgrade my plan later?",
      description:
        "Yes, you can upgrade your plan at any time. Additionally, we offer custom plans to meet your specific needs. Simply get in touch with us, and we’ll be happy to assist you with the upgrade or customization process.",
      button: accButton3,
      setButton: setAccButton3,
    },
  ];
  return (
    <section
      id="faq"
      className="max-w-[1440px] mx-auto pt-12 pb-28 px-4 xl:px-20"
    >
      <h2 className="mb-12 text-4xl font-semibold text-center sm:text-5xl">
        Your questions, answered
      </h2>
      <div className="w-full max-w-[800px] mx-auto flex flex-col gap-5">
        {data.map((acc) => (
          <div
            key={acc.id}
            className="pt-px px-px bg-gradient-to-b from-[#00393D] to-transparent rounded-t-3xl sm:rounded-t-[46px]"
          >
            <div className="flex flex-col w-full p-5 overflow-hidden bg-[rgb(0,19,20)] sm:py-10 sm:px-5 rounded-t-3xl sm:rounded-t-[46px]">
              <div className="flex items-center justify-between w-full gap-3 sm:gap-6 bg-transparent">
                <h3 className="text-base font-semibold text-left text-light-1 sm:text-xl">
                  {acc.title}
                </h3>
                <button
                  onClick={() => acc.setButton(!acc.button)}
                  className="border border-[rgb(0,57,61)] rounded-full min-w-9 min-h-9 flex justify-center items-center sm:!p-3.5 hover:bg-[rgb(0,57,61)] duration-300"
                >
                  <Image
                    src={acc.button ? minusIcon : plusIcon}
                    alt="icon"
                  ></Image>
                </button>
              </div>
              <div className="sm:w-[calc(100%-54px)] sm:pr-6">
                <p
                  className={`${
                    acc.button ? "block opacity-100" : "hidden opacity-0"
                  } text-sm font-medium sm:text-base text-[rgb(101,159,159)] transition-transform duration-300`}
                >
                  {acc.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
