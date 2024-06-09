import Link from "next/link";
import React from "react";

const Button = ({ text, href = false, bgColor }) => {
  if (href) {
    return (
      <button
        className={`btn btn-secondary ${
          bgColor == "gold"
            ? "bg-goldCrayola before:bg-smokyBlack1"
            : "bg-transparent before:bg-goldCrayola"
        }  `}
      >
        <Link href={href} className="block px-11 py-3">
          <span
            c
            className={`text text-1 ${
              bgColor == "gold" ? "text-black" : "text-goldCrayola"
            }`}
          >
            {text}
          </span>
          <span
            className={`text text-2 ${
              bgColor == "gold" ? "text-white" : "!text-black"
            }`}
          >
            {text}
          </span>
        </Link>
      </button>
    );
  } else {
    return (
      <button
        className={`btn btn-secondary px-11 py-3 ${
          bgColor == "gold"
            ? "bg-goldCrayola before:bg-smokyBlack1"
            : "bg-transparent before:bg-goldCrayola "
        }  `}
      >
        <span
          c
          className={`text text-1 ${
            bgColor == "gold" ? "text-black" : "text-goldCrayola"
          }`}
        >
          {text}
        </span>
        <span
          className={`text text-2 ${
            bgColor == "gold" ? "text-white" : "!text-black"
          }`}
        >
          {text}
        </span>
      </button>
    );
  }
};

export default Button;
