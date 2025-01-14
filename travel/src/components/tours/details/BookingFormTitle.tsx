import React from "react";

const BookingFormTitle = ({ basePrice }: { basePrice: number }) => {
  return (
    <div className="mb-6">
      <span className="text-2xl font-bold">${basePrice}</span>
      <span className="text-sm text-gray-500"> / per person</span>
    </div>
  );
};

export default BookingFormTitle;
