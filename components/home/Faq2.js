import {PlusIcon, ChevronRightIcon} from "@heroicons/react/solid"
import {motion} from "framer-motion"
import {useState, useReducer} from "react"
import Link from "next/link"

function reducer(state, action) {
    switch (action.type) {
        case "1":
            return {
                one: !state.one,
                two: state.two,
                three: state.three,
                four: state.four,
                five: state.five,
                six: state.six
            }
        case "2":
            return {
                one: state.one,
                two: !state.two,
                three: state.three,
                four: state.four,
                five: state.five,
                six: state.six
            }
        case "3":
            return {
                one: state.one,
                two: state.two,
                three: !state.three,
                four: state.four,
                five: state.five,
                six: state.six
            }
        case "4":
            return {
                one: state.one,
                two: state.two,
                three: state.three,
                four: !state.four,
                five: state.five,
                six: state.six
            }
        case "5":
            return {
                one: state.one,
                two: state.two,
                three: state.three,
                four: state.four,
                five: !state.five,
                six: state.six
            }
        case "6":
            return {
                one: state.one,
                two: state.two,
                three: state.three,
                four: state.four,
                five: state.five,
                six: !state.six
            }
        default:
            return {
                one: false,
                two: false,
                three: false,
                four: false,
                five: false,
                six: false
            }
    }
}

const Faq = () => {
    const [plus, setPlus] = useState(false)
    const [state, dispatcher] = useReducer(reducer, {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false
    })

    const vragen = [
        {
            vraag: "Wat voor materialen worden er gebruikt?",
            antwoord: "Voor het wrappen van keukens gebruiken wij kwalitatieve interieurfolie. Het heeft de beste kwaliteit en heeft een extra dikke laminaatlaag met een lijmlaag die sterk hecht. Bij normaal gebruik is het kras- en stootbestendige materiaal zeker 10 jaar goed.",
            dispatch: "1",
            state: state.one,
        },
        {
            vraag: "Kan de folie daarna weer makkelijk worden verwijderd?",
            antwoord: "De folie is niet makkelijk te verwijderen, maar dit is ook hoe het is bedoeld. In principe spreken wij van een permanente wrap met interieurfolie, waarbij er zo nodig een beschadigd deel kan worden vervangen. Ons concept is niet ingericht op korte termijn toepassingen.",
            dispatch: "2",
            state: state.two,
        },
        {
            vraag: "Kunnen er hete pannen worden geplaatst op de folie?",
            antwoord: "De folie is niet gemaakt voor hete pannen en zou kapot kunnen gaan. Er wordt aangeraden om altijd een onderzetter onder hete objecten te plaatsen.",
            dispatch: "3",
            state: state.three,
        },
        {
            vraag: "Is de folie duurzaam?",
            antwoord: "De folie is zeker duurzaam. Het blijft jaren goed en is een langetermijnoplossing. Je zult jaren kunnen genieten van een 'nieuwe' keuken door de folie van hoge kwaliteit.",
            dispatch: "4",
            state: state.four,
        },
        {
            vraag: "Blijven er vingerafdrukken op de folie zitten?",
            antwoord: "Op de folie die wij gebruiken blijven geen vingerafdrukken achter. Bij de folie van mindere kwaliteit zal dit wel gebeuren. Als er toch viezigheid komt op de keukenkastjes wordt het aangeraden om deze schoon te maken met een doekje, lauw water en een biologisch afbreekbare ontvetter.",
            dispatch: "5",
            state: state.five,
        },
        {
            vraag: "Wat zijn de mogelijkheden qua kleur?",
            antwoord: "De mogelijkheden zijn enorm. De verscheidenheid kleuren en motieven is oneindig. Knalroze, marmer metallic of mat. Het kan allemaal!",
            dispatch: "6",
            state: state.six,
        }
    ]

    return (
        <div className="faq mt-10">
            <div className="keukenwrappen xl:container mx-auto xl:px-12 px-6 grid grid-cols-4 py-20 gap-16">
                <div className="col-span-4 md:col-span-2">
                    <h3 className="faq__titel text-2xl font-bold mb-5">
                        INFORMATIE OVER DE MATERIALEN
                    </h3>
                    {vragen.map(({vraag, antwoord, state, dispatch}, index) => (
                        <div
                            key={index}
                            onClick={() => dispatcher({type: dispatch})}
                            className="faq__vragen inline-flex border-b w-full py-3">
                     <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="bg-three text-white w-10 h-10 rounded-full"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                           <motion.path
                               animate={
                                   state === true ? {rotate: 90} : {rotate: 0}
                               }
                               transition={{duration: 0.3}}
                               stroke-linecap="round"
                               stroke-linejoin="round"
                               stroke-width="2"
                               d="M12 4v16m8-8H4"
                           />
                        </svg>
                     </span>
                            <div className="flex mt-2">
                                <div className="ml-8  relative">
                                    <h3 className="hover:text-three font-bold uppercase">
                                        {vraag}
                                    </h3>
                                    <motion.p
                                        initial={{display: "none"}}
                                        animate={
                                            state === true
                                                ? {display: "block"}
                                                : {display: "none"}
                                        }
                                        className="mt-5">
                                        {antwoord}
                                    </motion.p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Link href="/faq">
                        <button
                            className="sm:mt-8 mt-3 uppercase wrap-bg sm:px-6 p-3 sm:py-4 text-xs md:text-sm lg:text-base text-white">
                            Veel gestelde vragen
                        </button>
                    </Link>
                </div>
                <div className="col-span-4 md:col-span-2 keukenwrappen4_img h-500"></div>
            </div>
        </div>
    )
}

export default Faq
