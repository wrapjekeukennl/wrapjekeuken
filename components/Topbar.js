import React from "react";

const Topbar = () => {
    return (
        <>
            <div className="sticky top-0 z-50 bg-gray-200">
                <div
                    className="hidden container mx-auto bg-gray-200 py-2 text-gray-500 sm:flex justify-between items-center topbar">
                    <a href="tel:+31854008181">
                        <div className="pl-8 flex">
                            <img className="w-4 mr-3" src="./phone.svg" alt=""/>
                            <p className="text-grey-100 text-sm font-bold">
                                +31 (0)85 400 81 81
                            </p>
                        </div>
                    </a>
                    <div className="pr-8 flex items-center">
                        <a href="https://wa.me/31621970416" target="_blank">
                            <img className="w-6 mr-3" src="./whatsapp.svg" alt=""/>
                        </a>
                        <a href="https://www.instagram.com/wrapjekeuken.nl" target="_blank">
                            <img className="w-4 mr-3" src="./instagram.svg" alt=""/>
                        </a>
                        <a href="https://www.facebook.com/wrapjekeuken.nl/" target="_blank">
                            <img className="w-4 mr-3" src="./facebook.svg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div
                className="sticky top-0 z-50 sm:hidden bg-gray-200 py-2 text-gray-500 flex justify-center items-center topbar">
                <div className="flex items-center">
                    <a href="https://wa.me/31621970416" target="_blank">
                        <img className="w-6 mr-5" src="./whatsapp.svg" alt=""/>
                    </a>
                    <a href="https://www.instagram.com/wrapjekeuken.nl" target="_blank">
                        <img className="w-4 mr-5" src="./instagram.svg" alt=""/>
                    </a>
                    <a href="https://www.facebook.com/wrapjekeuken.nl/" target="_blank">
                        <img className="w-4 mr-5" src="./facebook.svg" alt=""/>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Topbar;
