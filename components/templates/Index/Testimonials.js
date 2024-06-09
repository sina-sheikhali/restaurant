import Testimonial from "@/components/modules/Testimonial/Testimonial";
import TitleSection from "@/components/modules/TitleSection/TitleSection";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { TbChevronDownLeft, TbChevronDownRight } from "react-icons/tb";
const Testimonials = ({ testimonials }) => {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="w-full  flex justify-center items-center ">
        <TitleSection title={"Testimonial"} desc={"our clients say"} />
      </div>

      <Swiper
        loop={true}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper !px-5 !py-20  h-[50vh] "
      >
        {testimonials.map((item) => (
          <SwiperSlide className="swiper-slide ">
            <div className="w-full h-full flex justify-center items-center border-2 rounded-lg border-goldCrayola">
              <Testimonial data={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <img
        src="/images/shape-1.png"
        alt="img"
        className="absolute bottom-0 left-0 animate-move"
      />
      <img
        src="/images/shape-2.png"
        alt="img"
        className="absolute top-0 right-0 animate-move"
      />
    </div>
  );
};

export default Testimonials;
