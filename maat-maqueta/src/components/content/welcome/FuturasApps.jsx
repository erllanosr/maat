import React from 'react'

function FuturasApps() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
      <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Aún estamos arrancando.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
              Estamos comprometidos en ofrecerte la mejor experiencia posible en nuestra plataforma. Sabemos lo importante que es para ti tener acceso a tus herramientas de trabajo desde cualquier lugar y en cualquier momento. Es por eso que estamos trabajando arduamente para lanzar nuestra aplicación móvil lo antes posible. Con nuestra aplicación, podrás acceder a nuestra plataforma desde tu dispositivo móvil con facilidad y comodidad, permitiéndote trabajar de manera eficiente incluso mientras estás en movimiento. Nos tomamos muy en serio tu satisfacción como usuario y estamos trabajando constantemente para mejorar tu experiencia en nuestra plataforma. Mantente atento a nuestras actualizaciones y lanzamientos, ¡y prepárate para llevar tu trabajo a cualquier lugar con nuestra próxima aplicación móvil!
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
            <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
          </a>
          <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
            <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center lg:w-1/2">
        <div className="w-2/5">
          <img className="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
        </div>
        <div className="w-5/12 -ml-16 lg:-ml-32">
          <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default FuturasApps

