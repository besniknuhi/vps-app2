import Image from "next/image";

//brand images
import {
  brandAmd,
  brandCloud,
  brandIntel,
  brandAlma,
  brandUbuntu,
  brandWindows,
} from "@/components/ui/images";

export default function Partners() {
  return (
    <section className="flex flex-col max-w-[1440px] items-center gap-8 mx-auto py-20 px-4">
      <h2 className="text-xl font-bold text-center">Technologies</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-x-3 sm:gap-y-3">
        <Image src={brandAmd} alt="brand images" />
        <Image src={brandCloud} alt="brand images" />
        <Image src={brandIntel} alt="brand images" />
        <Image src={brandAlma} alt="brand images" />
        <Image src={brandUbuntu} alt="brand images" />
        <Image src={brandWindows} alt="brand images" />
      </div>
    </section>
  );
}
