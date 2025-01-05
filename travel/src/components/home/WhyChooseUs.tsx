import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUs = () => {
  return (
    <section className="w-full py-[112px] max-md:px-[10px] md:px-[70px] lg:px-[112px]">
      <h2 className="mb-7 border-b border-b-gray-200 pb-7 text-center text-4xl font-bold text-gray-800">
        Why Choose Us
      </h2>
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
        <WhyChooseUsCard />
        <WhyChooseUsCard />
        <WhyChooseUsCard />
      </div>
    </section>
  );
};

export default WhyChooseUs;
