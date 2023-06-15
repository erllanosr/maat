import React from "react";
import CumplirODS from "../../../resources/img/CumplirODS.png";
import HacerMatch from "../../../resources/img/HacerMatch.png";
import TeHacesUnico from "../../../resources/img/TeHacesUnico.png";

function ApartadoContent4() {
  return (
    <div className="mb-40 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">
      It has never been so quick and easy
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        <div className="text-center">
          <img
        className="object-contain w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
        src={HacerMatch}
        alt=""
      />
          <h6 className="text-xl font-bold mb-3">Do <span className="txtMarca">MAAT</span>ch</h6>
          <p className="text-gray-700">
          Create alliances with organizations so that your company's employees can attend events.
          </p>
        </div>

        <div className="text-center">
        <img
          className="object-contain w-full h-40 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src={CumplirODS}
          alt=""
        />
          <h6 className="text-xl font-bold mb-3">Meets the SDGs</h6>
          <p className="text-gray-700">
          Your company will comply with CSR and contribute to the fulfillment of the SDGs for a better world.
          </p>
        </div>

        <div className="text-center">
          <img
        className="object-contain w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
        src={TeHacesUnico}
        alt=""
      />
          <h6 className="text-xl font-bold mb-3">Be unique</h6>
          <p className="text-gray-700">
          Differentiate yourself from the rest by having a major positive impact on the planet. We'll reward you for it.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ApartadoContent4;
