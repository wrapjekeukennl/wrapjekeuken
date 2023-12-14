import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import Breadcrump from "../components/Breadcrump";

const faq = () => {
  const vragen = [
    {
      naam: "Algemeen",
      vragen: [
        {
          vraag: "Waarom wrappen en geen nieuwe keuken?",
          antwoord:
            "Een nieuwe keuken kost veel geld en levert veel gedoe op en daar moet je maar net zin in hebben. Wrappen heeft meerdere voordelen ten opzichte van een hele nieuwe keuken: \n\n Je kunt je keuken volledig naar eigen smaak customizen. Je kunt kiezen uit honderden kleuren en reliëfjes, voor ieder wat wils. \n\n Binnen drie dagen heb je de look en feel van een nieuwe keuken. Geen weken van verbouwing dus! \n\n Je kunt een duurdere look realiseren voor relatief minder geld. Wil je bijvoorbeeld een marmeren look, dan ben je bij ons aan het goede adres.",
        },
        {
          vraag: "Hoe lang doen jullie er over een keuken te wrappen?",
          antwoord:
            "Wij zijn doorgaans in één volle dag klaar met de keuken, maar het kan zijn dat we één of twee dagen langer bezig zijn. Dat hangt af van onder andere de grootte en indeling van je keuken.",
        },
        {
          vraag: "Hoeveel kost het om een keuken te wrappen?",
          antwoord:
            "Omdat elke keuken uniek is hanteren wij geen vaste prijzen. Er zijn verschillende factoren die meespelen: de grootte van de keuken, de bewerkelijkheid en welke kleur of motief je wil. Ook houden we rekening met de reisafstand. \n\n We werken met een vanaf-prijs van €999,-, maar om het juiste tarief te bepalen hebben we altijd de afmetingen en foto’s van de keuken nodig. Elke keuken is anders!",
        },
        {
          vraag: "Wrappen jullie door het hele land?",
          antwoord:
            "Wij wrappen keukens door het hele land. In sommige gevallen maken wij een uitzondering en reizen wij zelfs door naar België.",
        },
      ],
    },
    {
      naam: "Garantie",
      vragen: [
        {
          vraag: "Hoe lang gaat de wrap mee?",
          antwoord:
            "Bij normaal gebruik blijft de folie minimaal tien jaar mooi, maar met goed onderhoud moet het langer kunnen. Gebruik je gezond verstand en bekijk onze schoonmaaktips bij materialen.",
        },
        {
          vraag: "Hoe lang heb ik garantie?",
          antwoord:
            "Zes jaar! Wij vertrouwen volledig op de sterke folie en onze eigen applicatiekracht. Doordat wij op de juiste manier wrappen en kwaliteit aanbieden, durven we het aan zes jaar garantie aan te bieden. Meer ga je nergens anders vinden.",
        },
        {
          vraag: "Kan de folie loslaten bij het schoonmaken?",
          antwoord:
            "Nee. Bij normaal schoonmaakgedrag niet, tenzij je op een hoekje gaat schuren met een schuurspons. Gebruik tevens geen scherpe of harde materialen.",
        },
        {
          vraag: "Mijn folie heeft losgelaten, komen jullie het maken?",
          antwoord:
            "Als de folie zomaar loslaat, dan komen we zeker langs om het te repareren. Dat is namelijk niet de bedoeling! Maar om het zeker te weten willen we je vragen even te bellen naar +31 (0)85 400 81 81 en wat foto’s van de schade te appen naar +31 6 2197 0416. Zo kunnen we samen beoordelen of we het gratis komen herstellen.",
        },
        {
          vraag: "Kan de folie verkleuren door zonlicht?",
          antwoord: "Nee, dat is niet mogelijk.",
        },
        {
          vraag: "Kunnen er luchtbubbels onder de folie komen?",
          antwoord:
            "Ja, dat kan gebeuren. Dit is niet de bedoeling en valt altijd onder de garantie; het betekent namelijk dat de folie niet goed is bevestigd. Omdat we dit te allen tijde willen voorkomen, controleren we dit altijd voor de oplevering. \n\n Mocht het toch bij jou het geval zijn dat je bubbels onder de folie ziet, dan willen we je vragen even te bellen naar +31 (0)85 400 81 81 en wat foto’s van de schade te appen naar +31 6 21970416.",
        },
      ],
    },
    {
      naam: "Materialen",
      vragen: [
        {
          vraag: "Welk materiaal gebruiken jullie? Waar is het van gemaakt?",
          antwoord:
            "Wrapjekeuken.nl gebruikt speciaal voor interieur ontwikkelde folie van de beste kwaliteit. Deze folie heeft een extra dikke laminaatlaag, met een sterk hechtende lijmlaag. Het materiaal is kras- en stootbestendig en blijft, bij normaal gebruik, zeker tien jaar goed.",
        },
        {
          vraag: "Kan ik het materiaal bij jullie kopen en het zelf doen?",
          antwoord:
            "Nee, dat kan niet en dat raden we ook niet aan. Om de folie strak op het oppervlak te krijgen moet je de juiste expertise hebben en de folie goed kennen. Wij werken alleen met de allerbeste vakmensen, die al jaren ervaring met wrappen hebben.",
        },
        {
          vraag: "Is de folie weer makkelijk te verwijderen?",
          antwoord:
            "Nee, en dat is ook precies de bedoeling! Een keukenwrap met interieurfolie is in principe een permanente wrap, waarbij we indien nodig een beschadigd deel kunnen vervangen. Ons concept is niet ingericht op korte termijn toepassingen.",
        },
        {
          vraag: "Welke kleuren zijn er mogelijk?",
          antwoord:
            "De kleuren en motieven zijn oneindig. Van matzwart tot een unieke metallic kleur of knalroze tot marmerkleurig, alles is mogelijk!",
        },
        {
          vraag: "Wrappen jullie ook kastjes met een reliëf/inkeping?",
          antwoord:
            "Wij wrappen alleen vlakke kastjes. In theorie is het wel mogelijk om een kastje te wrappen met een reliëf/inkeping, alleen kunnen wij dan niet de maximale kwaliteit en duurzaamheid garanderen. Wij hebben om die reden besloten om alleen vlakke kastjes te wrappen.",
        },
        {
          vraag: "Blijven er vingerafdrukken achter op de folie?",
          antwoord:
            "Nee, op de folie die wij gebruiken blijven er geen vingerafdrukken achter. Bij folie van mindere kwaliteit zal je dit wel krijgen. Mochten de kastjes toch vies worden, maak ze dan schoon met een doekje met lauw water en biologisch afbreekbare ontvetter.",
        },
        {
          vraag:
            "Verandert er iets bij het schoonmaken van mijn gewrapte keuken?",
          antwoord:
            "Nee, je kunt gewoon je huidige schoonmaakroutine blijven volgen. Gebruik biologisch afbreekbaar schoonmaakmiddel in combinatie met heet water en een doekje. We willen je met klem afraden bijtende stoffen als chloor of bleek te gebruiken, dat kan schade opleveren.",
        },
        {
          vraag: "Kan ik hete pannen op de folie zetten?",
          antwoord:
            "Nee, daar is de folie niet voor gemaakt. Deze zal dan kapotgaan. Gebruik altijd een onderzetter om hete pannen of ovenschalen op te zetten.",
        },
        {
          vraag: "Is de folie een beetje duurzaam?",
          antwoord:
            "Zeker. De folie blijft jaren en jaren goed en is bedoeld als lange-termijnoplossing. We werken alleen met folie van de hoogste kwaliteit, zodat je jaren kunt genieten van je ‘nieuwe’ keuken.",
        },
        {
          vraag:
            "Kunnen jullie me een goedkopere folie bieden om de kosten wat te drukken?",
          antwoord:
            "Wij hebben uitgebreid onderzoek gedaan naar verschillende typen folie in de markt en weten inmiddels wat wel en niet werkt. Wij kiezen ervoor alleen met kwalitatief goede folie te werken, omdat je anders geen goede, duurzame resultaten krijgt. Er zijn wel andere bedrijven die goedkopere alternatieven bieden, maar dat is vaak autowrapfolie - en deze is niet geschikt voor het interieur. Dit gaat altijd ten koste van de kwaliteit en dat willen we voorkomen.",
        },
      ],
    },
    {
      naam: "De rest van mijn huis",
      vragen: [
        {
          vraag: "Wrappen jullie ook de binnenkant van de keukenkastjes?",
          antwoord:
            "Met ons concept wrappen wij de volledige buitenkant en zijkant van de keuken. De binnenkant is uiteraard tegen meerprijs ook mee te wrappen. Wij raden het niet aan, omdat het qua tijd en folie haast een dubbele keukenwrap is.",
        },
        {
          vraag:
            "Wrappen jullie ook andere interieurdelen, zoals mijn badkamer of kledingkast?",
          antwoord:
            "Met dit concept focussen wij ons puur op keukens. Mocht er bij een keukenaanvraag ook de vraag worden gesteld om iets anders in huis te wrappen, dan is dat zeker bespreekbaar.",
        },
        {
          vraag: "Kan ik mijn auto ook wrappen?",
          antwoord:
            "Dat kan zeker, maar niet bij Wrapjekeuken.nl. Autokustoms heeft al jaren ervaring met auto’s wrappen en kan je heel goed helpen. Neem een kijkje op https://autokustoms.nl/ of bel +31 (0)85 400 81 81.",
        },
      ],
    },
  ];

  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Bekijk onze veelgestelde vragen en wie weet staat jouw vraag ertussen. Heb je een andere vraag? Neem contact op, we vertellen je alles over wrappen!"
        />
        <title>Veelgestelde vragen | Wrapjekeuken.nl</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Breadcrump/>
      <div>
        <section className="text-gray-700">
          <div className="grid lg:grid-cols-4 grid-cols-1 xl:container mx-auto mb-32">
            <div className="container col-span-3 px-5 pt-12 mx-auto">
              <h1 className="text-2xl font-bold px-6 uppercase">
                Veel gestelde vragen
              </h1>
              <div className="w-20 h-05 wrap-bg mt-5 mx-6" />
              <div className="flex flex-wrap w-full sm:mx-auto sm:mb-2">
                <div className="w-full lg:w-6/6 px-6 py-2">
                  {vragen.map((data) => (
                    <div key={data.naam}>
                      <h3 className="text-xl font-bold mt-12 mb-2">
                        {data.naam}
                      </h3>
                      {data.vragen.map((v) => (
                        <details key={v.vraag} className="mt-4">
                          <summary className="font-semibold bg-gray-100 rounded-md py-2 px-4">
                            {v.vraag}
                          </summary>
                          <p className="dark:text-white">{v.antwoord}</p>
                        </details>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1 relative lg:pr-12 pr-6 mb-12 xl:mb-0">
              <Sidebar />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default faq;
