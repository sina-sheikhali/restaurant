import Testimonial from "@/components/modules/Testimonial/Testimonial";
import TitleSection from "@/components/modules/TitleSection/TitleSection";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({ comments }) => {
  return (
    <div className="min-h-screen py-20">
      <div className="w-full  flex justify-center items-center ">
        <TitleSection title={"comments"} desc={"our clients say"} />
      </div>
      {comments.length ? (
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
          {comments.map((item) => (
            <SwiperSlide className="swiper-slide ">
              <div className="w-full h-full flex justify-center items-center border-2 rounded-lg border-goldCrayola ">
                <Testimonial data={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className=" flex items-center justify-center mt-32">
          <h3 className="text-4xl font-serif text-goldCrayola capitalize">
            Not found comment
          </h3>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
