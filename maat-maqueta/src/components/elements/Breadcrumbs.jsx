import React from "react";

const Breadcrumbs = ({titulo}) => {
  return (
    <>
      <div className="justify-center w-full mx-auto items-center bg-[var(--darkGreen)] text-white shadow-md">
        <nav className="flex px-32 mx-auto h-8" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex items-center">
                <a href="/" className="text-sm font-medium text-white duration-200 hover:text-white hover:scale-110">
                  Home
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <a
                  href="/"
                  className="ml-4 text-sm font-medium text-white duration-200 hover:scale-110 hover:text-white"
                  aria-current="page"
                >
                 {titulo} 
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumbs;
