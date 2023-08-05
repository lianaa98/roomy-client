"use client";

import { FC, useEffect, useState } from "react";
import { fetchData } from "@/lib/fetchData";
import { useCookies } from "react-cookie";

import SpaceMenu from "./components/SpaceMenu";
import SpaceModal from "./components/SpaceModal";
import MainSection from "./components/MainSection";

interface dashboardProps {}

const dashboard: FC<dashboardProps> = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user-token"]);
  
  // Space Menu States
  const [spaceLoading, setSpaceLoading] = useState(false);
  const [spaceData, setSpaceData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  
  // Enter Space States
  const [entered, setEntered] = useState(false);
  const [spaceId, setSpaceId] = useState(0);

  useEffect(() => {
    setSpaceLoading(true);
    const token = cookies["user-token"];
    fetchData("/spaces", "GET", token).then((res) => {
      setTimeout(() => {
        setSpaceData(res);
        setSpaceLoading(false);
      }, 1000);
    });
  }, []);

  return (
    <>
      <SpaceMenu
        spaceData={spaceData}
        setOpenModal={setOpenModal}
        spaceLoading={spaceLoading}
        setSpaceId={setSpaceId}
        setEntered={setEntered}
      />
      <MainSection 
      entered={entered}
      spaceId={spaceId}
      />
      {openModal && <SpaceModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default dashboard;
