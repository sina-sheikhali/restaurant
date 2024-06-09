import TitleSection from "@/components/modules/TitleSection/TitleSection";
import React from "react";
import MenuSection from "@/components/modules/MenuSection/MenuSection";
import Button from "@/components/modules/Button/Button";
import shapeLeft from "@/public/images/shape-5.png";
import shapeRight from "@/public/images/shape-6.png";
import Image from "next/image";
const Menu = ({ menu }) => {
  return (
    <section className="bg-eerieBlack1 relative overflow-hidden">
      <div className="flex flex-col gap-y-14 items-center justify-center py-20 px-5">
        <TitleSection title={"Menu"} desc={"delicious menu"} />
        <div className="relative mb-10 grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-28 max-w-[1200px]  lg:before:content-[''] before:absolute before:h-full md:before:w-[1px] before:top-0 before:left-[50%] before:bg-whiteAlpha20">
          <MenuSection
            data={menu.filter((item) => item.type == "breakfast").slice(0, 5)}
            title={"breakfast"}
          />
          <MenuSection
            data={menu.filter((item) => item.type == "coffee").slice(0, 5)}
            title={"coffee"}
          />
        </div>
        <div>
          <Button text={"view all menu"} href={"/menu"} />
        </div>
      </div>
      <Image
        src={shapeLeft}
        alt="img"
        className="absolute top-0  left-0 animate-move "
      />
      <Image
        src={shapeRight}
        alt="img"
        className="absolute bottom-0 right-0 animate-move "
      />
    </section>
  );
};

export default Menu;
