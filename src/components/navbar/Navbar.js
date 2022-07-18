import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light paddingNav fixed-top">
      <div className="container-fluid  bg-dark heightNav navLine">
        <a className="navbar-brand text-white navDwordFont" href="/">DWORD</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav mr-auto navSecciones">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">SOBRE DWORD</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/" tabIndex="-1" aria-disabled="true">PROCESO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/" tabIndex="-1" aria-disabled="true">SERVICIOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/" tabIndex="-1" aria-disabled="true">CONTACTO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar