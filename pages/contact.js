import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Contact from "../components/Contact";
import Breadcrump from "../components/Breadcrump";

const contact = () => {
  const contact = [
    {
      naam: "WhatsApp",
      url: "https://wa.me/31621970416",
      imageUrl: "./whatsapp.svg",
      event: "Whatsapp",
    },
    {
      naam: "+31 (0)85 400 81 81",
      url: "tel:+31854008181",
      imageUrl: "./tel.svg",
      event: "Telefoon",
    },
    {
      naam: "info@wrapjekeuken.nl",
      url: "mailto:info@wrapjekeuken.nl",
      imageUrl: "./mail.svg",
      event: "Mail",
    },
  ];

  const handleClick = (event) => {
    window.gtag("event", "Click", { event_category: event });
  };

  return (
    <Layout>
      <Breadcrump/>
      <div className="my-24 container mx-auto">
        <div className="w-5/6 mx-auto text-center">
          <h1 className="text-4xl">CONTACT</h1>
          <div className="w-20 h-05 wrap-bg mt-5 mx-auto" />
          <p className="mt-12">
            Enthousiast geworden en ben jij benieuwd naar de mogelijkheden om
            jouw keuken een nieuwe look te geven? Je kan ons op werkdagen van
            9.00u tot 17.00u bereiken via whatsapp, email of telefoon.
          </p>
          <br />
          <p>
            Vraag via WhatsApp eenvoudig een prijsopgave aan. Stuur ons wat
            foto's van jouw keuken + je woonplaats en ontvang binnen 2 werkdagen
            een prijsopgave!
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6">
          {contact.map((data) => (
            <a key={data.event} href={data.url}>
              <div
                onClick={(e) => handleClick(data.event)}
                className="bg-gray-100 w-full mt-8 h-40 flex justify-center items-center flex-col cursor-pointer"
              >
                <img className="w-7 h-7" src={data.imageUrl} alt="" />
                <h5 className="text-sm mt-3 font-bold">{data.naam}</h5>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Contact />
    </Layout>
  );
};

export default contact;
