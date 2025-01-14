"use client";
import React from "react";
import LocationHeader from "./LocationHeader";
import TourDescription from "./TourDescription";
import OtherTours from "./OtherTours";

const Details = () => {
  return (
    <main className="grid grid-cols-1 items-start gap-10 py-[112px] max-md:px-[10px] sm:grid-cols-3 md:px-[70px] lg:px-[112px]">
      <TourDescription />
      <LocationHeader />
      <OtherTours />
    </main>
  );
};

export default Details;
