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
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, x: index % 2 === 0 ? 100 : -10 }}
      animate={inView ? { y: 0, x: 0 } : {}}
      transition={{ duration: 0.2 }}
      className="lg:col-span-6 hover:shadow-black transition-all duration-300 ease-in border-2"
    >
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
  );
};

export default ServiceCard;
