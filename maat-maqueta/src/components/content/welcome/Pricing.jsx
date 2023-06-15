import React from 'react'

function Pricing() {
  return (


    <section>

      <div className="mb-40 mx-auto lg:ml-60 lg:mr-60">
        <h2 className="mb-12 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">
          Find the perfect plan
        </h2>
        <div className="grid grid-cols-12 gap-6">

          <div className="relative col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-500" aria-hidden="true"></div>
            <div className="px-5 pt-5 pb-6 border-b border-slate-200">
              <header className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full shrink-0 bg-gradient-to-tr from-gray-900 to-gray-600 mr-3">
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                  </svg>
                </div>
                <h3 className="text-lg text-slate-800 font-semibold">Entry Package</h3>
              </header>

              <div className="text-slate-800 font-bold mb-4">
                <span className="text-2xl">€</span><span className="text-3xl">40</span><span className="text-slate-500 font-medium text-sm">/month</span>
              </div>

              <button className="btnStartNow inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md hover:bg-green-200 focus:shadow-outline focus:outline-none w-full">Subscribe to plan</button>
            </div>
            <div className="px-5 pt-4 pb-5">
              <div className="text-xs text-slate-800 font-semibold uppercase mb-4">What does this package include?</div>

              <ul>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Available only if it is the first time you register.</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Duration: 1 month</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Number of users: 5</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Number of associations to match with: 2</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-500" aria-hidden="true"></div>
            <div className="px-5 pt-5 pb-6 border-b border-slate-200">
              <header className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full shrink-0 bg-gradient-to-tr from-gray-900 to-gray-600 mr-3">
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                  </svg>
                </div>
                <h3 className="text-lg text-slate-800 font-semibold">Basic Package</h3>
              </header>

              <div className="text-slate-800 font-bold mb-4">
                <span className="text-2xl">€</span><span className="text-3xl">75</span><span className="text-slate-500 font-medium text-sm">/month</span>
              </div>

              <button className="btnStartNow inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md hover:bg-green-200 focus:shadow-outline focus:outline-none w-full" disabled>

                <span>Subscribe to plan</span>
              </button>
            </div>
            <div className="px-5 pt-4 pb-5">
              <div className="text-xs text-slate-800 font-semibold uppercase mb-4">What does this package include?</div>

              <ul>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Duration: 1 month</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Number of users: 10</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Number of associations with which to collaborate: 2</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Place in our Ranking of companies</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-500" aria-hidden="true"></div>
            <div className="px-5 pt-5 pb-6 border-b border-slate-200">
              <header className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full shrink-0 bg-gradient-to-tr from-gray-900 to-gray-600 mr-3">
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                  </svg>
                </div>
                <h3 className="text-lg text-slate-800 font-semibold">Standard Package</h3>
              </header>

              <div className="text-slate-800 font-bold mb-4">
                <span className="text-2xl">€</span><span className="text-3xl">200</span><span className="text-slate-500 font-medium text-sm">/month</span>
              </div>

              <button className="btnStartNow inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md hover:bg-green-200 focus:shadow-outline focus:outline-none w-full">Subscribe to plan</button>
            </div>
            <div className="px-5 pt-4 pb-5">
              <div className="text-xs text-slate-800 font-semibold uppercase mb-4">What does this package include?</div>

              <ul>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Duration: 1 month</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Number of users: 20</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Number of associations with which to collaborate: 5</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Place in our Ranking of companies</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Publications that can be advertised: 1</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Ability to openly solicit for events</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-12 gap-6">
          <div className="relative col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-500" aria-hidden="true"></div>
            <div className="px-5 pt-5 pb-6 border-b border-slate-200">
              <header className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full shrink-0 bg-gradient-to-tr from-gray-900 to-gray-600 mr-3">
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                  </svg>
                </div>
                <h3 className="text-lg text-slate-800 font-semibold">Premium Package</h3>
              </header>

              <div className="text-slate-800 font-bold mb-4">
                <span className="text-2xl">€</span><span className="text-3xl">400</span><span className="text-slate-500 font-medium text-sm">/month</span>
              </div>
              <button className="btnStartNow inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md hover:bg-green-200 focus:shadow-outline focus:outline-none w-full">Subscribe to plan</button>
            </div>
            <div className="px-5 pt-4 pb-5">
              <div className="text-xs text-slate-800 font-semibold uppercase mb-4">What does this package include?</div>
              <ul>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Duration: 1 month</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Numero de usuarios: Ilimitados</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Number of associations with which to collaborate: 15</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Place in our Ranking of companies</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Publications that can be advertised: 3</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Ability to openly solicit for events</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Direct chat with associations</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative col-span-full xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-emerald-500" aria-hidden="true"></div>
            <div className="px-5 pt-5 pb-6 border-b border-slate-200">
              <header className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full shrink-0 bg-gradient-to-tr from-gray-900 to-gray-600 mr-3">
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                  </svg>
                </div>
                <h3 className="text-lg text-slate-800 font-semibold">Full Package</h3>
              </header>

              <div className="text-slate-800 font-bold mb-4">
                <span className="text-2xl">€</span><span className="text-3xl">600</span><span className="text-slate-500 font-medium text-sm">/month</span>
              </div>

              <button className="btnStartNow inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md hover:bg-green-200 focus:shadow-outline focus:outline-none w-full" disabled>

                <span>Subscribe to plan</span>
              </button>
            </div>
            <div className="px-5 pt-4 pb-5">
              <div className="text-xs text-slate-800 font-semibold uppercase mb-4">What does this package include?</div>

              <ul>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Duration: 2 month</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Numero de usuarios: Ilimitados</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Number of associations with which to collaborate: Ilimitados</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Place in our Ranking of companies</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Publications that can be advertised: Ilimitados</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Ability to openly solicit for events</div>
                </li>
                <li className="flex items-center py-1">
                  <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <div className="text-sm">Direct chat with associations</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing