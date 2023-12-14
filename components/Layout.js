import Head from "next/head";
import React, {useEffect} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import ReactGA from "react-ga";

const Layout = ({children}) => {
    // const trackingId = "UA-168601745-1"; // Replace with your Google Analytics tracking ID
    // ReactGA.initialize(trackingId);
    // ReactGA.set({
    //   userId: auth.currentUserId(),
    //   // any data that is relevant to the user session
    //   // that you would like to track with google analytics
    // });

    return (
        <div className="text-gray-800">
            <Head>
      {/*          <script*/}
      {/*              async*/}
      {/*              src="https://www.googletagmanager.com/gtag/js?id=UA-168601745-1"*/}
      {/*          ></script>*/}
      {/*          <script*/}
      {/*              dangerouslySetInnerHTML={{*/}
      {/*                  __html: `*/}
      {/*window.dataLayer = window.dataLayer || [];*/}
      {/*function gtag(){dataLayer.push(arguments);}*/}
      {/*gtag('js', new Date());*/}

      {/*gtag('config', 'UA-168601745-1')`,*/}
      {/*              }}*/}
      {/*          />*/}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQKRN7Q');`,
                    }}
                />
                <meta name="p:domain_verify" content="0e2cb88d7c5dd42998aa11269d98adf4"/></Head>
            <Topbar/>
            <Navbar/>
            {children}
            <div className="md:hidden fixed inset-x-0 bottom-0 h-16 grid grid-cols-2 bg-white shadow border-t">
                <div className="flex justify-center items-center"><a href="mailto:info@wrapjekeuken.nl" target="_blank">
                    <img className="w-5 mr-3" src="/mail.svg" alt="mail"/>
                </a></div>
                <div className="flex justify-center items-center border-l"><a href="https://wa.me/31621970416" target="_blank">
                    <img className="w-6" src="/whatsapp.svg" alt="whatsapp"/>
                </a></div>
            </div>
            <Footer/>
            <div className="h-16 md:hidden footer-bg">
            </div>
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQKRN7Q"
                        height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
            </noscript>
        </div>
    );
};

export default Layout;
