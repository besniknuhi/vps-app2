import Image from "next/image";

//brand images
import brandAmd from "/public/brand-amd.svg";
import brandCloud from "/public/brand-cloud-init.svg";
import brandIntel from "/public/brand-intel.svg";
import brandAlma from "/public/brand-almalinux.svg";
import brandUbuntu from "/public/brand-ubuntu.svg";
import brandWindows from "/public/brand-windows.svg";

const images = [
  brandAmd,
  brandCloud,
  brandIntel,
  brandAlma,
  brandUbuntu,
  brandWindows,
];

export default function Partners() {
  return (
    <section className="flex flex-col max-w-[1440px] items-center gap-8 mx-auto py-20 px-4">
      <h2 className="text-xl font-bold text-center">Technologies</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-x-3 sm:gap-y-3">
        {images.map((image) => (
          <Image src={image} alt="brand images" />
        ))}
      </div>
    </section>
  );
}
