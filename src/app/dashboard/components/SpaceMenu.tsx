import React, { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

interface SpaceMenuProps {
  spaceData: any;
  space: number;
  setSpace: any;
}

const SpaceMenu: FC<SpaceMenuProps> = ({ spaceData, space, setSpace }) => {
  const renderSpace = () => {
    return spaceData.map((space: any, index: number) => {
      return (
        <li key={index}>
          <a
            href="#"
            className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            onClick={() => setSpace(index)}
          >
            <span className="mx-auto px-5 text-lg">{space.name}</span>
          </a>
        </li>
      );
    });
  };

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-10 transition-transform -translate-x-full sm:translate-x-0 "
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <div className="flex items-center justify-start p-5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
          <a href="/dashboard" className="flex ml-2 md:mr-24">
          <FontAwesomeIcon icon={faHouse} className="w-30 h-30 p-3"/>
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              Roomy
            </span>
          </a>
        </div>
        <ul className="space-y-2 font-medium">
          {renderSpace()}
          <li>
            <a
              href="#"
              className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span className="px-5 text-lg">Sign Out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SpaceMenu;
