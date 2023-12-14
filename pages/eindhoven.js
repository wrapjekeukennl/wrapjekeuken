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
                      content="Keuken wrappen in Eindhoven of omgeving? Wij geven je keuken een nieuwe uitstraling! ✓ 6 jaar garantie ✓ Vakkundig & professioneel ✓ Neem contact op!"/>
                <meta name="keywords" content={`Keuken wrappen, Keuken wrappen Eindhoven}`}/>
                <title>Keuken wrappen Eindhoven | In 1 dag klaar! | Wrapjekeuken.nl</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Breadcrump/>
            <div className="grid lg:grid-cols-4 grid-cols-1 xl:container mx-auto px-6">
                <div className="col-span-3 xl:pl-6 mt-12">
                    <h1 className="text-2xl font-bold">Keuken wrappen in Eindhoven</h1>
                    <div className="w-20 h-05 wrap-bg mt-5"/>
                    <p className="mt-5 text-sm">
                        Past je keuken niet meer bij je interieur? Of vind je simpelweg de kleur van je keuken
                        niet meer mooi? Om jouw keuken in een nieuw jasje te steken en een nieuwe
                        uitstraling te geven, ben je bij ons aan het juiste adres!
                    </p>
                    <p className="mt-5 text-sm">
                        Onze professionele wrappers zorgen ervoor dat je binnen één dag al kunt genieten
                        van het gevoel van een nieuwe keuken! En dat zonder verbouwing, rommel en onrust.
                    </p>
                    <div
                        className="keukenwrappen xl:container mx-auto grid lg:grid-cols-2 grid-cols-1 sm:mt-12 mt-12 lg:px-0">
                        <div className="col-span-1 keukenwrappen_img h-400"></div>
                        <div className="col-span-1 bg-gray-100 py-12 dark:text-gray-800">
                            <h3 className="font-bold text-2xl px-6">Keuken verbouwen of keukenkastjes vernieuwen?</h3>
                            <div className="w-20 h-0.5 wrap-bg ml-6 mt-5"/>
                            <p className="mx-6 mt-5 text-sm">
                                Zijn je keukenkastjes nog in goede staat, maar kunnen deze wel een nieuwe kleur
                                gebruiken? Kies er dan voor om je keukenkastjes te wrappen en zo je keuken in een
                                volledig nieuw jasje te steken!
                            </p>
                            <p className="mx-6 mt-5 text-sm">
                                Je keukenkastjes laten wrappen is niet alleen een voordelig en snel, maar ook enorm
                                duurzaam! Je hoeft geen nieuwe keuken aan te schaffen, want de grondstoffen van je
                                bestaande keuken worden hergebruikt. Met wrappen geef je je huidige keuken
                                namelijk een nieuw leven. De folie die onze professionele wrappers aanbrengen, is
                                van de hoogste kwaliteit en maakt het mogelijk dat jij nog jarenlang kunt genieten van
                                de kleur van jouw keuken.
                            </p>
                            <p className="mx-6 mt-5 text-sm">
                                Let op: wil je jouw keukenkastjes laten wrappen? Zorg er dan voor dat alle
                                beschadigingen gerepareerd zijn, zodat de folie vlak en strak op de kastjes geplakt
                                kan worden. Wist je dat wij ook de deurtjes van je keukenkastjes kunnen renoveren
                                voordat wij je keuken gaan wrappen? Neem gerust contact met ons op voor meer
                                informatie!
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
                    <h2 className="text-xl font-bold uppercase">Keuken wrappen: voor en na</h2>
                    <div className="w-20 h-05 wrap-bg mt-5"/>
                    <p className="mt-5 text-sm">
                        Ben je nog steeds blij met de opstelling van je keuken, maar kan je keuken wel een
                        opknapbeurt gebruiken? Laat dan je keukenkastjes en/of aanrechtblad wrappen en
                        wordt weer verliefd op je keuken!
                    </p>
                    <p className="mt-5 text-sm">
                        De wrapfolie waar wij mee werken, is van de hoogste kwaliteit en zowel kras- als
                        stootbestendig. Omdat de folie in alle kleuren en met vele motiefjes verkrijgbaar is,
                        kun je precies de kleurensamenstelling uitkiezen welke geheel naar jouw smaak is en
                        bij je interieur past.
                    </p>

                    <p className="mt-5 text-sm">
                        Nadat onze professionele wrappers klaar zijn met het wrappen van je keuken, ziet
                        deze er compleet anders uit. De keuken ziet er weer als nieuw uit en de uitstraling is
                        volledig afgestemd op jouw wensen. Zo geniet jij nog jarenlang van je keuken! Bekijk
                        onze <Link href="/projecten"><a className="text-three underline">gerealiseerde projecten</a></Link> en volg ons op <a className="text-three"
                        href="https://www.instagram.com/wrapjekeuken.nl">Instagram</a> om de indrukwekkende
                        keukentransformaties te zien.
                    </p>

                    <div className="diensten__kosten mt-12 bg-gray-100 p-12 mb-12 pr-6 lg:mx-0 mx-6">
                        <h5 className="text-2xl font-bold">
                            Je bestande keuken renoveren met keukenwrapping
                        </h5>
                        <div className="w-20 h-05 wrap-bg mt-5"/>
                        <p className="mt-5 text-sm">
                            Wil je jouw keuken ook in een nieuw jasje steken? Neem dan gerust contact met ons
                            op en wij vertellen je wat er mogelijk is! Of het nu gaan om een enkele kast, alle
                            kastjes of je keukenblad, wij helpen je graag om weer optimaal te kunnen genieten in
                            het hart van je woning.
                        </p>
                        <p className="mt-5 text-sm">
                            Neem <Link href="/contact"><a className="text-three underline">contact</a></Link> met ons op en geniet binnenkort ook van een nieuwe keuken! Stuur
                            ons via WhatsApp of per e-mail wat foto&#39;s van de keuken + je woonplaats en ontvang
                            binnen 48 uur een op maat gemaakte prijsopgave!
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
