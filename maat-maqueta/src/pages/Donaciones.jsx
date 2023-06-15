import React from "react";
import Tabla_Donaciones from "../components/content/Tabla_Donaciones";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
function Donaciones() {
  return (
    <div>
      <Nav/>
      <Tabla_Donaciones />
      <Footer />
    </div>
  );
}

export default Donaciones;
