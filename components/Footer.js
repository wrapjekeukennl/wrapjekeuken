import React from "react";
import Link from "next/link";

const keukenwrappen = [
  { naam: "Rotterdam", href: "rotterdam" },
  { naam: "Amsterdam", href: "amsterdam" },
  { naam: "Utrecht", href: "utrecht" },
  { naam: "Den Haag", href: "'s-gravenhage" },
  { naam: "Almere", href: "almere" },
  { naam: "Eindhoven", href: "eindhoven" },
  { naam: "Roosendaal", href: "roosendaal" },
  { naam: "Leeuwarden", href: "leeuwarden " },
];

const Footer = () => {

  const date = new Date;
  const jaar = date.getFullYear()

  return (
    <div className="footer-bg">
      <footer className="container mx-auto grid grid-cols-1 footer-bg md:grid-cols-3 gap-8 xl:px-20 text-white py-20">
        <div className="col-span-1 flex flex-col items-center h-full mt-5 sm:mt-0">
          <Link href="/">
            <img className="w-3/4" src="./logo-wit.png" alt="" />
          </Link>
          <p className="sm:mt-5 mt-10 text-sm">Argonweg 23</p>
          <p className="mt-5 text-sm">1362 AA Almere</p>
          <p className="mt-5 text-sm"><a href="tel:+31854008181">+31 (0)85 400 81 81</a></p>
          <p className="mt-5 text-sm"><a href="mailto:info@wrapjekeuken.nl">info@wrapjekeuken.nl</a></p>
        </div>
        <div className="col-span-1 flex flex-col items-center mt-10 sm:mt-0">
          <h5 className="uppercase font-bold">Keuken Wrappen</h5>
          <div className="w-20 h-05 wrap-bg mt-5" />
          {keukenwrappen.map((data) => (
            <div key={data.naam}>
              <Link href={`/${data.href}`}>
                <a className="mt-5 text-sm inline-block">
                  Keuken wrappen in {data.naam}
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="col-span-1 flex flex-col items-center mt-10 sm:mt-0">
          <h5 className="uppercase font-bold">Menu</h5>
          <div className="w-20 h-05 wrap-bg mt-5" />
          <Link href="/">
            <a className="mt-5 text-sm inline-block">Home</a>
          </Link>
          {/*<Link href="/keuken-wrappen">*/}
          {/*  <a className="mt-5 text-sm inline-block">Keuken wrappen</a>*/}
          {/*</Link>*/}
          <Link href="/projecten">
            <a className="mt-5 text-sm inline-block">Projecten</a>
          </Link>
          <Link href="/faq">
            <a className="mt-5 text-sm inline-block">F.A.Q.</a>
          </Link>
          <Link href="/over-ons">
            <a className="mt-5 text-sm inline-block">Over ons</a>
          </Link>
          <Link href="/in-de-media">
            <a className="mt-5 text-sm inline-block">In de media</a>
          </Link>
          <Link href="/contact">
            <a className="mt-5 text-sm inline-block">Contact</a>
          </Link>
          <a
            href="https://www.autokustoms.nl"
            className="mt-5 text-sm inline-block wrap"
          >
            Auto Kustoms
          </a>
        </div>
      </footer>
      <div className="border-t wrap-border footer-bg py-5 w-full">
        <p className="text-sm text-white text-center px-2">KVK 83622136 | BTW ID NL862937589B01</p>
        <p className="text-sm text-white text-center px-2">
          {jaar} © Wrap je Keuken. Alle Rechten Voorbehouden. Gemaakt door{" "}
          <a className="wrap" href="https://www.lionellord.com">
            WebLord
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
