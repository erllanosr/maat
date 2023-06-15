import React from 'react'
import Nav from '../components/nav/Nav'
import Evento from '../components/Evento/Evento'
import Footer from '../components/footer/Footer'
import Breadcrumbs from '../components/elements/Breadcrumbs'


function Eventos() {
  return (
    <>
    <Nav></Nav>
    <Breadcrumbs titulo={"Events"}/>
    <Evento></Evento>
    <Footer></Footer>
    </>
  )
}

export default Eventos