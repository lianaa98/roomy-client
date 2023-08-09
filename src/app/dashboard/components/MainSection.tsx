"use client";

import React, { FC, useState } from "react";
import { Skeleton } from "@mui/material";

import TopTabs from "./TopTabs";
import { tabs } from "./constants/tabs";

import "../style/mainSection.css";

interface MainSectionProps {
  entered: boolean;
  spaceId: number;
}

const MainSection: FC<MainSectionProps> = ({ entered, spaceId }) => {

  // Top tabs navigation state
  const [currentNavigate, setCurrentNavigate] = useState(0);

  return (
    <div id="main-container">
      {entered ? (
        <>
          <TopTabs
            currentNavigate={currentNavigate}
            setCurrentNavigate={setCurrentNavigate}
            tabs={tabs}
          />
          {tabs[currentNavigate].component}
        </>
      ) : (
        <>
          <span>Under Construction...</span>
          <Skeleton
            sx={{ bgcolor: "grey.600" }}
            className="rounded-lg"
            variant="rectangular"
            animation={false}
            width={1000}
            height={500}
          />
        </>
      )}
    </div>
  );
};

export default MainSection;
