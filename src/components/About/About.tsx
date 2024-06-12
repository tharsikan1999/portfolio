import React from "react";
import aboutme_banners from "@/assets/Image/aboutme-banner.png";
import { NumberData, BtnData } from "./AboutData";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <>
      {/*----- Start About -----*/}
      <section className="py-24" id="about" ref={ref}>
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50, x: -50 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 50,
                x: inView ? 0 : -50,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              className="lg:col-span-6 text-center mb-12 lg:mb-0 lg:ml-0 md:ml-12 sm:ml-o"
            >
              <Image
                src={aboutme_banners}
                alt=""
                className="bg-no-repeat bg-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50, x: 50 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 50,
                x: inView ? 0 : 50,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              className="lg:col-span-6 lg:pl-12"
            >
              <div>
                <h3 className="font-semibold text-[26px] md:text-[40px] leading-[1.2] mb-6 normal-case">
                  I&apos;m a Freelancer Full Stack Developer with over 1 years
                  of experience.
                </h3>
                <p className="text-base md:text-lg text-slate-700/90">
                  As a versatile Full Stack Developer with over a year of
                  experience in Colombo, I code and create web elements for
                  amazing clients globally. I thrive on collaborating with new
                  people, welcoming fresh experiences and challenges. Let&apos;s
                  build something extraordinary together!
                </p>
                <div className="grid grid-cols-12 pt-5">
                  {NumberData.map((e, key) => {
                    return (
                      <div className="col-span-6 sm:col-span-4" key={key}>
                        <h5 className="text-[26px] text-orange-600 font-semibold">
                          {e.Number}
                        </h5>
                        <span className="text-slate-700/90">{e.Detail}</span>
                      </div>
                    );
                  })}
                </div>
                {BtnData.map((e, key) => {
                  return (
                    <div className="pt-6" key={key}>
                      <a href="#Contact" className="btn btn-theme mr-4">
                        {e.btn1}
                      </a>
                      <a href="#Portfolio" className="btn btn-dark">
                        {e.btn2}
                      </a>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/*----- End About -----*/}
    </>
  );
};

export default About;
