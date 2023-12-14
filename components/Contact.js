import React, { useState } from "react";
import axios from "redaxios";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [gegevens, setGegevens] = useState({
    voornaam: "",
    achternaam: "",
    email: "",
    telefoon: "",
    bericht: "",
    onderwerp: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggle(true);
    setTimeout(() => {
      setToggle(false);
    }, 3000);

    // window.gtag("event", "Verstuurd", { event_category: "Contactformulier" });

    axios.post("/api/sendmail/", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: gegevens,
    });

    router.push("/verzonden");
  };

  return (
    <div className="contact lg:my-20 my-10  mb-52">
      <div className="md:col-span-2  col-span-3 w-full px-6">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mb-32 w-full container mx-auto"
        >
          <div className="form__name w-full sm:col-span-1 col-span-2 mt-2">
            <label className="relative hidden active:block focus:top-0">
              Naam
            </label>
            <input
              className="border-b bg-gray-100 border py-2 container formplace w-full outline-none pl-3"
              type="text"
              value={gegevens.voornaam}
              onChange={(e) =>
                setGegevens({ ...gegevens, voornaam: e.target.value })
              }
              placeholder="Naam"
              autoComplete="given-name"
              required
            />
          </div>
          <div className="form__name w-full sm:col-span-1 col-span-2 mt-2">
            <label className="relative hidden active:block focus:top-0">
              Email
            </label>
            <input
              className="border-b bg-gray-100 border py-2 container formplace w-full outline-none pl-3"
              type="text"
              value={gegevens.email}
              onChange={(e) =>
                setGegevens({ ...gegevens, email: e.target.value })
              }
              placeholder="Email"
              autoComplete="email"
              required
            />
          </div>
          <div className="form__name w-full sm:col-span-1 col-span-2 mt-2">
            <label className="relative hidden active:block focus:top-0">
              Telefoonnummer
            </label>
            <input
              className="border-b bg-gray-100 border py-2 container formplace w-full outline-none pl-3"
              type="text"
              value={gegevens.telefoon}
              onChange={(e) =>
                setGegevens({ ...gegevens, telefoon: e.target.value })
              }
              placeholder="Telefoonnummer"
              autoComplete="phone"
              required
            />
          </div>
          <div className="form__name w-full sm:col-span-1 col-span-2 mt-2">
            <label className="relative hidden active:block focus:top-0">
              Onderwerp
            </label>
            <input
              className="border-b bg-gray-100 border py-2 container formplace w-full outline-none pl-3"
              type="text"
              value={gegevens.onderwerp}
              onChange={(e) =>
                setGegevens({ ...gegevens, onderwerp: e.target.value })
              }
              placeholder="Onderwerp"
              required
            />
          </div>
          <div className="form__name w-full sm:col-span-2 col-span-2 mt-2">
            <label className="relative bg-gray-100 hidden py-2e:block focus:top-0">
              Bericht
            </label>
            <textarea
              rows="5"
              className="bg-gray-100 border w-full formplace formplace1 outline-none pl-3 pt-2"
              type="text"
              value={gegevens.bericht}
              onChange={(e) =>
                setGegevens({ ...gegevens, bericht: e.target.value })
              }
              placeholder="Bericht"
              required
            />
          </div>
          <div className="w-full sm:w-2/6 col-span-2">
            <button className="mt-8 uppercase wrap-bg text-white px-6 py-4 text-xs md:text-sm lg:text-base">
              Verzenden
            </button>
          </div>
          {toggle === true ? (
            <p className="col-span-2 mt-3 text-xs">
              Bericht is verstuurd. Ik neem zo spoedig mogelijk contact met je
              op.
            </p>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
