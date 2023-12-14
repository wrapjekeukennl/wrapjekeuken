import React from "react"
import Layout from "../components/Layout"
import gemeentes from "../gemeentes"
import {useRouter} from "next/router"
import Sidebar from "../components/Sidebar"
import Head from "next/head"
import IconBox from "../components/keuken-wrappen/IconBox"
import Link from "next/link"
import Breadcrump from "../components/Breadcrump";

const Amsterdam = ({data}) => {
    const router = useRouter()

    return (
        <Layout>
            <Head>
                <meta name="description"
                      content="Keuken wrappen in Amsterdam of omgeving? Wij geven je keuken een nieuwe uitstraling! ✓ 6 jaar garantie ✓ Vakkundig & professioneel ✓ Neem contact op!"/>
                <meta name="keywords" content={`Keuken wrappen, Keuken wrappen Amsterdam}`}/>
                <title>Keuken wrappen Amsterdam | In 1 dag klaar! | Wrapjekeuken.nl</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Breadcrump/>
            <div className="grid lg:grid-cols-4 grid-cols-1 xl:container mx-auto px-6">
                <div className="col-span-3 xl:pl-6 mt-12">
                    <h1 className="text-2xl font-bold">KEUKEN WRAPPEN IN AMSTERDAM</h1>
                    <div className="w-20 h-05 wrap-bg mt-5"/>
                    <p className="mt-5 text-sm">
                        Genieten van het gevoel van een nieuwe keuken, zonder de hoofdprijs te betalen?
                        Laat je keuken wrappen en creëer een compleet nieuwe look voor het hart van jouw
                        huis!
                    </p>
                    <p className="mt-5 text-sm">
                        Je keuken is de centrale plek in huis, een plek waar je je altijd op je gemak moet
                        voelen. En om ultiem van je keuken te kunnen genieten, is het belangrijk dat de kleur
                        en de uitstraling goed bij zowel jou als je interieur passen. Door je keuken te laten
                        wrappen, weet je zeker dat je weer geniet van een zo goed als nieuwe keuken die
                        volledig aan jouw wensen voldoet.
                    </p>
                    <div
                        className="keukenwrappen xl:container mx-auto grid lg:grid-cols-2 grid-cols-1 sm:mt-12 mt-12 lg:px-0">
                        <div className="col-span-1 keukenwrappen_img h-400"></div>
                        <div className="col-span-1 bg-gray-100 py-12 dark:text-gray-800">
                            <h3 className="font-bold text-2xl px-6">HOE GAAN WIJ TE WERK?</h3>
                            <div className="w-20 h-0.5 wrap-bg ml-6 mt-5"/>
                            <p className="mx-6 mt-5 text-sm">
                                Je keuken wrappen bij Wrapjekeuken.nl is dé makkelijkste manier om je keuken een
                                make-over te geven. Wij wrappen je keuken op locatie en zijn binnen één dag klaar.
                                Ben jij benieuwd naar de mogelijkheden om jouw keuken een nieuwe look te geven?
                                Neem eenvoudig contact met ons op of vraag direct een offerte aan via WhatsApp,
                                per e-mail of telefoon. Stuur een paar foto’s van je keuken op, inclusief je woonplaats,
                                en ontvang binnen 48 uur een prijsopgave. Voor je het weet staan wij voor je deur en
                                geniet jij binnen één dag van een nieuwe keuken!
                            </p>
                            <br/>
                            <Link href="/contact">
                                <button
                                    className="mt-8 uppercase wrap-bg px-6 py-4 text-white ml-6 text-xs md:text-sm lg:text-base">Neem
                                    contact op
                                </button>
                            </Link>
                        </div>
                    </div>
                    <IconBox/>
                    <h2 className="text-xl font-bold uppercase">Keuken opknappen zonder verbouwen? Keukenkastjes
                        wrappen!</h2>
                    <div className="w-20 h-05 wrap-bg mt-5"/>
                    <p className="mt-5 text-sm">
                        Zou je graag een nieuwe keuken willen, maar zit je niet te wachten op de troep die
                        een verbouwing met zich meebrengt? Als je keuken kwalitatief nog voldoet, kun je er
                        ook voor kiezen om je keukenkastjes te laten wrappen.
                    </p>
                    <p className="mt-5 text-sm">
                        De letterlijke vertaling van wrappen is ‘inpakken’ en dat is precies wat wij doen! Met
                        behulp van speciale folie, zorgen wij ervoor dat al jouw keukenkastjes en lades
                        worden ‘ingepakt’ en jouw keuken een geheel nieuwe uitstraling krijgt. Wij werken
                        enkel met hoogwaardige kras- en stootbestendige folie en garanderen dat de folie
                        perfect wordt afgewerkt. Hierdoor bieden wij wel 6 jaar garantie. Ben je benieuwd
                        naar de resultaten? Bekijk onze opgeleverde <Link href="/projecten"><a
                        className="text-three underline">projecten</a></Link> en volg ons op <a
                        className="text-three underline" href="/projecten">Instagram</a>!
                    </p>

                    <div className="diensten__kosten mt-12 bg-gray-100 p-12 mb-12 pr-6 lg:mx-0 mx-6">
                        <h5 className="text-2xl font-bold">
                            Ook je keuken laten wrappen?
                        </h5>
                        <div className="w-20 h-05 wrap-bg mt-5"/>
                        <p className="mt-5 text-sm">
                            Het laten wrappen van je keuken brengt vele voordelen met zich mee. Zo is er geen
                            verbouwing nodig, heb je geen last van bouwstof en vuil én kun je kiezen uit zeer veel
                            kleuren, motiefjes en designs. Of jouw droomkeuken nu een matte kleur heeft, een
                            metallic look of een vrolijke roze kleur, in ons eindeloze assortiment folie vind je altijd
                            de perfecte kleur voor jouw keuken!
                        </p>
                        <p className="mt-5 text-sm">
                            Bovendien zijn wij zo goed als altijd binnen één dag klaar, waardoor je direct gebruik
                            kunt maken van je keuken.
                        </p>
                        <p className="mt-5 text-sm">
                            Neem <Link href="/contact"><a className="text-three underline">contact</a></Link> met ons op en geniet binnenkort ook van een nieuwe keuken! Stuur
                            ons via WhatsApp of e-mail wat foto's van de keuken + je woonplaats en ontvang
                            binnen 48 uur een prijsopgave!
                        </p>
                        <div className="flex justify-center flex-col items-center mt-10">
                            <a className="flex justify-center flex-col items-center" href="https://wa.me/31621970416">
                                <img src="./whatsapp.svg" alt="whatsapp"/>
                                <p className="mt-3">WhatsApp</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 relative pr-6 mb-12 xl:mb-0">
                    <Sidebar/>
                </div>
            </div>
        </Layout>
    )
}

export default Amsterdam
