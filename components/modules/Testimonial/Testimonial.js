import React from "react";

const Testimonial = ({ data }) => {
  return (
    <div className="flex items-center mx-10 gap-x-5 w-full ">
      <img
        src={data.profile}
        alt="avatar"
        className="w-24 h-24 object-cover rounded-full border-2 border-white"
      />
      <div className="flex flex-col justify-center  py-2">
        <h4 className="text-lg text-white">{data.username}</h4>
        <p className="mt-3 text-quickSilver  line-clamp-2">{data.body}</p>
      </div>
    </div>
  );
};

export default Testimonial;
