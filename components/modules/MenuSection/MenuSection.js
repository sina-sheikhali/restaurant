import MenuCard from "../MenuCard/MenuCard";

const MenuSection = ({ data, title }) => {
  return (
    <div className="flex flex-col gap-y-5 items-center justify-center  col-span-1 px-5 py-2  z-20">
      <span className="w-full text-2xl capitalize text-white">{title}</span>
      <ul className="flex flex-col gap-y-10 w-full">
        {data.map((item) => (
          <MenuCard data={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;
