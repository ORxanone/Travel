import React from 'react';
import Link from 'next/link';
import Footersosial from './Footersosial';

const Copyright = () => {
  return (
    <div className="w-full text-white mt-10 sm:mt-20">
      <hr className="w-[90%] mx-auto" />
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div>
            <span className="text-xs sm:text-sm">© Copyright 2023</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <Link 
                href="/privacy-policy" 
                className="text-xs sm:text-sm hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/customer-support" 
                className="text-xs sm:text-sm hover:text-gray-300 transition-colors"
              >
                Customer support
              </Link>
            </div>
            <Footersosial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;