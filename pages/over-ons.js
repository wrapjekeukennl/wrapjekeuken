import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import IconBox from "../components/keuken-wrappen/IconBox";
import Head from "next/head";
import Breadcrump from "../components/Breadcrump";

const overOns = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Een nieuwe keuken, maar niet voor een nieuwe prijs? Wij wrappen je keuken voor een gloednieuwe look! ✓ Goedkoop ✓ Duurzaam ✓ Snel klaar ✓ Neem contact op!"
        />
        <title>Over ons | Wrapjekeuken.nl</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Breadcrump/>
      <div className="grid lg:grid-cols-4 grid-cols-1 xl:container mx-auto lg:px-12 lg:pr-6 px-6">
        <div className="col-span-3 xl:pl-6 mt-12">
          <h5 className="text-2xl font-bold">ONS VERHAAL</h5>
          <div className="w-20 h-05 wrap-bg mt-5" />
          <p className="mt-5 text-sm">
            Je zou het misschien niet verwachten, maar onze expertise is niet
            begonnen bij keukens. Bij ons zusterbedrijf{" "}
            <a
              href="https://www.autokustoms.nl"
              className="mt-5 text-sm inline-block wrap"
            >
              Auto Kustoms
            </a>
            <span> </span>
            wrappen we al jaren (luxueuze) auto’s, van Tesla’s tot Lamborghini's
            en hebben dus al veel ervaring met het wrappen. Omdat we altijd
            volgens de hoogste kwaliteitsnormen werken, hebben we een schat aan
            kennis en kunde over wrappen opgebouwd. En dus hebben we begin 2020
            besloten eindelijk gehoor te geven aan de vraag die we al jaren
            horen: “Kunnen jullie ook mijn keuken wrappen?”
          </p>
          <br />
          <p className="mt-5 text-sm">
            De reden om een keuken te wrappen komt eigenlijk altijd op hetzelfde
            neer: men wil het gevoel van een nieuwe keuken, maar niet voor de
            prijs van die nieuwe keuken. Daar kunnen wij met onze expertise
            natuurlijk volledig aan voldoen. Na de vele aanvragen zijn wij eerst
            begonnen met het wrappen van onze eigen keukens en het resultaat was
            verbluffend. Doordat wij verschillende soorten folie hebben getest,
            weten we de beste interieurfolie te gebruiken om zo de kwaliteit en
            duurzaamheid te waarborgen. Daarnaast streven we continu naar het
            beste en mooiste resultaat. Een samenloop van omstandigheden en
            Wrapjekeuken.nl is geboren!
          </p>
          <div className="keukenwrappen xl:container mx-auto grid lg:grid-cols-2 grid-cols-1 sm:mt-12 mt-12 lg:px-0 lg:pr-6">
            <div className="col-span-1 visie__img h-400"></div>
            <div className="col-span-1 bg-gray-100 py-12 dark:text-gray-800">
              <h1 className="font-bold text-2xl px-6">ONZE VISIE</h1>
              <div className="w-20 h-0.5 wrap-bg ml-6 mt-5" />
              <p className="mx-6 mt-5 text-sm">
                Bij Wrapjekeuken.nl geloven we dat je je goed moet voelen in je
                keuken – het is immers de centrale plek van je huis. Veel mensen
                willen daarom graag een nieuwe keuken, maar zien op tegen de
                renovatie en alles wat die met zich mee brengt. Daarnaast is men
                vaak tevreden over de apparatuur, opstelling en het vooraanzicht
                van de huidige keuken. En dat snappen we. Daarom creëren wij,
                met slechts een verandering van kleur, een gloednieuwe look en
                dus een nieuwe keuken. Allemaal voor een betaalbare prijs,
                waarbij ingrijpende verbouwingen uitblijven.
              </p>
              <br />
              <p className="mx-6 text-sm">
                Benieuwd wat het kost om jouw keuken te laten wrappen? Stuur ons
                een paar foto’s via whatsapp en ontvang gratis een prijsopgave!
              </p>
              <Link href="/contact">
                <button className="mt-8 uppercase wrap-bg px-6 py-4 text-white ml-6 text-xs md:text-sm lg:text-base">
                  Neem contact op
                </button>
              </Link>
            </div>
          </div>
          <IconBox />
          <div className="diensten__kosten mt-12 bg-gray-100 xl:px-12 px-6 py-12 mb-12 lg:mx-0">
            <h5 className="text-2xl font-bold">
              WIL JIJ EEN NIEUWE KEUKEN, MAAR NIET VOOR EEN NIEUWE PRIJS?
            </h5>
            <div className="w-20 h-05 wrap-bg mt-5" />
            <p className="mt-5 text-sm">
              Stuur ons via WhatsApp of e-mail wat foto's van de keuken + je
              woonplaats en ontvang binnen 2 werkdagen een prijsopgave!
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

export default overOns;
