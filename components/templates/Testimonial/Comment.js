
import Testimonial from "@/components/modules/Testimonial/Testimonial";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
import React from "react";

const Comment = ({ testimonials }) => {
  return (
    <section className="bg-smokyBlack2 relative overflow-hidden min-h-screen">
      <div className="flex flex-col gap-y-14 items-center justify-center py-20 px-5">
        <TitleSection title={"Testimonial"} desc={"our clients say"} />
        <div className="flex flex-col gap-y-10">
          {testimonials.map((item) => (
            <Testimonial key={item.id} data={item} />
          ))}
        </div>
      </div>
   
    </section>
  );
};

export default Comment;
