import React from "react";

import UserImage from "../../resources/images/user-64-14.jpg";
import FintechIcon01 from "../../resources/images/company-icon-01.svg";
import FintechIcon02 from "../../resources/images/company-icon-02.svg";
import FintechIcon03 from "../../resources/images/company-icon-03.svg";
import FintechIcon04 from "../../resources/images/company-icon-04.svg";

function FintechIntro() {
  return (
    <div className="flex flex-col col-span-full bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 py-6">
        <div className="md:flex md:justify-between md:items-center">
          {/* Left side */}
          <div className="flex items-center mb-4 md:mb-0">
            {/* Avatar */}
            <div className="mr-4 -mt-4">
              <img
                className="inline-flex rounded-full"
                src={UserImage}
                width="64"
                height="64"
                alt="User"
              />
            </div>
            {/* User info */}
            <div>
              <div className="mb-2">
                Hey{" "}
                <strong className=" text-slate-800 font-bold">
                  Relentless:{" "}
                </strong>
                Empowering communities, one event at a time, with impressive CSR
                statistics:
              </div>
              <div className="text-3xl font-bold text-emerald-500">
                +7,000 employees in 120 events between 2021 and 2023
              </div>
            </div>
          </div>
          {/* Right side */}
          <ul className="shrink-0 flex flex-wrap justify-end md:justify-start -space-x-3 -ml-px">
            <li>
              <a className="block" href="#0">
                <img
                  className="w-9 h-9 rounded-full"
                  src={FintechIcon01}
                  width="36"
                  height="36"
                  alt="Account 01"
                />
              </a>
            </li>
            <li>
              <a className="block" href="#0">
                <img
                  className="w-9 h-9 rounded-full"
                  src={FintechIcon02}
                  width="36"
                  height="36"
                  alt="Account 02"
                />
              </a>
            </li>
            <li>
              <a className="block" href="#0">
                <img
                  className="w-9 h-9 rounded-full"
                  src={FintechIcon03}
                  width="36"
                  height="36"
                  alt="Account 03"
                />
              </a>
            </li>
            <li>
              <a className="block" href="#0">
                <img
                  className="w-9 h-9 rounded-full"
                  src={FintechIcon04}
                  width="36"
                  height="36"
                  alt="Account 04"
                />
              </a>
            </li>
            <li>
              <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-indigo-500 shadow-sm transition duration-150">
                <span className="sr-only">Add new user</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FintechIntro;
