import Image from "next/image";
import Link from "next/link";

const MenuCard = ({ data }) => {
  return (
    <li className="flex gap-x-5 ">
      <Link href={`/products/${data.id}`}>
        <div className="overflow-hidden  rounded-2xl">
          <Image
            src={data.img}
            alt="img"
            width={120}
            height={120}
            className="scale-100 hover:scale-110 transition-transform rounded-2xl"
          />
        </div>
      </Link>
      <div className="flex flex-col  justify-around  w-full">
        <div className="flex items-center justify-center text-base">
          <Link href={`/products/${data.id}`}>
            <h3 className="text-lg text-white whitespace-nowrap text-ellipsis hover:text-goldCrayola transition-colors">
              {data.title}
            </h3>
          </Link>
          <span className="w-full flex items-center text-lg  ml-3 gap-x-3 text-goldCrayola relative before:content-[''] before:flex-grow before:h-[5px]  before:border-y before:border-whiteAlpha20">
            ${data.price}
          </span>
        </div>
        <p className="text-quickSilver mr-5 line-clamp-3 leading-6">
          {data.desc}
        </p>
      </div>
    </li>
  );
};

export default MenuCard;
