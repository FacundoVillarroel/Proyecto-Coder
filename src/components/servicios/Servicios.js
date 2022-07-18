import React from 'react';
import desarrolloWeb from '../../img/desarrolloWeb.jpg'
import hosting from '../../img/hosting.jpg'
import disenoWeb from '../../img/disenoWeb.jpg'
import './Servicios.css'

const Servicios = () => {
    return (
        <div id="servicios"> 
        <div class="serviciosPadre">
        <div class="serviciosTituloMovile">SERVICIOS
            <hr class="serviciosLineaMovile"/>
        </div>
        <div class="serviciosCarrousel serviciosCardsMovile">

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner serviciosCardSombra">
                    <div class="carousel-item active">

                        <div class="serviciosCard">
                            <div class="serviciosCardImg">
                                <img class="serviciosImg" src={disenoWeb} alt="iamgen diseño"/>
                            </div>
                            <div class="serviciosCardBoxTexto">
                                <h1 class="serviciosCardTitulo">Diseño</h1>
                                <p class="serviciosCardParrafo">Esbozo de una pagina web teniendo en cuenta la idea del
                                    cliente.</p>
                            </div>
                            <div class="serviciosCardBoxBtn">
                                <a  href="#contacto"><button class="serviciosCardBtn">Consultar</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">

                        <div class="serviciosCard">
                            <div class="serviciosCardImg">
                                <img class="serviciosImg" src={desarrolloWeb} alt="imagen desarrollo web"/>
                            </div>
                            <div class="serviciosCardBoxTexto">
                                <h1 class="serviciosCardTitulo">Desarrollo web</h1>
                                <p class="serviciosCardParrafo">
                                    Programación y codificación de una pagina web en base al diseño previo.</p>
                            </div>
                            <div class="serviciosCardBoxBtn">
                                <button class="serviciosCardBtn">Consultar</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">

                        <div class="serviciosCard">
                            <div class="serviciosCardImg">
                                <img class="serviciosImg" src={hosting} alt="imagen Hosting"/>
                            </div>
                            <div class="serviciosCardBoxTexto">
                                <h1 class="serviciosCardTitulo">Hosting</h1>
                                <p class="serviciosCardParrafo">
                                    Puesta online de una pagina web.</p>
                            </div>
                            <div class="serviciosCardBoxBtn">

                                <button class="serviciosCardBtn">Consultar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="serviciosTituloTablet">
            <div class="serviciosLineaTablet"></div>
            <h1>SERVICIOS</h1>
            <div class="serviciosLineaTablet"></div>

        </div>

        <div class="serviciosCardsTablet">
            {/* <!-- Card Diseño >= Tablet --> */}

            <div class="serviciosCard">
                <div class="serviciosCardImg">
                    <img class="serviciosImg" src={disenoWeb} alt="iamgen diseño web"/>
                </div>
                <div class="serviciosCardBoxTexto">
                    <h1 class="serviciosCardTitulo">Diseño</h1>
                    <p class="serviciosCardParrafo">Esbozo de una pagina web teniendo en cuenta la idea del
                        cliente.</p>
                </div>
                <div class="serviciosCardBoxBtn">
                    <button class="serviciosCardBtn">Consultar</button>
                </div>
            </div>

            {/* <!-- Card Desarrollo Web >= Tablet --> */}

            <div class="serviciosCard">
                <div class="serviciosCardImg">
                    <img class="serviciosImg" src={desarrolloWeb} alt="imagen desarrollo web"/>
                </div>
                <div class="serviciosCardBoxTexto">
                    <h1 class="serviciosCardTitulo">Desarrollo web</h1>
                    <p class="serviciosCardParrafo">
                        Programación y codificación de una pagina web en base al diseño previo.</p>
                </div>
                <div class="serviciosCardBoxBtn">
                    <button class="serviciosCardBtn">Consultar</button>
                </div>
            </div>

            {/* <!-- Card Hosting >= Tablet --> */}

            <div class="serviciosCard">
                <div class="serviciosCardImg">
                    <img class="serviciosImg" src={hosting} alt="iamgen hosting"/>
                </div>
                <div class="serviciosCardBoxTexto">
                    <h1 class="serviciosCardTitulo">Hosting</h1>
                    <p class="serviciosCardParrafo">
                        Puesta online de una pagina web.</p>
                </div>
                <div class="serviciosCardBoxBtn">

                    <button class="serviciosCardBtn">Consultar</button>
                </div>
            </div>

        </div>
    </div>
    <div class="serviciosLienaBlanca"></div>
    <div class="serviciosLienaNegra"></div>
    <div class="serviciosFin"></div>
    </div>
    )
}

export default Servicios