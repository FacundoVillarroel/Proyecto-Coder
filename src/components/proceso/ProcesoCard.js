import React from 'react'

const ProcesoCard = ({numero, img, text}) => {

  return (
    <div className='procesoCard'>
      <span className='numeroProceso'>{numero}.</span>
      <div className='procesoImgContainer'>
        <img src={img} alt={`Fase ${numero}`} className='procesoImg'/>
      </div>
      <div className='procesoText'>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}

export default ProcesoCard;

