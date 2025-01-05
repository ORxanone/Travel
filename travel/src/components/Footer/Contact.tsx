import React from 'react'
import { Clock } from 'lucide-react';
const Contact = () => {
  return (
<div className="text-gray-100 w-full max-w-md mx-auto p-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 mt-3 sm:mt-1 text-amber-500">Contact</h2>
      <div className="space-y-2 sm:space-y-3">
        <p className="text-sm sm:text-base">Phone: +669 4398 4920</p>
        <p className="text-sm sm:text-base">Email: sahabuddin@gmail.com</p>
        <p className="text-sm sm:text-base">Address: 947 WashingtonDC,USA</p>
        <p className="flex items-center gap-2 text-sm sm:text-base">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          Sat - Fri (9.00am-9.00pm)
        </p>
      </div>
    </div>
  );
};

export default Contact