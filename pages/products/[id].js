import ProductDetails from "@/components/templates/Product/ProductDetails";
import Comments from "@/components/templates/Product/Comments";
import { client } from "@/app/client";
const product = ({ menuItem, comments }) => {
  return (
    <div className="lg:mt-36 flex flex-col gap-y-10">
      <ProductDetails data={menuItem} />
      <Comments comments={comments} />
    </div>
  );
};

export async function getStaticPaths() {
  const res = await client.get("menu");
  const menu = await res.data;
  const paths = menu.map((item) => ({ params: { id: item.id } }));
  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const { params } = context;
  const res = await client.get(`menu/${params.id}`);
  const menuItem = await res.data;

  const commentsResponse = await client.get("comments");
  const data = await commentsResponse.data;

  const productComments = data.filter(
    (comment) => comment.productID === Number(params.id)
  );

  return {
    props: {
      menuItem,
      comments: productComments,
    },
  };
}
export default product;
