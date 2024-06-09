import React from "react";
import img1 from "@/public/images/about-banner.jpg";
import img2 from "@/public/images/about-abs-image.jpg";
import shape from "@/public/images/shape-3.png";
import Image from "next/image";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
const Story = () => {
  return (
    <section className="w-full bg-eerieBlack1">
      <div className="flex flex-col lg:flex-row  items-center justify-center relative gap-y-10 gap-x-28 px-5 py-40 lg:py-20">
        <TitleSection title={"our story"} desc={"title"}>
          <p className="leading-8 text-center text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            iure ab ea, blanditiis quibusdam cum perspiciatis, qui ipsa ratione
            accusamus sunt. Deleniti vero, maxime aspernatur corporis suscipit
            ducimus. Est, nam!
          </p>
        </TitleSection>
        <div className="relative z-10">
          <Image src={img1} className="img" />
          <Image
            src={img2}
            className=" hidden lg:flex absolute -bottom-44 lg:-bottom-20  lg:-left-20 img"
          />
        </div>
        <div className="absolute  left-0  bottom-0 lg:bottom-20">
          <Image src={shape} className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Story;
