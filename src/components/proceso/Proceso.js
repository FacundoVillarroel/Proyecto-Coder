import React from 'react';

import "./proceso.css";
import ProcesoCard from './ProcesoCard';

import fase1 from "../../img/fase1.png";
import fase2 from "../../img/fase2.png";
import fase3 from "../../img/fase3.png";
import fase4 from "../../img/fase4.png";

const Proceso = () => {
  return (
    <section className='procesoContainer d-flex flex-column align-items-center' id="proceso">
      <h1 className='text-center'>PROCESO</h1>
      <div className='procesoCuadro'>
          <ProcesoCard numero={1} img={fase1} text ={"Tomamos la idea propuesta por el cliente, evaluamos las distintas posibilidades y diseñamos el primer boceto del sitio."} />
          <ProcesoCard numero={2} img={fase2} text ={"El cliente evalúa la estética y funcionalidad de la web para ajustar detalles y pasar a la fase final de desarrollo."} />
          <ProcesoCard numero={3} img={fase3} text ={"Teniendo en cuenta los principios propuestos por el cliente, se completa el proyecto y se obtiene el resultado deseado, un desarrollo cualitativo adaptable a todos los navegadores, en favor de la estética y usabilidad del sitio."} />
          <ProcesoCard numero={4} img={fase4} text ={"Con un servicio de hosting se coloca la web online en el dominio real de la empresa. Su empresa ya tiene una presencia online atractiva y eficiente."} />
      </div>
    </section>
  )
}

export default Proceso