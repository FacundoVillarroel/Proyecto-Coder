import './Footer.css'
import instagram from '../../img/instagram.svg'
import linkedin from '../../img/linkedin.svg'
import facebook from '../../img/facebook.svg'
import copyright from '../../img/copyright.svg'
import arrow from '../../img/arrow.svg'

const Footer = () => {
    return (
        <div>
            <div class="footerContainer">
                <div class="container footerCenter">
                    <div class="row footerAlign">
                        <div class="col footerBrand footerInner">
                        <img class="imgIcon" src={copyright} alt="Copyrigth"/>
                           <p class="footerBrandTxt">2022 Dword</p>
                        </div>
                        <div class="col footerMedia footerInner">
                        <img class="imgRedes" src={instagram} alt="Logo de instagrm"/>
                        <img class="imgRedes" src={linkedin} alt="Logo de instagrm"/>
                        <img class="imgRedes" src={facebook} alt="Logo de instagrm"/>
                        </div>
                        <div class="col footerHome footerInner">
                            <p class="footerArrowTxt">Volver arriba</p>
                            <img class="imgIcon greenArrow" src={arrow} alt="Flecha hacia inicio"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer