import React from 'react';
import logoBlanco from '../../img/logoBlanco.png'
import './Inicio.css'

const Inicio = () => {
  return (
    <div id="inicio">
      <div className="inicioFondo">
        <div className="inicioLogo">
          <img src={logoBlanco} alt={"logo"}/>
        </div>
      </div>

    </div>
  )
}

export default Inicio