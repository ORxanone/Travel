import React from "react";
import PackageSlides from "./PackageSlides";

const OurPackageSection = () => {
  return (
    <section className="relative w-full py-[112px] max-md:px-[10px] md:px-[70px] lg:px-[112px]">
      <h2 className="mb-7 border-b border-b-gray-200 pb-7 text-center text-4xl font-bold text-gray-800">
        Our Tour Package
      </h2>
      <PackageSlides />
    </section>
  );
};

export default OurPackageSection;
