import './Footer.css'
import instagram from '../../img/instagram.svg'
import linkedin from '../../img/linkedin.svg'
import facebook from '../../img/facebook.svg'
import copyright from '../../img/copyright.svg'
import arrow from '../../img/arrowGreen.png'

const Footer = () => {
    return (

        <div className="footerBox">
            <div className="footerBoxFlecha">
                <p className="footerTxt"> <a className="footerTxt" href="#inicio">Volver arriba</a></p>
                <a href="#inicio"><img className="footerImgFlecha" src={arrow} alt="" /></a>
            </div>
            <div className="footerBoxRedes">
                <a href="https://www.instagram.com/somosdword/"><img className="footerImgRedes" src={instagram} alt="logo instagram" /></a>
                <a href="https://www.facebook.com/somosdword/"><img className="footerImgRedes" src={facebook} alt="logo facebook" /></a>
                <a href="https://www.linkedin.com/in/somosdword/"><img className="footerImgRedes" src={linkedin} alt="logo linkedin" /></a>
            </div>
            <div className="footerBoxDerechos">
                <img className="footerImgCpy" src={copyright} alt="logo copyright" />
                <p className="footerTxtCopy">2022 Dword.</p>
            </div>
        </div>
    )
}

export default Footer