import React from "react";

const PageTitle = ({
  title,
  path,
  page,
}: {
  title: string;
  path: string;
  page: string;
}) => {
  return (
    <section className="relative flex h-[300px] w-full flex-col items-center justify-center text-white">
      <div
        style={{
          filter: "contrast(50%)",
        }}
        className="absolute left-0 top-0 z-[-1] h-full w-full bg-[url(public/tour-bg.jpg)] bg-cover"
      ></div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl font-medium">
        {path} / <span className="text-sky-300">{page}</span>
      </p>
    </section>
  );
};

export default PageTitle;
