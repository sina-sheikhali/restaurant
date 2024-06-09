import { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";
const BackTopBtn = () => {
  // ---------- state ----------
  const [showBtn, setShowBtn] = useState(false);
  // ---------- life cycle ----------
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  // ---------- functions ----------
  const BackToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        className={`fixed ${
          showBtn ? "visible opacity-100" : "invisible opacity-0"
        } flex items-center justify-center right-5 bottom-5 w-11 h-11 bg-goldCrayola text-smokyBlack1 z-50 rounded-full hover:bg-white hover:text-goldCrayola cursor-pointer transition-all`}
        onClick={BackToTopHandler}
      >
        <IoChevronUp className="w-5 h-5  " />
      </button>
    </>
  );
};

export default BackTopBtn;
