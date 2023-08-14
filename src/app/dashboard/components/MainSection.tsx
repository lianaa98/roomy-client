"use client";

import React, { FC, useState, Suspense } from "react";
import { Skeleton } from "@mui/material";

import TopTabs from "./TopTabs";
import Calendar from "./Calendar";
import Chores from "./Chores";
import Expenses from "./Expenses";
import Groceries from "./Groceries";
import Inventory from "./Inventory";
import Overview from "./Overview";
import Settings from "./Settings";

import "../style/mainSection.css";

interface MainSectionProps {
  entered: boolean;
  spaceId: number;
}

const MainSection: FC<MainSectionProps> = ({ entered, spaceId }) => {

  // Top tabs navigation state
  const [currentNavigate, setCurrentNavigate] = useState(0);

  const tabs = [
    {
      name: "Overview",
      component: <Overview />,
    },
    {
      name: "Inventory",
      component: <Inventory spaceId={spaceId} />,
    },
    {
      name: "Groceries",
      component: <Groceries />,
    },
    {
      name: "Chores",
      component: <Chores />,
    },
    {
      name: "Expenses",
      component: <Expenses />,
    },
    {
      name: "Calendar",
      component: <Calendar />,
    },
    {
      name: "Settings",
      component: <Settings />,
    },
  ];

  return (
    <div id="main-container">
      {entered ? (
        <>
          <TopTabs
            currentNavigate={currentNavigate}
            setCurrentNavigate={setCurrentNavigate}
            tabs={tabs}
          />
          <Suspense fallback={<div>Loading...</div>}>
            {tabs[currentNavigate].component}
          </Suspense>
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
