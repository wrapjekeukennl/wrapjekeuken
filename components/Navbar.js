import React, { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useTheme();
  const [darkmode, setDarkmode] = useState(false);

  const links = [
    { naam: "Home", url: "/" },
    { naam: "Keuken Wrappen", url: "/keuken-wrappen" },
    { naam: "Keuken Renovatie", url: "/keuken-renovatie" },
    { naam: "Projecten", url: "/projecten" },
    { naam: "Over ons", url: "/over-ons" },
    { naam: "Contact", url: "/contact" },
  ];
  return (
    <nav className="bg-white py-5 shadow-lg dark:bg-gray-600 sticky z-50 top-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <button
              onClick={() => setToggle(!toggle)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-between">
            {theme === "dark" ? (
              <Link href="/">
                <div className="flex-shrink-0 flex items-center cursor-pointer">
                  <img
                    className="block lg:hidden h-10 w-auto ml-6"
                    src=""
                    alt="Wrap je keuken"
                  />
                  <img
                    className="hidden lg:block h-10 w-auto"
                    src="../../logo-wit.png"
                    alt="Wrap je keuken"
                  />
                </div>
              </Link>
            ) : (
              <Link href="/">
                <div className="flex-shrink-0 flex items-center cursor-pointer">
                  <img
                    className="block lg:hidden h-12 w-auto ml-6"
                    src="./logo.png"
                    alt="Wrap je keuken"
                  />
                  <img
                    className="hidden lg:block h-12 w-auto"
                    src="./logo.png"
                    alt="Wrap je keuken"
                  />
                </div>
              </Link>
            )}
            <div className="hidden lg:block sm:ml-6">
              <div className="flex items-center space-x-4">
                {links.map((data) => (
                  <Link key={data.url} href={data.url}>
                    <a className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase">
                      {data.naam}
                    </a>
                  </Link>
                ))}
                <a href="https://wrapjekeuken.shop" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase">
                  Shop
                </a>
                {/*<a href="https://wa.me/31621970416" target="_blank">*/}
                {/*  <img className="w-8 mr-5" src="./whatsapp.svg" alt=""/>*/}
                {/*</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${toggle === false ? "hidden" : "block"}`}>
        <div className="px-2  pt-2 pb-3 space-y-1">
          {links.map((data) => (
            <a
              key={data.url}
              href={data.url}
              className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {data.naam}
            </a>
          ))}
          <a
              href="https://wrapjekeuken.shop"
              className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Shop
          </a>
          <a href="https://wa.me/31621970416" target="_blank">
            <img className="w-8 ml-2 mt-4 mr-5" src="./whatsapp.svg" alt=""/>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
