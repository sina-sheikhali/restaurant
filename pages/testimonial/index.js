import { client } from "@/app/client";
import Comment from "@/components/templates/Testimonial/Comment";
import React from "react";

const index = ({ testemonials }) => {
  return (
    <div className="mt-40">
      <Comment testimonials={testemonials} />
    </div>
  );
};

export async function getStaticProps() {
  const res = await client.get("comments");
  const data = await res.data;
  return {
    props: {
      testemonials: data,
    },
  };
}

export default index;
