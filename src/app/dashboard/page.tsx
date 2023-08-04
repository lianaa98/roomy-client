"use client";

import { FC, useEffect, useState } from "react";
import { fetchData } from "@/lib/fetchData";
import { useCookies } from "react-cookie";

import SpaceMenu from "./components/SpaceMenu";
import MainSection from "./components/MainSection";

interface dashboardProps {}

const dashboard: FC<dashboardProps> = () => {
  const [spaceData, setSpaceData] = useState([]);
  const [space, setSpace] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(["user-token"]);

  useEffect(() => {
    console.log("space", space);
    const token = cookies["user-token"];
    fetchData("/spaces", "GET", token).then((res) => {
      console.log(res)
      setSpaceData(res);
    });
  }, [space]);

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