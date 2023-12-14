import React, { useState, useEffect } from "react";
import Link from "next/link";
import InstagramFeed from "react-ig-feed";
import axios from 'redaxios';

const Portfolio = ({ data }) => {

    const result = async () => {

    }

  return (
    <section className="portfolio_img py-12 xl:px-12 px-6">
      <h3 className="text-white text-2xl md:text-3xl text-center mb-5 font-bold">
        Volg ons op instagram en bekijk meer van onze projecten
      </h3>
      <InstagramFeed
        token="IGQVJWa3Bjejdvc3dDSF9yckJtNEVNVFo2OTZAuQXZATNkFHaFBaUzVOcllhdDdvblQ3U0x6Qmg2UXIzeFY4Y055V2JNUG5XZA0xuYnJQSHZA6VnluaDZAiRnhnZA0FlZAXhGR0NvaTdXSnhQZA2s0Q19FTDB6UgZDZD"
        counter="4"
      />
      <Link href="https://www.instagram.com/wrapjekeuken.nl">
        <h3 className="text-white text-2xl md:text-3xl text-center mt-5 font-bold cursor-pointer">
          @Wrapjekeuken.nl
        </h3>
      </Link>
    </section>
  );
};

export default Portfolio;
