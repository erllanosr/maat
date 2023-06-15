import React from 'react'
import Nav from '../components/nav/Nav'
import logo from "../resources/logo-maat.svg";
import Footer from '../components/footer/Footer';
import Login from '../components/login/Login'

function Inicio_sesion() {
  return (
    <>
    <Nav></Nav>
    <Login></Login>
    <Footer></Footer>
    </>
  );
}

export default Inicio_sesion