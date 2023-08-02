import React, { FC } from "react";

interface SpaceMenuProps {}

const SpaceMenu: FC<SpaceMenuProps> = ({}) => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-15 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-transparent">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="ml-3">Apartment 1</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="ml-3">Apartment 1</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span className="ml-3">Apartment 1</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SpaceMenu;
