import memojiImage from "@/assets/images/memoji-computer.png";
import sandyHero from "@/assets/images/sandy-rounded-hero.png"
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg"
import { memo } from "react";

export const HeroSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={sandyHero} className="size-[100px] border border-gray-800 rounded-full" alt="MSANDYPR"></Image>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Available for Projects!</div>
          </div>
        </div>
        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">Software Engineer</h1>
        <p className="text-center mt-4 text-white/60">I am a Software Engineer with expertise in JavaScript and PHP, proficient in various frameworks such as React.js, Node.js, CodeIgniter, Laravel, TailwindCSS, and Bootstrap.</p>
        <div className="flex flex-col items-center mt-8">
          <button className="inline-flex items-center gap-2 broder border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my Work!</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
