import Image from "next/image";
import React from "react";
import { MapPinHouse } from "lucide-react";
import Link from "next/link";
import MainInformation from "./MainInformation";
import Overview from "./Overview";
import IncludeExclude from "./IncludeExclude";
import ReviewSection from "./Reviews";

const TourDescription = () => {
  return (
    <div className="col-span-1 sm:col-span-2">
      <div className="relative h-[400px] w-full">
        <Image
          src="/seabeauty.png"
          alt="Tourfoto"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <div className="mt-5 flex justify-between">
          <div className="flex">
            <MapPinHouse />
            <span>Budapest,Hungary</span>
            <Link href="#" className="pl-10 text-red-500">
              View on map
            </Link>
          </div>
        </div>
        <h1 className="mt-5 text-3xl font-extrabold text-cyan-950">
          Wonders of the west Coast & Kimberly
        </h1>
      </div>
      <MainInformation />
      <Overview />
      <IncludeExclude />
      <ReviewSection />
    </div>
  );
};

export default TourDescription;
