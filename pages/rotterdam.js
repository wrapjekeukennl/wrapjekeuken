import React from "react"
import Layout from "../components/Layout"
import gemeentes from "../gemeentes"
import {useRouter} from "next/router"
import Sidebar from "../components/Sidebar"
import Head from "next/head"
import IconBox from "../components/keuken-wrappen/IconBox"
import Link from "next/link"
import Breadcrump from "../components/Breadcrump";

const Rotterdam = ({data}) => {
    const router = useRouter()

    return (
        <Layout>
            <Head>
                <meta name="description"
                      content={`Keuken wrappen in Rotterdam? Wij geven een nieuwe uitstraling aan uw keuken binnen enkele dagen! ✓6 Jaar garantie ✓Snel klaar ✓Vakkundig en professioneel`}/>
                <meta name="keywords" content={`Keuken wrappen, Keuken wrappen Rotterdam}`}/>
                <title>Wrapjekeuken.nl - Geef je keuken een nieuwe look</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Breadcrump/>
            <div className="grid lg:grid-cols-4 grid-cols-1 xl:container mx-auto px-6">
                <div className="col-span-3 xl:pl-6 mt-12">
                    <h1 className="text-2xl font-bold">KEUKEN WRAPPEN IN ROTTERDAM</h1>
                    <div className="w-20 h-05 wrap-bg mt-5"/>
                    <p className="mt-5 text-sm">Wil je jouw keuken een nieuwe uitstraling geven, zijn je keukenkastjes
                        beschadigd of
                        vind je simpelweg de kleur van je kastjes niet meer mooi, maar is je keuken kwalitatief
                        nog goed? Wrapjekeuken.nl biedt de perfecte oplossing: wij wrappen je keuken,
                        waardoor je keuken een compleet nieuwe ‘look &amp; feel’ krijgt!</p>
                    <p className="mt-5 text-sm">Dankzij onze ruime collectie kwalitatief hoogwaardig wrapfolie, kun je
                        kiezen uit vele
                        types, kleuren en motieven. Binnen één dag geniet jij van een zo goed als nieuwe
                        keuken!</p>
                    <div
                        className="keukenwrappen xl:container mx-auto grid lg:grid-cols-2 grid-cols-1 sm:mt-12 mt-12 lg:px-0">
                        <div className="col-span-1 keukenwrappen_img h-400"></div>
                        <div className="col-span-1 bg-gray-100 py-12 dark:text-gray-800">
                            <h3 className="font-bold text-2xl px-6">HOE GAAN WIJ TE WERK?</h3>
                            <div className="w-20 h-0.5 wrap-bg ml-6 mt-5"/>
                            <p className="mx-6 mt-5 text-sm">Je keuken wrappen bij Wrapjekeuken.nl is dé makkelijkste
                                manier om je keuken een
                                make-over te geven. Wij wrappen je keuken op locatie en zijn binnen één dag klaar.
                                Ben jij benieuwd naar de mogelijkheden om jouw keuken een nieuwe look te geven?
                                Neem contact met ons op of vraag direct een offerte aan via WhatsApp of per e-mail.
                                Stuur een paar foto’s van je keuken op, inclusief je woonplaats, en ontvang binnen 48
                                uur een prijsopgave. Voor je het weet staan wij voor je deur en geniet jij binnen één
                                dag van een nieuwe keuken!</p>
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
                    <h2 className="text-xl font-bold uppercase">Keuken renoveren in Rotterdam: voordelig je keuken
                        opknappen met wrapfolie</h2>
                    <div className="w-20 h-05 wrap-bg mt-5"/>
                    <p className="mt-5 text-sm">
                        Om het gevoel van een nieuwe keuken te ervaren en de centrale plek van je huis een
                        nieuwe uitstraling te geven, is het niet altijd nodig om een nieuwe keuken aan te
                        schaffen of je huidige keuken te verbouwen. Als de kwaliteit van je keuken en de
                        apparatuur nog goed is, kun je je keuken laten wrappen.
                    </p>
                    <p className="mt-5 text-sm">
                        Door het wrappen van je keuken krijgen je keukenkastjes een nieuwe kleur en
                        uitstraling, zonder dat je in een stoffige verbouwing zit. Onze uitgebreide selectie
                        folies bevat altijd het perfecte exemplaar om de look te realiseren die bij jouw
                        interieur past. De hoogwaardige kras- en stootbestendige folie is
                        onderhoudsvriendelijk. Ben je benieuwd naar de resultaten van keukens wrappen?
                        Bekijk onze gerealiseerde <Link href="/projecten"><a
                        className="text-three underline">projecten</a></Link> en volg ons op <a
                        className="text-three underline" href="/projecten">Instagram</a>!
                    </p>

                    <div
                        className="keukenwrappen xl:container mx-auto grid lg:grid-cols-2 grid-cols-1 sm:mt-12 mt-12 lg:px-0">
                        <div className="col-span-1 keukenwrappen_img h-400"></div>
                        <div className="col-span-1 bg-gray-100 py-12 dark:text-gray-800">
                            <h2 className="font-bold text-2xl px-6 uppercase">Keukenkastjes wrappen of de deurtjes van
                                je keuken vervangen?</h2>
                            <div className="w-20 h-0.5 wrap-bg ml-6 mt-5"/>
                            <div className="mx-6">
                                <p className="mt-5 text-sm">
                                    Om je huidige keuken op te knappen, zijn er vele mogelijkheden. Zo kun je er onder
                                    andere voor kiezen om uw keuken te laten spuiten, de kastdeurtjes te laten
                                    vervangen of een volledig nieuwe keuken aan te schaffen. Het wrappen van je
                                    keukenkastjes is niet alleen een voordelige, maar ook een snellere, schonere en
                                    bovenal duurzamere manier om je keuken op te knappen.
                                </p>
                                <p className="mt-5 text-sm">
                                    Het renoveren van je keuken kan vaak enkele weken duren en brengt een hoop
                                    rommel, stof en onrust met zich mee. Wrappen is niet alleen stukken goedkoper, maar
                                    ook nog eens binnen één dag klaar zonder dat je last hebt van bouwstof en rommel.
                                    Benieuwd naar de mogelijkheden voor jouw keuken? Neem dan gerust <Link
                                    href="/contact"><a className="text-three underline">contact</a></Link> met
                                    ons op!
                                </p>
                            </div>
                            <br/>
                            <Link href="/contact">
                                <button
                                    className="mt-8 uppercase wrap-bg px-6 py-4 text-white ml-6 text-xs md:text-sm lg:text-base">Neem
                                    contact op
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="diensten__kosten mt-12 bg-gray-100 p-12 mb-12 pr-6 lg:mx-0 mx-6">
                        <h5 className="text-2xl font-bold">WIL JIJ EEN NIEUWE KEUKEN, MAAR NIET VOOR EEN NIEUWE
                            PRIJS?</h5>
                        <div className="w-20 h-05 wrap-bg mt-5"/>
                        <p className="mt-5 text-sm">Stuur ons via WhatsApp of per e-mail wat foto&#39;s van de keuken,
                            inclusief je
                            woonplaats, en ontvang binnen 48 uur een prijsopgave!</p>
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

export default Rotterdam
