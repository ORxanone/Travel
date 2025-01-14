import React from "react";
import PackageSlides from "~/components/home/PackageSlides";

const OtherTours = () => {
  return (
    <div className="col-span-1 mt-5 sm:col-span-3">
      <h1 className="my-10 text-center text-4xl font-extrabold text-cyan-950">
        You may also like...
      </h1>
      <PackageSlides />
    </div>
  );
};

export default OtherTours;
