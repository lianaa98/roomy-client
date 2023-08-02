import React, { FC } from "react";

interface SpaceMenuProps {}

const SpaceMenu: FC<SpaceMenuProps> = ({}) => {
  return (
    <aside
      id="space-sidebar"
      className="z-40 md:col-start-1 transition-transform -translate-x-full md:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-transparent">
        <ul className="space-y-2 font-medium flex flex-col justify-center">
          <li>
            <a
              href="#"
              className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="mx-auto px-5 text-lg">Apartment 1</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="mx-auto px-5 text-lg">Apartment 2</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="mx-auto px-5 text-lg">Apartment 3</span>
            </a>
          </li>
          
        </ul>
      </div>
    </aside>
  );
};

export default SpaceMenu;
