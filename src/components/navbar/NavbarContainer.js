import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbarContainer.css"

function NavbarContainer () {

  const [bigScreen, setBigScreen ] = useState (true)

  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("bar").style.width = `${percentage}%`;
  };

  useEffect(() => {
    if (window.screen.width >= 768 ) {
      setBigScreen(true)
    } else setBigScreen(false)

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[bigScreen])

  return (
    <Navbar bg="dark" expand="lg" fixed='top'>
        <div className='container-fluid d-flex'>
          <Navbar.Brand href="#inicio" className='navFuente'>{bigScreen? "DWORD" : "Dword"}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className='navbarFlex'>
                <Nav.Link href="#inicio">INICIO</Nav.Link>
                <Nav.Link href="#sobreDword">SOBRE DWORD</Nav.Link>
                <Nav.Link href="#proceso">PROCESO</Nav.Link>
                <Nav.Link href="#servicios">SERVICIOS</Nav.Link>
                <Nav.Link href="#contacto">CONTACTO</Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="progressWrapper">
      <div className="progressBar" id="bar"></div>
      <div className="progressBarUnder"></div>
      </div>
    </Navbar>
  );
}

export default NavbarContainer;