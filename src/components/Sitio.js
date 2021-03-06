import React from 'react';
import NavbarContainer from "./navbar/NavbarContainer";
import Inicio from "./inicio/Inicio";
import SobreDword from "./sobreDword/SobreDword";
import Proceso from "./proceso/Proceso";
import Servicios from "./servicios/Servicios";
import Formulario from "./formulario/Formulario";
import Footer from './footer/Footer';

const Sitio = () => {
  return (
    <div>
      <NavbarContainer/>
      <Inicio/>
      <SobreDword/>
      <Proceso/>
      <Servicios/>
      <Formulario/>
      <Footer/>
    </div>
  )
}

export default Sitio