import React, {useEffect, useState} from "react"
import Layout from "../components/Layout"
import {useRouter} from "next/router"
import Sidebar from "../components/Sidebar"
import Head from "next/head"
import IconBox from "../components/keuken-wrappen/IconBox"
import Link from "next/link"
import Breadcrump from "../components/Breadcrump";

const KeukenRenovatie = () => {
    const router = useRouter()

    const [beforeAfter, setBeforeAfter] = useState(false);

    setInterval(() => {
        setBeforeAfter(!beforeAfter);
    }, 3000)


    return (
        <Layout>
            <Head>
                <meta name="description"
                      content={`Keukendeurtjes vervangen? Wij geven een nieuwe uitstraling aan uw keuken binnen enkele dagen! ✓6 Jaar garantie ✓Snel klaar ✓Vakkundig en professioneel`}/>
                <meta name="keywords" content={`Keuken deurtjes, Keukendeurewn vervangen}`}/>
                <title>Wrapjekeuken.nl - Geef je keuken een nieuwe look</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Breadcrump/>
            <div className="grid lg:grid-cols-4 grid-cols-1 xl:container mx-auto px-6">
                <div className="col-span-3 xl:pl-6 mt-12">
                    <h1 className="text-2xl font-bold uppercase">Keukendeurtjes vervangen</h1>
                    <div className="w-20 h-05 wrap-bg mt-5"/>
                    <p className="mt-5 text-sm">Wil je graag jouw keuken laten wrappen, maar zijn de deurtjes van je
                        keukenkastjes
                        beschadigd of ben je uitgekeken op het profiel van de deurtjes? Geen probleem! Wij
                        wrappen niet alleen keukens, maar kunnen ook je keukendeurtjes vervangen voor
                        nieuwe exemplaren. Uiteraard wrappen wij je nieuwe vlakke kastdeurtjes met de
                        gewenste kleur folie, waardoor je alsnog kunt genieten van het gevoel van een
                        nieuwe keuken, zonder dat je je hele keuken hoeft te vervangen.
                    </p>

                    <div className="grid grid-cols-2 gap-8 mt-8">
                        <img className={`h-500 w-full object-cover`} src="/assets/img/keuken-renovatie-before.webp"
                             alt="keuken renovatie"/>
                        <img className={`h-500 w-full object-cover`} src="/assets/img/keuken-renovatie-after.webp"
                             alt="keuken renovatie"/>
                    </div>

                    <h2 className="text-xl font-bold uppercase mt-8">Gehele keuken vervangen of je oude keukenfrontjes
                        vervangen?</h2>
                    <p className="mt-5 text-sm">Het vervangen van je gehele keuken neemt vaak een langere periode in
                        beslag en
                        brengt een hoop onrust met zich mee. Om binnen een korte periode en zonder
                        rommel of bouwstof te kunnen genieten van een nieuwe keuken, is het wrappen van
                        je keuken dé perfecte oplossing! Zo geef je binnen een paar dagen jouw bestaande
                        keuken een volledig nieuwe uitstraling.
                    </p>
                    <p className="mt-5 text-sm">Wil je je keuken graag laten wrappen en is de kwaliteit van je kastjes
                        nog goed, maar
                        ben je uitgekeken op de vorm of het gedateerde profiel van je keukenkastjes? Dan
                        voorzien wij al jouw keukenkastjes van nieuwe keukenfrontjes, zoals
                        keukenkastdeurtjes ook wel genoemd worden. De nieuwe keukenfrontjes die wij
                        maken zijn volledig glad en worden op maat gemaakt, waarna wij deze maatwerk
                        kastdeurtjes voorzien van de gewenste wrapfolie. Doordat de deurtjes geen profiel
                        hebben, krijgt je keuken direct een strakke en moderne uitstraling in plaats van de
                        ouderwetse uitstraling die kastdeurtjes met een profiel met zich meebrengen.
                    </p>
                    <p className="mt-5 text-sm">Daarnaast zorgt het feit dat er geen profiel in de keukenfrontjes zit,
                        er ook voor dat de
                        folie perfect egaal geplakt kan worden en beter hecht. Zo kunnen wij een duurzaam
                        resultaat garanderen en kan jij nog jarenlang genieten van je nieuwe keuken met een
                        strakke, moderne en frisse uitstraling!
                    </p>
                    <p className="mt-5 text-sm">Benieuwd naar het hoogwaardige resultaat van ons werk? Bekijk onze <Link
                        href="/projecten">gerealiseerde
                        projecten</Link> en volg ons op <a
                        href="https://www.instagram.com/wrapjekeuken.nl">Instagram!</a>
                    </p>
                    <p className="mt-5 text-sm underline">Let op: de door ons op maat gemaakte kastdeurtjes zijn te
                        allen tijde vlak en worden
                        door ons voorzien van wrapfolie, zodat de deurtjes perfect bij je keuken passen en
                        een lange levensduur hebben.
                    </p>
                    <div
                        className="keukenwrappen xl:container mx-auto grid lg:grid-cols-2 grid-cols-1 sm:mt-12 mt-12 lg:px-0">
                        <div className="col-span-1 h-500">
                            <img className={`w-full h-full object-cover`} src="/assets/img/keuken-renovatie-2.webp"
                                 alt="keuken renovatie"/>
                        </div>
                        <div className="col-span-1 bg-gray-100 py-12 dark:text-gray-800">
                            <h3 className="font-bold text-2xl px-6">HOE GAAN WIJ TE WERK?</h3>
                            <div className="w-20 h-0.5 wrap-bg ml-6 mt-5"/>
                            <p className="mx-6 mt-5 text-sm">Bij Wrapjekeuken.nl staan wij te popelen om jouw keuken een
                                complete make-over te
                                geven! Wij toveren je keuken met ouderwetse, versleten of slordige aanblik om naar
                                een strakke, stijlvolle en moderne keuken. En het beste is dat jij, afhankelijk van de
                                grootte van je keuken, binnen maximaal 4 dagen van je nieuwe keuken kunt
                                genieten! Wij halen je oude kastdeurtjes op, zorgen dat de nieuwe kastdeurtjes exact
                                op maat gemaakt worden en wrappen vervolgens de nieuwe deurtjes en alle andere
                                delen van je keuken in de gewenste kleur.</p>
                            <p className="mx-6 mt-5 text-sm">Ben je benieuwd naar de mogelijkheden om jouw keuken een
                                nieuwe look te geven?
                                Neem eenvoudig contact met ons op of vraag direct een offerte aan via WhatsApp,

                                per e-mail of telefoon. Stuur een paar foto’s van je keuken op, inclusief je woonplaats,
                                en ontvang binnen 48 uur een prijsopgave!</p>
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
                    <h2 className="text-xl font-bold uppercase">Keukenkastdeurtjes vervangen voor een duurzaam
                        resultaat</h2>
                    <div className="w-20 h-05 wrap-bg mt-5"/>
                    <p className="mt-5 text-sm">
                        Om jouw keuken met behulp van wrapfolie in een nieuw jasje te steken, is het
                        belangrijk dat er geen beschadigingen in of op je keukenkastdeurtjes zitten. Zitten er
                        wel beschadigingen op? Dan zie je dit door de wrapfolie heen, aangezien de folie
                        strak op de kastjes wordt geplakt.
                    </p>
                    <p className="mt-5 text-sm">
                        Om er zeker van te zijn dat je keuken perfect gewrapt kan worden, kunnen wij je
                        beschadigde keukenkastdeurtjes vervangen. Onze meubelmaker maakt de nieuwe
                        deurtjes op maat, waardoor deze perfect bij jouw keukenkastjes passen. De deurtjes
                        die wij leveren zijn te allen tijde vlak, wat betekent dat er geen profiel in zit. Dit is
                        nodig om de folie zo strak mogelijk tegen je keukendeurtjes aan te kunnen plakken.
                        Houd er rekening mee dat je voor een mooi resultaat al je keukenkastdeurtjes moet
                        vervangen en niet één kastdeurtje kunt vervangen, aangezien het belangrijk is dat de
                        deurtjes van je keukenkastjes gelijkwaardig zijn.
                    </p>

                    <div
                        className="keukenwrappen xl:container mx-auto grid lg:grid-cols-2 grid-cols-1 sm:mt-12 mt-12 lg:px-0">
                        <div className="col-span-1 h-500">
                            <img className={`h-500 w-full object-cover`} src="/assets/img/keuken-renovatie-4.webp"
                                 alt="keuken renovatie"/>
                        </div>
                        <div className="col-span-1 bg-gray-100 py-12 dark:text-gray-800">
                            <h2 className="font-bold text-2xl px-6 uppercase">Keukendeurtjes op maat: het ultieme
                                resultaat!</h2>
                            <div className="w-20 h-0.5 wrap-bg ml-6 mt-5"/>
                            <div className="mx-6">
                                <p className="mt-5 text-sm">
                                    Kun je niet wachten om jouw keuken een nieuwe uitstraling te geven? Neem dan
                                    gerust contact met ons op! Wij inventariseren je wensen en vertellen je graag wat er
                                    allemaal mogelijk is. Of het nu gaat om beschadigde keukendeurtjes, je gewoon toe
                                    bent aan strakke nieuwe keukendeurtjes of je alleen je keuken wilt laten wrappen,
                                    wij
                                    staan te popelen om jou weer te laten genieten van de centrale plek in je woning!
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

export default KeukenRenovatie;
