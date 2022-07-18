import React from 'react';
import logoBlanco from '../../img/logoBlanco.png'
import './Landing.css'

const Landing = () => {
  return (
    <div>
      <div class="indexFondo">
        <div class="indexBoxLogo">
          <img class="indexImg" src={logoBlanco} alt="Logo de Dword" />
        </div>
        <div class="indexBoxTexto">
          <h1 class="indexTextTitulo landingFuente">Dword</h1>
          <h3 class="indexTextSubtitulo">En Dword nos dedicamos al desarrollo web profesional.</h3>
          <p class="indexTextParrafo">
            Desarrollamos sitios web de alto impacto. Somos expertos en crear soluciones a medida y diseños personalizados para cada cliente. Tendrás un diseño web a la medida de tus necesidades y con una excelente atención personal!
          </p>
          <div class="indexBoxBotones">
            <a href="#inicio"><button class="landingButtonSubmit">Ingresar al Sitio</button></a>
            <a href="#contacto"><button class="landingButtonSubmit">Solicitar Presupuesto</button></a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Landing