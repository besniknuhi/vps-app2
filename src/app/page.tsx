import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ornament from "/public/ornament.svg";
import Partners from "@/components/Partners";
import ChooseUs from "@/components/ChooseUs";
import Infrastructure from "@/components/Infrastructure";
import Plans from "@/components/Plans";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="absolute bg-[rgb(0,19,20)] w-full -z-20">
        <Image
          src={ornament}
          alt="background image"
          className="absolute w-full -z-10"
        />
        <Navbar />
        <main className="min-h-dvh text-white">
          <Hero />
          <Partners />
          <ChooseUs />
          <Infrastructure />
          <Plans />
          <Faq />
        </main>
        <Footer />
      </div>
    </>
  );
}
