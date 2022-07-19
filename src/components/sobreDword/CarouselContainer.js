import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

import quienesSomosImg from "../../img/quienesSomos.jpg";
import queHacemosImg from "../../img/queHacemos.jpg";
import porqueElegirnosImg from "../../img/porqueElegirnos.jpg";
import CarouselItem from './CarouselItem';

function CarouselContainer() {
  return (
    <div className='carouselContainer'>
      <Carousel controls={false} slide={true} interval={5000} >
        <Carousel.Item>
          <CarouselItem img={quienesSomosImg} titulo={"¿Quienes Somos?"} text={"Somos una empresa formada por diseñadores y programadores especializados en desarrollo web. Nuestro desafío es evolucionar día a día y estar al día con las últimas tendencias en usabilidad, diseño y tecnología. Para comprender el enfoque y la visión una empresa, se debe sumergir y comprender su mundo. Por eso, ofrecemos soluciones a la medida de cada organización, priorizando su imagen y visibilidad."}/>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem img={queHacemosImg} titulo={"¿Qué Hacemos?"} text ={"Desarrollamos sitios web optimizados para sus clientes y los principales motores de búsqueda (por ejemplo, Google). Realmente creemos que con la estrategia web correcta, una comunicación exitosa y un diseño creativo, su empresa puede ganar sacar un provecho de Internet muy superior de lo que nunca imaginó. Y queremos ayudarte a lograrlo."}/>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem img={porqueElegirnosImg} titulo={"¿Porqué Elegirnos?"} text ={"Sabemos que lo más importante es la satisfacción de nuestros clientes. Por eso nuestro compromiso es brindar un servicio que cumpla y supere sus expectativas. Nuestra estrategia de empresa la desarrollamos en función de las necesidades de nuestro cliente ya que lo que buscamos es el éxito de nuestro servicio y solo lo podemos lograr con clientes satisfechos."}/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselContainer;