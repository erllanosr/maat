import React from "react";
import { Link } from "react-router-dom";
import PlantWorld from "../../resources/img/PlantWorld.jpg";
// import TierraOngLogo from "../elements/TierraOngLogo";
import MaatLogo from "../../resources/img/logo_maat.png";

const RegistroPaso2 = () => {
  return (
    <main className="bg-white">
      <div className="relative flex">
        {/* Content */}
        <div className="w-full md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block" to="/">
                  <img src={MaatLogo} className="h-20" alt="Maat logo" />
                </Link>
                <div className="text-sm">
                  Already have an account?{" "}
                  <Link className="font-medium text-[var(--darkGreen)] hover:text-[var(--primaryColor)]" to="/login">
                    Login
                  </Link>
                </div>
              </div>

              {/* Progress bar */}
              <div className="px-4 pt-12 pb-8">
                <div className="max-w-md mx-auto w-full">
                  <div className="relative">
                    <div className="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200" aria-hidden="true"></div>
                    <ul className="relative flex justify-between w-full">
                      <li>
                        <Link
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-[var(--primaryColor)] text-white"
                          to="/registro"
                        >
                          1
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-[var(--primaryColor)] text-white"
                          to="/registro-02"
                        >
                          2
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-[var(--primaryColor)] text-white"
                          to="/registro-03"
                        >
                          3
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500"
                          to="/registro-03"
                        >
                          4
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-8">
              <div className="max-w-md mx-auto">
                <h1 className="text-3xl text-slate-800 font-bold mb-6">Additional Information</h1>
                {/* htmlForm */}
                <form>
                  <div className="space-y-4 mb-8">
                    {/* Company Name */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="company-name">
                        CIF<span className="text-rose-500">*</span>
                      </label>
                      <input id="company-name" className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-green-950 focus:border-green-950" type="text" />
                    </div>
                    {/* City and Postal Code */}
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="city">
                          City <span className="text-rose-500">*</span>
                        </label>
                        <input id="city" className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-green-950 focus:border-green-950" type="text" />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1" htmlFor="postal-code">
                          Zip Code <span className="text-rose-500">*</span>
                        </label>
                        <input id="postal-code" className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-green-950 focus:border-green-950" type="text" />
                      </div>
                    </div>
                    {/* Street Address */}
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="street">
                        Date of foundation <span className="text-rose-500">*</span>
                      </label>
                      <input id="street" className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-green-950 focus:border-green-950" type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="street">
                        Brief description of the entity's activity <span className="text-rose-500">*</span>
                      </label>
                      <textarea id="street" className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-green-950 focus:border-green-950" type="text" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link className="bg-slate-200 text-black p-2 rounded-md text-sm hover:bg-slate-300" to="/registro-02">
                      <svg
                        className="inline-block h-7"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        stroke-linejoin="round"
                        stroke-miterlimit="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" />
                      </svg>
                      Back{" "}
                    </Link>
                    <Link
                      className="btn bg-[var(--primaryColor)] hover:bg-[var(--darkGreen)] text-white ml-auto rounded-md p-2"
                      to="/registro-04"
                    >
                      Continue{" "}
                      <svg
                        className="inline-block fill-white h-7"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        stroke-linejoin="round"
                        stroke-miterlimit="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z" />
                      </svg>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
          <img
            className="object-cover object-center w-full h-full"
            src={PlantWorld}
            width="760"
            height="1024"
            alt="Onboarding"
          />
        </div>
      </div>
    </main>
  );
};

export default RegistroPaso2;
