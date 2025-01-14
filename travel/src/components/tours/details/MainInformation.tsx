import React from "react";
import ShortInformationTitle from "~/components/customs/ShortInformationTitle";

const MainInformation = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-10 border-t pt-10">
      <ShortInformationTitle
        title={"From"}
        value={"$104"}
        valueColor="red-500"
      />
      <ShortInformationTitle title={"Duration"} value={"7 days"} />
      <ShortInformationTitle title={"Max People"} value={"25"} />
      <ShortInformationTitle title={"Min Age"} value={"12+"} />
      <ShortInformationTitle title={"TOur Type"} value={"Adventure, Beaches"} />
      <ShortInformationTitle title={"Reviewes"} value={"4.8 (15 reviewes)"} />
    </div>
  );
};

export default MainInformation;
