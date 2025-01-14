import React from "react";

const OurPackageArrows = () => {
  return (
    <div className="arrows absolute bottom-[10px] right-[10px] z-50 flex cursor-pointer gap-2 md:bottom-[70px] md:right-[70px] lg:bottom-[112px] lg:right-[112px]">
      <div className="custom-prev flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#115779] text-white">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
            fill="#115779"
          />
        </svg>
      </div>
      <div className="custom-next flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#115779] text-white">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
            fill="#115779"
          />
        </svg>
      </div>
    </div>
  );
};

export default OurPackageArrows;
