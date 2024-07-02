import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ServiceDataType } from "./ServicesData";

interface ServiceCardProps {
  service: ServiceDataType;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -200 : 200, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0,
        delay: 0,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover="hover"
      className="lg:col-span-6 transition-all duration-300 ease-in border-2 overflow-hidden"
    >
      <motion.div className="inner-card">
        <div
          className={`flex border-2 border-slate-900 lg:p-10 md:p-8 p-5 ${service.Bg_color}`}
        >
          <div className="flex justify-center items-center h-[70px] w-[70px] border-2 text-[32px] bg-white border-slate-900">
            {service.Logo}
          </div>
          <div className="flex-1 pl-5">
            <h5 className="mb-3 font-semibold lg:text-2xl md:text-xl text-lg">
              {service.Heding}
            </h5>
            <p className="text-slate-700/90">{service.Detail}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
