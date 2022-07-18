import React from 'react';
import desarrolloWeb from '../../img/desarrolloWeb.jpg'
import hosting from '../../img/hosting.jpg'
import disenoWeb from '../../img/disenoWeb.jpg'
import './Servicios.css'

const Servicios = () => {
    return (
        <div id="servicios"> 
        <div className="serviciosPadre">
        <div className="serviciosTituloMovile">SERVICIOS
            <hr className="serviciosLineaMovile"/>
        </div>
        <div className="serviciosCarrousel serviciosCardsMovile">

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner serviciosCardSombra">
                    <div className="carousel-item active">

                        <div className="serviciosCard">
                            <div className="serviciosCardImg">
                                <img className="serviciosImg" src={disenoWeb} alt="iamgen diseño"/>
                            </div>
                            <div className="serviciosCardBoxTexto">
                                <h1 className="serviciosCardTitulo">Diseño</h1>
                                <p className="serviciosCardParrafo">Esbozo de una pagina web teniendo en cuenta la idea del
                                    cliente.</p>
                            </div>
                            <div className="serviciosCardBoxBtn">
                                <a  href="#contacto"><button className="serviciosCardBtn">Consultar</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">

                        <div className="serviciosCard">
                            <div className="serviciosCardImg">
                                <img className="serviciosImg" src={desarrolloWeb} alt="imagen desarrollo web"/>
                            </div>
                            <div className="serviciosCardBoxTexto">
                                <h1 className="serviciosCardTitulo">Desarrollo web</h1>
                                <p className="serviciosCardParrafo">
                                    Programación y codificación de una pagina web en base al diseño previo.</p>
                            </div>
                            <div className="serviciosCardBoxBtn">
                                <button className="serviciosCardBtn">Consultar</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">

                        <div className="serviciosCard">
                            <div className="serviciosCardImg">
                                <img className="serviciosImg" src={hosting} alt="imagen Hosting"/>
                            </div>
                            <div className="serviciosCardBoxTexto">
                                <h1 className="serviciosCardTitulo">Hosting</h1>
                                <p className="serviciosCardParrafo">
                                    Puesta online de una pagina web.</p>
                            </div>
                            <div className="serviciosCardBoxBtn">

                                <button className="serviciosCardBtn">Consultar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="serviciosTituloTablet">
            <div className="serviciosLineaTablet"></div>
            <h1>SERVICIOS</h1>
            <div className="serviciosLineaTablet"></div>

        </div>

        <div className="serviciosCardsTablet">
            {/* <!-- Card Diseño >= Tablet --> */}

            <div className="serviciosCard">
                <div className="serviciosCardImg">
                    <img className="serviciosImg" src={disenoWeb} alt="iamgen diseño web"/>
                </div>
                <div className="serviciosCardBoxTexto">
                    <h1 className="serviciosCardTitulo">Diseño</h1>
                    <p className="serviciosCardParrafo">Esbozo de una pagina web teniendo en cuenta la idea del
                        cliente.</p>
                </div>
                <div className="serviciosCardBoxBtn">
                    <button className="serviciosCardBtn">Consultar</button>
                </div>
            </div>

            {/* <!-- Card Desarrollo Web >= Tablet --> */}

            <div className="serviciosCard">
                <div className="serviciosCardImg">
                    <img className="serviciosImg" src={desarrolloWeb} alt="imagen desarrollo web"/>
                </div>
                <div className="serviciosCardBoxTexto">
                    <h1 className="serviciosCardTitulo">Desarrollo web</h1>
                    <p className="serviciosCardParrafo">
                        Programación y codificación de una pagina web en base al diseño previo.</p>
                </div>
                <div className="serviciosCardBoxBtn">
                    <button className="serviciosCardBtn">Consultar</button>
                </div>
            </div>

            {/* <!-- Card Hosting >= Tablet --> */}

            <div className="serviciosCard">
                <div className="serviciosCardImg">
                    <img className="serviciosImg" src={hosting} alt="iamgen hosting"/>
                </div>
                <div className="serviciosCardBoxTexto">
                    <h1 className="serviciosCardTitulo">Hosting</h1>
                    <p className="serviciosCardParrafo">
                        Puesta online de una pagina web.</p>
                </div>
                <div className="serviciosCardBoxBtn">

                    <button className="serviciosCardBtn">Consultar</button>
                </div>
            </div>

        </div>
    </div>
    <div className="serviciosLienaBlanca"></div>
    <div className="serviciosLienaNegra"></div>
    <div className="serviciosFin"></div>
    </div>
    )
}

export default Servicios