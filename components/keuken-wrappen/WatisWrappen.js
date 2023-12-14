import React from "react";
import Link from "next/link";

const WatisWrappen = () => {
  return (
    <>
      <div className="keukenwrappen xl:container mx-auto grid lg:grid-cols-2 grid-cols-1 sm:mt-12 mt-12 lg:pl-12 lg:px-0 px-6 gridarea1">
        <div className="col-span-1 h-full">
          <img className={` w-full h-full object-cover`} src="/assets/img/keuken-wrappen-1.webp"
               alt="keuken renovatie"/>
        </div>
        <div className="col-span-1 bg-gray-100 py-12 dark:text-gray-800 area2">
          <h2 className="font-bold text-2xl px-6">
            KEUKENKASTJES WRAPPEN
          </h2>
          <div className="w-20 h-0.5 wrap-bg ml-6 mt-5" />
          <p className="mx-6 mt-5 text-sm">
            Met alleen al het wrappen van de keukenkastjes kun je een compleet nieuwe look creëren. Ben je de huidige kleur zat, is de keuken verouderd of heb je zin in iets nieuws, zonder te veel gedoe? Dan kun je ervoor kiezen om de keuken te wrappen. Je kunt de keukenkasten en lades in een gewenste kleur laten wrappen met folie. Zo heb je in een handomdraai een gloednieuwe keuken.
          </p>
          <h2 className="font-bold text-2xl px-6 mt-8">KEUKEN WRAPPEN VOOR EN NA?</h2>
          <div className="w-20 h-0.5 wrap-bg ml-6 mt-5" />
          <p className="mx-6 mt-5 text-sm">
            Word opnieuw verliefd op je keuken. Na het wrappen ziet de keuken er compleet anders uit. De uitstraling van de keuken is precies naar jouw smaak en het beeld is luxe en nieuw. Nu kun je nog jaren verder genieten van de keuken. Op de voor en na foto's kunt je de indrukwekkende resultaten zien.
          </p>
          <Link href="/contact">
            <button className="mt-8 uppercase wrap-bg px-6 py-4 text-white ml-6 text-xs md:text-sm lg:text-base">
              Neem contact op
            </button>
          </Link>
        </div>
      </div>
      <div className="keukenwrappen xl:container mx-auto grid lg:grid-cols-2 grid-cols-1 sm:mt-12 mt-12 lg:pl-12 lg:px-0 px-6 gridarea">
        <div className="col-span-1 bg-gray-100 py-12 dark:text-gray-800 area2">
          <h2 className="font-bold text-2xl px-6">MATTE FOLIE EN FOLIE MET MOTIEF</h2>
          <div className="w-20 h-0.5 wrap-bg ml-6 mt-5" />
          <p className="mx-6 mt-5 text-sm">
            De mogelijkheden zijn eindeloos bij het wrappen van een keuken. Je kunt kiezen uit veel verschillende types, kleuren en motiefjes. De matte folie kan goed gebruikt worden voor het behalen van een moderne en strakke keuken. De matte folie weerkaatst geen licht, waardoor er een rustige sfeer ontstaat. Naast een de matte folie hebben we ook veel verschillende folies met een motief. Zo kun je marmer, beton of hout op een makkelijke en goedkope manier in de keuken integreren.  De soort folie geeft dus de mogelijkheid om bepaalde sferen te creëren.
          </p>
          <Link href="/contact">
            <button className="mt-8 uppercase wrap-bg px-6 py-4 text-white ml-6 text-xs md:text-sm lg:text-base">
              Neem contact op
            </button>
          </Link>
        </div>
        <div className="col-span-1 h-500">
          <img className={`h-500 w-full object-cover`} src="/assets/img/keuken-wrappen-2.webp"
               alt="keuken renovatie"/>
        </div>
      </div>
    </>
  );
};

export default WatisWrappen;
