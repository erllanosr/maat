import React from 'react'
import Bienvenido from '../components/content/welcome/Bienvenido'
import ApartadoContent3 from '../components/content/welcome/ApartadoContent3'
import Content1 from '../components/content/welcome/Content1'
import ApartadoContent4 from '../components/content/welcome/ApartadoContent4'
import Pricing from '../components/content/welcome/Pricing'
import Footer from '../components/footer/Footer'
import Nav from '../components/nav/Nav'
function Inicio() {
  return (
    <div>
        <Nav></Nav>
        <Bienvenido></Bienvenido>
        <ApartadoContent3></ApartadoContent3>
        <Content1></Content1>
        <ApartadoContent4></ApartadoContent4>
        <Pricing></Pricing>
        <Footer></Footer>
    </div>
  )
}

export default Inicio