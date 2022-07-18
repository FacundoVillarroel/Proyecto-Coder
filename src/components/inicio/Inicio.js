import React from 'react';
import logoBlanco from '../../img/logoBlanco.png'
import './Inicio.css'

const Inicio = () => {
  return (
    <div id="inicio">
      <div class="inicioFondo">
        <div class="inicioLogo">
          <img src={logoBlanco} />
        </div>
      </div>
    </div>
  )
}

export default Inicio