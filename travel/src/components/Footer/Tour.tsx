import React from 'react';
import Footersosial from './Footersosial';
import Image from 'next/image';
import Quicklinks from './Quicklinks';
import Contact from './Contact';
import Copyright from './Copyright';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-sky-800 w-full min-h-[300px] sm:min-h-[463px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between gap-10 pt-8 sm:pt-10">

          <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-start">
            <Image
              src="/Footerlogo.png"
              alt="Footerlogo"
              width={180.44}
              height={48}
              className="w-auto h-auto"
            />
            <p className="mt-4 sm:mt-6 text-gray-200 text-sm sm:text-base text-center sm:text-left">
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been
              the industry&apos;s standa
            </p>
            <Link
              href="#"
              className="text-amber-500 hover:text-amber-400 mt-6 sm:mt-9 block transition-colors"
            >
              Read More
            </Link>
            <hr className="w-full max-[1080px]:opacity-0 sm:w-[373px] mt-3 mb-3" />
            <Footersosial />
          </div>


          <div className="w-full sm:w-1/3 flex justify-center">
            <Quicklinks />
          </div>


          <div className="w-full sm:w-1/3 flex justify-center">
            <Contact />
          </div>
        </div>
      </div>


      <Copyright />
    </div>
  );
};

export default Footer;