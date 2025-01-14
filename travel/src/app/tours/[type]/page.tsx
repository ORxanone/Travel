import React from "react";
import Details from "~/components/tours/details";
// import dynamic from "next/dynamic";

// // Dynamically import the component with no SSR
// const Details = dynamic(() => import("~/components/tours/details"), {
//   ssr: false,
// });

const page = () => {
  return <Details />;
};

export default page;
