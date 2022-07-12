import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light paddingNav fixed-top">
      <div class="container-fluid  bg-dark heightNav navLine">
        <a class="navbar-brand text-white navDwordFont" href="/">DWORD</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul class="navbar-nav mr-auto navSecciones">
            <li class="nav-item">
              <a class="nav-link text-white" href="/">INICIO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/">SOBRE DWORD</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/" tabindex="-1" aria-disabled="true">PROCESO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/" tabindex="-1" aria-disabled="true">SERVICIOS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/" tabindex="-1" aria-disabled="true">CONTACTO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar