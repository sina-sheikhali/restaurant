import React, { useEffect, useState } from "react";
import banner1 from "@/public/images/hero-slider-1.jpg";
import banner2 from "@/public/images/hero-slider-2.jpg";
import banner3 from "@/public/images/hero-slider-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { TbChevronDownRight } from "react-icons/tb";
import { TbChevronDownLeft } from "react-icons/tb";
import Image from "next/image";
import TitleSection from "@/components/modules/TitleSection/TitleSection";

const Hero = () => {
  const slides = [
    {
      img: banner1,
      title: "slide 1",
      subject: "Slide 1",
      desc: "This is a slide 1",
    },
    {
      img: banner2,
      title: "Slide 2",
      subject: "Slide 2",
      desc: "This is a slide 2",
    },
    {
      img: banner3,
      title: "Slide 3",
      subject: "Slide 3",
      desc: "This is a slide 3",
    },
  ];
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        setSlideIndex(swiperInstance.realIndex);
      });
    }
  }, [swiperInstance]);

  return (
    <div className={`w-full relative h-screen lg:h-auto `}>
      <Swiper
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{ delay: 5200 }}
        loop={true}
        modules={[Navigation, Autoplay]}
        onSwiper={setSwiperInstance}
        className="mySwiper h-full"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide relative">
            <Image
              src={item.img}
              className="w-full h-full object-cover slider-bg"
            />
            {index === slideIndex && (
              <div className="flex flex-col items-center gap-y-10  w-3/4 absolute top-[25%]  right-[50%] left-[50%] translate-x-[-50%] z-50  py-5">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
                  className=" w-full flex justify-center "
                >
                  <TitleSection title={item.title} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 1, delay: 1.25 }}
                  className=" w-full flex justify-center "
                >
                  <h2 className="text-white text-5xl sm:text-8xl font-serif">
                    {item.subject}
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
                  className=" w-full flex justify-center "
                >
                  <p className="text-white text-xl">{item.desc}</p>
                </motion.div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute left-24  right-24  z-30 flex items-center justify-between top-1/2  translate-y-[-50%]  text-goldCrayola">
        <button className="prev-btn border border-goldCrayola hover:bg-goldCrayola hover:text-smokyBlack1 transition-colors  p-1.5 rotate-45  disabled:opacity-60 -translate-x-16 ">
          <TbChevronDownLeft className="w-7 h-7  " />
        </button>
        <button className="next-btn border border-goldCrayola hover:bg-goldCrayola hover:text-smokyBlack1 transition-colors  p-1.5 -rotate-45  disabled:opacity-60 translate-x-16 ">
          <TbChevronDownRight className="w-7 h-7 " />
        </button>
      </div>
    </div>
  );
};

export default Hero;
