import React from 'react';
import logoBlanco from '../../img/logoBlanco.png'
import './Landing.css'

const Landing = () => {
  return (
    <div class="landing">


      <div class="container">
        <div class="row">
          <div class="col">
            <div class="landingBoxLogo">
              <img class="landingImg" src={logoBlanco} alt="logo blanco" />
            </div>

          </div>
          <div class="col landingBoxTexto">
            <div class="landingBoxTextoPadding">
              <h1 class="landingBoxTextoTitulo dwordFont">Dword </h1>
              <h3 class="landingBoxTextoSubtitulo">DESARROLLO WEB PROFESIONAL</h3>
              <p class="landingBoxTextoParrafo"> Desarrollamos sitios web de alto impacto. Somos expertos en crear soluciones a medida y diseños personalizados para cada cliente. Tendrás un diseño web a la medida de tus necesidades y con una excelente atención personal!</p>
              <div class="landingBoxTextoBotones">
                <button type='submit' class="landingButtonSubmit">Ingresar al sitio</button>
                <button type='submit' class="landingButtonSubmit">Solicitar presupuesto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing