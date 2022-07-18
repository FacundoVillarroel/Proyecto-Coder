import './Footer.css'
import instagram from '../../img/instagram.svg'
import linkedin from '../../img/linkedin.svg'
import facebook from '../../img/facebook.svg'
import copyright from '../../img/copyright.svg'
import arrow from '../../img/arrow.svg'

const Footer = () => {
    return (

        <div class="footerBox">
            <div class="footerBoxFlecha">
                <p class="footerTxt"> <a class="footerTxt" href="#inicio">Volver arriba</a></p>
                <a href="#inicio"><img class="footerImgFlecha" src={arrow} alt="" /></a>
            </div>
            <div class="footerBoxRedes">
                <img class="footerImgRedes" src={instagram} alt="logo instagram" />
                <img class="footerImgRedes" src={facebook} alt="logo facebook" />
                <img class="footerImgRedes" src={linkedin} alt="logo linkedin" />
            </div>
            <div class="footerBoxDerechos">
                <img class="footerImgCpy" src={copyright} alt="logo copyright" />
                <p class="footerTxtCopy">2022 Dword.</p>
            </div>
        </div>
    )
}

export default Footer