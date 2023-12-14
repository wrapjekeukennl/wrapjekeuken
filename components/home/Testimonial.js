import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const testimonials = [
  {
    naam: "Marit",
    text: "“ Blij met de service van wrapjekeuken.nl. Dankzij hun vriendelijke specialisten ziet de keuken er strak en netjes afgewerkt uit. De keuken is kwalitatief sterker geworden en heeft een luxere uitstraling gekregen. Meer dan tevreden met het resultaat. ”",
  },
  {
    naam: "Anita",
    text: "“ Helemaal blij met onze keuken die door Wrap je Keuken in een mooie mat grijze kleur is gemaakt.De mannen van Wrap je Keuken gaan echt voor perfectie en laten alles schoon achter.Ik kon gelijk weer gebruik van de keuken maken en dat in 1 dag. ”",
  },
  {
    naam: "Pamela",
    text: "“ Onlangs onze keuken van glans wit naar mat zwart laten wrappen en ben nog steeds sprakeloos. Het ziet er zo strak uit, geeft zoveel warmte aan het interieur en in 1 dag ready. Deze jongens gaan voor perfectie en zijn ook nog eens reuze gezellig. Echt een aanrader als je voor een laag budget een compleet nieuwe keuken wil. ”",
  },
];

const Testimonial = () => {
  return (
    <>
      <section className="xl:container mx-auto px-6 xl:px-12">
        <div className="diensten__kosten mt-12 bg-gray-100 lg:p-12 px-6lg:p-12 py-12 px-6">
          <h3 className="text-2xl font-bold">
            KEUKEN WRAPPEN ERVARINGEN
          </h3>
          <div className="w-20 h-0.5 wrap-bg mt-5" />
          <p className="mt-5 text-sm">
            Keuken wrappen ervaringen
            Het wrappen van een keuken is duurzaam. Met onze hoogwaardige interieurfolie kun je jaren blijven genieten van je keuken. De kwaliteit en de hechting van de folie is zo goed, dat wij een garantie van 6 jaar geven. Onze vakmannen leveren pure kwaliteit en gaan secuur te werk. De tevredenheid van onze klanten is het allerbelangrijkst. Het wrappen van de keuken gebeurt zonder onrust en troep. Binnen 1 dag hebben wij je verblijd met een compleet nieuwe keuken. De feedback die wij ontvangen is erg positief en wij vertrouwen erop dat wij hetzelfde voor jou kunnen betekenen.
          </p>
          <div className="flex justify-center flex-col items-center mt-10">
            <a
              className="flex justify-center flex-col items-center"
              href="https://wa.me/31621970416"
            >
              <img src="./whatsapp.svg" alt="whatsapp" />
              <p className="mt-3">WhatsApp</p>
            </a>
          </div>
        </div>
      </section>
      <section className="test_img mt-12 sm:px-32 py-40">
        <div className="xl:container mx-auto">
          <div className="w-14 h-14 mx-auto border rounded-full flex justify-center">
            <img className="w-8" src="./quote.svg" alt="" />
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
          >
            {testimonials.map((data) => (
              <SwiperSlide key={data.naam}>
                <div
                  key={data.naam}
                  className="flex justify-center flex-col text-white lg:px-32 text-center"
                >
                  <p className="px-12 leading-8 italic mt-12">{data.text}</p>
                  <div className="w-20 h-0.5 wrap-bg mx-auto mt-5" />
                  <p className="text-white text-center mt-5">{data.naam}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
