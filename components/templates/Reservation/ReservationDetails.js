import Button from "@/components/modules/Button/Button";
import Input from "@/components/modules/Input/Input";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { TbUser } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import baseUrl from "@/app/baseUrl";
import { client } from "@/app/client";

const Reservation = () => {
  // ---------- yup ----------
  const validation = Yup.object().shape({
    fullName: Yup.string().required("Please enter your name"),
    phoneNumber: Yup.string()
      .min(11, "Phone number must be at least 11 digits")
      .required("Please enter your phone number"),
    date: Yup.date().required("Please enter a date"),
    description: Yup.string(),
  });

  // ---------- hook-form ----------
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(validation),
  });

  // ---------- functions ----------
  const reserveHandler = async (values) => {
    const notify = (type, message) => type(message);
    const { fullName, phoneNumber, people, date, time, description } = values;

    const res = await client.post("reservation", values);

    if (res.status === 201) {
      notify(toast.success, "Successful operation");
      reset();
    } else {
      notify(toast.error, "Operation failed");
    }
  };
  return (
    <section className="bg-[url('/images/reserve-bg.jpg')] ">
      <div className="flex flex-col gap-y-14 items-center justify-center py-40 lg:py-20 px-5">
        <TitleSection title={"Reservation"} desc={"title"} />
        <div className="w-full lg:w-3/4  lg:max-w-[1150px] flex flex-col lg:flex-row   justify-center">
          <form
            className="w-full lg:w-2/3 flex flex-col items-center justify-center gap-y-5 lg:gap-y-10  h-full bg-black text-white py-14 px-5"
            onSubmit={handleSubmit(reserveHandler)}
          >
            <div className="w-full flex flex-col items-center gap-y-2 px-10 pb-10">
              <h2 className="text-4xl capitalize  font-serif">
                online reservation
              </h2>
              <p className="">
                Booking request
                <span className="text-goldCrayola">+88-123-1234456 </span> or
                fill out the order form
              </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Input
                  type={"text"}
                  placeholder={"Your Name"}
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <span className="block mt-1.5 ml-1 text-red-500 text-xs">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div>
                <Input
                  type={"text"}
                  placeholder={"Phone Number"}
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && (
                  <span className="block mt-1.5 ml-1 text-red-500 text-xs">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 box-border">
              <div className="relative">
                <select
                  {...register("people")}
                  className="w-full h-14 block px-10  bg-eerieBlack2 placeholder:text-base  text-base border outline-none border-whiteAlpha10 placeholder:text-inherit  focus:border-goldCrayola transition-colors"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Person</option>
                  <option value="3">3 Person</option>
                  <option value="4">4 Person</option>
                  <option value="5">5 Person</option>
                </select>
                {errors.people && (
                  <span className="text-red-500">{errors.people.message}</span>
                )}
                <TbUser className="absolute left-3 top-[50%]  translate-y-[-50%] w-5 h-5" />
              </div>
              <div className="relative">
                <Input type={"date"} {...register("date")} />
              </div>
              <div className="relative">
                <select
                  name=""
                  {...register("time")}
                  className="w-full h-14 block px-10  bg-eerieBlack2 placeholder:text-base  text-base border outline-none border-whiteAlpha10 placeholder:text-inherit  focus:border-goldCrayola transition-colors"
                >
                  <option value="8am" selected>
                    08:00 am
                  </option>
                  <option value="9am">09:00 am</option>
                  <option value="10am">10:00 am</option>
                  <option value="11am">11:00 am</option>
                  <option value="12am">12:00 am</option>
                  <option value="1pm">01:00 pm</option>
                  <option value="1pm">02:00 pm</option>
                  <option value="3pm">03:00 pm</option>
                  <option value="4pm">04:00 pm</option>
                  <option value="5pm">05:00 pm</option>
                  <option value="6pm">06:00 pm</option>
                  <option value="7pm">07:00 pm</option>
                  <option value="8pm">08:00 pm</option>
                  <option value="9pm">09:00 pm</option>
                  <option value="10pm">10:00 pm</option>
                </select>
                {}
                <GoClock className="absolute left-3 top-[50%]  translate-y-[-50%] w-5 h-5" />
              </div>
              {errors.date && (
                <span className="col-span-3 mt-1.5 ml-1 text-red-500 text-xs">
                  {errors.date.message}
                </span>
              )}
            </div>
            <div className="w-full grid grid-cols-1">
              <div className="">
                <Input
                  type={"textarea"}
                  placeholder={"Message"}
                  {...register("description")}
                />
              </div>
            </div>
            <Button text={"book table"} bgColor={"gold"} />
          </form>
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center gap-y-10 h-full  bg-[url('/images/footer-form-bg.png')] bg-smokyBlack1 bg-gray-700 text-white px-5 py-14">
            <h2 className="capitalize text-4xl font-serif">Contact us</h2>
            <div className="flex flex-col items-center gap-y-3 border-b border-goldCrayola pb-3">
              <span className="capitalize">Booking Request</span>
              <span className="text-2xl text-goldCrayola">+88-123-123456</span>
            </div>
            <div className="flex flex-col items-center gap-y-3 text-center">
              <span className="capitalize">Location</span>
              <span className="text-quickSilver">
                Restaurant St, Delicious City,
                <br /> London 9578, UK
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-3 text-center">
              <span className="capitalize">Lunch Time</span>
              <span className="text-quickSilver">
                Monday to Sunday
                <br /> 11:00 am - 2:30 pm
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-3 text-center">
              <span className="capitalize">Dinner Time</span>
              <span className="text-quickSilver">
                Monday to Sunday
                <br /> 05:00 pm - 10:00 pm
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
