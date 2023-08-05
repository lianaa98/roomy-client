"use client";

import React, { FC, useState } from "react";
import { Skeleton } from "@mui/material";

import Calendar from "./Calendar";

import "../style/mainSection.css";

interface MainSectionProps {
  entered: boolean;
  spaceId: number;
}

const MainSection: FC<MainSectionProps> = ({ entered, spaceId }) => {
  return (
    <div id="main-container">
      {entered ? (
        <span>{spaceId}</span>
      ) : (
        <>
          <span>Under Construction...</span>
          <Skeleton
            sx={{ bgcolor: "grey.600" }}
            className="rounded-lg"
            variant="rectangular"
            animation={false}
            width={1000}
            height={1000}
          />
        </>
      )}
    </div>
  );
};

export default MainSection;
