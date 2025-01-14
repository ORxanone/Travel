import React from "react";

const Map = () => {
  return (
    <div className="relative h-[400px] w-[90%]">
      <div className="w-full">
        <iframe
          width="100%"
          height="300"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};
export default Map;
