import React from 'react';

import Navbar from "./Navbar";
import SobreDword from "./sobreDword/SobreDword";
import Proceso from "./proceso/Proceso";
import Servicios from "./servicios/Servicios";
import Formulario from "./formulario/Formulario";
import Footer from './Footer';

const Sitio = () => {
  return (
    <div>
      <Navbar/>
      <SobreDword/>
      <Proceso/>
      <Servicios/>
      <Formulario/>
      <Footer/>
    </div>
  )
}

export default Sitio