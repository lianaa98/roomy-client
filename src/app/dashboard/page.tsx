import { FC } from "react";

import TopNav from "./components/TopNav";
import SpaceMenu from "./components/SpaceMenu";
import MainSection from "./components/MainSection";

interface dashboardProps {}

const dashboard: FC<dashboardProps> = () => {
  return (
    <div className="h-screen">
      <TopNav />
      <div className="md:grid md:grid-cols-4 h-screen">
        <SpaceMenu />
        <MainSection />
      </div>
    </div>
  );
};

export default dashboard;
