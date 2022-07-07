import React from 'react'

const CarouselItem = ({img, titulo, text}) => {

  const width=  window.screen.width;
  let shortText = ""
  for (let i = 0; i < 210; i++) {
    shortText = shortText + text[i];
  }
  shortText = shortText +"..";
  console.log(width);

  return (
    <div className='d-flex align-items-center row itemCarouselContainer'>
            <div className='imgItemCarousel col-12 col-md-6'>
              <img
                  className='imgCarousel'
                  src={img}
                  alt="slide"
              />
            </div>
            <div className='textoItemCarousel col-12 col-md-6'>
              <h1 className='mb-4 pb-3 tituloCarousel'> {titulo}</h1>
              <p>
                {width <= 768 ? <>{shortText}</> : <>{shortText}</>}
              </p>
              <div className='lineaDecoracion'></div>
            </div>
          </div>
  )
}

export default CarouselItem