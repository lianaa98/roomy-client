"use client"

import React, { FC, useState } from "react";

import Calendar from "./Calendar";

import "../style/mainSection.css"

interface MainSectionProps {}

const MainSection: FC<MainSectionProps> = ({}) => {

  const [showCalendar, setShowCalendar] = useState(true);
  const [insideSpace, setInsideSpace] = useState(false);

  const handleEnterSpace = () => {
    setShowCalendar(false);
    setInsideSpace(true);
  };

  return (
    <div id="main-container">
       { !insideSpace ? <button>Enter Space</button> : null }
    </div>
  );
};

export default MainSection;
