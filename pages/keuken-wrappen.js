import React from "react"
import IconBox from "../components/keuken-wrappen/IconBox"
import Sidebar from "../components/Sidebar"
import WatisWrappen from "../components/keuken-wrappen/WatisWrappen"
import Layout from "../components/Layout"
import Head from "next/head"
import Faq from "../components/home/Faq";
import Faq2 from "../components/home/Faq2";
import YouTube from "react-youtube";
import Breadcrump from "../components/Breadcrump";

const KeukenWrappen = () => {

  const url = "https://youtu.be/zLJe4lM_FPI"

  const opts = {
    width: '100%',
    playerVars: {
      mute: true,
      autoplay: 1,
    },
  };

  return (
    <Layout>
      <Head>
        <meta name="description" content="Uw keuken wrappen? Wij geven een nieuwe uitstraling aan uw keuken binnen enkele dagen! ✓6 Jaar garantie ✓Snel klaar ✓Vakkundig en professioneel" />
        <title>Wrapjekeuken.nl - Keuken wrappen</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Breadcrump />
      <div className="grid lg:grid-cols-4 grid-cols-1 xl:container mx-auto">
        <div className="col-span-3">
          <h1 className="text-2xl font-bold mt-12 lg:ml-12 ml-6">KEUKEN WRAPPEN</h1>
          <div className="w-20 h-05 wrap-bg mt-5 lg:ml-12 ml-6" />
          <div className="relative h-400 hidden lg:block">
          </div>
          <WatisWrappen />
          <div className="w-full flex justify-center mt-8 pl-12">
            <YouTube
                opts={opts}
                videoId={"zLJe4lM_FPI"}                  // defaults -> ''
                id={"zLJe4lM_FPI"}                       // defaults -> ''
                className="w-full"               // defaults -> ''
            />
          </div>
          <Faq/>
          <Faq2/>
          <div className="diensten__kosten mt-12 bg-gray-100 p-12 mb-12 lg:mx-0 mx-auto lg:ml-12">
            <h5 className="text-2xl font-bold">Keuken wrappen kosten</h5>
            <div className="w-20 h-05 wrap-bg mt-5" />
            <p className="mt-5 text-sm">Omdat elke keuken uniek is hanteren wij geen vaste prijzen. Hierbij spelen verschillende factoren een grote rol: de grootte van de keuken, de bewerkelijkheid en de kleur of motief die je kiest zijn belangrijke factoren. Ook houden wij rekening met de reisafstand. Het wrappen van je keuken is goedkoper dan het compleet renoveren van je hele keuken. De minimale prijs van het vervangen van je complete keuken bedraagt rond de €5000,- terwijl je bij Wrap je keuken al vanaf €999,- je keuken volledig kan wrappen.</p>
            <div className="flex justify-center flex-col items-center mt-10">
              <a className="flex justify-center flex-col items-center" href="https://wa.me/31621970416">
                <img src="./whatsapp.svg" alt="whatsapp" />
                <p className="mt-3">WhatsApp</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 relative lg:pr-12 pr-6 mb-12 xl:mb-0">
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export default KeukenWrappen

