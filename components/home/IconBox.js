import React, { useState } from "react"
import Link from "next/link"

const IconBox = () => {
  const [iconbox, setIconbox] = useState([
    {
      id: 1,
      icon: "autora-icon-quality",
      title: "DUURZAAM",
      text: "Met het oog op de toekomst werkt Wrapjekeuken.nl met hoogwaardige interieurfolie, zodat je jaren van je keuken kunt genieten. De hechting is zo sterk en de kwaliteit zo goed, dat we 6 jaar garantie geven."
    },
    {
      id: 2,
      icon: "autora-icon-time",
      title: "KLAAR IN 1 DAG",
      text: "Geen troep, geen gedoe: afhankelijk van het type keuken zijn we met 1 tot 2 dagen klaar en kun je direct weer aan de slag in je nieuwe keuken."
    },
    {
      id: 3,
      icon: "autora-icon-author",
      title: "EXPERTISE",
      text: "Onze vakmannen leveren altijd secuur werk en pure kwaliteit, omdat we jouw tevredenheid het belangrijkst vinden."
    }
  ])

  return (
    <div className="row xl:container mx-auto grid sm:grid-cols-3 grid-cols-1 gap-10 px-6 mt-12">
      {iconbox.map(data => (
        <div className="col-span-1" key={data.id}>
          <div className="w-full flex justify-center items-center flex-col">
            <div className="h-20 text-5xl wrap bg-gray-100 dark:bg-white w-20 flex justify-center items-center rounded-full">
              <i className={`${data.icon} text-center`} />
            </div>
            <div className="text-wrap mt-6 justify">
              <h3 className="flex justify-center font-semibold">
                <Link href="#">{data.title}</Link>
              </h3>
              <div className="w-20 h-0.5 wrap-bg mx-auto mt-5" />
              <p className="text-center text-sm mt-5">{data.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default IconBox
