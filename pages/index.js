import { client } from "@/app/client";
import About from "@/components/templates/Index/About";
import Hero from "@/components/templates/Index/Hero";
import Menu from "@/components/templates/Index/Menu";
import Reservation from "@/components/templates/Index/Reservation";
import Testimonials from "@/components/templates/Index/Testimonials";
import ServicesDetails from "@/components/templates/Index/services";

const index = ({ data }) => {
  return (
    <div className="text-red-500">
      <Hero />
      <About />
      <ServicesDetails services={data.services} />
      <Menu menu={data.menu} />
      <Reservation />
      <Testimonials testimonials={data.testimonials} />
    </div>
  );
};

export async function getStaticProps() {
  async function dataFetecher(path) {
    const res = await client.get(path);
    const data = await res.data;
    return data;
  }

  const services = await dataFetecher("services");
  const menu = await dataFetecher("menu");
  const testimonials = await dataFetecher("comments");

  return {
    props: {
      data: {
        menu,
        services,
        testimonials,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
export default index;
