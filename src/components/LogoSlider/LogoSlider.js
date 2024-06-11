import React from 'react';
import cv from '../../assets/cv/Tharsikan_software_engineer_cv.pdf';

const LogoSlider = () => {
  const cvFilePath = cv;

  return (
    <React.Fragment>
      {/*----- Start Cta -----*/}
      <section className="py-10 bg-slate-900" id='LogoSlider'>
        <div className="container">
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="col-span-12 lg:col-span-8 md:col-span-7 text-center md:text-left">
              <h4 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
                Unlock My Professional Journey
              </h4>
            </div>
            <div className="col-span-12 lg:col-span-4 md:col-span-5 text-center">
              {/* Use the 'download' attribute to force download */}
              <a href={cvFilePath} download="Tharsikan_software_engineer_cv.pdf" className="btn btn-yellow">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*----- End Cta -----*/}
    </React.Fragment>
  );
};

export default LogoSlider;
