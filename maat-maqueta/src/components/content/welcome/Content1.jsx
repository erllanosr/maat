import React from 'react'
import BlackODS from '../../../resources/img/BlackODS.png'

function Content1() {
  return (
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 mt-20 mb-10">
    <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
      <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">

          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            What do we do?
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
          We are in charge of creating alliances between companies and non-profit organizations. Where companies can comply with the development of Corporate Social Responsibility (CSR) by participating in events that will be organized by non-profit organizations, which will meet the Sustainable Development Goals (SDGs).
          </p>
        </div>
      </div>
    </div>
    <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
    <img
      className="object-contain w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
      src={BlackODS}
      alt=""
    />
  </div>
  </div>

  )
}

export default Content1
