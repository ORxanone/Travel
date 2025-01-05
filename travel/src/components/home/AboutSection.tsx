import React from "react";

const AboutSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="w-full py-[112px] max-md:px-[10px] md:px-[70px] lg:px-[112px]">
      <h2 className="mb-7 border-b border-b-gray-200 pb-7 text-center text-4xl font-bold text-gray-800">
        {title}
      </h2>
      <p className="main-text mb-7 text-[18px] font-medium sm:text-[20px] md:text-[24px] lg:text-[28px]">
        {description}
      </p>
    </section>
  );
};

export default AboutSection;
