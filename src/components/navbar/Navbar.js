import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light paddingNav">
      <div class="container-fluid  bg-dark heightNav">
        <a class="navbar-brand text-white" href="/">Dword</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link text-white" href="/">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/">Sobre Dword</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/" tabindex="-1" aria-disabled="true">Proceso</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/" tabindex="-1" aria-disabled="true">Servicios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/" tabindex="-1" aria-disabled="true">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar