import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import IconBox from "../components/keuken-wrappen/IconBox";
import Head from "next/head";
import Breadcrump from "../components/Breadcrump";

const blog = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Wrap je keuken in de media! ✓6 Jaar garantie ✓Snel klaar ✓Vakkundig en professioneel"
        />
        <title>Wrapjekeuken.nl - In de Media</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Breadcrump/>
      <div className="grid lg:grid-cols-4 grid-cols-1 xl:container mx-auto lg:px-12 lg:pr-6 px-6">
        <div className="col-span-3 mt-12">
          <h1 className="text-2xl font-bold">IN DE MEDIA</h1>
          <div className="w-20 h-05 wrap-bg mt-5" />
          <a
              className="underline"
              href="https://www.bvalmere.nl/nieuws/2023/08/wrap-je-keuken-nieuwe-sponsor-van-bv-almere"
              target="_blank"
          >
            <img
                className="mt-5 w-1/2"
                src="./assets/img/tyrone2.jpeg"
                alt="tyrone koningverdraag"
            />
            <p className="mt-5 text-sm">
              16-08-2023 - Artikel op de website van www.bvalmere.nl
            </p>
          </a>
          <a
            className="underline"
            href="https://www.keukenendesign.nl/van-lamborghinis-naar-l-vormige-keukens/"
            target="_blank"
          >
            <p className="mt-5 text-sm">
              24-09-2020 - Artikel op de website van www.keukendesign.nl
            </p>
          </a>
          <a
            className="underline"
            href="https://www.keukenendesign.nl/van-lamborghinis-naar-l-vormige-keukens/"
            target="_blank"
          >
            <p className="mt-5 text-sm">
              30-10-2020 - Artikel op de website van www.columnweb.nl
            </p>
          </a>
          <a
            className="underline"
            href="https://www.zakelijk-onlinedeurbeslagshop.nl/blog/gesprek-wrapjekeuken"
            target="_blank"
          >
            <p className="mt-5 text-sm">
              08-07-2020 - Artikel op de website van
              www.zakelijk-onlinedeurbeslagshop.nl/
            </p>
          </a>
          <div className="diensten__kosten mt-12 bg-gray-100 xl:px-12 px-6 py-12 mb-12 lg:mx-0">
            <h5 className="text-2xl font-bold">
              WIL JIJ EEN NIEUWE KEUKEN, MAAR NIET VOOR EEN NIEUWE PRIJS?
            </h5>
            <div className="w-20 h-05 wrap-bg mt-5" />
            <p className="mt-5 text-sm">
              Stuur ons via WhatsApp of e-mail wat foto's van de keuken + je
              woonplaats en ontvang binnen 48 uur een prijsopgave!
            </p>
            <div className="flex justify-center flex-col items-center mt-10">
              <a
                className="flex justify-center flex-col items-center"
                href="https://wa.me/31621970416"
              >
                <img src="./whatsapp.svg" alt="whatsapp" />
                <p className="mt-3">WhatsApp</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 relative pr-6 mb-12 xl:mb-0">
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
};

export default blog;
