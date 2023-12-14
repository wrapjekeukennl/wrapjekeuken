import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center vh50 hero">
      <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center text-white">
        <h2 className="lg:text-xl md:text-base text-sm uppercase">
          Geef je keuken een nieuwe look
        </h2>
        <h2 className="lg:text-7xl md:text-6xl sm:text-5xl text-3xl uppercase font-bold sm:mt-8 mt-3">
          Jij kiest de kleur,
        </h2>
        <h2 className="lg:text-7xl md:text-6xl sm:text-5xl text-3xl uppercase font-bold mt-3">
          Wij doen de rest
        </h2>
        <Link href="/projecten">
          <button className="sm:mt-8 mt-3 uppercase wrap-bg sm:px-6 p-3 sm:py-4 text-xs md:text-sm lg:text-base">
            Bekijk Projecten
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
