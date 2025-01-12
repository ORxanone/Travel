"use client";
import React from "react";
import CustomPagination from "../customs/Pagination";
import PageTitle from "../customs/PageTitle";
import TourCard from "../cards/TourCard";
import package1 from "public/package1.png";
import package2 from "public/package2.png";
import package3 from "public/package3.png";

const Tours = () => {
  const onPageChange = (n: number) => {};
  return (
    <main className="w-full">
      <PageTitle title="Tours" path="Home" page="Tours" />
      <section className="py-[112px] max-md:px-[10px] md:px-[70px] lg:px-[112px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <TourCard image={package1} title="" price="" />
          <TourCard image={package2} title="" price="" />
          <TourCard image={package3} title="" price="" />
          <TourCard image={package1} title="" price="" />
          <TourCard image={package2} title="" price="" />
          <TourCard image={package3} title="" price="" />
          <TourCard image={package1} title="" price="" />
          <TourCard image={package2} title="" price="" />
          <TourCard image={package3} title="" price="" />
        </div>
        <CustomPagination
          currentPage={1}
          pageSize={9}
          totalCount={100}
          onPageChange={onPageChange}
        />
      </section>
    </main>
  );
};

export default Tours;
