import React from "react";
import { useState } from "react";
import Nav from "../components/nav/Nav";
import ods1 from "../resources/img/ods1.svg";
import ods2 from "../resources/img/ods2.svg";
import ods3 from "../resources/img/ods3.svg";
import ods4 from "../resources/img/ods4.svg";
import ods5 from "../resources/img/ods5.svg";
import ods6 from "../resources/img/ods6.svg";
import ods7 from "../resources/img/ods7.svg";
import ods8 from "../resources/img/ods8.svg";
import ods9 from "../resources/img/ods9.svg";
import ods10 from "../resources/img/ods10.svg";
import ods11 from "../resources/img/ods11.svg";
import ods12 from "../resources/img/ods12.svg";
import ods13 from "../resources/img/ods13.svg";
import ods14 from "../resources/img/ods14.svg";
import ods15 from "../resources/img/ods15.svg";
import ods16 from "../resources/img/ods16.svg";
import ods17 from "../resources/img/ods17.svg";
import ODS from "../components/Evento/ODS";

function CrearEvento() {
  const ods = [
    {
      id: "1",
      img: ods1,
    },
    {
      id: "2",
      img: ods2,
    },
    {
      id: "3",
      img: ods3,
    },
    {
      id: "4",
      img: ods4,
    },
    {
      id: "5",
      img: ods5,
    },
    {
      id: "6",
      img: ods6,
    },
    {
      id: "7",
      img: ods7,
    },
    {
      id: "8",
      img: ods8,
    },
    {
      id: "9",
      img: ods9,
    },
    {
      id: "10",
      img: ods10,
    },
    {
      id: "11",
      img: ods11,
    },
    {
      id: "12",
      img: ods12,
    },
    {
      id: "13",
      img: ods13,
    },
    {
      id: "14",
      img: ods14,
    },
    {
      id: "15",
      img: ods15,
    },
    {
      id: "16",
      img: ods16,
    },
    {
      id: "17",
      img: ods17,
    },
  ];

  const [auxODS, setAuxODS] = useState([]);

  const checkODS = (id) => {
    let found;
    let response = false;

    if (auxODS.length !== 0) {
      found = auxODS.find((element) => element.id === id);

      if (found) {
        response = true;
      }
    }

    return response;
  };

  const changeODS = (ods) => {
    let found;

    if (auxODS.length !== 0) {
      found = auxODS.find((element) => element.id === ods.id);
      console.log(found);

      if (!found) {
        setAuxODS([...auxODS, ods]);
      }
    } else {
      setAuxODS([ods]);
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="section-event">
        <div className="ods mt-5">
          <div className="max-w-2xl  mb-3 mt-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Select the SDGs your event complies with
            </h2>
          </div>
          <div className="imgsODS">
            {ods.map((o) => {
              return (
                <ODS
                  key={o.id}
                  select={checkODS(o.id)}
                  imagen={o.img}
                  onClick={() => changeODS(o)}
                />
              );
            })}
          </div>
        </div>
        <div className="formCrearEvento ms-5 mb-3 mt-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Create a new event
            </h2>
            <p className="mt-2 text-gray-600">
              Fill in the fields with the necessary information so that users can join your event.
              users can join your event
            </p>
          </div>
          <form action="#" method="POST" className="mt-4 max-w-2xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
              <div className="sm:col-span-3">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Start Date
                </label>
                <div className="mt-2.5">
                  <input
                    type="time"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  End Date
                </label>
                <div className="mt-2.5">
                  <input
                    type="time"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Assistants
                </label>
                <div className="mt-2.5">
                  <input
                    type="number"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Location
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2.5">
                  <textarea
                    type="text"
                    name="text"
                    id="email"
                    autoComplete="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btnCrearEvento block rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Create New Event
              </button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CrearEvento;
