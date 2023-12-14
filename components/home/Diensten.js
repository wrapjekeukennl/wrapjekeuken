import React from "react";
import Link from "next/link";

const servicebox = [
  {
    naam: "Veel gestelde vragen",
    imageUrl: "./assets/img/service1.jpg",
    url: "faq",
  },
  {
    naam: "Bekijk projecten",
    imageUrl: "./assets/img/serv.jpg",
    url: "projecten",
  },
  {
    naam: "Neem contact op",
    imageUrl: "./assets/img/service3.jpg",
    url: "contact",
  },
];

const Diensten = () => {
  return (
    <div className="diensten xl:container mx-auto xl:px-12 px-6 my-12 text-gray-800">
      <h2 className="diensten__title text-3xl font-bold text-center">
        Weten wat we voor jou kunnen doen?
      </h2>
      <div className="w-20 h-05 wrap-bg mx-auto mt-5" />
      <div className="diensten__box xl:container mx-auto grid sm:grid-cols-3 grid-cols-1 gap-10 mt-10">
        {servicebox.map((data) => (
          <div key={data.naam} className="col-span-1 relative">
            <img className="object-cover w-full" src={data.imageUrl} alt={data.naam} />
            <h5 className="">
              <Link href={`/${data.url}`}>
                <div className="grid grid-cols-5 cursor-pointer">
                  <div className="col-span-4 bg-gray-100 py-4 pl-5 uppercase text-sm">
                    {data.naam}
                  </div>
                  <div className="col-span-1 flex justify-center items-center wrap-bg hover:opacity-40 hover:text-white">
                    {">"}
                  </div>
                </div>
              </Link>
            </h5>
          </div>
        ))}
      </div>
      <div className="diensten__kosten mt-24 bg-gray-100 lg:p-12 py-12 px-6">
        <h2 className="text-2xl font-bold">Keuken wrappen kosten</h2>
        <div className="w-20 h-05 wrap-bg mt-5" />
        <p className="mt-5 text-sm">
          Omdat elke keuken uniek is hanteren wij geen vaste prijzen. Hierbij spelen verschillende factoren een grote rol: de grootte van de keuken, de bewerkelijkheid en de kleur of motief die je kiest zijn belangrijke factoren. Ook houden wij rekening met de reisafstand. Het wrappen van je keuken is goedkoper dan het compleet renoveren van je hele keuken. De minimale prijs van het vervangen van je complete keuken bedraagt rond de €5000,- terwijl je bij Wrap je keuken al vanaf €999,- je keuken volledig kan wrappen.
        </p>
      </div>
    </div>
  );
};

export default Diensten;
