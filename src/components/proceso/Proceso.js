import React from 'react';

import "./proceso.css";

import fase1 from "../../assets/fase1.png"
import fase2 from "../../assets/fase2.png"
import fase3 from "../../assets/fase3.png"
import fase4 from "../../assets/fase4.png"

const Proceso = () => {
  return (
    <div className='procesoContainer'>
      <div className='procesoCuadro'>
        <h1 className='mb-5'>Proceso</h1>
        
        <div className='procesoFlex'>
          <div className='procesoCard'>
            <div className='procesoImgContainer'>
              <img src={fase1} alt='Fase 1' className='procesoImg'/>
            </div>
            <div className='procesoText'>
              <p>
                Tomamos la idea propuesta por el cliente, evaluamos las distintas posibilidades y diseñamos el primer boceto del sitio.
              </p>
            </div>
          </div>

          <div className='procesoCard'>
            <div className='procesoImgContainer'>
              <img src={fase2} alt='Fase 2' className='procesoImg'/>
            </div>
            <div className='procesoText'>
              <p>
                El cliente evalúa la estética y funcionalidad de la web para ajustar detalles y pasar a la fase final de desarrollo.
              </p>
            </div>
          </div>

          <div className='procesoCard'>
            <div className='procesoImgContainer'>
              <img src={fase3} alt='Fase 3' className='procesoImg'/>
            </div>
            <div className='procesoText'>
              <p>
                Teniendo en cuenta los principios propuestos por el cliente, se completa el proyecto y se obtiene el resultado deseado, un desarrollo cualitativo adaptable a todos los navegadores, en favor de la estética y usabilidad del sitio.
              </p>
            </div>
          </div>

          <div className='procesoCard'>
            <div className='procesoImgContainer'>
              <img src={fase4} alt='Fase 4' className='procesoImg'/>
            </div>
            <div className='procesoText'>
              <p>
                Con un servicio de hosting se coloca la web online en el dominio real de la empresa. Su empresa ya tiene una presencia online atractiva y eficiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proceso