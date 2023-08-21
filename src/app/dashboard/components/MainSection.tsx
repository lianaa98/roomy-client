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
          <div className="my-5 mt-9">
            <span>Under Construction...</span>
          </div>
          <Skeleton
            sx={{ bgcolor: "grey.600" }}
            className="rounded-lg mt-4"
            variant="rectangular"
            width={500}
            height={200}
          />
          <Skeleton
            sx={{ bgcolor: "grey.600" }}
            className="rounded-lg mt-4"
            variant="rectangular"
            animation="wave"
            width={500}
            height={100}
          />
          <Skeleton
            sx={{ bgcolor: "grey.600" }}
            className="rounded-lg mt-4"
            variant="rectangular"
            animation={false}
            width={500}
            height={50}
          />
        </>
      )}
    </div>
  );
};

export default MainSection;
