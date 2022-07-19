import React from 'react';
import logoBlanco from '../../img/logoBlanco.png'
import './Inicio.css'

const Inicio = () => {
  return (
    <section id="inicio">
      <div className="inicioFondo">
        <div className="inicioLogo">
          <img src={logoBlanco} alt={"logo"}/>
        </div>
      </div>
    </section>
  )
}

export default Inicio