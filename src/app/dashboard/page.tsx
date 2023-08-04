"use client";

import { FC, useEffect, useState } from "react";
import { fetchData } from "@/lib/fetchData";
import { useCookies } from "react-cookie";

import SpaceMenu from "./components/SpaceMenu";
import SpaceModal from "./components/SpaceModal";
import MainSection from "./components/MainSection";

interface dashboardProps {}

const dashboard: FC<dashboardProps> = () => {
  const [spaceData, setSpaceData] = useState([]);
  const [space, setSpace] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(["user-token"]);
  const [openModal, setOpenModal] = useState(false);

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
    setSpace={setSpace}
    setOpenModal={setOpenModal}
    />
    <MainSection />
    {openModal && <SpaceModal 
    setOpenModal={setOpenModal}
    />}

    </>
  );
};

export default dashboard;