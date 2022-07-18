import React from 'react';
import logoBlanco from '../../img/logoBlanco.png'
import './Landing.css'

const Landing = () => {
  return (
    <div className="landing">


      <div className="container">
        <div className="row">
          <div className="col">
            <div className="landingBoxLogo">
              <img className="landingImg" src={logoBlanco} alt="logo blanco" />
            </div>

          </div>
          <div className="col landingBoxTexto">
            <div className="landingBoxTextoPadding">
              <h1 className="landingBoxTextoTitulo dwordFont">Dword </h1>
              <h3 className="landingBoxTextoSubtitulo">DESARROLLO WEB PROFESIONAL</h3>
              <p className="landingBoxTextoParrafo"> Desarrollamos sitios web de alto impacto. Somos expertos en crear soluciones a medida y diseños personalizados para cada cliente. Tendrás un diseño web a la medida de tus necesidades y con una excelente atención personal!</p>
              <div className="landingBoxTextoBotones">
                <button type='submit' className="landingButtonSubmit">Ingresar al sitio</button>
                <button type='submit' className="landingButtonSubmit">Solicitar presupuesto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing