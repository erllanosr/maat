import React from 'react'
import Nav from '../components/nav/Nav'
import ListaONG from '../components/content/ListaONG'
import Breadcrumbs from '../components/elements/Breadcrumbs'

const ListadoONG = () => {
  return (
    <>
      <Nav />
      <Breadcrumbs titulo={"List of Organizations"}/>
      <section>
        <div className="items-center px-8 py-12 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-4">
        <div className="items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12 lg:py-4">
          <div className="justify-center w-full text-center lg:p-10 max-auto">
            <div className="justify-center w-full mx-auto">
              <p className="mt-8 text-5xl font-medium tracking-tighter text-black">List of Organizations</p>
              <p className="max-w-xl mx-auto mt-4 text-lg tracking-tight text-gray-600">
                Here you can find the list of organizations that are part of our community.
              </p>
              <ListaONG></ListaONG>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default ListadoONG