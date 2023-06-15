import React from "react";
import Nav from "../components/nav/Nav";
import Breadcrumbs from "../components/elements/Breadcrumbs";
import Footer from "../components/footer/Footer";
import GreenpeaceLogo from "../resources/img/logo_ong/greenpeace_logo.png";
import CruzRojaLogo from "../resources/img/logo_ong/cruzroja_logo.png";
import SaveChildrenLogo from "../resources/img/logo_ong/savechildren_logo.jpg";
import { Link } from "react-router-dom";

const SolicitarEvento = () => {
  const ongs = [
    {
      id: 1,
      logo: [GreenpeaceLogo],
      nombre: "Greenpeace",
      pagina: "es.greenpeace.org/es/",
    },
    {
      id: 2,
      logo: [CruzRojaLogo],
      nombre: "Cruz Roja",
      pagina: "https://www2.cruzroja.es/sobre-cruz-roja",
    },
    {
      id: 3,
      logo: [SaveChildrenLogo],
      nombre: "Save the Children",
      pagina: "savethechildren.es/",
    },
  ];
  return (
    <>
      <Nav></Nav>
      <Breadcrumbs titulo={"Request Event"} />
      {/* LISTA ONG */}
      <section>
        <div className="px-4 justify-center w-full text-center">
          <div className="max-w-md mx-auto">
            <h1 className="mt-8 py-4 text-4xl font-medium tracking-tighter text-black">Request an event by choosing an organization</h1>
            {/* Form */}
            <form className="sm:flex space-y-3 sm:space-y-0 sm:space-x-4 mb-8 justify-center w-full text-center">
              <div className="sm:flex space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
                {ongs.map((ong) => (
                  <label key={ong.id} className="flex-1 relative block cursor-pointer">
                    <input type="radio" name="radio-buttons" className="peer sr-only" defaultChecked />
                    {/* Listado de ONG */}
                    <div className="h-full text-center bg-white px-4 py-4 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out items-center">
                      <img src={ong.logo} alt="Logo ONG" className="w-auto place-items-center" />
                      <div className="font-medium text-slate-800 mb-1">{ong.nombre}</div>
                      <div className="text-sm">
                        <a href={ong.pagina} target="_blank" rel="noopener noreferrer"></a>
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 border-2 border-transparent peer-checked:border-[var(--primaryColor)] rounded pointer-events-none"
                      aria-hidden="true"
                    ></div>
                  </label>
                ))}
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
        <div className="justify-center w-full text-center lg:p-10 max-auto">
          <div className="justify-center w-full mx-auto">
            <p className="text-4xl font-medium tracking-tighter text-black">
              This company has these events available
            </p>
            <h5 className="py-5">Or, if you prefer, you can request a customized event.</h5>
          </div>
        </div>
        <form>
          <div className="sm:flex space-y-3 sm:space-y-0 sm:space-x-4 mb-8">
            <label className="flex-1 relative block cursor-pointer">
              <input type="radio" name="radio-buttons" className="peer sr-only" />
              <div className="h-full text-center bg-white px-4 py-6 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                <div className="font-medium text-slate-800 mb-1">Food collection</div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none" aria-hidden="true"></div>
            </label>
            <label className="flex-1 relative block cursor-pointer">
              <input type="radio" name="radio-buttons" className="peer sr-only" />
              <div className="h-full text-center bg-white px-4 py-6 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                <div className="font-medium text-slate-800 mb-1">Reforestation</div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none" aria-hidden="true"></div>
            </label>
            <label className="flex-1 relative block cursor-pointer">
              <input type="radio" name="radio-buttons" className="peer sr-only" />
              <div className="h-full text-center bg-white px-4 py-6 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                <div className="font-medium text-slate-800 mb-1">Waste management</div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none" aria-hidden="true"></div>
            </label>
            <label className="flex-1 relative block cursor-pointer">
              <input type="radio" name="radio-buttons" className="peer sr-only" />
              <div className="h-full text-center bg-white px-4 py-6 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                <div className="font-medium text-slate-800 mb-1">Customized</div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none" aria-hidden="true"></div>
            </label>
          </div>
        </form>
      </section>
      {/* Formulario */}
      <section className="items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
        <div className="justify-center w-full text-center lg:p-10 max-auto">
          <div className="justify-center w-full mx-auto">
            <p className="mt-8 text-4xl font-medium tracking-tighter text-black">
              Fill out the form below to contact the organization.
            </p>
          </div>
        </div>
        <form className="mx-20">
          <div className="space-y-4 mb-8">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="company-name">
                Name of entity<span className="text-rose-500">*</span>
              </label>
              <input
                id="company-name"
                className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-green-950 focus:border-green-950"
                type="text"
              />
            </div>
            {/* City and Postal Code */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="city">
                Responsible Person<span className="text-rose-500">*</span>
                </label>
                <input
                  id="city"
                  className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-green-950 focus:border-green-950"
                  type="text"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1" htmlFor="postal-code">
                  Telephone number<span className="text-rose-500">*</span>
                </label>
                <input
                  id="postal-code"
                  className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-green-950 focus:border-green-950"
                  type="text"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1" htmlFor="numero_participantes">Number of participants<span className="text-rose-500">*</span>
              </label>
              <select id="country" className="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option>Select an option</option>
                <option>&#62; 5</option>
                <option>5-10</option>
                <option>10-30</option>
                <option>30-50</option>
                <option>50-100</option>
                <option>100-200</option>
                <option>200-500</option>
                <option>500-1000</option>

              </select>
            </div>
            {/* Textarea */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="street">
                Describe important points about the event you want to hold{" "}
                <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="street"
                className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-green-950 focus:border-green-950"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Link
              className="btn bg-[var(--primaryColor)] hover:bg-[var(--darkGreen)] text-white ml-auto rounded-md p-2"
              to="/registro-03"
            >
              Send{" "}
            </Link>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default SolicitarEvento;
