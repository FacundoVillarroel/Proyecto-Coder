import React from 'react';
import desarrolloWeb from '../../img/desarrolloWeb.jpg'
import hosting from '../../img/hosting.jpg'
import disenoWeb from '../../img/disenoWeb.jpg'
import './Servicios.css'

const Servicios = () => {
    return (
        <div>
            <div class="servicios">
                <div className='dwordTituloContainer titleMargin'>
                    <div className='lineaDecorativaTitulo hide'></div>
                    <h1 className='dwordTitulo'>SERVICIOS</h1>
                    <div className='lineaDecorativaTitulo'></div>
                </div>

                <div class="container cardsContainer">
                    <div class="row cardsContainerCenter">
                        <div class="col marginCard">
                            <div class="card sizeCard backColorCard" >
                                <img src={disenoWeb} class="card-img-top serviciosImg" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Diseño Web</h5>
                                    <p class="card-text">Esbozo de una página web teniendo en cuenta la idea del cliente.</p>
                                    <a href="/" class="btn btn-primary serviciosButtonSubmit">Consultar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col marginCard">
                            <div class="card sizeCard backColorCard" >
                                <img src={desarrolloWeb} class="card-img-top serviciosImg" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Desarrollo Web</h5>
                                    <p class="card-text">Programación y codificación de una página web en base al diseño.</p>
                                    <a href="/" class="btn btn-primary serviciosButtonSubmit">Consultar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col marginCard">
                            <div class="card sizeCard backColorCard" >
                                <img src={hosting} class="card-img-top serviciosImg" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Hosting</h5>
                                    <p class="card-text">Puesta online de una página web. Alojamiento y Dominio.</p>
                                    <a href="/" class="btn btn-primary serviciosButtonSubmit">Consultar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="serviciosBottomLineWhite"></div>
            <div class="serviciosBottomLineBlack"></div>
            <div class="serviciosBottomLine"></div>
        </div>
    )
}

export default Servicios