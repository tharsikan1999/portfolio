import React from "react";
import { ServicesData } from "./ServicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      {/*----- Start Services -----*/}
      <section
        className="py-24 bg-bg-effect-1 bg-cover bg-no-repeat"
        id="Services"
      >
        <div className="container">
          <div className="grid lg:pb-16 md:pb-10 pb-8">
            <div className="lg:col-span-6 text-center">
              <h3>My Services</h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 md:grid-cols-2 gap-5 grid-cols-1 items-center">
            {ServicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      {/*----- End Services -----*/}
    </>
  );
};

export default Services;
