import { client } from "@/app/client";
import ServicesDetails from "@/components/templates/Services/ServicesDetails";
import React from "react";

const index = ({ services }) => {
  return (
    <div className="lg:mt-36">
      <ServicesDetails services={services} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await client.get("services");
  const data = await res.data;

  return {
    props: {
      services: data,
    },
  };
}

export default index;
