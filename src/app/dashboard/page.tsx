"use client";

import { FC, useState } from "react";

import SpaceMenu from "./components/SpaceMenu";
import MainSection from "./components/MainSection";

import { spaceData } from "../mock/mockData";

interface dashboardProps {}

const dashboard: FC<dashboardProps> = () => {
  const [space, setSpace] = useState(0);

  return (
    <>
    <SpaceMenu 
    spaceData={spaceData}
    space={space}
    setSpace={setSpace}/>
    <MainSection />

      
    </>
  );
};

export default dashboard;