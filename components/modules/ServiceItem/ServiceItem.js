const ServiceItem = ({ id, title, img }) => {
  return (
    <div
      className={`flex flex-col gap-y-7 items-center ${
        id == 2 ? "lg:mt-48" : "justify-start"
      }`}
    >
      <div className="group cursor-pointer relative overflow-hidden border-2 rounded-md border-goldCrayola">
        <img src={img} className="object-cover img-scale" />
        <div className="absolute top-0 -inset-full h-full w-1/3  z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
      </div>
      <span className="text-3xl capitalize font-serif ">{title}</span>
    </div>
  );
};

export default ServiceItem;
