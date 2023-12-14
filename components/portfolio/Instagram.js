import React, { useState, useEffect } from "react";
import Link from "next/link";
import InstagramFeed from "react-ig-feed";

const Instagram = () => {
  return (
    <section className="instagram py-12">
      <InstagramFeed
        token="IGQVJWa3Bjejdvc3dDSF9yckJtNEVNVFo2OTZAuQXZATNkFHaFBaUzVOcllhdDdvblQ3U0x6Qmg2UXIzeFY4Y055V2JNUG5XZA0xuYnJQSHZA6VnluaDZAiRnhnZA0FlZAXhGR0NvaTdXSnhQZA2s0Q19FTDB6UgZDZD"
        counter="24"
      />
    </section>
  );
};

export default Instagram;
