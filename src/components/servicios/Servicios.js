import React from 'react';
import desarrolloWeb from '../../img/desarrolloWeb.jpg'
import hosting from '../../img/hosting.jpg'
import disenoWeb from '../../img/disenoWeb.jpg'
import './Servicios.css'

const Servicios = () => {
    return (
        <div>
            <div className="servicios">
                <div className='dwordTituloContainer titleMargin'>
                    <div className='lineaDecorativaTitulo hide'></div>
                    <h1 className='dwordTitulo'>SERVICIOS</h1>
                    <div className='lineaDecorativaTitulo'></div>
                </div>

                <div className="container cardsContainer">
                    <div className="row cardsContainerCenter">
                        <div className="col marginCard">
                            <div className="card sizeCard backColorCard" >
                                <img src={disenoWeb} className="card-img-top serviciosImg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Diseño Web</h5>
                                    <p className="card-text">Esbozo de una página web teniendo en cuenta la idea del cliente.</p>
                                    <a href="/" className="btn btn-primary serviciosButtonSubmit">Consultar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col marginCard">
                            <div className="card sizeCard backColorCard" >
                                <img src={desarrolloWeb} className="card-img-top serviciosImg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Desarrollo Web</h5>
                                    <p className="card-text">Programación y codificación de una página web en base al diseño.</p>
                                    <a href="/" className="btn btn-primary serviciosButtonSubmit">Consultar</a>
                                </div>
                            </div>
                        </div>
                        <div className="col marginCard">
                            <div className="card sizeCard backColorCard" >
                                <img src={hosting} className="card-img-top serviciosImg" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Hosting</h5>
                                    <p className="card-text">Puesta online de una página web. Alojamiento y Dominio.</p>
                                    <a href="/" className="btn btn-primary serviciosButtonSubmit">Consultar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="serviciosBottomLineWhite"></div>
            <div className="serviciosBottomLineBlack"></div>
            <div className="serviciosBottomLine"></div>
        </div>
    )
}

export default Servicios