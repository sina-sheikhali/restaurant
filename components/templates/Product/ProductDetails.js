import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
const ProductDetails = ({ data }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-10 pt-52 pb-4 lg:py-20 px-5 ">
      <Image
        src={data.img}
        width={300}
        height={300}
        className="rounded-2xl border-2 border-goldCrayola"
      />
      <div className="flex flex-col gap-y-3  h-[300px] w-[300px] sm:w-1/5 ">
        <h3 className="text-3xl text-white whitespace-nowrap text-ellipsis border-b pb-3 ">
          {data.title}
        </h3>
        <div className="flex gap-x-0.5">
          {new Array(Math.trunc(data.score)).fill().map((item) => (
            <FaStar className="text-yellow-400" />
          ))}
          {new Array(5 - Math.trunc(data.score)).fill().map((item) => (
            <FaRegStar />
          ))}
        </div>
        <span className="w-full flex items-center text-lg  ml-3 gap-x-3 text-goldCrayola relative ">
          ${data.price}
        </span>

        <p className="text-quickSilver mr-5 line-clamp-3 leading-6">
          {data.desc}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
