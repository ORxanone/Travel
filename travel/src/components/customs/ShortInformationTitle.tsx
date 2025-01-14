import React from "react";

const ShortInformationTitle = ({
  title,
  value,
  valueColor = "black",
}: {
  title: string;
  value: string;
  valueColor?: string;
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <p className="text-gray-400">{title}</p>
      <p className={`text-${valueColor} text-xl font-extrabold`}>{value}</p>
    </div>
  );
};

export default ShortInformationTitle;
