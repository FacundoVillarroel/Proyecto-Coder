import React from 'react';

import "./formulario.css"

const Formulario = () => {
  return (
    <div className='formularioContainer'>
      <h1 className='contactoTitulo'>Contacto</h1>
      <div className='contacto'>
        <div className='subTituloContainer'>
          <div className='subTitulo'>
            <h3 className='pb-2'>Tenés un proyecto en mente...?</h3>
            <p className='mb-0'>Dejanos tu Mensaje</p>
          </div>
        </div>
        <div className='dwordDatosContainer'>
          <div className='formularioDwordDatos'>
            <h3>Dword.</h3>
            <p>Av. Siempreviva 2022 - CABA</p>
            <p>12345678910 - 1098716299</p>
            <p>contacto@dword.com.ar</p>
          </div>
        </div>
      </div>
      <div className='inputs'>
        <form>
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