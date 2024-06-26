import React from "react";
import { TypeAnimation } from "react-type-animation";
import home_banner from "@/assets/Image/home-banner.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <>
      {/*----- Start Home -----*/}
      <section
        ref={ref}
        className="pt-[120px] pb-[80px] lg:pt-[180px] lg:pb-[100px] bg-orange-50 relative overflow-hidden"
        id="home"
      >
        <div className="container relative z-[1]">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50, x: -50 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 50,
                x: inView ? 0 : -50,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              className="lg:col-span-6"
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                x: inView ? 0 : 50,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              className="lg:col-span-6"
            >
              <div className="home-image text-center lg:ml-0 md:ml-[60px] sm:ml-o">
                <Image
                  src={home_banner}
                  title=""
                  alt=""
                  className="rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/*----- End Home -----*/}
    </>
  );
};

export default Home;
