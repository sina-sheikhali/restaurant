import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import Link from "next/link";
import {
  IoLocationOutline,
  IoTimeOutline,
  IoCallOutline,
} from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { useRouter } from "next/router";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Header = () => {
  // ---------- State -----------
  const [topbarIsOpen, setTopbarIsOpen] = useState(true);
  const [headerIsOpen, setHeaderIsOpen] = useState(true);
  const [scrollValue, setScrollValue] = useState(0);
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef(null);
  const iconSearchRef = useRef(null);
  const sidebarRef = useRef(null);

  // ---------- Hook -----------
  const router = useRouter();

  // ---------- life cycle -----------
  useEffect(() => {
    let lastScrollPos = 0;

    const handleScroll = () => {
      setTopbarIsOpen(window.scrollY <= 50);
      setHeaderIsOpen(window.scrollY <= 100 || window.scrollY < lastScrollPos);
      lastScrollPos = window.scrollY;
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpenSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleTouchOutside = (event) => {
      if (!sidebarRef.current.contains(event.target)) {
        setIsOpenSidebar(false);
      }
    };
    if (isOpenSidebar) {
      document.addEventListener("mousedown", handleTouchOutside);
    } else {
      document.removeEventListener("mousedown", handleTouchOutside);
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenSidebar]);

  useEffect(() => {
    if (openSearchBox) {
      // Ensure the input is visible before focusing
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 50); // A small delay to ensure visibility
    }

    const handleClickOutside = (event) => {
      if (
        iconSearchRef.current &&
        searchInputRef.current &&
        !iconSearchRef.current.contains(event.target) &&
        !searchInputRef.current.contains(event.target)
      ) {
        setOpenSearchBox(false);
      }
    };

    if (openSearchBox) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSearchBox]);

  // ---------- functions ----------
  const searchHandler = () => {
    if (searchValue.trim()) {
      router.push(`/search?q=${searchValue}`);
      setSearchValue("");
    }
  };

  const searchHandlerWithEnter = (e) => {
    if (e.keyCode === 13) {
      searchHandler();
    }
  };

  const menuItems = [
    { title: "home", href: "/" },
    { title: "reservation", href: "/reservation" },
    { title: "menu", href: "/menu" },
    { title: "about us", href: "/about-us" },
    { title: "contact", href: "/contact" },
    { title: "service", href: "/service" },
  ];

  return (
    <div className="w-full">
      {/* Start Top bar */}
      <div
        className={`${
          topbarIsOpen ? "" : "-translate-y-full"
        } hidden sm:flex items-center justify-center lg:justify-between border-b-[1px] border-b-whiteAlpha20 px-5 py-4 fixed top-0 left-0 right-0 w-full transition-transform duration-300 z-30`}
      >
        <div className="hidden lg:flex items-center gap-x-5 ">
          <div className="flex items-center gap-x-2">
            <IoLocationOutline className="w-5 h-5 " />
            <span>Restaurant St, Delicious City, London 9578</span>
          </div>
          <div className="flex items-center gap-x-2">
            <IoTimeOutline className="w-5 h-5 font-bold" />
            <span>Daily: 8:00 am to 10:00 pm</span>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-2">
            <IoCallOutline className="w-5 h-5" />
            <span>+123456789</span>
          </div>
          <div className="flex items-center gap-x-2">
            <CgMail className="w-5 h-5" />
            <span>Booking@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Finish Top bar */}
      {/* start navbar */}
      <header
        className={`fixed z-40 ${topbarIsOpen ? "sm:top-11" : "top-0"} ${
          headerIsOpen ? "bg-eerieBlack4" : "-translate-y-full"
        } ${
          scrollValue > 10 && scrollValue < 100 && !topbarIsOpen
            ? "bg-eerieBlack4"
            : scrollValue < 100
            ? "bg-transparent"
            : "bg-eerieBlack4"
        } left-0 right-0 px-2 sm:px-5 py-5 transition-all duration-300`}
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="Logo" />
          </Link>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-x-8 px-5 py-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className={`navbar-item hover-underline ${
                      router.pathname == item.href ? "active" : ""
                    }`}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-x-1 sm:gap-x-3">
            <div
              className={`flex items-center justify-center h-10 sm:h-12 overflow-hidden ${
                openSearchBox ? "w-36 sm:w-56" : "w-10  sm:w-12"
              } bg-transparent border-2 border-goldCrayola rounded-3xl relative cursor-pointer transition-all duration-500`}
              onClick={() => setOpenSearchBox(true)}
            >
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                ref={searchInputRef}
                placeholder="search..."
                onKeyDown={(e) => searchHandlerWithEnter(e)}
                className={`w-full ${
                  openSearchBox ? "visible" : "invisible"
                } h-full bg-transparent text-white px-4 pr-10 rounded-2xl z-40 placeholder:text-base text-base outline-none placeholder:text-inherit transition-all`}
                autoComplete="off"
              />
              <button
                className="absolute top-1/2 transform -translate-y-1/2 right-2  cursor-pointer z-40"
                ref={iconSearchRef}
                onClick={searchHandler}
              >
                <IoIosSearch className="text-white icon-size" />
              </button>
            </div>
            <div className="flex lg:hidden">
              <button className="" onClick={() => setIsOpenSidebar(true)}>
                <HiOutlineMenu className="icon-size" />
              </button>
            </div>
          </div>
        </div>
        {/* Start mobile navbar */}
        <nav
          className={`${
            isOpenSidebar ? "block" : "hidden"
          } fixed left-0 top-0 bottom-0  z-50 h-full overflow-y-auto w-2/3 sm:w-1/2 md:w-2/5 `}
          ref={sidebarRef}
        >
          <div className="w-full flex flex-col gap-y-8 bg-smokyBlack1  pt-5 pb-14">
            <div className="flex justify-end mx-5">
              <button className="" onClick={() => setIsOpenSidebar(false)}>
                <IoIosCloseCircleOutline className="w-7 h-7" />
              </button>
            </div>
            <div className="flex justify-center">
              <Image src={logo} />
            </div>
            <div className="px-10">
              <ul className="flex flex-col gap-y-3">
                {menuItems.map((item) => (
                  <li onClick={() => setIsOpenSidebar(false)}>
                    <Link
                      href={item.href}
                      className={`navbar-item !font-normal hover-underline ${
                        router.pathname == item.href ? "active" : ""
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-y-5 mt-10 px-5 text-quickSilver">
              <h3 className="text-white text-3xl font-serif">Visit Us</h3>

              <span className="text-center">
                Restaurant St, Delicious City, London 9578
              </span>

              <span className="text-center">Daily: 8:00 am to 10:00 pm</span>
              <span className="text-center">Booking@gmail.com</span>

              <h6 className="text-white  border-t-2 border-whiteAlpha20 pt-5 mt-2">
                Booking Request
              </h6>
              <span className="text-goldCrayola text-xl">+123456789</span>
            </div>
          </div>
        </nav>
        <div
          className={`${
            isOpenSidebar ? "block" : "hidden"
          } fixed  top-0 bottom-0 right-0 left-0 bg-blackAlpha80 z-40`}
        ></div>
        {/* Finish mobile navbar */}
      </header>

      {/* finish navbar */}
    </div>
  );
};

export default Header;
