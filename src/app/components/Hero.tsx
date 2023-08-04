import React, { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-6xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-sky-300">
            Roomy
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Your intelligent butler in shared homes.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/login"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Continue
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            
          </div>

          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">FEATURES</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                <div className="flex flex-col items-center w-1/2 p-4 sm:w-1/3">Inventory</div>       
                <div className="flex flex-col items-center w-1/2 p-4 sm:w-1/3">Groceries</div>       
                <div className="flex flex-col items-center w-1/2 p-4 sm:w-1/3">Expenses</div>       
                <div className="flex flex-col items-center w-1/2 p-4 sm:w-1/3">Chores</div>       
                <div className="flex flex-col items-center w-1/2 p-4 sm:w-1/3">Contributions</div>       
                <div className="flex flex-col items-center w-1/2 p-4 sm:w-1/3">House events</div>       
            </div>
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default Hero;
