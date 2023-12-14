import { PlusIcon, ChevronRightIcon } from "@heroicons/react/solid"
import { motion } from "framer-motion"
import { useState, useReducer } from "react"
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
         }
      case "2":
         return {
            one: state.one,
            two: !state.two,
            three: state.three,
            four: state.four,
            five: state.five,
         }
      case "3":
         return {
            one: state.one,
            two: state.two,
            three: !state.three,
            four: state.four,
            five: state.five,
         }
      case "4":
         return {
            one: state.one,
            two: state.two,
            three: state.three,
            four: !state.four,
            five: state.five,
         }
      case "5":
         return {
            one: state.one,
            two: state.two,
            three: state.three,
            four: state.four,
            five: !state.five,
         }
      default:
         return {
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
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
   })

   const vragen = [
      {
         vraag: "Het is snel",
         antwoord: "Het renoveren van je keuken kan vaak enkele weken duren. Een gewrapte keuken is binnen 1 dag klaar.",
         dispatch: "1",
         state: state.one,
      },
      {
         vraag: "Het is voordelig",
         antwoord: "Je huidige keuken laten renoveren, een nieuwe keuken kopen of spuiten kost een hoop geld. Een keuken wrappen is veel goedkoper. Vooral als je niet meer tevreden bent met de kleur van jouw keuken is wrappen dé perfecte oplossing.",
         dispatch: "2",
         state: state.two,
      },
      {
         vraag: "Er is geen rommel",
         antwoord: "Bij het plaatsen van een nieuwe keuken komt veel rommel, stof en onrust kijken. Bij wrappen is daar helemaal geen sprake man. Bij het wrappen worden de frontjes eraf gehaald en heel eenvoudig met de wrapfolie bekleed.",
         dispatch: "3",
         state: state.three,
      },
      {
         vraag: "Het is kras- en stootbestendig",
         antwoord: "De folie die wordt gebruikt is dus erg krachtig.  De wrapfolie kan zeker tegen een stootje. Daarnaast kan het met elke huishoudmiddel worden gereinigd.",
         dispatch: "4",
         state: state.four,
      },
      {
         vraag: "De mogelijkheden zijn eindeloos",
         antwoord: "De mogelijkheden bij het wrappen zijn eindeloos. Je kunt een compleet nieuwe keuken  bereiken met een strakke uitstraling met behulp van de speciale wrapfolie.",
         dispatch: "5",
         state: state.five,
      }
   ]

   return (
      <div className="faq mt-10 bg-gray-100">
         <div className="keukenwrappen xl:container mx-auto xl:px-12 px-6 grid grid-cols-4 py-20 gap-16">
            <div className="col-span-4 md:col-span-2 h-500">
               <img className={`h-500 w-full object-cover`} src="/assets/img/keuken-wrappen-3.webp"
                    alt="keuken renovatie"/>
            </div>
            <div className="col-span-4 md:col-span-2">
               <h3 className="faq__titel text-2xl font-bold mb-5">
                  DE VOORDELEN VAN JE KEUKEN LATEN WRAPPEN
               </h3>
               {vragen.map(({ vraag, antwoord, state, dispatch }, index) => (
                  <div
                     key={index}
                     onClick={() => dispatcher({ type: dispatch })}
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
                                 state === true ? { rotate: 90 } : { rotate: 0 }
                              }
                              transition={{ duration: 0.3 }}
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
                              initial={{ display: "none" }}
                              animate={
                                 state === true
                                    ? { display: "block" }
                                    : { display: "none" }
                              }
                              className="mt-5">
                              {antwoord}
                           </motion.p>
                        </div>
                     </div>
                  </div>
               ))}
               <Link href="/contact">
                  <button className="sm:mt-8 mt-3 uppercase wrap-bg sm:px-6 p-3 sm:py-4 text-xs md:text-sm lg:text-base text-white">
                     NEEM CONTACT OP
                  </button>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Faq
