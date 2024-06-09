import MenuDetails from "@/components/templates/Menu/MenuDetails";
import { client } from "@/app/client";

const index = ({ menu }) => {
  return (
    <div className="lg:mt-36">
      <MenuDetails menu={menu} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await client.get("menu");
  const data = await res.data;
  return {
    props: { menu: data },
    revalidate: 60 * 60 * 12,
  };
}

export default index;
