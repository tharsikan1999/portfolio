import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Cta = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <>
      {/*----- Start Cta -----*/}
      <section className="py-10 bg-slate-900" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 50,
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            className="grid grid-cols-12 gap-5 items-center"
          >
            <div className="col-span-12 lg:col-span-8 md:col-span-7 text-center md:text-left">
              <h4 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
                Interested in working with me?
              </h4>
            </div>
            <div className="col-span-12 lg:col-span-4 md:col-span-5 text-center">
              <a href="#Contact" className="btn btn-yellow">
                Contact Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/*----- End Cta -----*/}
    </>
  );
};

export default Cta;
