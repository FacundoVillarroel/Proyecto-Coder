import React from 'react';

import CarouselContainer from "./CarouselContainer";
import "./sobreDword.css"

const SobreDword = () => {
  return (
    <div className='sobreDwordContainer d-flex flex-column'>
      <div className='dwordTituloContainer'>
        <div className='lineaDecorativaTitulo hide'></div>
        <h1 className='dwordTitulo'>
          SOBRE <span className='dwordFont'>DWORD</span>
        </h1>
        <div className='lineaDecorativaTitulo'></div>
      </div>
      <CarouselContainer/>
    </div>
  )
}

export default SobreDword