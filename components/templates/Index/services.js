import React from "react";

import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
const services = ({ services }) => {
  return (
    <section className="w-full bg-smokyBlack2 min-h-[900px]  px-5 pt-14 pb-28 relative">
      <div className="flex flex-col items-center justify-center gap-y-5   relative">
        <TitleSection title={"our services"} desc={"title"}>
          <p className="leading-8 text-center text-base ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            iure ab ea, blanditiis quibusdam cum perspiciatis, qui ipsa ratione
            accusamus sunt. Deleniti vero, maxime aspernatur corporis suscipit
            ducimus. Est, nam!
          </p>
        </TitleSection>
        <div className=" w-full mt-10  lg:absolute left-0 right-0 top-48 grid grid-cols-1 lg:grid-cols-3 gap-y-14 text-white  ">
          {services.map((service) => (
            <ServiceItem key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default services;
