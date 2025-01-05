import React from 'react'
import Link from 'next/link';
import Footersosial from './Footersosial';
const Copyright = () => {
    return (
        
        <footer className="w-full  text-white mt-20">
            <hr className='w-11/12 ml-14'/>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm ml-5">© Copyright 2023</span>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-sm hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/customer-support" className="text-sm hover:text-gray-300">
                Customer support
              </Link>
              <Footersosial/>
             
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Copyright