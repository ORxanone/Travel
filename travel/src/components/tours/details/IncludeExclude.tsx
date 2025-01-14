import { Check, X } from "lucide-react";
import React from "react";

const includes = [
  "Pick and Drop Services",
  "1 Meal Per Day",
  "Cruise Dinner & Music Event",
  "Visit 7 Best Places in the City With Group",
];

const excludes = [
  "Additional Services",
  "Incurance",
  "Food & Drinks",
  "Tickets",
];

const IncludeExclude = () => {
  return (
    <div className="mt-10">
      <h1 className="my-5 text-3xl font-extrabold text-cyan-950">
        Include / Exclude
      </h1>
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1">
          <ul className="space-y-5">
            {includes?.map((item, index) => (
              <li key={index} className="flex gap-5 text-xl font-semibold">
                <Check color="red" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <ul className="space-y-5">
            {excludes?.map((item, index) => (
              <li key={index} className="flex gap-5 text-xl font-semibold">
                <X color="red" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IncludeExclude;
