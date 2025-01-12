import Image from "next/image";
import Link from "next/link";
import React from "react";

const TourCard = ({
  image,
  title,
  price,
}: {
  image: any;
  title: string;
  price: string;
}) => {
  return (
    <div className="col-span-1 mb-20 cursor-pointer overflow-hidden">
      <div className="group relative h-[300px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover duration-300 group-hover:scale-[1.7]"
        />

        <div className="absolute left-0 top-0 z-10 h-full w-full bg-white p-8 opacity-0 duration-300 group-hover:opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          eligendi dicta consectetur voluptatem consequatur reprehenderit
          voluptates. Ipsa tenetur explicabo, corrupti non id quos doloremque
          molestias! Ipsam cum voluptatum molestias quam?
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            5 <span className="text-gray-400">(123)</span>
          </span>
        </div>

        <h3 className="mb-1 text-lg font-semibold text-gray-800">{title}</h3>

        <div className="mb-2 flex items-center text-sm text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          2 Days 2 Nights
        </div>

        <p className="mb-4 font-medium text-gray-800">Price: ${price}</p>

        <Link
          href={"#"}
          className="border border-blue-600 px-4 py-2 text-sm hover:bg-blue-700 hover:text-white"
        >
          Book this tour
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
