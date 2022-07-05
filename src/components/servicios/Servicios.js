import React from 'react';
import desarrolloWeb from '../../img/desarrolloWeb.jpg'
import hosting from '../../img/hosting.jpg'
import disenoWeb from '../..img/disenoWeb.jpg'
import './Servicios.css'

const Servicios = () => {
    return (
        <div class="servicios">
            <div class="serviciosContainer">
                <h2 class="serviciosTitle">Servicios</h2>
            </div>
            <div class="serviciosLine"><hr></hr>
            </div>
            <div class="container cardsContainer">
                <div class="row">
                    <div class="col marginCard">
                        <div class="card sizeCard backColorCard" >
                            <img src={desarrolloWeb} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Diseño Web</h5>
                                <p class="card-text">Esbozo de una página web teniendo en cuenta la idea del cliente.</p>
                                <a href="/" class="btn btn-primary backColorCardBtn">Consultar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col marginCard">
                        <div class="card sizeCard backColorCard" >
                            <img src={disenoWeb} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Desarrollo Web</h5>
                                <p class="card-text">Programación y codificación de una página web en base a un diseño previo.</p>
                                <a href="/" class="btn btn-primary backColorCardBtn">Consultar</a>
                            </div>
                        </div>
                    </div>
                    <div class="col marginCard">
                        <div class="card sizeCard backColorCard" >
                            <img src={hosting} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Hosting</h5>
                                <p class="card-text">Puesta online de una página web.</p>
                                <a href="/" class="btn btn-primary backColorCardBtn">Consultar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="serviciosBottom">
            </div> 
        </div>

    )
}

export default Servicios