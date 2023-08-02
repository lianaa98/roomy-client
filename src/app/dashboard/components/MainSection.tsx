import React, { FC } from "react";

import Calendar from "./Calendar";

interface MainSectionProps {}

const MainSection: FC<MainSectionProps> = ({}) => {
  return (
    <div className="md:col-start-2 md:col-span-3">
      <Calendar />
    </div>
  );
};

export default MainSection;
