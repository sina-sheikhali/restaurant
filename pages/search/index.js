import { client } from "@/app/client";
import MenuCard from "@/components/modules/MenuCard/MenuCard";
import TitleSection from "@/components/modules/TitleSection/TitleSection";
import img1 from "@/public/images/shape-8.png";
import img2 from "@/public/images/shape-9.png";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const index = ({ searchResult }) => {
  const router = useRouter();
  return (
    <div className="mt-40 relative  flex flex-col items-center py-20 px-5 min-h-[90vh]">
      <TitleSection
        title={"results"}
        desc={`results for "${router.query.q}"`}
      />
      <div className="flex flex-col gap-y-10 items-center mt-20">
        {searchResult.length ? (
          searchResult.map((item) => <MenuCard data={item} />)
        ) : (
          <h3 className="text-5xl text-goldCrayola font-serif mt-20">
            No Item Found
          </h3>
        )}
      </div>
      <Image src={img2} alt="img" className="absolute top-0 right-0" />
      <Image src={img1} alt="img" className="absolute bottom-0 left-0" />
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await client.get("menu");
  const data = await res.data;
  const { query } = context;

  const searchResult = data.filter((item) => {
    if (query.q) {
      return item.title.toLowerCase().includes(query.q.toLowerCase());
    }
  });

  return {
    props: {
      searchResult,
    },
  };
}
export default index;
