import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ type, placeholder, padding = false, ...props }, ref) => {
    return (
      <input
        type={type}
        {...props}
        ref={ref}
        placeholder={placeholder}
        autoComplete="off"
        className={`w-full h-14 block  bg-eerieBlack2 ${
          padding ? "pl-8 pr-44" : "px-4"
        } placeholder:text-base  text-base border outline-none border-whiteAlpha10 placeholder:text-inherit  focus:border-goldCrayola transition-colors`}
      />
    );
  }
);

export default Input;
