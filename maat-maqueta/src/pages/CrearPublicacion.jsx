import React, { useState } from 'react';
import Nav from "../components/nav/Nav";
import Footer from '../components/footer/Footer'
import Breadcrumbs from '../components/elements/Breadcrumbs';

function CrearPublicacion() {
  const [formValues, setFormValues] = useState({
    etiqueta: '',
    localizacion: '',
    descripcion: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Array de provincias de España
  const provincias = [
    "Álava",
    "Albacete",
    "Alicante",
    "Almería",
    "Asturias",
    "Ávila",
    "Badajoz",
    "Barcelona",
    "Burgos",
    "Cáceres",
    "Cádiz",
    "Cantabria",
    "Castellón",
    "Ciudad Real",
    "Córdoba",
    "Cuenca",
    "Gerona",
    "Granada",
    "Guadalajara",
    "Guipúzcoa",
    "Huelva",
    "Huesca",
    "Islas Baleares",
    "Jaén",
    "La Coruña",
    "La Rioja",
    "Las Palmas",
    "León",
    "Lérida",
    "Lugo",
    "Madrid",
    "Málaga",
    "Murcia",
    "Navarra",
    "Orense",
    "Palencia",
    "Pontevedra",
    "Salamanca",
    "Santa Cruz de Tenerife",
    "Segovia",
    "Sevilla",
    "Soria",
    "Tarragona",
    "Teruel",
    "Toledo",
    "Valencia",
    "Valladolid",
    "Vizcaya",
    "Zamora",
    "Zaragoza"
  ];

  return (
    <div>
      <Nav />
      <Breadcrumbs titulo={"Create a Post"} />
      <div className="section-event mb-20">
        <div className="ods mt-5">
          <div className="max-w-2xl ml-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Publish what you want
            </h2>
            <p className="mt-2 text-gray-600">
              Fill in the fields to publish something related to an event.
            </p>
          </div>
          <form action="#" method="POST" className="mt-4 max-w-2xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
              <div className="sm:col-span-3">
                <label
                  htmlFor="etiqueta"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Tell us to which event your post is related
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="etiqueta"
                    id="etiqueta"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formValues.etiqueta}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="localizacion"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Select the location
                </label>
                <div className="mt-2.5">
                  <select
                    name="localizacion"
                    id="localizacion"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formValues.localizacion}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a province</option>
                    {provincias.map((provincia) => (
                      <option key={provincia} value={provincia}>
                        {provincia}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Attach the files you want
                </label>
                <div className="mt-2.5">
                  <div className="relative">
                    <input
                      type="file"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <button className="flex items-center w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                      <p className="mr-2">Select a file</p>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="descripcion"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2.5">
                  <textarea
                    type="text"
                    name="descripcion"
                    id="descripcion"
                    autoComplete="text"
                    placeholder="Add a description..."
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formValues.descripcion}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btnCrearEvento block rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Publish now
              </button>
            </div>
          </form>
        </div>

        <div class="formCrearEvento mx-5 my-3 mt-10 mr-20 p-4 border-green-100 border bg-green-50 rounded">
          {/* Mostrar los valores en tiempo real */}
          <div class="flex justify-between">
            <p class="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6  inline-block mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>

              {formValues.etiqueta}
            </p>

            <p class="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6 inline-block mr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              {formValues.localizacion}
            </p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-20 h-20 mx-auto mt-40">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
          </svg>

          <p className="mb-2 mt-20"> {formValues.descripcion}</p>
        </div>
      </div>


      <Footer></Footer>
    </div>
  );
}

export default CrearPublicacion;