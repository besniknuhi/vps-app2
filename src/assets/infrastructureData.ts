import {
  intelIcon,
  amdIcon,
  dedicatedIcon,
  sliderIcon,
  windowsS,
  ubuntuS,
  debianS,
  almaS,
} from "@/components/ui/images";

export const cards = [
  {
    id: 1,
    icon: intelIcon,
    title: "Intel VPS",
    subtitle: "Intel based virtual machines",
    text: "Harness the power and reliability of Intel processors for your VPS. Deployed instantly",
  },
  {
    id: 2,
    icon: amdIcon,
    title: "AMD VPS",
    subtitle: "AMD based virtual machines",
    text: "Experience exceptional speed and efficiency with our AMD-based VPS. Deployed instantly",
  },
  {
    id: 3,
    icon: dedicatedIcon,
    title: "Dedicated Servers",
    subtitle: "For larger projects",
    text: "Choose every hardware component yourself. Usually deployed within 24 hours.",
  },
  {
    id: 4,
    icon: sliderIcon,
    title: "Custom Solution",
    subtitle: "For easy start & quick scale",
    text: "Looking for a custom solution? Our solutions engineers will cater to your requirements.",
  },
];

export const opSystems = [
  {
    id: 1,
    img: windowsS,
    title: "Windows Server",
    desc: "2019 and 2022 edition",
  },
  {
    id: 2,
    img: ubuntuS,
    title: "Ubuntu",
    desc: "20.04, 22.04 and 24.04 edition",
  },
  { id: 3, img: debianS, title: "Debian", desc: "11 and 12 edition" },
  { id: 4, img: almaS, title: "Alma Linux", desc: "8 and 9 edition" },
];
