"use client";
import React, { useState } from "react";
import { Rating } from "~/components/ui/rating";

const ReviewForm = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    comment: "",
    ratings: {
      services: 0,
      locations: 0,
      amenities: 0,
      prices: 0,
      roomComfort: 0,
    },
  });

  const handleRatingChange = (field: string, value: any) => {
    setFormData((prev: { ratings: any }) => ({
      ...prev,
      ratings: {
        ...prev.ratings,
        [field]: value,
      },
    }));
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Review Submitted:", formData);
    // Add logic to save the review
  };
  return (
    <div className="rounded-lg bg-gray-50 p-6 shadow">
      <h2 className="mb-4 text-lg font-bold">Add a review</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-10">
          {["services", "locations", "amenities", "prices", "roomComfort"].map(
            (field) => (
              <div key={field} className="text-start">
                <label className="mb-2 block text-sm font-medium capitalize text-gray-700">
                  {field}
                </label>
                <Rating
                  size="md"
                  value={formData.ratings[field]}
                  onChange={(val) => handleRatingChange(field, val)}
                />
              </div>
            ),
          )}
        </div>

        <div className="mt-6 flex space-x-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            className="borderrounded-md flex-1 border bg-white p-2 focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleInputChange}
            className="flex-1 rounded-md border bg-white p-2 focus:ring focus:ring-blue-300"
          />
        </div>

        <textarea
          name="comment"
          placeholder="Write your comment"
          value={formData.comment}
          onChange={handleInputChange}
          className="mt-4 w-full rounded-md border bg-white p-2 focus:ring focus:ring-blue-300"
        ></textarea>

        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-red-500 py-2 text-white hover:bg-red-600"
        >
          Submit review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
