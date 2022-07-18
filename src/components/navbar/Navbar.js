import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
              <a class="navbar-brand navMinuscula navFuente" href="/">Dword</a>
              <a class="navbar-brand navMayuscula navFuente" href="/">DWORD</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse navAlineacion" id="navbarNav">
                <ul class="navbar-nav navSeparacion">
                  <li class="nav-item ">
                    <a class="nav-link navA navPadding " aria-current="page" href="#inicio">INICIO</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link navA navPadding " href="#sobreDword">SOBRE DWORD</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link navA navPadding " href="#proceso">PROCESO</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link navA navPadding " href="#servicios" tabindex="-1" aria-disabled="true">SERVICIOS</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link navA navPadding " href="#contacto" tabindex="-1" aria-disabled="true">CONTACTO</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
  )
}

export default Navbar