import React from "react";

const TitleSection = ({ title, desc, children }) => {
  return (
    <div className="w-full lg:w-1/3 flex flex-col items-center justify-center gap-y-8 text-white z-10">
      <span className="title-section">{title}</span>
      {desc && (
        <h2 className="w-full text-5xl font-serif capitalize text-center">
          {desc}
        </h2>
      )}

      {children}
    </div>
  );
};

export default TitleSection;
