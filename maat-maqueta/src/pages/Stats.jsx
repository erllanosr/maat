import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import FintechIntro from "../components/stats/FintechIntro";
import FintechCard01 from "../components/stats/FintechCard01";

import FintechCard03 from "../components/stats/FintechCard03";
import FintechCard04 from "../components/stats/FintechCard04";

import FintechCard07 from "../components/stats/FintechCard07";
import FintechCard08 from "../components/stats/FintechCard08";
import FintechCard09 from "../components/stats/FintechCard09";
import FintechCard10 from "../components/stats/FintechCard10";
import FintechCard11 from "../components/stats/FintechCard11";
import FintechCard12 from "../components/stats/FintechCard12";
import FintechCard13 from "../components/stats/FintechCard13";
import FintechCard14 from "../components/stats/FintechCard14";

function Stats() {
  return (
    <div className="">
      {/* Sidebar */}
      <Nav></Nav>
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  Stats
                </h1>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Page Intro */}
              <FintechIntro />
              {/* Line chart (Portfolio Returns) */}
              <FintechCard01 />
              {/* Credit Card */}
              {/* <FintechCard02 /> */}
              {/* Bar chart (Cash Flow) */}
              <FintechCard03 />
              {/* Horizontal bar chart (Cash Flow by Account) */}
              <FintechCard04 />

              {/* Line chart (Saving Goals) */}
              <FintechCard07 />
              {/* Line chart (Growth Portfolio) */}
              <FintechCard08 />
              {/* Pie chart (Portfolio Value) */}
              <FintechCard09 />
              {/* Line charts (Stock graphs) */}
              <FintechCard10 />
              <FintechCard11 />
              <FintechCard12 />
              <FintechCard13 />
     
            </div>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Stats;
