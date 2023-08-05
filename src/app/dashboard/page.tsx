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
  const [spaceLoading, setSpaceLoading] = useState(false);

  useEffect(() => {
    setSpaceLoading(true);
    const token = cookies["user-token"];
    fetchData("/spaces", "GET", token).then((res) => {
      setTimeout(() => {
        setSpaceData(res);
        setSpaceLoading(false);
      }, 3000);
    });
  }, [space]);

  return (
    <>
      <SpaceMenu
        spaceData={spaceData}
        space={space}
        setSpace={setSpace}
        setOpenModal={setOpenModal}
        spaceLoading={spaceLoading}
      />
      <MainSection />
      {openModal && <SpaceModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default dashboard;
