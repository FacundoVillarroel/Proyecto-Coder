import React from 'react';

import CarouselContainer from "./CarouselContainer";
import "./sobreDword.css"

const SobreDword = () => {
  return (
    <section className='sobreDwordContainer d-flex flex-column' id="sobreDword">
      <div className='dwordTituloContainer'>
        <div className='lineaDecorativaTitulo hide'></div>
        <h1 className='dwordTitulo'>
          SOBRE <span className='dwordFont'>DWORD</span>
        </h1>
        <div className='lineaDecorativaTitulo'></div>
      </div>
      <CarouselContainer/>
    </section>
  )
}

export default SobreDword