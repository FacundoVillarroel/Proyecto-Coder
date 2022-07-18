import React from 'react';
import logoBlanco from '../../img/logoBlanco.png'
import './Landing.css'

const Landing = () => {
  return (
    <div>
      <div className="indexFondo">
        <div className="indexBoxLogo">
          <img className="indexImg" src={logoBlanco} alt="Logo de Dword" />
        </div>
        <div className="indexBoxTexto">
          <h1 className="indexTextTitulo landingFuente">Dword</h1>
          <h3 className="indexTextSubtitulo">En Dword nos dedicamos al desarrollo web profesional.</h3>
          <p className="indexTextParrafo">
            Desarrollamos sitios web de alto impacto. Somos expertos en crear soluciones a medida y diseños personalizados para cada cliente. Tendrás un diseño web a la medida de tus necesidades y con una excelente atención personal!
          </p>
          <div className="indexBoxBotones">
            <a href="#inicio"><button className="landingButtonSubmit">Ingresar al Sitio</button></a>
            <a href="#contacto"><button className="landingButtonSubmit">Solicitar Presupuesto</button></a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Landing