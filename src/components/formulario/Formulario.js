import React, { useState } from 'react';

import "./formulario.css"

const Formulario = () => {
  const [ values, setValues ] = useState({
    nombre:"",
    telefono: "",
    email:"",
    empresa:"",
    mensaje:"",
    _captcha: false
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    fetch("https://formsubmit.co/ajax/facu.villarroel96@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(values)
})
    .then(response => response.json())
    .then((data) => {
      if(data.success === "true"){
        alert("Tu consulta fue enviada correctamente!")
        setValues({
          nombre:"",
          telefono: "",
          email:"",
          empresa:"",
          mensaje:"",
          _captcha: false
        })
      }
    })
    .catch(error => {
      alert("ocurrió un error al enviar tu consulta, intenta nuevamente por favor!")
      console.log(error);
    });
    
  }

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

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
      <form className='formFlex' action="#">
          <input 
            type="text" 
            name='nombre' 
            placeholder='Nombre y Apellido' 
            value={values.nombre}
            onChange={handleInputChange}
            required
            />
          <input 
            type="tel" 
            name='telefono' 
            placeholder='Teléfono' 
            value={values.telefono}
            onChange={handleInputChange}
            required/>
          <input 
            type="email" 
            name='email' 
            placeholder='Email' 
            value={values.email}
            onChange={handleInputChange}
            required/>
          <input 
            type="text" 
            name='empresa' 
            value={values.empresa}
            onChange={handleInputChange}
            placeholder='(Empresa)'/>
          <textarea 
            type="textarea" 
            name='mensaje' 
            placeholder='Mensaje' 
            value={values.mensaje}
            onChange={handleInputChange}
            required/>
          <button type='submit' className='buttonSubmit' onClick={handleSubmit}>Enviar Consulta</button>
        </form>
      </div>
    </div>
  )
}

export default Formulario