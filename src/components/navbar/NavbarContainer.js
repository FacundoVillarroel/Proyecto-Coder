import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbarContainer.css"

function NavbarContainer () {

  const [ active, setActive ] = useState("inicio")
  const [bigScreen, setBigScreen ] = useState (true)



  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("bar").style.width = `${percentage}%`;

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-light .navbar-nav .nav-link.active")
    
    navLinks.forEach((link) => {
      const id = link.getAttribute("id") 
      if (id !== active + "Link"){
        link.classList.remove("active")
      }
    })

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY > (sectionTop - 10 )){
        setActive(section.getAttribute("id"))

      } 
    })
  };


  useEffect(() => {
    
    if (window.screen.width >= 768 ) {
      setBigScreen(true)
    } else setBigScreen(false)

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[bigScreen, active])

  return (
    <Navbar bg="dark" expand="lg" fixed='top'>
        <div className='container-fluid d-flex'>
          <Navbar.Brand href="#inicio" className='navFuente'>{bigScreen? "DWORD" : "Dword"}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className='navbarFlex'>
                <Nav.Link href="#inicio" id='inicioLink' className={active === "inicio" ? "active" : ""}>INICIO</Nav.Link>
                <Nav.Link href="#sobreDword" id='sobreDwordLink' className={active === "sobreDword" ? "active" : ""}>SOBRE DWORD</Nav.Link>
                <Nav.Link href="#proceso" id='procesoLink' className={active === "proceso" ? "active" : ""}>PROCESO</Nav.Link>
                <Nav.Link href="#servicios" id='serviciosLink' className={active === "servicios" ? "active" : ""}>SERVICIOS</Nav.Link>
                <Nav.Link href="#contacto" id='contactoLink' className={active === "contacto" ? "active" : ""}>CONTACTO</Nav.Link>
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