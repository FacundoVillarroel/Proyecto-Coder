import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand navMinuscula navFuente" href="/">Dword</a>
              <a className="navbar-brand navMayuscula navFuente" href="/">DWORD</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbar Nav" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse navAlineacion" id="navbarNav">
                <ul className="navbar-nav navSeparacion">
                  <li className="nav-item ">
                    <a className="nav-link navA navPadding " aria-current="page" href="#inicio">INICIO</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link navA navPadding " href="#sobreDword">SOBRE DWORD</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link navA navPadding " href="#proceso">PROCESO</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link navA navPadding " href="#servicios" tabIndex="-1" aria-disabled="true">SERVICIOS</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link navA navPadding " href="#contacto" tabIndex="-1" aria-disabled="true">CONTACTO</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
  )
}

export default Navbar