import React from "react";
import ReviewForm from "./ReviewForm";
import { StarIcon } from "lucide-react";

const ReviewSection = () => {
  return (
    <div className="mt-10">
      <h1 className="my-5 text-3xl font-extrabold text-cyan-950">
        Showing reviews
      </h1>
      <div className="mb-6 rounded-md border p-4">
        <div>
          <h3 className="font-semibold">Sindy Simmons</h3>
          <p className="text-sm text-gray-500">March 20, 2022</p>
        </div>
        <div className="my-5 flex items-center gap-2">
          <span className="flex gap-1 rounded bg-red-500 p-1 text-sm text-white">
            <StarIcon size={14} /> 4.8
          </span>
          15 reviewes
        </div>
        <p className="mt-4 text-gray-700">
          Objectively productive just in time information with dynamic channels.
          Energetically exploit seamless growth strategies after 24/7
          experiences.
        </p>
      </div>
      <ReviewForm />
    </div>
  );
};

export default ReviewSection;
