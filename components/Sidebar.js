import Link from "next/link";
import React from "react";

const contact = [
  {
    naam: "WhatsApp",
    url: "https://wa.me/31621970416",
    imageUrl: "./whatsapp.svg",
  },
  { naam: "+31 (0)85 400 81 81", url: "tel+31854008181", imageUrl: "./tel.svg" },
  {
    naam: "info@wrapjekeuken.nl",
    url: "mailto:info@wrapjekeuken.nl",
    imageUrl: "./mail.svg",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar px-2 border shadow py-12 mt-12 sticky top-28 mx-auto xl:ml-12 sm:ml-6 ml-6">
      <h3 className="text-center font-bold">Heb je vragen of interesse?</h3>
      <p className="text-sm text-center mt-6">
        Je kan ons op werkdagen van 9.00u tot 17.00u bereiken via whatsapp,
        email of telefoon.
      </p>
      {contact.map((data) => (
        <div className="cursor-pointer" key={data.naam}>
          <Link href={data.url}>
            <div className="bg-gray-100 w-full mt-8 h-40 flex justify-center items-center flex-col">
              <img className="w-7 h-7" src={data.imageUrl} alt="" />
              <h5 className="text-sm mt-3 font-bold">{data.naam}</h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
