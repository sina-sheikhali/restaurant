import React from "react";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { CgMail } from "react-icons/cg";
import Link from "next/link";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { client } from "@/app/client";

const Footer = () => {
  // ---------- yup ----------
  const validation = Yup.object().shape({
    email: Yup.string().required("لطفا شماره تماس خود را وارد کنید"),
  });

  // ---------- hook-form ----------
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(validation),
  });

  // ---------- functions ----------
  const notify = (type, message) => type(message);
  const addEmailHandler = async (values) => {
    const res = await client.post("newsLetters", values);

    if (res.status === 201) {
      notify(toast.success, "Successful operation");
      reset();
    } else {
      notify(toast.error, "Operation failed");
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
    <footer className="min-h-screen flex items-center  bg-[url('/images/footer-bg.jpg')] bg-cover px-5 py-10">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-y-10">
        <ul className="flex w-1/3 flex-col items-center gap-y-5 !text-quickSilver">
          {menuItems.map((item) => (
            <li>
              <Link
                href={item.href}
                className="navbar-item hover-underline !tracking-[4px]"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <form
          className="py-20 form-box w-full  md:w-1/3 md:min-w-[400px]"
          onSubmit={handleSubmit(addEmailHandler)}
        >
          <Image src={logo} alt="logo" className="" />
          <div className="flex flex-col justify-center items-center gap-y-5 text-quickSilver border-b border-goldCrayola pb-5">
            <span>Restaurant St,Delicious City, London 9578</span>
            <span>Booking@gmail.com</span>
            <span>Booking Request : +88-123-123456 </span>
            <span>Open: 8:00 am to 10:00 pm </span>
          </div>
          <div className="text-center">
            <h3 className="capitalize text-3xl font-serif mb-2">
              get news & offers
            </h3>
            <span className="text-quickSilver mt-2">
              Subscribe us & Get <span className="text-white">25% Off</span>
            </span>
          </div>
          <div className="relative bg-eerieBlack2  w-full">
            <Input
              type={"text"}
              placeholder={"Your email"}
              {...register("email")}
              padding={true}
              required={"true"}
            />
            <div className="absolute right-0 bottom-0 top-0">
              <Button text={"subscribe"} bgColor={"gold"} />
            </div>
            <div className="flex items-center absolute left-2 top-0 bottom-0">
              <CgMail className="w-4 h-4" />
            </div>
          </div>
        </form>

        <ul className="flex w-1/3 flex-col items-center gap-y-5 !text-quickSilver">
          <li>
            <Link
              href="#"
              className="navbar-item hover-underline !tracking-[4px]"
            >
              facebook
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="navbar-item hover-underline !tracking-[4px]"
            >
              instagram
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="navbar-item hover-underline !tracking-[4px]"
            >
              youtube
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="navbar-item hover-underline !tracking-[4px]"
            >
              google map
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
