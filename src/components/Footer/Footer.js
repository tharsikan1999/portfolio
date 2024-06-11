import React from 'react';
import { FooterData } from './FooterData';

const Footer = () => {
    const CurrentYear = new Date().getFullYear();

    return (
        <React.Fragment>
            {/*----- Start Footer -----*/}
            <footer className="bg-slate-900 border-t border-white border-opacity-10 py-4">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-6 flex pb-3 md:pb-0">
                            <div className="flex justify-center items-center md:justify-start w-full">
                                <a href='https://www.facebook.com/tharsikan1999/' className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-base cursor-pointer" target="_blank" rel="noreferrer">{FooterData[0].icon}</a>
                                <a href='https://github.com/tharsikan1999' className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-base cursor-pointer" target="_blank" rel="noreferrer">{FooterData[1].icon}</a>
                                <a href='https://www.instagram.com/tharsikan_99/' className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-base cursor-pointer" target="_blank" rel="noreferrer">{FooterData[2].icon}</a>
                                <a href='https://www.linkedin.com/in/tharsikan1999/' className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-base cursor-pointer" target="_blank" rel="noreferrer">{FooterData[3].icon}</a>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 text-center md:text-right">
                            <p className="m-0 text-white text-opacity-75">©{CurrentYear} Tharsikan copyright all right reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
            {/*----- End Footer -----*/}
        </React.Fragment>
    );
};

export default Footer;
