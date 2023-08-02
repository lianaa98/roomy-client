"use client"

import React, { FC, useState } from "react";

import Calendar from "./Calendar";

interface MainSectionProps {}

const MainSection: FC<MainSectionProps> = ({}) => {

  const [showCalendar, setShowCalendar] = useState(true);

  const handleEnterSpace = () => {
    setShowCalendar(false);
  };

  return (
    <div className="sm:ml-64">Hello</div>
  );
};

export default MainSection;
