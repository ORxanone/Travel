import React from "react";
import DestinationCard from "../cards/DestinationCard";
import package1 from "public/package1.png";
import package2 from "public/package2.png";
import package3 from "public/package3.png";

const destinations = [
  {
    image: package1,
    title: "Verrazzano Bridge",
  },
  {
    image: package2,
    title: "New York City Bridge",
  },
  {
    image: package3,
    title: "Francesco Mancini",
  },
  {
    image: package2,
    title: "Verrazzano-Narrows Bridge",
  },
  {
    image: package3,
    title: "Sunfrancisco Bridge",
  },
  {
    image: package1,
    title: "China Bridge",
  },
];

const PopularDestinations: React.FC = () => {
    return (
      <div className="p-6 md:p-12">
        <h2 className="mb-7 border-b border-b-gray-200 pb-7 text-center text-4xl font-bold text-gray-800">Popular Destination</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} image={destination.image} title={destination.title} />
          ))}
        </div>
      </div>
    );
  };

export default PopularDestinations;
