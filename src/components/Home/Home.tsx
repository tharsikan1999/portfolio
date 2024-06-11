import React from "react";
import { TypeAnimation } from "react-type-animation";
import home_banner from "@/assets/Image/home-banner.png";
import Image from "next/image";

const Home = () => {
  return (
    <>
      {/*----- Start Home -----*/}
      <section
        className="pt-[120px] pb-[80px] lg:pt-[180px] lg:pb-[100px] bg-orange-50 relative overflow-hidden"
        id="home"
      >
        <div className="container relative z-[1]">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
            <div className="lg:col-span-6">
              <div className="text-center lg:text-start mb-14 lg:mb-0">
                <h6 className="uppercase text-sm md:text-base tracking-[2px] font-semibold mb-5 md:mb-8">
                  👋, My name is Tharsikan
                </h6>
                <h1 className="font-semibold text-[40px] md:text-7xl leading-[1] mb-6 md:mb-9">
                  I&rsquo;m a{" "}
                  <TypeAnimation
                    sequence={["Developer", 3000, "Designer", 3000]}
                    speed={5}
                    repeat={Infinity}
                  />
                </h1>
                <p className="text-base text-slate-700/80 md:text-xl mb-2 md:mb-4">
                  Based in Chavakachcheri Jaffna, Sri Lanka.
                </p>
                <div className="pt-3">
                  <a href="#LogoSlider" className="btn btn-theme">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="home-image text-center lg:ml-0 md:ml-[60px] sm:ml-o">
                <Image
                  src={home_banner}
                  title=""
                  alt=""
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*----- End Home -----*/}
    </>
  );
};

export default Home;
