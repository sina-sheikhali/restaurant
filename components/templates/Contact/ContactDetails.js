import Button from "@/components/modules/Button/Button";
import Input from "@/components/modules/Input/Input";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import baseUrl from "@/app/baseUrl";
import { client } from "@/app/client";
const ContactDetails = () => {
  // ---------- yup ----------
  const validation = Yup.object().shape({
    fullName: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("email is invalid")
      .required("Please enter your email"),
    subject: Yup.string().required("Please enter subject"),
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
  const sendMessageHandler = async (values) => {
    const notify = (type, message) => type(message);
    const { fullName, email, subject, description } = values;

    const res = await client.post("contact", values);
    if (res.status === 201) {
      notify(toast.success, "Successful operation");
      reset();
    } else {
      notify(toast.error, "Operation failed");
    }
  };
  return (
    <section
      className="bg-eerieBlack1"
      onSubmit={handleSubmit(sendMessageHandler)}
    >
      <div className="flex flex-col gap-y-14 items-center justify-center py-40 lg:py-20 px-5">
        <TitleSection title={"contact us"} desc={"feel free to contact"} />
        <div className="w-full lg:w-3/4 flex flex-col md:flex-row gap-y-10 items-center  justify-around my-10">
          <div className="flex flex-col items-center gap-y-4">
            <SlLocationPin className="w-7 h-7 text-goldCrayola" />
            <span className="capitalize text-lg font-semibold text-quickSilver">
              address
            </span>
            <span className="text-base">
              Restaurant St,Delicious City, London 9578
            </span>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <IoCallOutline className="w-7 h-7 text-goldCrayola" />
            <span className="capitalize text-lg font-semibold text-quickSilver">
              phone
            </span>
            <span className="text-base">+88-123-123456</span>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <IoMailOutline className="w-7 h-7 text-goldCrayola" />
            <span className="capitalize text-lg font-semibold text-quickSilver">
              email
            </span>
            <span className="text-base">info@gmail.com</span>
          </div>
        </div>
        <div className="w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988669535!2d-0.2664033999507271!3d51.52873980503857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2snl!4v1717073393819!5m2!1sen!2snl"
              width="600"
              height="500"
              className="border-none w-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form>
            <div className="flex flex-col gap-y-5">
              <Input
                type={"text"}
                placeholder={"Your Name"}
                {...register("fullName")}
              />
              {errors.fullName && (
                <span className="text-red-500">{errors.fullName.message}</span>
              )}
              <Input
                type={"text"}
                placeholder={"Email"}
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
              <Input
                type={"text"}
                placeholder={"Subject"}
                {...register("subject")}
              />
              {errors.subject && (
                <span className="text-red-500">{errors.subject.message}</span>
              )}
              <textarea
                className="w-full  block  bg-eerieBlack2 px-4 py-4 placeholder:text-base  text-base border outline-none border-whiteAlpha10 placeholder:text-inherit  focus:border-goldCrayola transition-colors"
                placeholder="Message"
                {...register("description")}
                style={{ resize: "none", height: "200px" }}
              />
              <div className="w-1/2">
                <Button text={"submit"} bgColor={"gold"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
