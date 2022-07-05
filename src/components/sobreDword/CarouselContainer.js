import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

import quienesSomosImg from "../../assets/quienesSomos.png";
import queHacemosImg from "../../assets/queHacemos.png";
import porqueElegirnosImg from "../../assets/porqueElegirnos.png";

function CarouselContainer() {
  return (
    <div className='carouselContainer'>
      <Carousel controls={false} slide={true} interval={50000000000000000} >
        <Carousel.Item>
          <div className='itemCarouselContainer'>
            <div className='imgItemCarousel'>
              <img
                  className='imgCarousel'
                  src={quienesSomosImg}
                  alt="First slide"
              />
            </div>
            <div className='textoItemCarousel'>
              <h1 className='mb-4 pb-3'> ¿Quienes Somos?</h1>
              <p>
                  Somos una empresa formada por diseñadores y programadores especializados en desarrollo web. 
                  Nuestro desafío es evolucionar día a día y estar al día con las últimas tendencias en usabilidad, diseño y tecnología. Para comprender el enfoque y la visión una empresa, se debe sumergir y comprender su mundo. Por eso, ofrecemos soluciones a la medida de cada organización, priorizando su imagen y visibilidad.
              </p>
              <div className='lineaDecoracion'></div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='itemCarouselContainer'>
            <div className='imgItemCarousel'>
              <img
                  className='imgCarousel'
                src={queHacemosImg}
                alt="Second slide"
              />
            </div>
            <div className='textoItemCarousel'>
              <h1>¿Qué Hacemos?</h1>
              <p>
                Desarrollamos sitios web optimizados para sus clientes y los principales motores de búsqueda (por ejemplo, Google).
                Realmente creemos que con la estrategia web correcta, una comunicación exitosa y un diseño creativo, su empresa puede ganar sacar un provecho de Internet muy superior de lo que nunca imaginó. Y queremos ayudarte a lograrlo.
              </p>
              <div className='lineaDecoracion'></div>
            </div>
          </div>
            
        </Carousel.Item>
        <Carousel.Item>
          <div className='itemCarouselContainer'>
            <div className='imgItemCarousel'>
              <img
                  className='imgCarousel'
                src={porqueElegirnosImg}
                alt="Third slide"
              />
            </div>
            <div className='textoItemCarousel'>
              <h1>¿Porqué Elegirnos?</h1>
              <p>
                Sabemos que lo más importante es la satisfacción de nuestros clientes. Por eso nuestro compromiso es brindar un servicio que cumpla y supere sus expectativas. Nuestra estrategia de empresa la desarrollamos en función de las necesidades de nuestro cliente ya que lo que buscamos es el éxito de nuestro servicio y solo lo podemos lograr con clientes satisfechos.
              </p>
              <div className='lineaDecoracion'></div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselContainer;