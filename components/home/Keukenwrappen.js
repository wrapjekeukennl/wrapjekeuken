import React, {useState} from "react"
import Link from "next/link"

const Keukenwrappen = () => {
    const [play, setPlay] = useState(false)
    const [play2, setPlay2] = useState(false)
    const url = play ? "https://www.youtube.com/embed/e3ddF3AEbBM?autoplay=1" : ""
    const url2 = play2 ? "https://www.youtube.com/embed/e3ddF3AEbBM?autoplay=1" : ""
    return (
        <div
            className="keukenwrappen2 xl:container mx-auto py-12 xl:px-12 grid lg:grid-cols-2 grid-cols-1 sm:mt-12 mt-12">
            <div className="relative h-400 hidden lg:block">
                <img onClick={() => setPlay(true)}
                     className={`${play ? 'z-0' : 'z-30'} absolute top-0 object-fit md:h-full w-full`}
                     src="assets/img/video.webp" alt=""/>
                <iframe className="relative z-20 wrapjevideo md:h-full h-400 "
                        src={url} title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
            <div className="col-span-1 bg-gray-100 py-12 dark:text-gray-800">
                <h1 className="font-bold text-2xl px-12">Keuken wrappen</h1>
                <div className="w-20 h-0.5 wrap-bg ml-12 mt-5"/>
                <p className="mx-12 mt-5 text-sm">Toe aan een nieuwe keuken, maar geen zin, tijd of geld voor een hele
                    verbouwing? Laat dan je keuken wrappen!</p>
                <br/>
                <p className="mx-12 text-sm">Met speciaal ontwikkelde interieurfolie wordt de keuken in een nieuw jasje
                    gehesen. Alle zichtbare delen aan de oppervlakte worden gewrapped, waardoor de folierand niet
                    zichtbaar is. We hebben een uitgebreide selectie aan foliën, dus je kiest de look die bij jou past.
                    We zorgen er altijd voor dat de kras- en stootbestendige folie perfect wordt afgewerkt, waardoor we
                    6 jaar garantie kunnen bieden.</p>
                <Link href="/contact">
                    <button
                        className="mt-8 uppercase wrap-bg px-6 py-4 text-white ml-12 text-xs md:text-sm lg:text-base">Neem
                        contact op
                    </button>
                </Link>
            </div>
            <div className="relative w-full h-400 lg:hidden">
                <img onClick={() => setPlay2(true)}
                     className={`${play2 ? 'z-0' : 'z-30'} absolute top-0 object-fit md:h-full w-full`}
                     src="assets/img/video.webp" alt=""/>
                <iframe className="wrapjevideo relative z-20 md:h-full" src={url2}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Keukenwrappen
