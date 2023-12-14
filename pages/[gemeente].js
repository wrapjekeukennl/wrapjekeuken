import React from "react"
import Layout from "../components/Layout"
import gemeentes from "../gemeentes"
import {useRouter} from "next/router"
import Sidebar from "../components/Sidebar"
import Head from "next/head"
import IconBox from "../components/keuken-wrappen/IconBox"
import Link from "next/link"
import Breadcrump from "../components/Breadcrump";

const Gemeente = ({data}) => {
    const router = useRouter()

    return (
        <Layout>
            <Head>
                <meta name="description"
                      content={`Keuken wrappen in ${data[0]}? Wij geven een nieuwe uitstraling aan uw keuken binnen enkele dagen! ✓6 Jaar garantie ✓Snel klaar ✓Vakkundig en professioneel`}/>
                <meta name="keywords" content={`Keuken wrappen, Keuken wrappen ${data[0]}`}/>
                <title>Wrapjekeuken.nl - Geef je keuken een nieuwe look</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Breadcrump/>
            <div className="grid lg:grid-cols-4 grid-cols-1 xl:container mx-auto px-6">
                <div className="col-span-3 xl:pl-6 mt-12">
                    <h1 className="text-2xl font-bold">KEUKEN WRAPPEN IN {router.query.gemeente.toUpperCase()}</h1>
                    <div className="w-20 h-05 wrap-bg mt-5"/>
                    <p className="mt-5 text-sm">Toe aan een nieuwe keuken, en woon jij in {data[0]} of omstreken? Heb
                        jij geen zin, tijd of geld voor een hele verbouwing? Laat dan je keuken wrappen!</p>
                    <p className="mt-5 text-sm">Met speciaal ontwikkelde interieurfolie wordt de keuken in een nieuw
                        jasje gehesen. Alle zichtbare delen aan de oppervlakte worden gewrapped, waardoor de folierand
                        niet zichtbaar is. We hebben een uitgebreide selectie aan foliën, dus je kiest de look die bij
                        jou past. We zorgen er altijd voor dat de kras- en stootbestendige folie perfect wordt
                        afgewerkt, waardoor we 6 jaar garantie kunnen bieden. Wij gaan te werk met folie van zeer hoge
                        kwaliteit, namelijk anti-kras interieurfolie. Deze folie kan dus zeker tegen een stootje.
                        Overigens is de folie die wij gebruiken onderhoudsvriendelijk en laat het minimaal vingervlekken
                        achter. Er hangen veel voordelen aan het wrappen van je keuken. Het is bijvoorbeeld zo gebeurd!
                        Het wrappen van jouw keuken is al binnen één dag gedaan, terwijl een keuken laten spuiten of
                        laten vervangen vaak enkele weken duurt. </p>
                    <div
                        className="keukenwrappen xl:container mx-auto grid lg:grid-cols-2 grid-cols-1 sm:mt-12 mt-12 lg:px-0">
                        <div className="col-span-1 keukenwrappen_img h-400"></div>
                        <div className="col-span-1 bg-gray-100 py-12 dark:text-gray-800">
                            <h2 className="font-bold text-2xl px-6">HOE GAAN WIJ TE WERK?</h2>
                            <div className="w-20 h-0.5 wrap-bg ml-6 mt-5"/>
                            <p className="mx-6 mt-5 text-sm">Je keuken wrappen bij Wrapjekeuken is de makkelijkste
                                manier om je keuken een make-over te geven. Wij wrappen je keuken op locatie en zijn in
                                een dag klaar. Ben jij geïnteresseerd in de mogelijkheden om jouw keuken een nieuwe look
                                te geven? Dan kan je met ons contact opnemen via whatsapp, email of telefoon. Via
                                whatsapp kun je eenvoudig een prijsopgave aanvragen. Stuur een paar foto’s van je keuken
                                op, inclusief je woonplaats en ontvang binnen 48 uur een prijsopgave! Voor je het weet
                                staan wij voor je deur en is je keuken binnen 1 dag omgetoverd! </p>
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
                    <div className="diensten__kosten mt-12 bg-gray-100 p-12 mb-12 pr-6 lg:mx-0 mx-6">
                        <h5 className="text-2xl font-bold">WIL JIJ EEN NIEUWE KEUKEN, MAAR NIET VOOR EEN NIEUWE
                            PRIJS?</h5>
                        <div className="w-20 h-05 wrap-bg mt-5"/>
                        <p className="mt-5 text-sm">Stuur ons via WhatsApp of e-mail wat foto's van de keuken + je
                            woonplaats en ontvang binnen 48 uur een prijsopgave!</p>
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

export default Gemeente

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const data = gemeentes

    // Get the paths we want to pre-render based on posts
    const paths = data.map(gemeente => ({
        params: {gemeente: gemeente.toLowerCase()}
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: false}
}

// This also gets called at build time
export async function getStaticProps({params}) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const data = gemeentes.filter(gemeente => gemeente.toLowerCase() === params.gemeente)

    // Pass post data to the page via props
    return {props: {data}}
}
