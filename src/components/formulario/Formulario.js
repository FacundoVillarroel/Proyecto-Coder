import React from 'react';

import "./formulario.css"

const Formulario = () => {
  return (
    <div className='formularioContainer' id="contacto">
      <h1 className='contactoTitulo'>CONTACTO</h1>
      <div className='proyectoEnMenteContainer'>
        <div className='proyectoEnMente'>
          <h3>Tenés un proyecto en mente...?</h3>
          <p className='mb-0'>Dejanos tu Mensaje</p>
        </div>
      </div>
      <div className='dwordDatosContainer'>
        <div className='dwordDatos'>
            <h3 className='dwordFont'>
              DWORD
            </h3>
          <p>+54 351 3394358</p>
          <span className='spanDwordDatos'> - </span>
          <p>contactodword@gmail.com</p>
        </div>
        <div className='lineaDecoracionFormulario'></div>
      </div>
      <div className='form'>
        <form className='formFlex'>
          <input type="text" name='nombre' placeholder='Nombre y Apellido'/>
          <input type="text" name='telefono' placeholder='Teléfono'/>
          <input type="email" name='mail' placeholder='Mail'/>
          <input type="text" name='empresa' placeholder='(Empresa)'/>
          <textarea type="textarea" name='mensaje' placeholder='Mensaje'/>
          <button type='submit' className='buttonSubmit'>Enviar Consulta</button>
        </form>
      </div>
    </div>
  )
}

export default Formulario