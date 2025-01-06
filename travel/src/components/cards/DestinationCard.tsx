import Image from "next/image";
import React from "react";

interface CardProps {
  image: any;
  title: string;
}

const DestinationCard: React.FC<CardProps> = ({ image, title }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md">
      <Image src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 text-center text-white">
        <h3 className="text-sm max-sm:text-[12px] font-semibold sm:text-base">{title}</h3>
      </div>
    </div>
  );
};

export default DestinationCard;
