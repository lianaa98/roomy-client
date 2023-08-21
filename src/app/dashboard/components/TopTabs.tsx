import React, { Component, FC, ReactNode } from "react";

interface TopTabsProps {
  currentNavigate: number;
  setCurrentNavigate: Function;
  tabs: Array<{ name: string; component: ReactNode }>;
}

const TopTabs: FC<TopTabsProps> = ({
  currentNavigate,
  setCurrentNavigate,
  tabs,
}) => {

  const renderTabs = () => {
    return tabs.map((tab, index) => {
      return (
        <li key={index} className="mr-2">
          <div
            className={`text-md inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 hover:cursor-pointer ${
              currentNavigate === index ? "border-b-2 border-blue-600 text-blue-600" : ""
            }`}
            onClick={() => setCurrentNavigate(index)}
          >
            {tab.name}
          </div>
        </li>
      );
    });
  };

  return (
    <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700 my-5">
      <ul className="flex flex-wrap -mb-px">{renderTabs()}</ul>
    </div>
  );
};

export default TopTabs;
