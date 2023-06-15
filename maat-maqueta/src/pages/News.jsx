import React from "react";
import Nav from "../components/nav/Nav";
import NewsItems from "../components/news/NewsItems";
import NewsBrowser from "../components/news/NewsBrowser";
import Pagination from "../components/elements/Pagination";
import Footer from "../components/footer/Footer";

function News() {
  return (
    <div className=" ">
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
                  Descubre Noticias  
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <NewsBrowser></NewsBrowser>
                {/* Add meetup button */}
             
              </div>
            </div>

            {/* Filters */}
            <div className="mb-5">
              <ul className="flex flex-wrap -m-1">
                <li className="m-1">
                  <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-emerald-500 text-white duration-150 ease-in-out">
                    Ver Todo
                  </button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">
                    Esta semana
                  </button>
                </li>
                <li className="m-1">
                  <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">
                    Este mes
                  </button>
                </li>
              </ul>
            </div>
            <div className="text-sm text-slate-500 italic mb-4">
              289 Noticias encontradas
            </div>

            {/* Content */}
            <NewsItems></NewsItems>

            {/* Pagination */}
            <div className="mt-8">
                <Pagination></Pagination>
            </div>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default News;
